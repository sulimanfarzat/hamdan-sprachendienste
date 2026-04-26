"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { Gavel, Globe, FileText, Users } from "lucide-react";

const services = [
  {
    icon: <Gavel className="w-8 h-8 text-accent" />,
    title: "Dolmetschen",
    desc: "Fachkundiges Dolmetschen für Gerichte, Behörden und Unternehmen – präzise und diskret.",
    color: "from-accent/10 to-accent/0",
  },
  {
    icon: <FileText className="w-8 h-8 text-gold" />,
    title: "Fachübersetzungen",
    desc: "Zertifizierte Übersetzungen juristischer, technischer und wirtschaftlicher Dokumente.",
    color: "from-gold/10 to-gold/0",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Beglaubigungen",
    desc: "Beglaubigte Übersetzungen und Dokumente mit höchster Anerkennung und Sorgfalt.",
    color: "from-primary/10 to-primary/0",
  },
  {
    icon: <Globe className="w-8 h-8 text-silver" />,
    title: "Sprachberatung",
    desc: "Individuelle Beratung für internationale Kommunikation und interkulturelle Kompetenz.",
    color: "from-silver/10 to-silver/0",
  },
];

const ServicesSection: FC = () => {
  return (
    <section id="leistungen" className="w-full py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Unsere Leistungen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col items-center rounded-xl p-8 bg-gradient-to-br ${service.color} shadow-lg backdrop-blur-lg border border-silver/30 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">{service.title}</h3>
            <p className="text-silver text-center text-base">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
