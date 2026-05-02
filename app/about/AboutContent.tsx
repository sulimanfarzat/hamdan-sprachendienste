"use client";

import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";

export default function AboutContent() {
  const { dict } = useLanguage();
  const t = dict.pages.about;

  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 pt-36 pb-28">

        <FadeIn className="text-center mb-16">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t.label}
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">
            {t.heading}
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-6 mb-14">
            <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80">
              <strong className="font-semibold text-navy dark:text-white">{t.para1Bold}</strong>{" "}
              {t.para1}
            </p>
            <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80">
              {t.para2}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <ul className="space-y-4 mb-14">
            {t.highlights.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3 text-gold" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-body text-navy/80 dark:text-cream/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={260}>
          <p className="font-body text-lg leading-relaxed text-navy/80 dark:text-cream/80 mb-12">
            {t.closing}{" "}
            <em className="font-display text-gold not-italic">{t.slogan}</em>
          </p>

          <a
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.35)]"
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
