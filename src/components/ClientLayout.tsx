"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function ClientLayout({
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

  if (loading) {
    return <PreLoader />;
  }

  return (
    <SessionProvider>
      {children}
      <ChatbotWidget />
    </SessionProvider>
  );
}