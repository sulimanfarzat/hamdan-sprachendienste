import { FC } from "react";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-silver/30 shadow-glow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Logo Platzhalter */}
          <span className="inline-block h-10 w-10 rounded-xl bg-primary/90 flex items-center justify-center font-bold text-xl text-white shadow-md">H</span>
          <span className="ml-2 text-lg font-semibold text-primary tracking-wide">Hamdan Sprachendienste</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Sprachwechsler Platzhalter */}
          <button className="rounded-lg px-3 py-1 text-sm font-medium text-primary bg-background/60 border border-silver/40 hover:bg-accent/10 transition-colors">DE</button>
          <button className="rounded-lg px-3 py-1 text-sm font-medium text-primary bg-background/60 border border-silver/40 hover:bg-accent/10 transition-colors">EN</button>
          <button className="ml-4 p-2 rounded-lg hover:bg-accent/10 transition-colors md:hidden">
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
