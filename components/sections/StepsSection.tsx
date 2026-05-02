"use client";

import { FC } from "react";
import { Upload, FileSearch, Stamp, Truck } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { useLanguage } from "../LanguageProvider";

const icons = [Upload, FileSearch, Stamp, Truck];

const StepsSection: FC = () => {
  const { dict } = useLanguage();
  const t = dict.steps;

  return (
    <section className="w-full py-20 bg-white dark:bg-navy-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t.label}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy dark:text-white">
            {t.heading}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </FadeIn>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {t.items.map((item, i) => {
              const Icon = icons[i];
              const number = String(i + 1).padStart(2, "0");
              return (
                <FadeIn key={item.title} delay={i * 100} direction="up">
                  <div className="text-center group">
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-cream dark:bg-navy border-2 border-gold/30 group-hover:border-gold flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(200,169,110,0.3)]">
                        <Icon className="w-9 h-9 text-gold" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-gold text-navy font-mono font-bold text-sm flex items-center justify-center shadow-md">
                        {number}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-semibold text-navy dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-navy/60 dark:text-cream/55 text-sm leading-relaxed max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StepsSection;
