import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser",
  description: "",
};

const PricingPage = () => {
  return (
    <>
    <section className="bg-white py-12 dark:bg-gray-900 pt-44">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">
      Utforsk vare AI-telefonassistenter
      </h2>
      <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-[#58c0c2] rounded-full"></span>
        <span className="inline-block w-3 h-1 ml-1 bg-[#58c0c2] rounded-full"></span>
        <span className="inline-block w-1 h-1 ml-1 bg-[#58c0c2] rounded-full"></span>
      </div>
    </div>

    <div className="mt-8 xl:mt-12 lg:flex lg:items-center pt-10 gap-20">
      <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
        <div className="space-y-3">
          <span className="inline-flex items-center justify-center p-3 bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
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
          </span>

          <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white">
          24/7 tilgjengelighet
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Innoscribe tilbyr AI-drevne assistenter som kan ta imot og ringe samtaler for din bedrift. De gir rask, naturlig dialog og fungerer dogn rundt uten pause.
          </p>
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center justify-center p-3 bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
            {/* Example Voice/Sound Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
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
          </span>

          <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white">
          Innkommende samtaler
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Vaer AI tar imot kunder automatisk, svarer pa sporsmal, husker tidligere kontakt og sender videre til agent ved behov. Alt skjer raskt og profesjonelt.
          </p>
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center justify-center p-3 bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
            {/* Example Digital Interface Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
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
          </span>

          <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white">
          Utgaende samtaler
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Send ut paminnelser, tilbud og annen info via AI. Assistenten ringer, snakker naturlig og justerer seg etter kundens svar i sanntid.
          </p>
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center justify-center p-3 bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
            {/* Example Abstract AI/Connection Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
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
          </span>

          <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white">
          tilpasset dashbord
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Faa full oversikt i vaart dashbord. Se samtaler, resultater og trender i sanntid – alt samlet pa ett sted.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 lg:justify-center relative bottom-6">
        <img
          // className="w-[28rem] h-[28rem] flex-shrink-0 object-contain xl:w-[34rem] xl:h-[34rem]"
          src="https://litslink.com/wp-content/uploads/2023/05/featyred.png"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-12 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">
      Utforsk våre Ai Chatbots
       
      </h2>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-[#58c0c2] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#58c0c2] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#58c0c2] rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center lg:flex-row-reverse pt-10 gap-20">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {/* First Component */}
              <div className="space-y-3">
                <span className="inline-block p-3 bg-[#58c0c2]  rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                AI-funksjoner som funker
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Vaare chatboter forstaar naturlig språk, gir riktige svar og kan brukes til kundeservice, salg eller innsikt. Alt skjer i sanntid.
                </p>
              </div>

              {/* Second Component */}
              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Sikkerhet i fokus
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Datasikkerhet er innebygd fra start. Systemet beskytter kundedata og samtaler med trygge og moderne metoder.
                </p>
              </div>

              {/* Third Component */}
              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Enkel a bruke
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Brukervennlig design gjor chatbotene enkle a sette opp og bruke – enten du er utvikler eller en vanlig bruker.
                </p>
              </div>

              {/* Fourth Component */}
              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Alltid support
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Vart supportteam er klart til a hjelpe deg med alt fra oppsett til feilsoking – vi er med deg hele veien.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center relative bottom-5">
            <img
  // className="w-[28rem] h-[28rem] flex-shrink-0 object-contain xl:w-[34rem] xl:h-[34rem]"
  src="https://litslink.com/wp-content/uploads/2023/11/f4.webp"
  alt=""
/>
            </div>
            </div>
          </div>
        </div>
      </section>
    

      <section className="bg-white py-12 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">
      Utforsk våre Ai-agenter
      </h2>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-[#58c0c2] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#58c0c2] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#58c0c2] rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center pt-10 gap-20">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <span className="inline-block p-3 bg-[#58c0c2]  rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                AI-agenter for effektiv drift
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Vare AI-agenter hjelper deg med a jobbe smartere. De snakker, forstaar og handler – alt pa egen haand, dogn rundt.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                  {/* Example Voice/Sound Icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Smarte funksjoner
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Agenter med naturlig språkforstaelse gir raske svar, samler data og bidrar til bedre kundeopplevelse og beslutninger.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                  {/* Example Digital Interface Icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Automatiserer oppgaver
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Fjern tidstyver som manuell registrering og repeterende arbeid. La AI ta seg av det, mens du fokuserer pa det viktige.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                  {/* Example Abstract AI/Connection Icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Lett a integrere
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Vaare AI-agenter kobles enkelt til dine systemer og verktøy, slik at du slipper komplisert oppsett og ekstra jobb.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center relative bottom-6">
            <img
  // className="w-[28rem] h-[28rem] flex-shrink-0 object-contain xl:w-[34rem] xl:h-[34rem]"
  src="https://miro.medium.com/v2/resize:fit:2000/format:webp/0*k8_gr_9nGMaCk5zB.png"
  alt=""
/>
            </div>
          </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PricingPage;