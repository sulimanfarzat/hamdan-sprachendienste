import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Arabisch Deutsch Dolmetscher – Gericht, Behörden & Unternehmen",
  description:
    "Arabisch-Deutsch Dolmetscher für Gerichte, Behörden und Unternehmen. Einsatz vor Ort, Online-Dolmetschen und Konferenzdolmetschen – bundesweit verfügbar.",
  openGraph: {
    title: "Arabisch Deutsch Dolmetscher – Gericht, Behörden & Unternehmen",
    description:
      "Arabisch-Deutsch Dolmetscher für Gerichte, Behörden und Unternehmen. Einsatz vor Ort, Online und Konferenz – bundesweit verfügbar.",
    url: "https://www.hamdan-sprachendienste.de/services",
  },
  keywords: [
    "Arabisch Deutsch Dolmetscher",
    "Arabisch Dolmetscher Gericht",
    "Arabisch Dolmetscher Behörde",
    "Arabisch Dolmetscher Arzt",
    "Arabisch Konferenzdolmetscher",
    "Online Dolmetscher Arabisch",
    "Arabisch Dolmetscher Deutschland",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
