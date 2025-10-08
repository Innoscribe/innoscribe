"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AwardsPage = () => {
  return (
    <Fade duration={1200} triggerOnce>
      <section className="bg-white dark:bg-gray-900 py-16 pt-44">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-8">
            Prisvinnende teknologi
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
           Innoscribe er tildelt en bransjepris som anerkjenner vår posisjon som en av Europas ledende aktører innen kundeservice og kunstig intelligens.
          </p>

          {/* Award Image */}
          <div className="flex justify-center">
            <Image
              src="/images/award.jpg" // legg bildet her i public/images/awards/
              alt="Innoscribe Award"
              width={700}
              height={500}
              className="rounded-xl shadow-lg border"
            />
          </div>

          {/* Award Text */}
          <div className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
             Top AI Chatbots and Phone Assistants Solutions in Europe 2025
            </h2>
            <p>
            Denne prisen anerkjenner Innoscribes sterke rykte og tilliten vi har opparbeidet oss blant både kunder og bransjekolleger. Vi ble kåret til en av de ledende leverandørene i Europa etter en grundig vurdering gjennomført av et ekspertpanel bestående av toppledere, bransjespesialister og redaksjonen i {" "}
              <span className="font-semibold">CIO Applications Europe</span>.
            </p>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AwardsPage;
