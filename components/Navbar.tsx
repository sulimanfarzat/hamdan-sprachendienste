"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { asset } from "../lib/basePath";

const Navbar: FC = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { theme, toggle: toggleTheme, mounted } = useTheme();
  const { dict, locale, toggle: toggleLang } = useLanguage();
  const t = dict.nav;
  const isRtl = locale === "ar";

  const navLinks = [
    { href: "/#start",      label: t.links.start },
    { href: "/services",    label: t.links.services },
    { href: "/uebersetzen", label: t.links.uebersetzen },
    { href: "/branchen",    label: t.links.branchen },
    { href: "/referenzen",  label: t.links.referenzen },
    { href: "/about",       label: t.links.about },
    { href: "/kontakt",     label: t.links.kontakt },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrolledBg = scrolled
    ? theme === "dark"
      ? "bg-navy/98 backdrop-blur-md border-b border-gold/20 shadow-lg"
      : "bg-white backdrop-blur-md border-b border-navy/10 shadow-sm"
    : "bg-transparent";

  const linkColor =
    theme === "light"
      ? "text-navy font-medium hover:text-gold"
      : "text-white/80 hover:text-gold";

  const hamburgerColor =
    theme === "light" ? "text-navy" : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledBg}`}>
        <nav className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-4">

          {/* Logo */}
          <Link href="/" aria-label={t.homeAria} className="shrink-0 mr-2">
            <Image
              src={asset("/logo.png")}
              alt="Hamdan Sprachendienste"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Lang + Theme toggles – LTR: ganz rechts | RTL: ganz links */}
          <ul className={`hidden md:flex items-center gap-2 ${isRtl ? "order-last mr-auto" : "ml-auto order-last"}`}>
            {/* Language Toggle */}
            <li>
              <button
                type="button"
                onClick={toggleLang}
                aria-label={t.switchLanguage}
                className={`flex items-center gap-1.5 p-2 rounded-sm font-mono text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:text-gold ${
                  theme === "light" ? "text-navy/70" : "text-white/70"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{dict.meta.switchTo}</span>
              </button>
            </li>

            {/* Theme Toggle */}
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? t.lightMode : t.darkMode}
                className={`p-2 rounded-sm transition-all duration-300 hover:text-gold ${
                  theme === "light" ? "text-navy/70" : "text-white/70"
                }`}
              >
                {mounted && theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </li>
          </ul>

          {/* Desktop links – LTR: links neben Logo | RTL: neben Logo rechts */}
          <ul className={`hidden md:flex items-center gap-8`}>
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
          </ul>

          {/* Mobile: lang + theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.switchLanguage}
              className={`p-2 font-mono text-xs uppercase font-medium transition-colors duration-300 hover:text-gold ${hamburgerColor}`}
            >
              {dict.meta.switchTo}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t.lightMode : t.darkMode}
              className={`p-2 transition-colors duration-300 hover:text-gold ${hamburgerColor}`}
            >
              {mounted && theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              type="button"
              className={`p-2 transition-colors duration-300 hover:text-gold ${hamburgerColor}`}
              onClick={() => setMenuOpen(true)}
              aria-label={t.menuOpen}
              aria-expanded={menuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
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
          aria-label={t.menuClose}
        >
          <X className="w-8 h-8" />
        </button>

        <Link href="/" onClick={() => setMenuOpen(false)} className="mb-10">
          <Image src={asset("/logo.png")} alt="Hamdan Sprachendienste" width={56} height={56} className="object-contain" />
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
        </ul>
      </div>
    </>
  );
};

export default Navbar;
