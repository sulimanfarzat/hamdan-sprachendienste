import type { Metadata } from "next";
import DatenschutzContent from "./DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Hamdan Sprachendienste – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/datenschutz" },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
