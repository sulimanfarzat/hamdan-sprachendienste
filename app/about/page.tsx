import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About – Hamdan Sprachendienste",
  description:
    "Erfahrene und vereidigte Übersetzer und Dolmetscher für Behörden, Gerichte und Unternehmen – kompetent, diskret und bundesweit tätig.",
};

const highlights = [
  "Langjährige Erfahrung in verschiedenen Branchen",
  "Zertifizierte und vereidigte Fachkräfte",
  "Vertraulicher Umgang mit sensiblen Dokumenten",
  "Internationale Ausrichtung und interkulturelle Kompetenz",
];

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 pt-36 pb-28">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            About
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">
            Hamdan Sprachendienste
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        {/* Intro paragraphs */}
        <FadeIn delay={100}>
          <div className="space-y-6 mb-14">
            <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80">
              <strong className="font-semibold text-navy dark:text-white">
                Hamdan Sprachendienste
              </strong>{" "}
              steht für professionelle, zertifizierte und zuverlässige
              Sprachdienstleistungen. Unser Team besteht aus erfahrenen und
              vereidigten Übersetzerinnen und Dolmetschern, die höchste
              Qualitätsstandards erfüllen und sich durch Diskretion und
              Präzision auszeichnen.
            </p>
            <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80">
              Wir unterstützen Behörden, Gerichte, Unternehmen und
              Privatpersonen bei allen sprachlichen Herausforderungen – von
              Fachübersetzungen und Beglaubigungen bis hin zu
              Dolmetsch-Einsätzen und individueller Sprachberatung.
            </p>
          </div>
        </FadeIn>

        {/* Highlights */}
        <FadeIn delay={180}>
          <ul className="space-y-4 mb-14">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-4">
                {/* Gold checkmark */}
                <span
                  className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-3 h-3 text-gold"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-body text-navy/80 dark:text-cream/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Closing statement */}
        <FadeIn delay={260}>
          <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80 mb-12">
            Unser Anspruch ist es, Sprachbarrieren abzubauen und eine
            reibungslose Kommunikation auf höchstem Niveau zu ermöglichen.
            Vertrauen Sie auf unsere Expertise –{" "}
            <em className="font-display text-gold not-italic">
              wir bringen Sprachen zusammen.
            </em>
          </p>

          {/* CTA */}
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.35)]"
          >
            Kontakt aufnehmen
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
