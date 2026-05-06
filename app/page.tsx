import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import AngebotTeaser from "../components/sections/AngebotTeaser";
import HighlightsSection from "../components/sections/HighlightsSection";
import ReviewsSection from "../components/sections/ReviewsSection";

export const metadata: Metadata = {
  title: "Arabisch Deutsch Übersetzer & Dolmetscher",
  description:
    "Vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher. Beglaubigte Übersetzungen und Dolmetschen für Gerichte, Behörden und Unternehmen – bundesweit tätig.",
  alternates: { canonical: "https://www.hamdan-sprachendienste.de" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AngebotTeaser />
      <HighlightsSection />
      <ReviewsSection />
    </>
  );
}
