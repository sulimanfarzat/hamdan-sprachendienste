"use client";

import { Scale, Building2, ShieldCheck } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";

const icons = [Scale, Building2, ShieldCheck];

const clients = [
  "Amtsgericht Dresden",
  "Landgericht Leipzig",
  "Bundesagentur für Arbeit",
  "Ausländerbehörde",
  "IHK Dresden",
  "Sächsische Polizei",
];

export default function ReferenzenContent() {
  const { dict } = useLanguage();
  const t = dict.pages.referenzen;
  const items = dict.trust.items;

  return (
    <section id="referenzen" className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 pt-36 pb-28">

        {/* Header */}
        <FadeIn className="mb-20">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-navy dark:text-white leading-[1.05] max-w-2xl">
            {t.heading}
          </h1>
          <p className="font-body text-navy/50 dark:text-cream/40 text-base mt-6 max-w-md">{t.tagline}</p>
        </FadeIn>

        {/* Editorial numbered list */}
        <div className="border-t border-navy/10 dark:border-white/8">
          {items.map((item, i) => {
            const Icon = icons[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={item.title} delay={i * 120} direction="up">
                <div className="group grid grid-cols-[4rem_1fr] md:grid-cols-[7rem_1fr] gap-6 md:gap-10 py-10 md:py-14 border-b border-navy/10 dark:border-white/8 hover:border-gold/40 transition-colors duration-300">

                  {/* Large ghost number */}
                  <div className="pt-1 select-none">
                    <span className="font-display text-5xl md:text-7xl font-bold text-navy/8 dark:text-white/8 group-hover:text-gold/25 transition-colors duration-500">
                      {num}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300 shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-navy dark:text-white tracking-tight">
                        {item.title}
                      </h2>
                    </div>
                    <p className="font-body text-navy/55 dark:text-cream/50 text-base leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                    <div className="mt-6 h-[1px] w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-20" />
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Logo cloud */}
        <FadeIn delay={400} className="mt-24">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-10">
            Unsere Auftraggeber
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-navy/8 dark:bg-white/6 border border-navy/8 dark:border-white/6">
            {clients.map((name) => (
              <div
                key={name}
                className="bg-white dark:bg-navy-light px-4 py-10 flex items-center justify-center hover:bg-cream dark:hover:bg-navy transition-colors duration-300"
              >
                <span className="font-body text-[11px] text-center text-navy/35 dark:text-white/25 leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body text-navy/25 dark:text-cream/15 text-xs mt-4 italic">
            Logos werden nach Freigabe der Auftraggeber ergänzt.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={500} className="mt-20">
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.4)] hover:-translate-y-0.5"
          >
            {dict.pages.branchen.cta}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
