import type { Metadata } from "next";
import BranchenContent from "./BranchenContent";

export const metadata: Metadata = {
  title: "Branchen – Arabisch Deutsch Übersetzung für Justiz, Medizin & Wirtschaft",
  description:
    "Arabisch-Deutsch Fachübersetzungen und Dolmetschen für Justiz, Behörden, Medizin, Wirtschaft und Technik. Branchenspezifisches Fachwissen für präzise Ergebnisse.",
  keywords: [
    "Arabisch Übersetzung Justiz",
    "Arabisch Übersetzung Medizin",
    "Arabisch Übersetzung Behörden",
    "Arabisch Fachübersetzung",
    "Arabisch Wirtschaft Übersetzung",
    "Arabisch Technik Übersetzung",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/branchen" },
};

export default function BranchenPage() {
  return <BranchenContent />;
}
