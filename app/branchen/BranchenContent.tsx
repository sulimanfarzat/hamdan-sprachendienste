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

        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">{t.heading}</h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        <FadeIn delay={80} className="text-center mb-16">
          <p className="font-body text-base leading-relaxed text-navy/65 dark:text-cream/65 max-w-3xl mx-auto">
            {t.intro}
          </p>
        </FadeIn>

        {/* Tiles — dark navy cards on light page for contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            const num = String(i + 1).padStart(2, "0");
            return (
              <FadeIn key={item.title} delay={i * 55} direction="up" className="h-full">
                <div className="group relative bg-cream dark:bg-navy-dark border border-navy/10 dark:border-white/8 p-6 flex flex-col overflow-hidden hover:border-gold/50 dark:hover:border-gold/25 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-default h-full">

                  {/* Large icon watermark */}
                  <div className="absolute -bottom-6 -end-6 pointer-events-none transition-all duration-500 group-hover:scale-110">
                    <Icon
                      className="w-28 h-28 text-navy/[0.05] dark:text-white/[0.04] group-hover:text-gold/[0.10] dark:group-hover:text-gold/[0.07] transition-all duration-500"
                      strokeWidth={0.6}
                    />
                  </div>

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.4)]">
                      <Icon className="w-4.5 h-4.5 text-gold group-hover:text-navy transition-colors duration-300" />
                    </div>
                    <span className="font-mono text-[10px] text-navy/25 dark:text-white/20 group-hover:text-gold/60 transition-colors duration-300">
                      {num}
                    </span>
                  </div>

                  {/* Content */}
                  <h2 className="relative font-display text-navy dark:text-white text-base md:text-lg font-semibold leading-snug mb-3">
                    {item.title}
                  </h2>
                  <p className="relative font-body text-navy/55 dark:text-white/45 text-xs leading-relaxed flex-1">
                    {item.desc}
                  </p>

                  {/* Gold bottom bar — slides in from start */}
                  <div className="mt-5 h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={500}>
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
