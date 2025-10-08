"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VoiceflowChatbot from "@/components/VoiceflowChatbot";
import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Ensure no dark mode class is applied
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme"); // Clear any saved theme preferences

    // Simulate a loading delay
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="no">
      <head />
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            {/* Removed ThemeProvider to force light mode */}
            <Header/>
            {children}
            <Footer />
            <VoiceflowChatbot />
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
