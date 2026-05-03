"use client";

import Link from "next/link";
import { Upload, FileCheck, Stamp, PackageCheck, ArrowRight } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { useLanguage } from "../LanguageProvider";

const stepIcons = [Upload, FileCheck, Stamp, PackageCheck];

export default function AngebotTeaser() {
  const { dict } = useLanguage();
  const steps = dict.steps.items;

  return (
    <section className="w-full bg-navy dark:bg-navy-dark transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left — headline */}
          <FadeIn direction="left" className="flex-1 min-w-0">
            <p className="font-mono text-gold/70 text-[11px] uppercase tracking-[0.3em] mb-4">
              {dict.steps.label}
            </p>
            <h2 className="font-display font-bold text-white leading-tight mb-2">
              <span className="block text-3xl md:text-4xl">{dict.quote.label}</span>
              <span className="block text-2xl md:text-3xl text-gold mt-1">{dict.quote.heading}</span>
            </h2>
            <p className="font-body text-white/50 text-sm mt-4 max-w-sm leading-relaxed">
              {dict.quote.intro}{" "}
              <span className="text-gold/80 font-medium">{dict.quote.intro24h}</span>{" "}
              {dict.quote.introTail}
            </p>
          </FadeIn>

          {/* Center — 4 steps */}
          <FadeIn delay={120} className="w-full lg:flex-1">
            <ol className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <li
                    key={step.title}
                    className="flex flex-col gap-2 p-4 border border-white/8 hover:border-gold/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] text-gold/60">0{i + 1}</span>
                      <Icon className="w-3.5 h-3.5 text-gold/70" />
                    </div>
                    <p className="font-body text-white/80 text-xs leading-snug">{step.title}</p>
                  </li>
                );
              })}
            </ol>
          </FadeIn>

          {/* Right — CTA */}
          <FadeIn delay={200} className="shrink-0">
            <Link
              href="/angebot"
              className="group inline-flex items-center gap-3 bg-gold text-navy font-body font-semibold px-7 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.35)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              {dict.quote.submitIdle}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300 rtl-flip" />
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
