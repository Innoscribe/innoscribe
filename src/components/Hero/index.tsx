"use client";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setMessage(data.message || 'Error starting call.');
      } else {
        setMessage('✅ Call started successfully!');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setMessage('Server error. Please try again.');
    }
  };

  return (
    <>
    <Fade duration={2000}>
      <section
        id="home"
        className="relative overflow-hidden bg-[#58c0c2] pt-[80px] md:pt-[130px] lg:pt-[160px] min-h-screen flex items-center"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Innoscribe
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
               Be om en AI-samtale og få en personlig demonstrasjon av våre tjenester <br />
                <span className="text-center"></span></p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Kom i gang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://calendly.com/contact-innoscribe/30min"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                    >
                      Book et møte
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-md"
                data-wow-delay=".25s"
              >
                <div className="mt-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#58c0c2]/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#58c0c2] mb-2">
                          Navn
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58c0c2] focus:border-[#58c0c2] transition-colors outline-none bg-white text-gray-900 placeholder-gray-500"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ditt fulle navn"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#58c0c2] mb-2">
                          Telefonnummer
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58c0c2] focus:border-[#58c0c2] transition-colors outline-none bg-white text-gray-900 placeholder-gray-500"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+47 123 45 678"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#58c0c2] hover:bg-[#4dbabc] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Ringer...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Start AI-samtale
                          </span>
                        )}
                      </button>

                      {message && (
                        <div className={`mt-4 p-4 rounded-lg text-center font-medium ${
                          message.includes('✅') 
                            ? 'bg-white/20 text-white border border-white/30' 
                            : 'bg-red-500/20 text-red-100 border border-red-400/30'
                        }`}>
                          {message}
                        </div>
                      )}
                    </form>
                  </div>
                </div>


                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Fade>
    </>
  );
};

export default Hero;
