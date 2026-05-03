"use client";

import { MapPin } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";
import ContactSection from "../../components/sections/ContactSection";

const locations = [
  {
    key: "dresden" as const,
    embed: "https://maps.google.com/maps?q=Agnes-Smedley-Stra%C3%9Fe+7,+01187+Dresden&output=embed&hl=de",
  },
  {
    key: "mannheim" as const,
    embed: "https://maps.google.com/maps?q=Spinozastra%C3%9Fe+5,+68165+Mannheim&output=embed&hl=de",
  },
];

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

      {/* Maps */}
      <section className="w-full bg-cream-dark dark:bg-navy transition-colors duration-300 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn className="text-center mb-10">
            <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-3">{c.dresden} · {c.mannheim}</p>
            <div className="w-12 h-[2px] bg-gold mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map(({ key, embed }) => (
              <FadeIn key={key} direction="up" delay={key === "mannheim" ? 120 : 0}>
                <div className="flex flex-col gap-0 overflow-hidden border border-navy/10 dark:border-white/8 shadow-sm">

                  {/* Label bar */}
                  <div className="bg-navy dark:bg-navy-dark px-5 py-3 flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="font-mono text-white text-xs uppercase tracking-widest">
                      {c[key]}
                    </span>
                    <span className="font-body text-white/40 text-xs ms-1">
                      — {c[`${key}Street` as keyof typeof c]}, {c[`${key}City` as keyof typeof c]}
                    </span>
                  </div>

                  {/* Map iframe */}
                  <iframe
                    src={embed}
                    width="100%"
                    height="340"
                    className="block border-0 w-full"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={c[key]}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
