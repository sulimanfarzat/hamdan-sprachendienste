"use client";

import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import FadeIn from "../ui/FadeIn";
import { useLanguage } from "../LanguageProvider";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#FBBC04] text-[#FBBC04]" : "text-white/20"}`}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const hue = name.charCodeAt(0) * 17 % 360;

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
      style={{ background: `hsl(${hue}, 55%, 45%)` }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function ReviewsSection() {
  const { dict } = useLanguage();
  const t = dict.reviews;

  return (
    <section className="w-full py-20 md:py-28 bg-cream dark:bg-navy-light transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p className="font-mono text-gold text-[10px] uppercase tracking-[0.3em] mb-3">
              {t.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
              {t.heading}
            </h2>

            {/* Overall rating badge */}
            <div className="inline-flex items-center gap-4 mt-4 px-6 py-3 rounded-full bg-white dark:bg-navy border border-navy/8 dark:border-white/8 shadow-sm">
              <GoogleLogo />
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-navy dark:text-white leading-none">
                    {t.rating}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                </div>
                <span className="font-body text-xs text-navy/50 dark:text-white/40 mt-0.5">
                  {t.reviewCount}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {t.items.map((review, i) => (
            <FadeIn key={i} delay={i * 80}>
              <article className="h-full flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-navy border border-navy/8 dark:border-white/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  <Avatar name={review.name} />
                  <div className="min-w-0">
                    <p className="font-body text-sm font-semibold text-navy dark:text-white truncate">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <GoogleLogo />
                      <span className="font-mono text-[10px] text-navy/40 dark:text-white/30">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Text */}
                <p className="font-body text-sm text-navy/70 dark:text-white/60 leading-relaxed flex-1">
                  {review.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <Link
              href="https://maps.app.goo.gl/khka4zEWWA7R4tYy8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-navy/15 dark:border-white/15 text-navy dark:text-white hover:border-gold hover:text-gold dark:hover:text-gold transition-all duration-300 font-body text-sm font-medium group"
            >
              <GoogleLogo />
              <span>{t.cta}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
