import type { Metadata } from "next";
import { Scale, Landmark, Briefcase, Cpu, Heart, GraduationCap, Megaphone, Compass } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Branchen – Hamdan Sprachendienste",
  description:
    "Maßgeschneiderte Übersetzungs- und Dolmetschleistungen für Justiz, Behörden, Wirtschaft, Medizin, Technik und viele weitere Branchen.",
};

const industries = [
  { Icon: Scale,        name: "Justiz & Gerichte",           desc: "Gerichtsdolmetschen, beglaubigte Übersetzungen für Straf-, Zivil- und Familienverfahren." },
  { Icon: Landmark,     name: "Behörden & öffentliche Hand", desc: "Behördenkommunikation, Amtsdokumente, Beglaubigungen für Visa und Aufenthaltsrecht." },
  { Icon: Briefcase,    name: "Wirtschaft & Unternehmen",    desc: "Verträge, Geschäftskorrespondenz, Hauptversammlungen und Unternehmenskommunikation." },
  { Icon: Cpu,          name: "Technik & IT",                desc: "Technische Dokumentation, Handbücher, Software-Lokalisierung und Patente." },
  { Icon: Heart,        name: "Medizin & Wissenschaft",      desc: "Befundberichte, klinische Studien, Fachliteratur und wissenschaftliche Publikationen." },
  { Icon: GraduationCap, name: "Bildung & Forschung",        desc: "Zeugnisse, Hochschuldokumente, Forschungsberichte und akademische Arbeiten." },
  { Icon: Megaphone,    name: "Marketing & Medien",          desc: "Werbetexte, Pressemitteilungen, Website-Inhalte und Social-Media-Kampagnen." },
  { Icon: Compass,      name: "Tourismus & Kultur",          desc: "Reisedokumente, kulturelle Veranstaltungen, Museumführer und Beschilderungen." },
];

export default function BranchenPage() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28">

        {/* Header */}
        <FadeIn className="mb-16 text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            Branchen
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">
            Branchenkompetenz im Überblick
          </h1>
          <p className="font-body text-navy/50 dark:text-cream/40 text-base max-w-2xl mb-6 mx-auto">
            Expertise für nahezu jede Branche – präzise, vertraulich und zuverlässig.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={80} className="text-center">
          <p className="font-body text-base leading-relaxed text-navy/70 dark:text-cream/70 max-w-3xl mb-16 mx-auto">
            Wir bieten maßgeschneiderte Übersetzungs- und Dolmetschleistungen für
            nahezu jede Branche. Unsere zertifizierten Fachübersetzerinnen und
            Dolmetscher verfügen über tiefgehende Branchenkenntnisse und sorgen
            für höchste Präzision und Vertraulichkeit – unabhängig vom Fachgebiet.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map(({ Icon, name, desc }, i) => (
            <FadeIn key={name} delay={i * 60} direction="up">
              <div className="group relative bg-cream dark:bg-navy border border-navy/10 dark:border-white/8 p-8 hover:border-gold/60 dark:hover:border-gold/40 shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5 overflow-hidden cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/[0.04] group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                <div className="relative w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.5)]">
                  <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <h2 className="relative font-display text-navy dark:text-white text-lg md:text-xl mb-3 font-semibold">
                  {name}
                </h2>
                <p className="relative font-body text-navy/55 dark:text-cream/50 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-14" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={560}>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.4)] hover:-translate-y-0.5"
          >
            Anfrage stellen
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}

