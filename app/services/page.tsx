import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services – Hamdan Sprachendienste",
  description:
    "Professionelles Dolmetschen & Übersetzen: Dolmetscher vor Ort, Urkundenübersetzung, Beglaubigung, Event- und Konferenz-Übersetzung sowie Online Dolmetschen.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
