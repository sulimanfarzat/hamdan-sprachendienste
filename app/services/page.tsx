import type { Metadata } from "next";
import Link from "next/link";
import { Mic, FileText, ShieldCheck, Users, Monitor, Video } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services – Hamdan Sprachendienste",
  description:
    "Professionelles Dolmetschen & Übersetzen: Dolmetscher vor Ort, Urkundenübersetzung, Beglaubigung, Event- und Konferenz-Übersetzung sowie Online Dolmetschen.",
};

const services = [
  {
    Icon: Mic,
    title: "Dolmetscher vor Ort",
    desc: "Persönlicher Einsatz bei Verhandlungen, Behördenterminen und geschäftlichen Besprechungen – präzise und diskret.",
  },
  {
    Icon: FileText,
    title: "Urkundenübersetzung",
    desc: "Beglaubigte Übersetzung von Urkunden, Zeugnissen und offiziellen Dokumenten für Behörden und Ämter.",
  },
  {
    Icon: ShieldCheck,
    title: "Beglaubigung",
    desc: "Rechtssichere beglaubigte Übersetzungen mit staatlicher Anerkennung – anerkannt vor Gerichten und Behörden.",
  },
  {
    Icon: Users,
    title: "Event-Übersetzung",
    desc: "Professionelle Sprachunterstützung bei Messen, Empfängen und kulturellen Veranstaltungen jeder Größe.",
  },
  {
    Icon: Monitor,
    title: "Konferenz-Übersetzung",
    desc: "Simultan- und Konsekutivdolmetschen für internationale Konferenzen, Symposien und Podiumsdiskussionen.",
  },
  {
    Icon: Video,
    title: "Online Dolmetschen",
    desc: "Flexibles Remote-Dolmetschen per Video- und Telefonkonferenz – ortsunabhängig und technisch zuverlässig.",
  },
];

export default function ServicesPage() {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-28">

        {/* Header */}
        <FadeIn className="mb-16 text-center">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            Services
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white mb-4">
            Unsere Leistungen
          </h1>
          <p className="font-body text-navy/50 dark:text-cream/40 text-base max-w-xl mx-auto mb-6">
            Maßgeschneiderte Sprachdienstleistungen für jeden Bedarf
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 80} direction="up">
              <div className="group relative bg-cream dark:bg-navy border border-navy/10 dark:border-white/8 p-8 hover:border-gold/60 dark:hover:border-gold/40 shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5 overflow-hidden cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/[0.04] group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                <div className="relative w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.5)]">
                  <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                </div>
                <h2 className="relative font-display text-navy dark:text-white text-xl md:text-2xl mb-3 font-semibold">
                  {title}
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
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.4)] hover:-translate-y-0.5"
          >
            Anfrage stellen
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

