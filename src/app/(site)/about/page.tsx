import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Info",
  description: "",
};

const AboutPage = () => {
  return (
    <main>
      <ScrollUp />
      <Breadcrumb pageName="Info" />
      <About />
       <Faq />
      {/* <Team /> */}
    </main>
  );
};

export default AboutPage;
