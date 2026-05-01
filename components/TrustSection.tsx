"use client";

import { FC } from "react";
import FadeIn from "./ui/FadeIn";

const references = [
  {
    icon: "⚖️",
    title: "Gericht",
    desc: "Als vereidigter Dolmetscher berechtigt vor Gericht – zugelassen für Straf-, Zivil- und Verwaltungsverfahren.",
  },
  {
    icon: "🏢",
    title: "Unternehmen",
    desc: "Zahlreiche Unternehmen vertrauen auf unsere Expertise – von KMU bis Konzern, national und international.",
  },
  {
    icon: "🚔",
    title: "Behörden & Polizei",
    desc: "Verlässliche Unterstützung von Behörden und Polizei beim Dolmetschen – nach höchsten Standards und mit vollständiger Diskretion.",
  },
];

const TrustSection: FC = () => {
  return (
    <>
      {/* Gold divider */}
      <div
        className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      {/* Light: cream-dark bg · Dark: navy bg */}
      <section
        id="referenzen"
        className="w-full py-28 bg-cream-dark dark:bg-navy transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn className="text-center mb-16">
            <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">
              Referenzen
            </p>
            {/* Light: navy · Dark: white */}
            <h2 className="font-display text-4xl md:text-5xl text-navy dark:text-white">
              Vertrauen in jeder Sprache
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {references.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100} direction="up">
                {/* Light: white card, navy border · Dark: navy-light card, gold border */}
                <div className="bg-white dark:bg-navy-light border border-navy/15 dark:border-gold/20 p-8 hover:border-gold/60 transition-all duration-300 h-full flex flex-col">
                  <span className="text-5xl mb-6 block" aria-hidden="true">
                    {icon}
                  </span>
                  <h3 className="font-display text-2xl mb-4 text-navy dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 text-navy/70 dark:text-cream/70">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TrustSection;
