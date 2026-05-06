import type { Metadata } from "next";
import ImpressumContent from "./ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben von Hamdan Sprachendienste – Übersetzungs- und Dolmetschbüro mit Standorten in Dresden und Mannheim.",
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/impressum" },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
