'use client';

import { ArrowUp, X, RefreshCcw, Mail, Phone, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ChatbotWidgetProps {
  onClose?: () => void;
}

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  isStreaming?: boolean;
}

// Define language texts
const LANGUAGES = {
  en: {
    selectLanguage: 'Select Language',
    english: 'English',
    norwegian: 'Norwegian',
    initialMessage: 'Hi! I am an AI Assistant from Innoscribe. How can I help you today?',
    placeholder: 'Type your message here...',
    newConversationTitle: 'Create New Conversation',
    newConversationButton: 'New conversation',
    cancel: 'Cancel',
    contactEmail: 'contact@innoscribe.no',
    contactPhone: '+47 40 55 63 33',
    contactWebsite: 'innoscribe.no',
    headerTitle: 'Innoscribe',
    headerSubtitle: 'Elevate your business with AI',
    retryAria: 'Retry',
    closeAria: 'Close chat',
    sendAria: 'Send message',
  },
  nb: {
    selectLanguage: 'Velg språk',
    english: 'Engelsk',
    norwegian: 'Norsk',
    initialMessage: 'Hei! Jeg er Innoscribe AI. Hvordan kan jeg hjelpe deg i dag?',
    placeholder: 'Skriv meldingen din her...',
    newConversationTitle: 'Opprett ny samtale',
    newConversationButton: 'Ny samtale',
    cancel: 'Avbryt',
    contactEmail: 'contact@innoscribe.no',
    contactPhone: '+47 40 55 63 33',
    contactWebsite: 'innoscribe.no',
    headerTitle: 'Innoscribe',
    headerSubtitle: 'Oppdater bedriften din med AI',
    retryAria: 'Prøv igjen',
    closeAria: 'Lukk chat',
    sendAria: 'Send melding',
  },
} as const;

export default function ChatbotWidget({ onClose }: ChatbotWidgetProps = {}) {
  // 🌐 Widget state
  const [isOpen, setIsOpen] = useState(false);
  // 🌐 Language state
  const [language, setLanguage] = useState<'en' | 'nb' | null>(null);
  // 🌐 Animation state
  const [showNotification, setShowNotification] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showNewConversationModal, setShowNewConversationModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const t = language ? LANGUAGES[language] : LANGUAGES.en;

  // 🚀 Initialize chat when language is selected
  useEffect(() => {
    if (language && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: t.initialMessage,
          isBot: true,
        },
      ]);
    }
  }, [language, t.initialMessage]);

  // 📱 Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const formatText = (text: string): string => {
    if (!text) return "";
    const innoscribePattern = /i\s*n\s*n\s*o\s*s?\s*c\s*r\s*i\s*b\s*e/gi;
    text = text.replace(innoscribePattern, "Innoscribe");
    let formatted = text
      .replace(/([.!?,:;])([A-Za-z])/g, "$1 $2")
      .replace(/\s+/g, " ")
      .replace(/\s+([.!?,:;])/g, "$1")
      .trim();
    return formatted;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ UPDATED: Now sends language parameter to backend
  const streamResponse = async (userMessageText: string, botMessageId: string) => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // 🔥 Map frontend language to backend format
      const languageParam = language === 'nb' ? 'norwegian' : 'english';

      const response = await fetch("https://kashan12345-innoscribechatbot.hf.space/chat-stream", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
        body: JSON.stringify({ 
          message: userMessageText, 
          language: languageParam  // ✅ NOW SENDING LANGUAGE!
        }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (!response.body) throw new Error('Ingen respons fra server');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        let lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();

            if (data === '[DONE]') {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
                )
              );
              return;
            }

            if (data) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId
                    ? { ...msg, text: `${msg.text}${msg.text && !/[.!?]$/.test(msg.text) ? ' ' : ''}${data}`, isStreaming: true }
                    : msg
                )
              );
            }
          }
        }
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch (error: any) {
      if (error.name === 'AbortError') return;
      console.error('Feil under strømming:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                text: language === 'nb'
                  ? 'Beklager! Jeg kunne ikke svare akkurat nå. Prøv igjen om et øyeblikk.'
                  : 'Sorry! I could not respond right now. Please try again in a moment.',
                isStreaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isLoading || !language) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: trimmedMessage,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: botMessageId, text: '', isBot: true, isStreaming: true },
    ]);

    await streamResponse(trimmedMessage, botMessageId);
  };

  const handleRetryClick = () => setShowNewConversationModal(true);

  const handleNewConversation = () => {
    setMessages([
      { id: '1', text: t.initialMessage, isBot: true },
    ]);
    setShowNewConversationModal(false);
  };

  const handleHeaderClick = () => setShowContactInfo(!showContactInfo);

  const handleClose = () => {
    setIsOpen(false);
    setLanguage(null);
    if (onClose) onClose();
  };

  // 🖼️ Render Toggle Button when closed
  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button
          onClick={() => {
            setIsOpen(true);
            setShowNotification(false);
          }}
          className="relative w-14 h-14 md:w-16 md:h-16 bg-white hover:bg-gray-50 border-2 border-[#58c0c2] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce"
          aria-label="Open chat"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          <img
            src="/images/logo-01.png"
            alt="Innoscribe Logo"
            className="w-8 h-8 object-contain"
          />
          
          {/* New Message Notification */}
          {showNotification && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">
              1
            </div>
          )}
        </button>
        

        
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translateY(0);
            }
            40%, 43% {
              transform: translateY(-8px);
            }
            70% {
              transform: translateY(-4px);
            }
          }
        `}</style>
      </div>
    );
  }

  // 🖼️ Render Language Selection Screen
  if (language === null) {
    return (
      <>
        {isMobile && <div className="fixed inset-0 bg-black bg-opacity-50 z-[1001]" onClick={handleClose} />}
        <div
          className="chatbot-widget fixed z-[1002] flex flex-col bg-white overflow-hidden border border-[rgba(0,206,209,0.2)] font-sans"
          style={{
            width: isMobile ? '90vw' : '380px',
            height: isMobile ? '70vh' : '600px',
            maxWidth: isMobile ? '350px' : '380px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px -5px rgba(0, 206, 209, 0.15), 0 8px 10px -6px rgba(0, 206, 209, 0.1)',
            right: isMobile ? '50%' : '1rem',
            bottom: isMobile ? '50%' : '1rem',
            transform: isMobile ? 'translate(50%, 50%)' : 'none',
          }}
      >
        {/* Minimal header (just close button) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '12px 16px',
            borderBottom: '1px solid #E5E7EB',
          }}
        >
          <button
            onClick={handleClose}
            aria-label={t.closeAria}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#6B7280',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00CED1')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            ×
          </button>
        </div>

        {/* Language Selection */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            padding: '0 32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
            }}
          >
            <img
              src="/images/logo-01.png"
              alt="Innoscribe Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', margin: 0 }}>
            {t.selectLanguage}
          </h2>

          <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
            <button
              onClick={() => setLanguage('en')}
              style={{
                flex: 1,
                padding: '14px',
                background: '#F9FAFB',
                border: '1px solid #D1D5DB',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 500,
                color: '#111827',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00CED1';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 206, 209, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#D1D5DB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t.english}
            </button>

            <button
              onClick={() => setLanguage('nb')}
              style={{
                flex: 1,
                padding: '14px',
                background: '#00CED1',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 500,
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px -1px rgba(0, 206, 209, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00B5B5';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#00CED1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t.norwegian}
            </button>
          </div>
        </div>
      </div>
      </>
    );
  }

  // 🧠 Render Chat UI (only if language is selected)
  return (
    <>
      {isMobile && <div className="fixed inset-0 bg-black bg-opacity-50 z-[1001]" onClick={handleClose} />}
      <div
        className="chatbot-widget fixed z-[1002] flex flex-col bg-white overflow-hidden border border-[rgba(0,206,209,0.2)] font-sans"
        style={{
          width: isMobile ? '90vw' : '380px',
          height: isMobile ? '70vh' : '600px',
          maxWidth: isMobile ? '350px' : '380px',
          borderRadius: '16px',
          boxShadow: '0 10px 25px -5px rgba(0, 206, 209, 0.15), 0 8px 10px -6px rgba(0, 206, 209, 0.1)',
          right: isMobile ? '50%' : '1rem',
          bottom: isMobile ? '50%' : '1rem',
          transform: isMobile ? 'translate(50%, 50%)' : 'none',
        }}
    >
      {/* Top Header Bar */}
      <div
        className="chatbot-header-bar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onClick={handleHeaderClick}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            className="chatbot-logo-small"
            style={{ width: 20, height: 20 }}
            aria-hidden="true"
          >
            <img
              src="/images/logo-01.png"
              alt="Innoscribe Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>
            <div>{t.headerTitle}</div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>{t.headerSubtitle}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRetryClick();
            }}
            aria-label={t.retryAria}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '4px',
              color: '#6B7280',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00CED1')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            <RefreshCcw size={16} />
          </button>
          <button
            onClick={handleClose}
            aria-label={t.closeAria}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: '4px',
              color: '#6B7280',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#00CED1')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="chatbot-main-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '16px',
          overflowY: 'auto',
          background: '#FFFFFF',
        }}
      >
        {/* Contact Info Modal (Slide up from bottom) */}
        {showContactInfo && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #E5E7EB',
              padding: '16px',
              borderRadius: '16px 16px 0 0',
              boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
              zIndex: 1003,
              animation: 'slideUp 0.3s ease-out',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#00CED1" />
                <span style={{ fontSize: '14px', color: '#111827' }}>{t.contactEmail}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#00CED1" />
                <span style={{ fontSize: '14px', color: '#111827' }}>{t.contactPhone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={16} color="#00CED1" />
                <span style={{ fontSize: '14px', color: '#111827' }}>{t.contactWebsite}</span>
              </div>
            </div>
          </div>
        )}

        {/* Centered Logo and Title */}
        <div
          className="chatbot-center-logo"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            gap: '8px',
          }}
        >
          <div
            className="chatbot-logo-large"
            style={{ width: 60, height: 60, marginBottom: '8px' }}
            aria-hidden="true"
          >
            <img
              src="/images/logo-01.png"
              alt="Innoscribe Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0, color: '#111827' }}>
            {t.headerTitle}
          </h2>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, textAlign: 'center' }}>
            {t.headerSubtitle}
          </p>
        </div>

        {/* Messages */}
        <div
          className="chatbot-messages"
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            scrollBehavior: 'smooth',
            paddingBottom: '10px',
          }}
          aria-live="polite"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
                maxWidth: '85%',
              }}
            >
              {msg.isBot && (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <img
                    src="/images/logo-01.png"
                    alt="Innoscribe Bot"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              )}
              <div
                className={`message-text`}
                style={{
                  background: msg.isBot ? '#F9FAFB' : '#00CED1',
                  color: msg.isBot ? '#111827' : '#FFFFFF',
                  padding: '8px 12px',
                  borderRadius: msg.isBot ? '16px 16px 16px 0' : '16px 16px 0 16px',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                  boxShadow: msg.isBot
                    ? '0 1px 2px rgba(0,0,0,0.05)'
                    : '0 2px 4px rgba(0, 206, 209, 0.3)',
                }}
              >
                {msg.text ? (
                  <div>{formatText(msg.text)}</div>
                ) : msg.isStreaming ? (
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <span style={{ width: 6, height: 6, background: '#9CA3AF', borderRadius: '50%', animation: 'bounce 1.3s infinite' }}></span>
                    <span style={{ width: 6, height: 6, background: '#9CA3AF', borderRadius: '50%', animation: 'bounce 1.3s infinite 0.2s' }}></span>
                    <span style={{ width: 6, height: 6, background: '#9CA3AF', borderRadius: '50%', animation: 'bounce 1.3s infinite 0.4s' }}></span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-section" style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: 8, width: '100%' }}>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder={t.placeholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '10px 14px 10px 14px',
                  border: '1px solid #00CED1',
                  borderRadius: '20px',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#F9FAFB',
                  transition: 'all 0.3s ease',
                  color: '#111827',
                  paddingRight: '40px',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00CED1';
                  e.target.style.boxShadow = '0 0 0 3px rgba(0, 206, 209, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#00CED1';
                  e.target.style.boxShadow = 'none';
                }}
                aria-label={t.sendAria}
              />
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  position: 'absolute',
                  right: '8px',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: 'none',
                  background: '#00CED1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: isLoading ? 'none' : '0 2px 4px rgba(0, 206, 209, 0.3)',
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 206, 209, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 206, 209, 0.3)';
                  }
                }}
                aria-label={t.sendAria}
              >
                <ArrowUp size={14} strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* New Conversation Modal */}
      {showNewConversationModal && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E5E7EB',
            padding: '16px',
            borderRadius: '16px 16px 0 0',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1003,
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0, textAlign: 'center' }}>
              {t.newConversationTitle}
            </h3>
            <button
              onClick={handleNewConversation}
              style={{
                width: '100%',
                padding: '10px 14px',
                backgroundColor: '#00CED1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#008B8B')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00CED1')}
            >
              {t.newConversationButton}
            </button>
            <button
              onClick={() => setShowNewConversationModal(false)}
              style={{
                width: '100%',
                padding: '10px 14px',
                backgroundColor: '#F9FAFB',
                color: '#111827',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E5E7EB')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F9FAFB')}
            >
              {t.cancel}
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .chatbot-messages::-webkit-scrollbar { width: 0; }
      `}</style>
    </div>
    </>
  );
}