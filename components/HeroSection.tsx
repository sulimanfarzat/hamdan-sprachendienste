"use client";

import { FC } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/* ── Schwebende Schriftzeichen – Deutsch + Arabisch ────────────────────────
   Markante deutsche Buchstaben (Umlaute, Eszett) und arabische Buchstaben
   schweben sichtbar in Position, Rotation und Opazität. Alle Klassen sind
   Literals, damit Tailwind sie beim Build-Scan erkennt.                  */
const glyphs: { ch: string; className: string }[] = [
  { ch: "ä",  className: "top-[10%]    left-[6%]     text-5xl md:text-7xl animate-[drift_7s_ease-in-out_infinite]        [--drift-opacity:0.16]" },
  { ch: "ا",  className: "top-[12%]    right-[8%]    text-6xl md:text-8xl animate-[driftAlt_9s_ease-in-out_1s_infinite]  [--drift-opacity:0.15]" },
  { ch: "ö",  className: "top-[68%]    left-[5%]     text-5xl md:text-7xl animate-[drift_10s_ease-in-out_3s_infinite]    [--drift-opacity:0.14]" },
  { ch: "ب",  className: "top-[70%]    right-[6%]    text-5xl md:text-7xl animate-[driftAlt_8s_ease-in-out_2s_infinite]  [--drift-opacity:0.15]" },
  { ch: "ü",  className: "top-[40%]    left-[3%]     text-4xl md:text-6xl animate-[drift_9s_ease-in-out_4s_infinite]     [--drift-opacity:0.13]" },
  { ch: "ل",  className: "top-[44%]    right-[4%]    text-5xl md:text-7xl animate-[driftAlt_11s_ease-in-out_2s_infinite] [--drift-opacity:0.14]" },
  { ch: "ß",  className: "bottom-[10%] left-[22%]    text-4xl md:text-6xl animate-[drift_12s_ease-in-out_5s_infinite]    [--drift-opacity:0.10]" },
  { ch: "م",  className: "bottom-[12%] right-[22%]   text-4xl md:text-6xl animate-[driftAlt_10s_ease-in-out_3s_infinite] [--drift-opacity:0.10]" },
  { ch: "ن",  className: "top-[28%]    left-[20%]    text-3xl md:text-5xl animate-[drift_8s_ease-in-out_6s_infinite]     [--drift-opacity:0.07]" },
  { ch: "ر",  className: "top-[32%]    right-[22%]   text-3xl md:text-5xl animate-[driftAlt_9s_ease-in-out_4s_infinite]  [--drift-opacity:0.05]" },
];

const HeroSection: FC = () => {
  const { dict } = useLanguage();
  const t = dict.hero;
  return (
    <section
      id="start"
      className="relative min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-b from-white via-cream to-cream-dark
                 dark:from-navy dark:via-navy dark:to-navy
                 overflow-hidden transition-colors duration-300"
    >
      {/* ── SVG globe grid background (static) ─ uses currentColor ───────── */}
      <div
        className="absolute inset-0 pointer-events-none text-navy dark:text-gold opacity-[0.09] dark:opacity-[0.07]"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5">
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
          <g fill="currentColor" opacity="0.35">
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

      {/* ── Rotierende Globus-Ringe (langsame, gegenläufige Rotation) ─────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-[spin_120s_linear_infinite] text-gold"
        aria-hidden="true"
      >
        <svg
          width="900"
          height="900"
          viewBox="-450 -450 900 900"
          className="opacity-[0.18] dark:opacity-[0.22] max-w-[140vw] max-h-[140vw]"
        >
          <circle cx="0" cy="0" r="420" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2,14" />
          <circle cx="0" cy="0" r="350" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,18" />
          {/* Orbit dot */}
          <circle cx="420" cy="0" r="3" fill="currentColor" />
          <circle cx="-350" cy="0" r="2.5" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-[spinReverse_90s_linear_infinite] text-gold"
        aria-hidden="true"
      >
        <svg
          width="700"
          height="700"
          viewBox="-350 -350 700 700"
          className="opacity-[0.18] dark:opacity-[0.22] max-w-[110vw] max-h-[110vw]"
        >
          <circle cx="0" cy="0" r="320" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,12" />
          <circle cx="0" cy="320" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* ── Schwebende Schriftzeichen (Google-Translate-Vibe) ─────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {glyphs.map(({ ch, className }, i) => (
          <span
            key={i}
            className={`absolute font-display text-gold opacity-[var(--drift-opacity)] ${className}`}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* ── Animated gold glow orbs ─────────────────────────────────────── */}
      <div
        className="absolute -bottom-20 -left-20 w-[480px] h-[480px] bg-gold rounded-full opacity-[0.18] dark:opacity-[0.08] blur-[100px] pointer-events-none animate-[float_7s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-20 w-72 h-72 bg-gold rounded-full opacity-[0.14] dark:opacity-[0.06] blur-3xl pointer-events-none animate-[floatAlt_9s_ease-in-out_2s_infinite]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold rounded-full opacity-[0.06] dark:opacity-[0.02] blur-[140px] pointer-events-none animate-[float_12s_ease-in-out_4s_infinite]"
        aria-hidden="true"
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="font-mono text-gold text-xs uppercase tracking-[0.35em] mb-8 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.1s_forwards]">
          {t.eyebrow}
        </p>

        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy dark:text-white leading-[1.15] mb-8 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.3s_forwards]">
          {t.headlinePart1}{" "}
          <span className="relative inline-block">
            {t.headlineHighlight}
            <span
              className="absolute -bottom-1 left-0 h-[2px] bg-gold w-full origin-left scale-x-0 animate-[expandWidth_0.6s_ease-out_1s_forwards]"
              aria-hidden="true"
            />
          </span>
          <br className="hidden md:block" />
          {" "}{t.headlinePart2}
        </h1>

        <p className="font-body text-navy/60 dark:text-cream/60 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed tracking-wide opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.5s_forwards]">
          {t.subtitle}
          <span className="block mt-1 text-navy/40 dark:text-cream/40 text-sm">
            {t.subtitleSmall}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.65s_forwards]">
          <a
            href="/#kontakt"
            className="bg-gold text-navy font-body font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,169,110,0.5)] hover:-translate-y-0.5"
          >
            {t.ctaPrimary}
          </a>
          <a
            href="/services"
            className="border border-navy/30 dark:border-gold/40 text-navy/70 dark:text-gold/80 px-8 py-4 uppercase tracking-widest text-xs font-body hover:border-navy/70 dark:hover:border-gold hover:text-navy dark:hover:text-gold hover:bg-navy/5 dark:hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/40 dark:text-gold/40 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_1.1s_forwards] z-10"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">{t.scroll}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
