import type { Metadata } from "next";
import BranchenContent from "./BranchenContent";

export const metadata: Metadata = {
  title: "Branchen – Hamdan Sprachendienste",
  description:
    "Maßgeschneiderte Übersetzungs- und Dolmetschleistungen für Justiz, Behörden, Wirtschaft, Medizin, Technik und viele weitere Branchen.",
};

export default function BranchenPage() {
  return <BranchenContent />;
}
