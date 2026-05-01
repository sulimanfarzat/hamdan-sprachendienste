"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/#start",        label: "Start" },
  { href: "/#services",     label: "Services" },
  { href: "/uebersetzen",   label: "Übersetzen" },
  { href: "/branchen",      label: "Branchen" },
  { href: "/#referenzen",   label: "Referenzen" },
  { href: "/kontakt",       label: "Kontakt" },
  { href: "/about",         label: "About" },
];

const Navbar: FC = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { theme, toggle, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ── Scrolled-Hintergrund abhängig vom Theme ──────────────────
  const scrolledBg = scrolled
    ? theme === "dark"
      ? "bg-navy/95 backdrop-blur-md border-b border-gold/20"
      : "bg-white/95 backdrop-blur-md border-b border-navy/10 shadow-sm"
    : "bg-transparent";

  // Links: auf dem Hero (immer navy) immer weiß; nach scroll je nach Theme
  const linkColor =
    scrolled && theme === "light"
      ? "text-navy/80 hover:text-gold"
      : "text-white/80 hover:text-gold";

  const hamburgerColor =
    scrolled && theme === "light" ? "text-navy" : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledBg}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <Link href="/" aria-label="Hamdan Sprachendienste – Startseite">
            <Image
              src="/logo.png"
              alt="Hamdan Sprachendienste"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-sm uppercase tracking-wider transition-all duration-300 ${linkColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <li>
              <Link
                href="/#kontakt"
                className="font-body bg-gold text-navy text-sm font-semibold px-5 py-2.5 uppercase tracking-wider hover:bg-gold-light transition-all duration-300"
              >
                Anfragen
              </Link>
            </li>

            {/* ── Theme Toggle ────────────────────────────── */}
            <li>
              <button
                type="button"
                onClick={toggle}
                aria-label={theme === "dark" ? "Lichtmodus aktivieren" : "Dunkelmodus aktivieren"}
                className={`p-2 rounded-sm transition-all duration-300 hover:text-gold ${
                  scrolled && theme === "light" ? "text-navy/70" : "text-white/70"
                }`}
              >
                {/* Only swap icon after mount to prevent hydration mismatch */}
                {mounted && theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Lichtmodus aktivieren" : "Dunkelmodus aktivieren"}
              className={`p-2 transition-colors duration-300 hover:text-gold ${hamburgerColor}`}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              type="button"
              className={`p-2 transition-colors duration-300 hover:text-gold ${hamburgerColor}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={menuOpen ? "true" : "false"}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile overlay ──────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-300
          bg-cream dark:bg-navy
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-modal="true"
        role="dialog"
        aria-label="Navigation"
      >
        <button
          type="button"
          className="absolute top-6 right-6 text-navy dark:text-white hover:text-gold transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
          aria-label="Menü schließen"
        >
          <X className="w-8 h-8" />
        </button>

        <Link href="/" onClick={() => setMenuOpen(false)} className="mb-10">
          <Image
            src="/logo.png"
            alt="Hamdan Sprachendienste"
            width={56}
            height={56}
            className="object-contain"
          />
        </Link>

        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-display text-4xl text-navy dark:text-white hover:text-gold transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/#kontakt"
              className="font-body bg-gold text-navy font-semibold px-10 py-4 text-lg uppercase tracking-wider hover:bg-gold-light transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Anfragen
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
