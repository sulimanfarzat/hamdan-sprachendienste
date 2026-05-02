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

        <FadeIn className="mb-16 text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">{t.heading}</h1>
          <p className="font-body text-navy/50 dark:text-cream/40 text-base max-w-2xl mb-6 mx-auto">{t.tagline}</p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        <FadeIn delay={80} className="text-center">
          <p className="font-body text-base leading-relaxed text-navy/70 dark:text-cream/70 max-w-3xl mb-16 mx-auto">
            {t.intro}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={item.title} delay={i * 80} direction="up">
                <Link
                  href="/angebot#formular"
                  className="group relative bg-cream dark:bg-navy border border-navy/10 dark:border-white/8 p-8 hover:border-gold/60 dark:hover:border-gold/40 shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy-light"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/[0.04] group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                  <div className="relative w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.5)]">
                    <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h2 className="relative font-display text-navy dark:text-white text-xl md:text-2xl mb-3 font-semibold">{item.title}</h2>
                  <p className="relative font-body text-navy/55 dark:text-cream/50 text-sm leading-relaxed flex-1">{item.desc}</p>

                  <div className="relative mt-6 flex items-center justify-between">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-16" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-gold flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5">
                      {t.orderNow}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl-flip" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={560}>
          <div className="relative bg-cream dark:bg-navy border border-gold/30 p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold rounded-full opacity-[0.08] blur-3xl pointer-events-none" aria-hidden="true" />

            <p className="font-mono text-gold text-[11px] uppercase tracking-[0.3em] mb-3">{t.ctaEyebrow}</p>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-navy dark:text-white mb-4">{t.ctaHeading}</h3>
            <p className="font-body text-navy/65 dark:text-cream/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t.ctaText}<span className="text-gold font-medium"> {t.ctaTextHighlight}</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <a
                href="/angebot"
                className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.4)] hover:-translate-y-0.5"
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
