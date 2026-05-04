import type { Metadata } from "next";
import ReferenzenContent from "./ReferenzenContent";

export const metadata: Metadata = {
  title: "Referenzen – Vertrauenspartner für Arabisch-Deutsch Übersetzungen",
  description:
    "Referenzen von Gerichten, Behörden, Unternehmen und Polizei – Hamdan Sprachendienste als zuverlässiger Arabisch-Deutsch Übersetzer und Dolmetscher seit Jahren erfolgreich.",
  keywords: [
    "Arabisch Übersetzer Referenzen",
    "Arabisch Dolmetscher Empfehlung",
    "Arabisch Übersetzer zertifiziert",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/referenzen" },
};

export default function ReferenzenPage() {
  return <ReferenzenContent />;
}
