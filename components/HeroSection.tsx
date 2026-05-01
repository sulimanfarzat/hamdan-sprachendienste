"use client";

import { FC } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection: FC = () => {
  return (
    <section
      id="start"
      className="relative min-h-screen flex flex-col items-center justify-center bg-navy overflow-hidden"
    >
      {/* ── SVG world-map grid background ───────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-[0.08]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#C8A96E"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          {/* Globe latitude / longitude ellipses */}
          <g stroke="#C8A96E" strokeWidth="0.6" fill="none" opacity="0.55">
            <ellipse cx="720" cy="450" rx="680" ry="80" />
            <ellipse cx="720" cy="450" rx="620" ry="170" />
            <ellipse cx="720" cy="450" rx="520" ry="250" />
            <ellipse cx="720" cy="450" rx="380" ry="300" />
            <ellipse cx="720" cy="450" rx="200" ry="320" />
            <ellipse cx="720" cy="450" rx="90"  ry="390" />
            <ellipse cx="720" cy="450" rx="250" ry="390" />
            <ellipse cx="720" cy="450" rx="430" ry="390" />
            <ellipse cx="720" cy="450" rx="580" ry="390" />
            <ellipse cx="720" cy="450" rx="670" ry="390" />
          </g>
          {/* Scattered location dots */}
          <g fill="#C8A96E" opacity="0.4">
            <circle cx="210"  cy="190" r="2.5" />
            <circle cx="480"  cy="155" r="1.8" />
            <circle cx="720"  cy="200" r="2.2" />
            <circle cx="970"  cy="270" r="1.8" />
            <circle cx="1190" cy="170" r="2.5" />
            <circle cx="310"  cy="395" r="1.8" />
            <circle cx="585"  cy="345" r="2.5" />
            <circle cx="855"  cy="370" r="1.8" />
            <circle cx="1090" cy="420" r="2.2" />
            <circle cx="150"  cy="570" r="2.2" />
            <circle cx="670"  cy="555" r="2.5" />
          </g>
        </svg>
      </div>

      {/* ── Gold glow orbs ───────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full opacity-10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-64 h-64 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="font-mono text-gold text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.1s_forwards]">
          Professionelle Sprachdienstleistungen
        </p>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-8 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.25s_forwards]">
          Wir bringen{" "}
          <span className="relative inline-block">
            Sprachen
            {/* Animated gold underline */}
            <span
              className="absolute -bottom-1 left-0 h-[3px] bg-gold w-full origin-left scale-x-0 animate-[expandWidth_0.5s_ease-out_0.9s_forwards]"
              aria-hidden="true"
            />
          </span>{" "}
          zusammen.
        </h1>

        {/* Sub-text */}
        <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.4s_forwards]">
          Dolmetschen &amp; Übersetzen für Gerichte, Behörden und Unternehmen –
          kompetent, zuverlässig, beglaubigt. In Dresden, Mannheim und
          bundesweit.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.55s_forwards]">
          <a
            href="/#kontakt"
            className="bg-gold text-navy font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.4)]"
          >
            Unverbindlich anfragen
          </a>
          <a
            href="/#services"
            className="border border-gold/50 text-gold px-8 py-4 uppercase tracking-wider text-sm hover:bg-gold/10 transition-all duration-300"
          >
            Unsere Leistungen
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/50 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_1s_forwards]"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scrollen
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
