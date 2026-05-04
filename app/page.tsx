import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import AngebotTeaser from "../components/sections/AngebotTeaser";
import HighlightsSection from "../components/sections/HighlightsSection";

export const metadata: Metadata = {
  title: "Arabisch Deutsch Übersetzer & Dolmetscher – Hamdan Sprachendienste",
  description:
    "Ihr vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher. Beglaubigte Übersetzungen, Urkundenübersetzung und Dolmetschen für Gerichte, Behörden und Unternehmen – bundesweit.",
  alternates: { canonical: "https://www.hamdan-sprachendienste.de" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AngebotTeaser />
      <HighlightsSection />
    </>
  );
}
