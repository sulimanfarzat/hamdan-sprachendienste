"use client";

import { Scale, Landmark, Briefcase, Cpu, Heart, GraduationCap, Megaphone, Compass } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";

const icons = [Scale, Landmark, Briefcase, Cpu, Heart, GraduationCap, Megaphone, Compass];

export default function BranchenContent() {
  const { dict } = useLanguage();
  const t = dict.pages.branchen;

  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28">

        <FadeIn className="mb-16 text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">{t.heading}</h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        <FadeIn delay={80} className="text-center">
          <p className="font-body text-base leading-relaxed text-navy/70 dark:text-cream/70 max-w-3xl mb-16 mx-auto">
            {t.intro}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={item.title} delay={i * 60} direction="up">
                <div className="group relative bg-cream dark:bg-navy border border-navy/10 dark:border-white/8 p-8 hover:border-gold/60 dark:hover:border-gold/40 shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5 overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/[0.04] group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                  <div className="relative w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.5)]">
                    <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h2 className="relative font-display text-navy dark:text-white text-lg md:text-xl mb-3 font-semibold">{item.title}</h2>
                  <p className="relative font-body text-navy/55 dark:text-cream/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-14" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={560}>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.4)] hover:-translate-y-0.5"
          >
            {t.cta}
            <svg className="w-4 h-4 rtl-flip" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
