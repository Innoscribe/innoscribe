// page.tsx
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features/featuresData";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innoscribe | AI-tjenester for bedrifter i Norge",
  description: "Oppdater bedriften din med AI. Automatiser prosesser og øk effektiviteten med Innoscribe – ledende AI-tjenester for norske bedrifter.",
  keywords: ["Innoscribe", "AI GPT- Chatbots & lead chatbot", "AI-tjenester", "bedriftsautomatisering", "AI-drevne virtuelle agenter", "kunstig intelligens", "digitalisering", "AI-assistenter for taleanrop"],
  openGraph: {
    title: "Innoscribe | AI-tjenester for bedrifter i Norge",
    description: "Automatiser din bedrift med AI fra Innoscribe. Moderne løsninger for norske virksomheter.",
    url: "https://innoscribe.no",
    siteName: "Innoscribe",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://innoscribe.no/",
        width: 1200,
        height: 630,
        alt: "Innoscribe AI-tjenester for norske bedrifter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innoscribe | AI-tjenester for bedrifter i Norge",
    description: "Automatiser din bedrift med AI fra Innoscribe.",
    images: ["https://innoscribe.no/"],
    creator: "@innoscribe",
  },
  alternates: {
    canonical: "https://innoscribe.no",

  },
};

export default function Home() {
  return (
    <main lang="nb">
      <ScrollUp />
      <Hero />
      <Features />
      <VideoSection />
      <CallToAction />
      <Faq />
    </main>
  );
}
