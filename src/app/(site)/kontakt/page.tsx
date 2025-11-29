import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kontakt",
  description: "",
};

const ContactPage = () => {
  return (
    <>
     <ScrollUp />
      <Breadcrumb pageName="Kontakt" />

      <Contact />
    </>
  );
};

export default ContactPage;
