import type { Metadata } from "next";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Impressum – Hamdan Sprachendienste",
  description: "Impressum und rechtliche Angaben von Hamdan Sprachendienste.",
};

export default function ImpressumPage() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-28">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            Rechtliches
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">
            Impressum
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-10 font-body text-navy/80 dark:text-cream/80 leading-relaxed">

            {/* Angaben */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-semibold text-navy dark:text-white mb-1">Büro Dresden</p>
                  <p>HAMDAN SPRACHENDIENSTE<br />
                  Agnes-Smedley-Str. 7<br />
                  01187 Dresden<br />
                  Inhaber: Khaled Hamdan</p>
                </div>
                <div>
                  <p className="font-semibold text-navy dark:text-white mb-1">Büro Mannheim</p>
                  <p>HAMDAN SPRACHENDIENSTE<br />
                  Spinozastraße 5<br />
                  68165 Mannheim</p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">Kontakt</h2>
              <div className="text-sm space-y-1">
                <p>Telefon: +49 (0) 176 84558344</p>
                <p>Fax: 0321 21 12 24 43</p>
                <p>E-Mail: info@hamdan-sprachendienste.de</p>
              </div>
            </div>

            {/* Steuer */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">Steuerliche Angaben</h2>
              <div className="text-sm space-y-1">
                <p>Bundeseinheitliche Steuernummer: 3203022722681</p>
                <p>USt.-IdNr.: DE327119888</p>
              </div>
            </div>

            {/* Streitbeilegung */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">
                Online-Streitbeilegung
              </h2>
              <p className="text-sm">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                (OS) bereit:{" "}
                <a
                  href="http://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors duration-200"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            {/* Haftung Inhalte */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-sm">
                Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt.
              </p>
            </div>

            {/* Haftung Links */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">
                Haftung für Links
              </h2>
              <p className="text-sm">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="font-display text-navy dark:text-white text-xl mb-4">
                Urheberrecht
              </h2>
              <p className="text-sm">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien
                dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                gestattet.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
