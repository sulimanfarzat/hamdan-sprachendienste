import type { Metadata } from "next";
import ContactSection from "../../components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt – Hamdan Sprachendienste",
  description:
    "Kontaktieren Sie Hamdan Sprachendienste für unverbindliche Anfragen – per Formular, Telefon oder E-Mail. Büros in Dresden und Mannheim.",
};

export default function KontaktPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
