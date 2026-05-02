"use client";

import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";
import ContactSection from "../../components/sections/ContactSection";

export default function KontaktContent() {
  const { dict } = useLanguage();
  const t = dict.pages.kontakt;
  const c = dict.contact.info;

  return (
    <>
      <section className="w-full bg-white dark:bg-navy-light pt-36 pb-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-6">
              {t.heading}
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={120}>
            <p className="font-body text-navy/70 dark:text-cream/70 text-base md:text-lg leading-relaxed">
              {t.intro1Pre}{" "}
              <span className="text-gold font-medium">{c.dresden}</span>{" "}
              {t.or}{" "}
              <span className="text-gold font-medium">{c.mannheim}</span>
              {t.intro1Tail}
            </p>
            <p className="font-body text-navy/55 dark:text-cream/50 text-sm mt-4">
              {t.intro2}
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
