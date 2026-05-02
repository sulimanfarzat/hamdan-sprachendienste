import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About – Hamdan Sprachendienste",
  description:
    "Erfahrene und vereidigte Übersetzer und Dolmetscher für Behörden, Gerichte und Unternehmen – kompetent, diskret und bundesweit tätig.",
};

export default function AboutPage() {
  return <AboutContent />;
}
