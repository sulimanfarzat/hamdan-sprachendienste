import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-silver/30 bg-white/80 backdrop-blur shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/logo.png"
            alt="Hamdan Sprachendienste Logo"
            width={44}
            height={44}
            className="rounded-xl bg-white shadow-md object-contain"
            priority
          />
          <span className="text-lg font-semibold text-primary tracking-wide">Hamdan Sprachendienste</span>
          <span className="text-silver text-sm">© {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
          <div>
            <div className="font-semibold text-primary mb-2">Rechtliches</div>
            <ul className="space-y-1">
              <li><a href="/impressum" className="text-silver hover:text-accent transition-colors">Impressum</a></li>
              <li><a href="#" className="text-silver hover:text-accent transition-colors">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-primary mb-2">Kontakt</div>
            <ul className="space-y-1">
              <li><a href="mailto:info@hamdan-sprachendienste.de" className="text-silver hover:text-accent transition-colors">info@hamdan-sprachendienste.de</a></li>
              <li><a href="#" className="text-silver hover:text-accent transition-colors">+49 123 456789</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-primary mb-2">Social Media</div>
            <ul className="space-y-1">
              <li><a href="#" className="text-silver hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-silver hover:text-accent transition-colors">Xing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
