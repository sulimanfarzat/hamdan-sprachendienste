import type { Metadata } from "next";
import ReferenzenContent from "./ReferenzenContent";

export const metadata: Metadata = {
  title: "Referenzen – Hamdan Sprachendienste",
  description:
    "Vertrauen in jeder Sprache – von Gerichten über Unternehmen bis zu Behörden und Polizei.",
};

export default function ReferenzenPage() {
  return <ReferenzenContent />;
}
