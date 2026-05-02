import type { Metadata } from "next";
import AngebotContent from "./AngebotContent";

export const metadata: Metadata = {
  title: "Angebot anfordern – Hamdan Sprachendienste",
  description:
    "Bekommen Sie Ihre Unterlagen übersetzt und beglaubigt – in 4 Schritten. Unverbindliches Festpreisangebot innerhalb von 24 Stunden.",
};

export default function AngebotPage() {
  return <AngebotContent />;
}
