"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { dict } = useLanguage();
  const t = dict.footer;
  const nav = dict.nav;
  const c = dict.contact.info;

  const navLinks = [
    { href: "/services",    label: nav.links.services },
    { href: "/uebersetzen", label: nav.links.uebersetzen },
    { href: "/branchen",    label: nav.links.branchen },
    { href: "/referenzen",  label: nav.links.referenzen },
    { href: "/about",       label: nav.links.about },
    { href: "/kontakt",     label: nav.links.kontakt },
  ];

  return (
    <footer className="w-full bg-navy dark:bg-navy-dark transition-colors duration-300">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label={nav.homeAria} className="flex items-center gap-3 group w-fit">
              <Image
                src="/logo.png"
                alt="Hamdan Sprachendienste"
                width={40}
                height={40}
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="leading-none">
                <span className="block font-display text-lg font-bold text-white tracking-wide">
                  {t.brandTop}
                </span>
                <span className="block font-mono text-gold text-[10px] tracking-[0.25em] uppercase mt-0.5">
                  {t.brandBottom}
                </span>
              </div>
            </Link>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="tel:+4917684558344"
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300 w-fit"
              >
                <Phone className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                <span className="font-body text-sm">+49 176 84558344</span>
              </a>
              <a
                href="mailto:info@hamdan-sprachendienste.de"
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300 w-fit"
              >
                <Mail className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                <span className="font-body text-sm">info@hamdan-sprachendienste.de</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="font-mono text-gold text-[10px] uppercase tracking-[0.3em] mb-5">{nav.links.start}</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Addresses */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-gold text-[10px] uppercase tracking-[0.3em] mb-4">{c.dresden} · {c.mannheim}</p>
              <address className="not-italic flex flex-col gap-4">
                <div className="flex gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-gold/70 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-white/80 text-sm font-medium">{c.dresden}</p>
                    <p className="font-body text-white/40 text-xs mt-0.5">{c.dresdenStreet}</p>
                    <p className="font-body text-white/40 text-xs">{c.dresdenCity}</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-gold/70 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-white/80 text-sm font-medium">{c.mannheim}</p>
                    <p className="font-body text-white/40 text-xs mt-0.5">{c.mannheimStreet}</p>
                    <p className="font-body text-white/40 text-xs">{c.mannheimCity}</p>
                  </div>
                </div>
              </address>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-white/25 text-xs">
            © {new Date().getFullYear()} Hamdan Sprachendienste. {t.rights}
          </p>
          <nav aria-label="Legal">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/impressum" className="font-mono text-xs text-white/35 hover:text-gold transition-colors duration-300">
                  {t.impressum}
                </Link>
              </li>
              <li className="text-white/15" aria-hidden="true">·</li>
              <li>
                <Link href="/datenschutz" className="font-mono text-xs text-white/35 hover:text-gold transition-colors duration-300">
                  {t.datenschutz}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </footer>
  );
}
