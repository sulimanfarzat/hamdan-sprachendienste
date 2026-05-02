"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { dict } = useLanguage();
  const t = dict.footer;

  return (
    <footer className="w-full bg-cream-dark dark:bg-navy pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center">

        <Link
          href="/"
          className="flex flex-col items-center leading-none"
          aria-label={dict.nav.homeAria}
        >
          <span className="font-display text-2xl font-bold text-navy dark:text-white tracking-widest uppercase transition-colors duration-300">
            {t.brandTop}
          </span>
          <span className="font-mono text-gold text-[10px] tracking-[0.3em] uppercase mt-1">
            {t.brandBottom}
          </span>
        </Link>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-3 font-mono text-sm">
            <li>
              <Link
                href="/impressum"
                className="text-navy/50 dark:text-cream/50 hover:text-gold dark:hover:text-gold transition-all duration-300"
              >
                {t.impressum}
              </Link>
            </li>
            <li className="text-navy/25 dark:text-cream/20" aria-hidden="true">·</li>
            <li>
              <Link
                href="/datenschutz"
                className="text-navy/50 dark:text-cream/50 hover:text-gold dark:hover:text-gold transition-all duration-300"
              >
                {t.datenschutz}
              </Link>
            </li>
          </ul>
        </nav>

        <p className="font-mono text-navy/30 dark:text-cream/30 text-sm transition-colors duration-300">
          © {new Date().getFullYear()} Hamdan Sprachendienste. {t.rights}
        </p>
      </div>
    </footer>
  );
}
