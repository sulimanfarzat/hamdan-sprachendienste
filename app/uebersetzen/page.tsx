import type { Metadata } from "next";
import UebersetzenContent from "./UebersetzenContent";

export const metadata: Metadata = {
  title: "Übersetzungen – Hamdan Sprachendienste",
  description:
    "Professionelle Übersetzungsleistungen: Beglaubigungen, juristische und technische Übersetzungen, Fachübersetzungen und Expressübersetzungen.",
};

export default function UebersetzenPage() {
  return <UebersetzenContent />;
}
