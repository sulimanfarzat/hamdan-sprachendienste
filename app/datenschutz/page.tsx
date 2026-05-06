import type { Metadata } from "next";
import DatenschutzContent from "./DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Hamdan Sprachendienste",
  description:
    "Datenschutzerklärung von Hamdan Sprachendienste – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
