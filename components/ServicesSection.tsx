"use client";

import { FC } from "react";
import {
  Mic,
  FileText,
  ShieldCheck,
  Users,
  Monitor,
  Video,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";

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

const ServicesSection: FC = () => {
  return (
    <section id="services" className="w-full py-28 bg-white dark:bg-cream transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            Unsere Services
          </h2>
        </FadeIn>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 80} direction="up">
              <div className="group bg-cream dark:bg-white border border-navy/10 dark:border-navy/10 p-8 rounded-sm hover:border-gold hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <Icon className="w-8 h-8 text-gold mb-5 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display text-navy text-xl mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{desc}</p>
                {/* Gold accent bar that expands on hover */}
                <div className="mt-6 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-12" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
