"use client";

import { useEffect } from "react";

/**
 * Smooth-scroll to the element matching `window.location.hash` on mount.
 * Browsers jump instantly on page load — this overrides that with a
 * smooth transition once the page is hydrated. No-op without a hash.
 */
export default function HashScroll() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;

    const id = window.location.hash.slice(1);

    // Two RAFs: first for layout, second for paint — avoids jumpy behavior
    // when the target lives below content that's still being measured.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;
        // Cancel the browser's default jump and replace with smooth scroll.
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, []);

  return null;
}
