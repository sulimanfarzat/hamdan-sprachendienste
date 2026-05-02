import type { Metadata } from "next";
import ContactSection from "../../components/sections/ContactSection";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Kontakt – Hamdan Sprachendienste",
  description:
    "Kontaktieren Sie Hamdan Sprachendienste für unverbindliche Anfragen – per Formular, Telefon oder E-Mail. Büros in Dresden und Mannheim.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="w-full bg-white dark:bg-navy-light pt-36 pb-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
              Kontaktieren Sie uns
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-6">
              Sprechen Sie mit uns
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={120}>
            <p className="font-body text-navy/70 dark:text-cream/70 text-base md:text-lg leading-relaxed">
              Ob beglaubigte Übersetzung, Dolmetschen vor Gericht oder eine Anfrage
              für Ihr Unternehmen – wir sind für Sie da. Schreiben Sie uns unverbindlich
              über das Formular, rufen Sie uns an oder besuchen Sie uns in unseren Büros
              in <span className="text-gold font-medium">Dresden</span> oder{" "}
              <span className="text-gold font-medium">Mannheim</span>.
            </p>
            <p className="font-body text-navy/55 dark:text-cream/50 text-sm mt-4">
              Wir antworten in der Regel innerhalb von 24 Stunden.
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
