import type { Metadata } from "next";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Übersetzungen – Hamdan Sprachendienste",
  description:
    "Professionelle Übersetzungsleistungen: Beglaubigungen, juristische und technische Übersetzungen, Fachübersetzungen und Expressübersetzungen.",
};

const services = [
  {
    title: "Beglaubigte Übersetzungen",
    desc: "Amtlich anerkannte Übersetzungen von Urkunden, Zeugnissen und Dokumenten – rechtssicher vor Gerichten und Behörden.",
  },
  {
    title: "Juristische Übersetzungen",
    desc: "Verträge, Urteile, notarielle Dokumente und Rechtsgutachten – präzise und terminologisch einwandfrei.",
  },
  {
    title: "Fachübersetzungen",
    desc: "Medizinische, wissenschaftliche und kaufmännische Texte in höchster inhaltlicher Genauigkeit.",
  },
  {
    title: "Technische Übersetzungen",
    desc: "Handbücher, technische Dokumentationen, Patente und Normen für Industrie und Ingenieurwesen.",
  },
  {
    title: "Website-Übersetzungen",
    desc: "Lokalisierung von Online-Inhalten, SEO-gerechte Texte und mehrsprachige Web-Auftritte.",
  },
  {
    title: "Expressübersetzungen",
    desc: "Schnelle Bearbeitung bei dringenden Aufträgen – ohne Abstriche bei Qualität und Genauigkeit.",
  },
];

export default function UebersetzenPage() {
  return (
    <section className="w-full min-h-screen bg-cream dark:bg-navy transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-32">

        {/* Header */}
        <FadeIn>
          <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">
            Übersetzungen
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-navy dark:text-white mb-6 leading-tight">
            Übersetzungsleistungen
          </h1>
          <div className="w-16 h-[2px] bg-gold mb-12" />
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={100}>
          <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80 mb-14">
            Wir bieten professionelle Übersetzungsleistungen für alle Anforderungen –
            von beglaubigten Dokumenten über Websites bis hin zu komplexen Fach- und
            Techniktexten. Unsere vereidigten und zertifizierten Übersetzerinnen
            garantieren höchste Präzision, Vertraulichkeit und schnelle Bearbeitung.
          </p>
        </FadeIn>

        {/* Services list */}
        <div className="space-y-4 mb-14">
          {services.map(({ title, desc }, i) => (
            <FadeIn key={title} delay={180 + i * 70}>
              <div className="group flex gap-6 border border-navy/10 dark:border-gold/20 p-6 hover:border-gold transition-all duration-300">
                <span
                  className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3 text-gold" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h2 className="font-display text-navy dark:text-white text-lg mb-2">
                    {title}
                  </h2>
                  <p className="font-body text-sm text-navy/70 dark:text-cream/70 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={620}>
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
