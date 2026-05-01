"use client";

import { FC, FormEvent, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import FadeIn from "../ui/FadeIn";

const ContactSection: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Light: navy text on cream · Dark: navy text on cream (same — contact is always light)
  const inputClass =
    "border-b-2 border-navy/20 focus:border-gold bg-transparent w-full py-3 outline-none transition-all duration-300 text-navy placeholder:text-muted font-body text-base";

  const labelClass =
    "font-mono text-xs uppercase tracking-widest text-muted block mb-1";

  return (
    <>
      {/* Gold divider */}
      <div
        className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />

      {/* Light: cream bg · Dark: cream bg — contact stays light in both modes */}
      <section
        id="kontakt"
        className="w-full py-28 bg-cream dark:bg-cream transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn className="text-center mb-16">
            <p className="font-mono text-gold text-sm uppercase tracking-[0.25em] mb-3">
              Kontakt
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-navy">
              Unverbindlich anfragen
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── Contact form ───────────────────────────────── */}
            <FadeIn direction="left">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    E-Mail <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    Telefon{" "}
                    <span className="normal-case tracking-normal opacity-60">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+49 …"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Nachricht <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen …"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-semibold py-4 uppercase tracking-wider text-sm hover:bg-gold-dark transition-all duration-300"
                >
                  {submitted ? "Nachricht gesendet ✓" : "Nachricht senden"}
                </button>
              </form>
            </FadeIn>

            {/* ── Address & contact info ──────────────────────── */}
            <FadeIn direction="right" delay={100}>
              <div className="flex flex-col gap-12">

                <div>
                  <p className="font-mono text-gold text-xs uppercase tracking-[0.25em] mb-4">Dresden</p>
                  <address className="not-italic flex gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="font-body text-navy">
                      <p className="font-semibold">Agnes-Smedley-Straße 7</p>
                      <p className="text-muted">01187 Dresden</p>
                    </div>
                  </address>
                </div>

                <div>
                  <p className="font-mono text-gold text-xs uppercase tracking-[0.25em] mb-4">Mannheim</p>
                  <address className="not-italic flex gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="font-body text-navy">
                      <p className="font-semibold">Spinozastr. 5</p>
                      <p className="text-muted">68165 Mannheim</p>
                    </div>
                  </address>
                </div>

                <div className="flex flex-col gap-5 pt-6 border-t border-navy/10">
                  <a
                    href="tel:+4917684558344"
                    className="flex items-center gap-3 text-navy hover:text-gold transition-all duration-300"
                    aria-label="Anrufen"
                  >
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-body">+49 176 84558344</span>
                  </a>
                  <a
                    href="mailto:info@hamdan-sprachendienste.de"
                    className="flex items-center gap-3 text-navy hover:text-gold transition-all duration-300"
                    aria-label="E-Mail senden"
                  >
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-body">info@hamdan-sprachendienste.de</span>
                  </a>
                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
