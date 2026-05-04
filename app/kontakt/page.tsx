import type { Metadata } from "next";
import KontaktContent from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt – Arabisch Deutsch Übersetzer in Dresden & Mannheim",
  description:
    "Kontaktieren Sie Hamdan Sprachendienste – Ihren Arabisch-Deutsch Übersetzer und Dolmetscher. Büros in Dresden und Mannheim, bundesweit tätig. Anfrage per Formular, Telefon oder E-Mail.",
  keywords: [
    "Arabisch Übersetzer Kontakt",
    "Arabisch Übersetzer Dresden",
    "Arabisch Übersetzer Mannheim",
    "Arabisch Dolmetscher Anfrage",
  ],
  alternates: { canonical: "https://www.hamdan-sprachendienste.de/kontakt" },
};

export default function KontaktPage() {
  return <KontaktContent />;
}
