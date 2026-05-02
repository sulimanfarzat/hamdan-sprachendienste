"use client";

import { FC } from "react";
import { Mic, FileText, ShieldCheck, Users, Monitor, Video } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import { useLanguage } from "./LanguageProvider";

const icons = [Mic, FileText, ShieldCheck, Users, Monitor, Video];

const ServicesSection: FC = () => {
  const { dict } = useLanguage();
  const t = dict.services;

  return (
    <section
      id="services"
      className="w-full py-28 bg-white dark:bg-navy-light transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t.label}
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white">
            {t.heading}
          </h2>
          <p className="font-body text-navy/50 dark:text-cream/40 text-base mt-4 max-w-xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={item.title} delay={i * 80} direction="up">
                <div className="group relative bg-cream dark:bg-navy border border-navy/10 dark:border-white/8 p-8 hover:border-gold/60 dark:hover:border-gold/40 shadow-sm hover:shadow-2xl dark:shadow-none transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5 overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/[0.04] group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                  <div className="relative w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(200,169,110,0.5)]">
                    <Icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h3 className="relative font-display text-navy dark:text-white text-xl md:text-2xl mb-3 font-semibold">
                    {item.title}
                  </h3>
                  <p className="relative font-body text-navy/55 dark:text-cream/50 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-14" />
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
