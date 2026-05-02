"use client";

import StepsSection from "../../components/sections/StepsSection";
import QuoteForm from "../../components/sections/QuoteForm";
import FadeIn from "../../components/ui/FadeIn";
import HashScroll from "../../components/ui/HashScroll";
import { useLanguage } from "../../components/LanguageProvider";

export default function AngebotContent() {
  const { dict } = useLanguage();
  const t = dict.pages.angebot;

  return (
    <>
      <HashScroll />
      <section className="w-full bg-white dark:bg-navy-light pt-36 pb-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-6">
              {t.headingPart1} <br className="hidden md:block" />
              {t.headingPart2}
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={120}>
            <p className="font-body text-navy/70 dark:text-cream/70 text-base md:text-lg leading-relaxed">
              {t.introPre}<span className="text-gold font-medium"> {t.introHighlight}</span>{t.introTail}
            </p>
          </FadeIn>
        </div>
      </section>

      <StepsSection />
      <QuoteForm />
    </>
  );
}
