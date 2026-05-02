import type { Metadata } from "next";
import ImpressumContent from "./ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum – Hamdan Sprachendienste",
  description: "Impressum und rechtliche Angaben von Hamdan Sprachendienste.",
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
