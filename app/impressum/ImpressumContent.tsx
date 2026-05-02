"use client";

import FadeIn from "../../components/ui/FadeIn";
import { useLanguage } from "../../components/LanguageProvider";

export default function ImpressumContent() {
  const { dict } = useLanguage();
  const t = dict.pages.impressum;
  const c = dict.contact.info;

  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-28">

        <FadeIn>
          <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">{t.label}</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy dark:text-white mb-6 leading-tight">
            {t.heading}
          </h1>
          <div className="w-16 h-[2px] bg-gold mb-12" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-10 font-body text-navy/80 dark:text-cream/80 leading-relaxed">

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.tmgHeading}</h2>
              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-semibold text-navy dark:text-white mb-1">{t.office} {c.dresden}</p>
                  <p>HAMDAN SPRACHENDIENSTE<br />
                  Agnes-Smedley-Str. 7<br />
                  01187 Dresden<br />
                  {t.owner}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy dark:text-white mb-1">{t.office} {c.mannheim}</p>
                  <p>HAMDAN SPRACHENDIENSTE<br />
                  Spinozastraße 5<br />
                  68165 Mannheim</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.contactHeading}</h2>
              <div className="text-sm space-y-1">
                <p>{t.phone}: +49 (0) 176 84558344</p>
                <p>{t.fax}: 0321 21 12 24 43</p>
                <p>{t.email}: info@hamdan-sprachendienste.de</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.taxHeading}</h2>
              <div className="text-sm space-y-1">
                <p>{t.taxId}: 3203022722681</p>
                <p>{t.vatId}: DE327119888</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.odrHeading}</h2>
              <p className="text-sm">
                {t.odrText}{" "}
                <a
                  href="http://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors duration-200"
                >
                  ec.europa.eu/consumers/odr
                </a>
                {t.odrTail}
              </p>
            </div>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.liabilityHeading}</h2>
              <p className="text-sm">{t.liabilityText}</p>
            </div>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.linksHeading}</h2>
              <p className="text-sm">{t.linksText}</p>
            </div>

            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">{t.copyrightHeading}</h2>
              <p className="text-sm">{t.copyrightText}</p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
