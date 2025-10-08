import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Details",
  description: "",
};


const PricingPage = () => {
  return (
    
    <>

    
    <section  id="" className="bg-white py-12 dark:bg-gray-900 pt-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">
      AI-telefonassistenter
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

          <h1 className="mt-4 text-xl font-semibold text-gray-700 dark:text-white">
          24/7 tilgjengelighet
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Innoscribe tilbyr AI-drevne assistenter som kan ta imot og ringe samtaler for din bedrift. De gir rask og naturlig dialog – og er tilgjengelige døgnet rundt, uten pause.
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

          <h1 className="mt-4 text-xl font-semibold text-gray-700 dark:text-white">
          Innkommende samtaler
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Vår AI tar imot innringere automatisk, svarer på spørsmål, husker tidligere kontakt og setter over til menneskelig agent ved behov. Alt skjer raskt, profesjonelt og med høy presisjon.
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

          <h1 className="mt-4 text-xl font-semibold text-gray-700 dark:text-white">
          Utgående samtaler
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Send ut påminnelser, tilbud og annen informasjon med vår AI-assistent. Den ringer kunder, snakker naturlig og tilpasser samtalen i sanntid basert på svarene som gis.
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

          <h1 className="mt-4 text-xl font-semibold text-gray-700 dark:text-white">
          Tilpasset dashboard
          </h1>

          <p className="text-gray-500 dark:text-gray-300">
          Få full kontroll i vårt intuitive dashboard. Følg med på samtaler, resultater og trender i sanntid – alt samlet på ett sted for maksimal oversikt og innsikt.
          </p>
        </div>
      </div>

     <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:items-center relative bottom-6">
  <img
    src="https://litslink.com/wp-content/uploads/2023/05/featyred.png"
    alt=""
    className="w-[26rem] xl:w-[32rem] object-contain"
  />

  {/* Button under image */}
  <a
    href="\pricing" // replace with your route
    className="mt-8 px-8 py-3 bg-[#58c0c2] text-white font-semibold rounded-full shadow-md hover:bg-[#46a9aa] transition-all duration-300"
  >
    Kom igang
  </a>


      </div>
    </div>
  </div>
</section>





      <section id="section3" className="bg-white py-12 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">
      AI-Agenter
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

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                AI-agenter for effektiv drift 
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Våre AI-agenter hjelper deg med å jobbe smartere. De forstår, kommuniserer og handler på egen hånd – 24/7.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                  {/* Example Voice/Sound Icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Smarte funksjoner
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Agenter med avansert språkforståelse gir raske svar, samler inn verdifulle data og forbedrer både kundeopplevelse og beslutningstaking.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                  {/* Example Digital Interface Icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Automatiserer oppgaver
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Eliminer tidstyver som manuell registrering og repeterende arbeid. La AI gjøre jobben, så du kan fokusere på det som betyr mest.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                  {/* Example Abstract AI/Connection Icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a3 3 0 016 0v6a3 3 0 01-6 0V5zM5 10v1a7 7 0 0014 0v-1M12 19v2m-4 0h8" />
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Enkel integrasjon
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Våre AI-agenter kobles enkelt til dine eksisterende systemer og verktøy – uten behov for kompliserte oppsett eller ekstraarbeid.
                </p>
              </div>
            </div>

           <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:items-center relative bottom-6">
  <img
    src="https://miro.medium.com/v2/resize:fit:2000/format:webp/0*k8_gr_9nGMaCk5zB.png"
    alt=""
    className="w-[26rem] xl:w-[32rem] object-contain"
  />

  <a
    href="\pricing" // replace with your route
    className="mt-8 px-8 py-3 bg-[#58c0c2] text-white font-semibold rounded-full shadow-md hover:bg-[#46a9aa] transition-all duration-300"
  >
    Kom igang
  </a>



            </div>
          </div>
          </div>
        </div>
      </section>




<section  id="section2" className="bg-white py-12 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl">
      AI Chatbots
       
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

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                AI-funksjoner som funker
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Våre chatboter forstår naturlig språk, gir presise svar og kan brukes til kundeservice, salg eller innsiktsinnhenting – alt skjer i sanntid.
                </p>
              </div>

              {/* Second Component */}
              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Sikkerhet i fokus
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Datasikkerhet er innebygd fra starten. Systemet beskytter kundedata og samtaler med moderne og trygge metoder.
                </p>
              </div>

              {/* Third Component */}
              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Enkel å bruke
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Brukervennlig design gjør chatbotene enkle å sette opp og bruke – enten du er utvikler eller en vanlig bruker.
                </p>
              </div>

              {/* Fourth Component */}
              <div className="space-y-3">
                <span className="inline-block p-3  bg-[#58c0c2] rounded-xl dark:text-white dark:bg-[#58c0c2]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8M5 20l-1.447-2.894A2 2 0 013 16.118V6a2 2 0 012-2h14a2 2 0 012 2v10.118a2 2 0 01-.553 1.388L19 20H5z"/>
            </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Alltid support
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                Vårt supportteam er alltid klart til å hjelpe – fra oppsett til feilsøking. Vi følger deg hele veien.
                </p>
              </div>
            </div>

           <div className="hidden lg:flex lg:w-1/2 lg:justify-center relative bottom-5 flex-col items-center">
  <img
    src="https://litslink.com/wp-content/uploads/2023/11/f4.webp"
    alt=""
    className="mb-6"
  />

  {/* Button */}
  <a
    href="\pricing" // replace with your route
    className="mt-8 px-8 py-3 bg-[#58c0c2] text-white font-semibold rounded-full shadow-md hover:bg-[#46a9aa] transition-all duration-300"
  >
    Kom igang
  </a>


            </div>
            </div>
          </div>
        </div>
      </section>
    




    </>
  );
};

export default PricingPage;