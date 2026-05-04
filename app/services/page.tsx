import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Arabisch Deutsch Dolmetscher – Gericht, Behörden & Unternehmen",
  description:
    "Arabisch-Deutsch Dolmetscher für Gerichte, Behörden, Arzttermine und Unternehmen. Einsatz vor Ort, Online-Dolmetschen, Konferenzdolmetschen und Beglaubigung – bundesweit verfügbar.",
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
