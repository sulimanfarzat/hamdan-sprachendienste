import type { Metadata } from "next";
import StepsSection from "../../components/sections/StepsSection";
import QuoteForm from "../../components/sections/QuoteForm";
import FadeIn from "../../components/ui/FadeIn";
import HashScroll from "../../components/ui/HashScroll";

export const metadata: Metadata = {
  title: "Angebot anfordern – Hamdan Sprachendienste",
  description:
    "Bekommen Sie Ihre Unterlagen übersetzt und beglaubigt – in 4 Schritten. Unverbindliches Festpreisangebot innerhalb von 24 Stunden.",
};

export default function AngebotPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="w-full bg-white dark:bg-navy-light pt-36 pb-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
              Beglaubigte Übersetzung
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-6">
              Bekomme deine Unterlagen <br className="hidden md:block" />
              übersetzt &amp; beglaubigt
            </h1>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={120}>
            <p className="font-body text-navy/70 dark:text-cream/70 text-base md:text-lg leading-relaxed">
              Senden Sie uns Ihre Dokumente — wir kümmern uns um den Rest. Vereidigte
              Fachübersetzer, rechtssichere Beglaubigung und ein unverbindliches Angebot
              <span className="text-gold font-medium"> innerhalb von 24 Stunden</span>.
            </p>
          </FadeIn>
        </div>
      </section>

      <StepsSection />
      <QuoteForm />
    </>
  );
}
