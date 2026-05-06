import type { Metadata } from "next";
import UebersetzenContent from "./UebersetzenContent";

export const metadata: Metadata = {
  title: "Arabisch Deutsch Übersetzung – Beglaubigt & Vereidigte Übersetzer",
  description:
    "Beglaubigte Arabisch-Deutsch Übersetzungen durch vereidigte Übersetzer: Urkundenübersetzung, juristische und technische Fachübersetzungen sowie Expressübersetzungen.",
  openGraph: {
    title: "Arabisch Deutsch Übersetzung – Beglaubigt & Vereidigte Übersetzer",
    description:
      "Beglaubigte Arabisch-Deutsch Übersetzungen durch vereidigte Übersetzer: Urkundenübersetzung, Fachübersetzungen und Expressübersetzungen – bundesweit.",
    url: "https://www.hamdan-sprachendienste.de/uebersetzen",
  },
  keywords: [
    "Arabisch Deutsch Übersetzung",
    "beglaubigte Übersetzung Arabisch",
    "vereidigter Arabisch Übersetzer",
    "Urkundenübersetzung Arabisch Deutsch",
    "juristische Übersetzung Arabisch",
    "Fachübersetzung Arabisch",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/uebersetzen" },
};

export default function UebersetzenPage() {
  return <UebersetzenContent />;
}
