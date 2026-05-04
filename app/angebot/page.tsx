import type { Metadata } from "next";
import AngebotContent from "./AngebotContent";

export const metadata: Metadata = {
  title: "Angebot anfordern – Arabisch Deutsch Übersetzung & Beglaubigung",
  description:
    "Unverbindliches Festpreisangebot für Arabisch-Deutsch Übersetzungen in 4 Schritten – Antwort innerhalb von 24 Stunden. Beglaubigte Urkundenübersetzung, Dolmetschen und mehr.",
  keywords: [
    "Arabisch Übersetzung Angebot",
    "beglaubigte Übersetzung Arabisch Kosten",
    "Arabisch Dolmetscher Preise",
    "Arabisch Übersetzer Anfrage",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/angebot" },
};

export default function AngebotPage() {
  return <AngebotContent />;
}
