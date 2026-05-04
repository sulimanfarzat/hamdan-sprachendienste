import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Über uns – Vereidigter Arabisch-Deutsch Übersetzer & Dolmetscher",
  description:
    "Hamdan Sprachendienste – Ihr erfahrener und vereidigter Arabisch-Deutsch Übersetzer und Dolmetscher. Kompetent, diskret und bundesweit tätig. Büros in Dresden und Mannheim.",
  keywords: [
    "vereidigter Arabisch Übersetzer",
    "Arabisch Übersetzer Erfahrung",
    "Hamdan Sprachendienste",
    "Arabisch Übersetzer Dresden",
    "Arabisch Übersetzer Mannheim",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
