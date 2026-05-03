"use client";

import Link from "next/link";
import { ShieldCheck, Scale, BookOpen, Cpu, Globe, Zap, ArrowRight } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";

const icons = [ShieldCheck, Scale, BookOpen, Cpu, Globe, Zap];

export default function UebersetzenContent() {
  const { dict } = useLanguage();
  const t = dict.pages.uebersetzen;

  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28">

        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">{t.heading}</h1>
          <p className="font-body text-navy/50 dark:text-cream/40 text-base max-w-2xl mb-6 mx-auto">{t.tagline}</p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        <FadeIn delay={80} className="text-center mb-16">
          <p className="font-body text-base leading-relaxed text-navy/65 dark:text-cream/65 max-w-3xl mx-auto">
            {t.intro}
          </p>
        </FadeIn>

        {/* Cards — editorial 2-column, numbered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={item.title} delay={i * 70} direction="up">
                <Link
                  href="/angebot#formular"
                  className="group relative bg-cream dark:bg-navy border border-navy/10 dark:border-white/8 border-t-2 border-t-gold/35 dark:border-t-gold/25 p-8 overflow-hidden flex flex-col h-full hover:border-t-gold hover:border-navy/20 dark:hover:border-white/15 hover:shadow-2xl dark:shadow-none hover:-translate-y-1.5 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy"
                >
                  {/* Gold hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/[0.03] transition-all duration-700 pointer-events-none" />

                  {/* Watermark number */}
                  <span className="absolute -top-3 end-5 font-display font-bold text-[7rem] leading-none text-navy/[0.04] dark:text-white/[0.04] select-none pointer-events-none group-hover:text-gold/[0.10] transition-all duration-500">
                    {num}
                  </span>

                  {/* Icon — square badge */}
                  <div className="relative w-12 h-12 bg-gold/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_24px_rgba(200,169,110,0.45)]">
                    <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>

                  <h2 className="relative font-display text-navy dark:text-white text-xl md:text-2xl mb-3 font-semibold leading-snug">
                    {item.title}
                  </h2>
                  <p className="relative font-body text-navy/55 dark:text-cream/50 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>

                  {/* Bottom row */}
                  <div className="relative mt-6 pt-4 border-t border-navy/8 dark:border-white/6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <span className="font-mono text-[11px] uppercase">{t.orderNow}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300 rtl-flip" />
                    </div>
                    <span className="font-mono text-[11px] text-navy/20 dark:text-white/15 group-hover:opacity-0 transition-opacity duration-200">
                      {num}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA banner */}
        <FadeIn delay={500}>
          <div className="relative bg-cream dark:bg-navy border border-gold/25 p-8 md:p-14 text-center overflow-hidden">
            <div className="absolute -top-24 -end-24 w-72 h-72 bg-gold rounded-full opacity-[0.07] blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-16 -start-16 w-48 h-48 bg-gold rounded-full opacity-[0.05] blur-2xl pointer-events-none" aria-hidden="true" />

            <p className="font-mono text-gold text-[11px] uppercase tracking-[0.3em] mb-4">{t.ctaEyebrow}</p>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-navy dark:text-white mb-5 leading-tight">
              {t.ctaHeading}
            </h3>
            <p className="font-body text-navy/60 dark:text-cream/55 max-w-xl mx-auto mb-10 leading-relaxed">
              {t.ctaText}<span className="text-gold font-semibold"> {t.ctaTextHighlight}</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <a
                href="/angebot"
                className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.45)] hover:-translate-y-0.5"
              >
                {t.ctaPrimary}
                <svg className="w-4 h-4 rtl-flip" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 border border-navy/30 dark:border-gold/40 text-navy/70 dark:text-gold/80 px-8 py-4 uppercase tracking-widest text-xs font-body hover:border-navy/70 dark:hover:border-gold hover:text-navy dark:hover:text-gold hover:bg-navy/5 dark:hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
