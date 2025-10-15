'use client';

import { useEffect } from 'react';

const VoiceflowChatbot = () => {
  useEffect(() => {
    // Clean up any existing scripts first
    const existingScripts = document.querySelectorAll('script[src*="botpress"], script[src*="bpcontent"]');
    existingScripts.forEach(script => script.remove());

    // Inject Botpress Webchat script
    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    injectScript.async = true;
    injectScript.onload = () => {
      console.log('Botpress inject script loaded');
      
      // Load config script after inject script is loaded
      const configScript = document.createElement('script');
      configScript.src = "https://files.bpcontent.cloud/2025/02/25/19/20250225194527-29BMFFAC.js";
      configScript.async = true;
      configScript.onload = () => {
        console.log('Botpress config script loaded');
      };
      configScript.onerror = () => {
        console.error('Failed to load Botpress config script');
      };
      document.body.appendChild(configScript);
    };
    injectScript.onerror = () => {
      console.error('Failed to load Botpress inject script');
    };
    document.body.appendChild(injectScript);

    return () => {
      // Clean up on unmount
      const scripts = document.querySelectorAll('script[src*="botpress"], script[src*="bpcontent"]');
      scripts.forEach(script => {
        try {
          document.body.removeChild(script);
        } catch (e) {
          // Script might already be removed
        }
      });
    };
  }, []);

  return null;
};

export default VoiceflowChatbot;
