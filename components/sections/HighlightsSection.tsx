"use client";

import { ShieldCheck, Lock, UserCheck, MapPin } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { useLanguage } from "../LanguageProvider";

const featureIcons = [ShieldCheck, Lock, UserCheck, MapPin];

export default function HighlightsSection() {
  const { dict } = useLanguage();
  const t = dict.highlights;

  return (
    <section className="relative w-full bg-cream-dark dark:bg-navy py-20 md:py-28 transition-colors duration-300 overflow-hidden">

      {/* Decorative gold orbs */}
      <div className="absolute -top-32 -end-32 w-96 h-96 bg-gold rounded-full opacity-[0.06] blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -start-32 w-80 h-80 bg-gold rounded-full opacity-[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn className="text-center mb-14">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4 leading-tight">
            {t.heading}
          </h2>
          <p className="font-body text-navy/55 dark:text-cream/55 text-base max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </FadeIn>

        {/* Stats — 4-column grid with thin dividers */}
        <FadeIn delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/10 dark:bg-white/8 mb-16 max-w-5xl mx-auto border border-navy/10 dark:border-white/8">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-cream-dark dark:bg-navy px-6 py-10 text-center transition-all duration-500 hover:bg-cream dark:hover:bg-navy-dark"
              >
                <div className="font-display text-5xl md:text-6xl font-bold text-gold mb-3 leading-none transition-transform duration-500 group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy/55 dark:text-cream/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Features — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <FadeIn key={feature.title} delay={i * 80} direction="up" className="h-full">
                <div className="group relative bg-white dark:bg-navy-light border border-navy/8 dark:border-white/8 p-6 h-full flex flex-col hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-xl dark:shadow-none transition-all duration-500">

                  <div className="w-11 h-11 bg-gold/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.4)]">
                    <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>

                  <h3 className="font-display text-navy dark:text-white text-lg font-semibold mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-body text-navy/55 dark:text-cream/50 text-sm leading-relaxed flex-1">
                    {feature.desc}
                  </p>

                  <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-12" />
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
