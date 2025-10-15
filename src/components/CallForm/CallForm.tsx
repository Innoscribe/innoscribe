'use client';

import { useState } from 'react';

export default function CallForm() {
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
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
            Be om en AI-samtale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Få en personlig demonstrasjon av våre AI-tjenester. Fyll ut skjemaet nedenfor så ringer vi deg.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58c0c2] focus:border-[#58c0c2] transition-colors outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ditt fulle navn"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#58c0c2] focus:border-[#58c0c2] transition-colors outline-none"
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
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
