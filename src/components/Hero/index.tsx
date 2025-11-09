"use client";

import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setMessage(data.message || "Feil ved oppstart av samtale.");
      } else {
        setMessage(`${data.message}`);
        setName("");
        setPhone("");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setMessage("Nettverksfeil. Sjekk internettforbindelsen din.");
    }
  };

  return (
    <Fade duration={1500}>
      <section
        id="home"
        className="relative flex items-center justify-center bg-[#58c0c2] overflow-hidden min-h-screen px-6 py-20 lg:py-0"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 mt-8 lg:mt-16">
          {/* LEFT COLUMN — Title, Text, Buttons */}
          <div className="lg:w-1/2 text-center lg:text-left text-white space-y-6 mt-16 lg:mt-0 lg:mr-12 lg:pl-32">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Innoscribe
            </h1>
            <p className="text-lg sm:text-xl font-medium opacity-90">
              "Oppdater bedriften din med AI"
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#58c0c2] font-semibold px-8 py-3 text-base shadow-md hover:bg-gray-100 transition"
              >
                Kom i gang
              </Link>
              <Link
                href="https://calendly.com/contact-innoscribe/30min"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white font-semibold px-8 py-3 text-base hover:bg-white hover:text-[#58c0c2] transition"
              >
                Book et møte
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div className="lg:w-1/2 w-full max-w-sm mx-auto pt-14 lg:mt-8">
            <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#58c0c2] rounded-full mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#58c0c2] mb-1">
                  Test AI-Telefoni nå!
                </h3>
                <p className="text-gray-600 text-sm">
                  Bli ringt av Innoscribe sin AI – få svar og mulighet for onboarding.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[#58c0c2] mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#58c0c2]/30 focus:border-[#58c0c2] outline-none transition bg-white text-gray-900 placeholder-gray-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ditt fulle navn"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#58c0c2] mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#58c0c2]/30 focus:border-[#58c0c2] outline-none transition bg-white text-gray-900 placeholder-gray-400"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+47 123 45 678"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#58c0c2] hover:bg-[#4dbabc] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Ringer..." : "Start AI-samtale"}
                </button>

                {message && (
                  <div
                    className={`mt-4 p-3 rounded-xl text-center font-semibold text-sm shadow-md ${
                      message.includes("✅")
                        ? "bg-green-600 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
