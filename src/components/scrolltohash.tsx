"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToAnchor = () => {
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      // Smooth scroll to the element; scroll-margin on the section handles header offset
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Try right after route paint
    const t = setTimeout(scrollToAnchor, 0);

    // Handle in-page hash changes too
    window.addEventListener("hashchange", scrollToAnchor);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", scrollToAnchor);
    };
  }, [pathname]);

  return null;
}
