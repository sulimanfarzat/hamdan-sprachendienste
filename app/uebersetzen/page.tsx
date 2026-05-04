import type { Metadata } from "next";
import UebersetzenContent from "./UebersetzenContent";

export const metadata: Metadata = {
  title: "Arabisch Deutsch Übersetzung – Beglaubigt & Vereidigte Übersetzer",
  description:
    "Professionelle Arabisch-Deutsch Übersetzungen: beglaubigte Urkundenübersetzung, juristische Fachübersetzung, technische Übersetzungen und Expressübersetzungen – vereidigt und zertifiziert.",
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
