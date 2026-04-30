
"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";


const Navbar: FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Set initial mode based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      if (!prev) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return !prev;
    });
  };

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 dark:bg-primary/90 border-b border-silver/30 shadow-glow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Zur Startseite">
            <Image
              src="/logo.png"
              alt="Hamdan Sprachendienste Logo"
              width={44}
              height={44}
              className="rounded-xl bg-white dark:bg-primary shadow-md object-contain"
              priority
            />
          </a>
          <span className="ml-2 text-lg font-semibold text-primary dark:text-silver tracking-wide">Hamdan Sprachendienste</span>
          <a href="/about" className="ml-6 text-base font-medium text-primary dark:text-silver hover:text-accent dark:hover:text-accent transition-colors">Über uns</a>
          <a href="/services" className="ml-4 text-base font-medium text-primary dark:text-silver hover:text-accent dark:hover:text-accent transition-colors">Services</a>
          <a href="/branchen" className="ml-4 text-base font-medium text-primary dark:text-silver hover:text-accent dark:hover:text-accent transition-colors">Branchen</a>
          <a href="/uebersetzen" className="ml-4 text-base font-medium text-primary dark:text-silver hover:text-accent dark:hover:text-accent transition-colors">Übersetzen</a>
        </div>
        <div className="flex items-center gap-4">
          {/* Sprachwechsler Platzhalter */}
          <button className="rounded-lg px-3 py-1 text-sm font-medium text-primary dark:text-silver bg-background/60 dark:bg-primary/60 border border-silver/40 hover:bg-accent/10 transition-colors">DE</button>
          <button className="rounded-lg px-3 py-1 text-sm font-medium text-primary dark:text-silver bg-background/60 dark:bg-primary/60 border border-silver/40 hover:bg-accent/10 transition-colors">EN</button>
          <button
            className="ml-2 p-2 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors"
            onClick={toggleDark}
            aria-label={dark ? "Lichtmodus aktivieren" : "Darkmode aktivieren"}
            type="button"
          >
            {dark ? <Sun className="w-6 h-6 text-accent" /> : <Moon className="w-6 h-6 text-primary" />}
          </button>
          <button className="ml-2 p-2 rounded-lg hover:bg-accent/10 transition-colors md:hidden">
            <Menu className="w-6 h-6 text-primary dark:text-silver" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
