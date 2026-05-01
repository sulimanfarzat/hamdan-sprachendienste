import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-navy border-t border-gold/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center">

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-center leading-none"
          aria-label="Hamdan Sprachendienste – Startseite"
        >
          <span className="font-display text-2xl font-bold text-white tracking-widest uppercase">
            Hamdan
          </span>
          <span className="font-mono text-gold text-[10px] tracking-[0.3em] uppercase mt-1">
            Sprachendienste
          </span>
        </Link>

        {/* Legal links */}
        <nav aria-label="Footer-Navigation">
          <ul className="flex items-center gap-3 font-mono text-sm">
            <li>
              <Link
                href="/impressum"
                className="text-cream/50 hover:text-gold transition-all duration-300"
              >
                Impressum
              </Link>
            </li>
            <li className="text-cream/20" aria-hidden="true">·</li>
            <li>
              {/* Datenschutz page can be added later */}
              <Link
                href="/datenschutz"
                className="text-cream/50 hover:text-gold transition-all duration-300"
              >
                Datenschutzerklärung
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="font-mono text-cream/30 text-sm">
          © {new Date().getFullYear()} Hamdan Sprachendienste. Alle Rechte
          vorbehalten.
        </p>
      </div>
    </footer>
  );
}
