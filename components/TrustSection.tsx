"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Briefcase } from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Zertifiziert & vereidigt",
    desc: "Anerkannte und vereidigte Übersetzer:innen mit höchsten Qualitätsstandards.",
  },
  {
    icon: <Award className="w-8 h-8 text-gold" />,
    title: "Vertrauenswürdig & diskret",
    desc: "Vertraulicher Umgang mit sensiblen Dokumenten und Daten ist garantiert.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Branchenübergreifende Erfahrung",
    desc: "Langjährige Zusammenarbeit mit Behörden, Gerichten und internationalen Unternehmen.",
  },
];

const TrustSection: FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-background via-silver/20 to-accent/5 rounded-xl mt-16 shadow-glow">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Warum Hamdan Sprachendienste?</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4 justify-center items-stretch">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 flex flex-col items-center rounded-xl p-8 bg-white/80 shadow-lg backdrop-blur-lg border border-silver/30 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">{item.title}</h3>
            <p className="text-silver text-center text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4 justify-center">
        {/* Referenzen/Branchen Platzhalter */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 rounded-xl bg-background/70 border border-silver/20 shadow">
          <span className="text-accent font-bold text-lg mb-2">Referenzen & Branchen</span>
          <ul className="text-silver text-center text-base space-y-1">
            <li>Justiz & Gerichte</li>
            <li>Behörden & öffentliche Hand</li>
            <li>Wirtschaft & Unternehmen</li>
            <li>Technik & IT</li>
            <li>Medizin & Wissenschaft</li>
          </ul>
        </div>
        {/* Zertifizierungen Platzhalter */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 rounded-xl bg-background/70 border border-silver/20 shadow">
          <span className="text-gold font-bold text-lg mb-2">Zertifizierungen</span>
          <ul className="text-silver text-center text-base space-y-1">
            <li>Vereidigte Übersetzer:innen</li>
            <li>ISO 17100 (Platzhalter)</li>
            <li>Mitglied im BDÜ</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
