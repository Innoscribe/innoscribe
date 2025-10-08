"use client";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import buttondata from "./featuresData"
import { Fade } from "react-awesome-reveal";

const Features = () => {
  return (
    <>
      <Fade duration={2000}>
        <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-slate-300 lg:pb-[50px] lg:pt-[120px]">
          <div className="container ">
            <div className="text-center">

              <SectionTitle
                subtitle=""
                title="Produkter"
                paragraph=""
              />
            </div>

            <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
              {typeof featuresData === 'function' 
                ? featuresData() 
                : featuresData
              }
            </div>

          </div>
          <Link href="#" className="text-xl border-2 py-2 px-3 rounded-lg bg-[#58c0c2] text-white">
            Kom i gang
          </Link>
        </section>
      </Fade>
    </>
  );
};

export default Features;