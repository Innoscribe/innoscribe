"use client";

import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem]">
            Produkter
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {/* AI Calling Assistant */}
          <div className="bg-[#58c0c2] rounded-2xl p-6 xl:p-8 flex flex-col justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 4.5A2.25 2.25 0 014.5 2.25h1.127a1.5 1.5 0 011.338.832l1.64 3.28a1.5 1.5 0 01-.15 1.592l-1.19 1.49a11.044 11.044 0 005.211 5.211l1.49-1.19a1.5 1.5 0 011.591-.15l3.28 1.64a1.5 1.5 0 01.832 1.338V19.5a2.25 2.25 0 01-2.25 2.25h-.75C8.942 21.75 2.25 15.058 2.25 6.75v-.75z"
                />
              </svg>
              <h3 className="text-lg xl:text-xl font-bold text-white mb-4">
                AI-assistenter for taleanrop
              </h3>
              <p className="text-sm text-white mb-6">
                Vår AI-drevne talebot svarer på både enkle og komplekse
                spørsmål, håndterer reservasjoner, bestillinger og møtebooking –
                helt automatisk. Den forstår ulike språk, flere dialekter og gir
                en sømløs og profesjonell opplevelse for kundene dine.
              </p>
            </div>
            <Link href="/error" passHref>
              <button className="py-2 px-5 border border-white/60 rounded-full text-xs text-white font-semibold flex items-center justify-between gap-2 transition-all duration-500 hover:bg-white/10">
                Se mer
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* AI Chatbot */}
          <div className="bg-[#58c0c2] rounded-2xl p-6 xl:p-8 flex flex-col justify-between">
            <div>
              <svg
                className="w-10 h-10 text-white mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"
                />
              </svg>
              <h3 className="text-lg xl:text-xl font-bold text-white mb-4">
                AI GPT- Chatbots & Lead Chatbot
              </h3>
              <p className="text-sm text-white mb-6">
                Innoscribe tilbyr to kraftige AI-chatbots som hjelper deg å vokse
                smartere. Kundeservice-chatboten gir personlig og effektiv støtte
                døgnet rundt, drevet av GPT-teknologi som lærer og tilpasser seg.
              </p>
            </div>
            <Link href="/error#section2" passHref>
              <button className="py-2 px-5 border border-white/60 rounded-full text-xs text-white font-semibold flex items-center justify-between gap-2 transition-all duration-500 hover:bg-white/10">
                Se mer
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* AI Voice Agent */}
          <div className="bg-[#58c0c2] rounded-2xl p-6 xl:p-8 flex flex-col justify-between">
            <div>
              <svg
                className="w-10 h-10 text-white mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8"
                />
              </svg>
              <h3 className="text-lg xl:text-xl font-bold text-white mb-4">
                AI-drevne virtuelle agenter
              </h3>
              <p className="text-sm text-white mb-6">
                Våre AI-agenter er autonome systemer som forstår, lærer og
                handler på egen hånd. De kan utføre komplekse oppgaver som
                kundedialog, prosessautomatisering og datadrevet
                beslutningstaking – uten behov for kontinuerlig oppfølging.
              </p>
            </div>
            <Link href="/error#section3" passHref>
              <button className="py-2 px-5 border border-white/60 rounded-full text-xs text-white font-semibold flex items-center justify-between gap-2 transition-all duration-500 hover:bg-white/10">
                Se mer
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
