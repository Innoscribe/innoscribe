"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <>
    <Fade duration={2000}>
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
        <SectionTitle
  subtitle=" Enkle og Fleksible Priser"
  title=" Finn den perfekte løsningen for bedriften din"
  paragraph="Hos Innoscribe tilbyr vi skreddersydde prisplaner som tilpasses din bedrifts behov og vekstfase. Få tilgang til kraftfulle AI-verktøy som effektiviserer driften, automatiserer tidkrevende oppgaver og hjelper deg å nå forretningsmålene dine – enkelt og problemfritt."
  center
/>

        </div>

        

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div>
      </div>
    </section>
    </Fade>
    </>
  );
};

export default Pricing;
