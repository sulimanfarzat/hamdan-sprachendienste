import type { Metadata } from "next";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Branchen – Hamdan Sprachendienste",
  description:
    "Maßgeschneiderte Übersetzungs- und Dolmetschleistungen für Justiz, Behörden, Wirtschaft, Medizin, Technik und viele weitere Branchen.",
};

const industries = [
  { name: "Justiz & Gerichte",        desc: "Gerichtsdolmetschen, beglaubigte Übersetzungen für Straf-, Zivil- und Familienverfahren." },
  { name: "Behörden & öffentliche Hand", desc: "Behördenkommunikation, Amtsdokumente, Beglaubigungen für Visa und Aufenthaltsrecht." },
  { name: "Wirtschaft & Unternehmen", desc: "Verträge, Geschäftskorrespondenz, Hauptversammlungen und Unternehmenskommunikation." },
  { name: "Technik & IT",             desc: "Technische Dokumentation, Handbücher, Software-Lokalisierung und Patente." },
  { name: "Medizin & Wissenschaft",   desc: "Befundberichte, klinische Studien, Fachliteratur und wissenschaftliche Publikationen." },
  { name: "Bildung & Forschung",      desc: "Zeugnisse, Hochschuldokumente, Forschungsberichte und akademische Arbeiten." },
  { name: "Marketing & Medien",       desc: "Werbetexte, Pressemitteilungen, Website-Inhalte und Social-Media-Kampagnen." },
  { name: "Tourismus & Kultur",       desc: "Reisedokumente, kulturelle Veranstaltungen, Museumsführer und Beschilderungen." },
];

export default function BranchenPage() {
  return (
    <section className="w-full min-h-screen bg-cream dark:bg-navy transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-32">

        {/* Header */}
        <FadeIn>
          <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">
            Branchen
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-navy dark:text-white mb-6 leading-tight">
            Branchenkompetenz im Überblick
          </h1>
          <div className="w-16 h-[2px] bg-gold mb-12" />
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={100}>
          <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80 mb-14">
            Wir bieten maßgeschneiderte Übersetzungs- und Dolmetschleistungen für
            nahezu jede Branche. Unsere zertifizierten Fachübersetzerinnen und
            Dolmetscher verfügen über tiefgehende Branchenkenntnisse und sorgen
            für höchste Präzision und Vertraulichkeit – unabhängig vom Fachgebiet.
          </p>
        </FadeIn>

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {industries.map(({ name, desc }, i) => (
            <FadeIn key={name} delay={180 + i * 60} direction="up">
              <div className="group border border-navy/10 dark:border-gold/20 p-6 hover:border-gold transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-gold" aria-hidden="true" />
                  <h2 className="font-display text-navy dark:text-white text-lg leading-snug">
                    {name}
                  </h2>
                </div>
                <p className="font-body text-sm text-navy/70 dark:text-cream/70 leading-relaxed pl-5">
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={700}>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.35)]"
          >
            Anfrage stellen
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
