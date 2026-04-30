
"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full px-6 py-20 gradient-bg overflow-hidden rounded-xl mt-8 shadow-glow">
      {/* Mesh/Glow Effekt */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl opacity-60" />
        <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-gold/20 blur-2xl opacity-40" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-primary text-center drop-shadow-lg"
      >
        Professionelle Sprachdienstleistungen
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-lg md:text-2xl text-silver text-center"
      >
        Übersetzungen, Dolmetschen & Beratung für Behörden, Gerichte und Unternehmen – zuverlässig, zertifiziert und international.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="mt-2 max-w-xl text-base md:text-xl text-accent font-semibold text-center"
      >
        Wir bringen Sprachen zusammen.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#kontakt"
          className="rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-accent/80 transition-colors"
        >
          Angebot anfordern
        </a>
        <a
          href="#leistungen"
          className="rounded-full border-2 border-accent px-8 py-3 text-lg font-semibold text-accent bg-background/80 hover:bg-accent/10 transition-colors"
        >
          Leistungen
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
