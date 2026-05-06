"use client";

import Link from "next/link";
import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";

export default function DatenschutzContent() {
  const { dict } = useLanguage();
  const t = dict.pages.datenschutz;

  const sections: Array<{ heading: string; text: string }> = [
    { heading: t.s2Heading, text: t.s2Text },
    { heading: t.s3Heading, text: t.s3Text },
    { heading: t.s4Heading, text: t.s4Text },
    { heading: t.s5Heading, text: t.s5Text },
    { heading: t.s6Heading, text: t.s6Text },
    { heading: t.s7Heading, text: t.s7Text },
    { heading: t.s8Heading, text: t.s8Text },
    { heading: t.s9Heading, text: t.s9Text },
  ];

  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-28">

        <FadeIn>
          <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">{t.label}</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy dark:text-white mb-6 leading-tight">
            {t.heading}
          </h1>
          <div className="w-16 h-[2px] bg-gold mb-6" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-12">
            {t.updatedLabel}: {t.updatedDate}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-10 font-body text-navy/80 dark:text-cream/80 leading-relaxed">

            <p className="text-sm">{t.intro}</p>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.s1Heading}</h2>
              <p className="text-sm">{t.s1Text}</p>
              <p className="text-sm font-semibold text-navy dark:text-white mt-2">{t.s1Owner}</p>
              <p className="text-sm mt-2">
                {t.s1Contact}{" "}
                <Link
                  href="/impressum"
                  className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors duration-200"
                >
                  {t.s1ContactLink}
                </Link>
                .
              </p>
            </div>

            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-navy dark:text-white text-xl mb-4">{s.heading}</h2>
                <p className="text-sm">{s.text}</p>
              </div>
            ))}

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
