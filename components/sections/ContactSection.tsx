"use client";

import { FC, FormEvent, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import FadeIn from "../ui/FadeIn";

type FormState = "idle" | "submitting" | "success" | "error";

const subjects = [
  "Dolmetschen vor Ort",
  "Beglaubigte Übersetzung",
  "Urkundenübersetzung",
  "Konferenz-Dolmetschen",
  "Online-Dolmetschen",
  "Fachübersetzung",
  "Allgemeine Anfrage",
];

const ContactSection: FC = () => {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setState("success");
        form.reset();
        setTimeout(() => setState("idle"), 6000);
      } else {
        setState("error");
        setErrorMsg(result.error ?? "Es ist ein Fehler aufgetreten.");
      }
    } catch {
      setState("error");
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white dark:bg-navy-light border border-navy/15 dark:border-white/15 focus:border-gold focus:ring-2 focus:ring-gold/25 outline-none rounded-sm font-body text-navy dark:text-white placeholder:text-navy/35 dark:placeholder:text-white/30 text-base transition-all duration-200";

  const labelClass =
    "font-mono text-[11px] uppercase tracking-widest text-navy/60 dark:text-white/55 block mb-2 font-medium";

  return (
    <section
      id="kontakt"
      className="w-full pt-12 pb-28 bg-white dark:bg-navy-light transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-14">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">
            Kontakt
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy dark:text-white">
            Unverbindlich anfragen
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Form (3/5) ─────────────────────────────────── */}
          <FadeIn direction="left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-cream dark:bg-navy border border-navy/8 dark:border-white/8 p-6 md:p-10 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ihr vollständiger Name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    E-Mail <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="ihre@email.de"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Telefon{" "}
                    <span className="normal-case tracking-normal text-navy/40 dark:text-white/35">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+49 …"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Anliegen <span className="text-gold">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23C8A96E%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><polyline%20points=%226%209%2012%2015%2018%209%22/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] pr-10`}
                  >
                    <option value="" disabled>
                      Bitte auswählen …
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className={labelClass}>
                  Nachricht <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Beschreiben Sie Ihr Anliegen – Sprachen, Termin, Umfang …"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Honeypot — hidden from users, visible to bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website (nicht ausfüllen)</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 w-4 h-4 accent-gold flex-shrink-0 cursor-pointer"
                />
                <span className="font-body text-sm text-navy/70 dark:text-cream/60 leading-relaxed">
                  Ich willige in die Verarbeitung meiner Angaben gemäß der{" "}
                  <Link
                    href="/datenschutz"
                    className="text-gold hover:text-gold-light underline underline-offset-2"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  ein. <span className="text-gold">*</span>
                </span>
              </label>

              {/* Submit + status */}
              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full bg-gold text-navy font-body font-semibold py-4 uppercase tracking-widest text-xs hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,169,110,0.4)] hover:-translate-y-0.5 disabled:hover:translate-y-0 flex items-center justify-center gap-3"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Wird gesendet …
                  </>
                ) : (
                  <>
                    Anfrage senden
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {state === "success" && (
                <div className="mt-5 flex items-start gap-3 p-4 bg-gold/10 border border-gold/30 text-navy dark:text-white">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium font-body">Ihre Nachricht wurde gesendet.</p>
                    <p className="text-sm text-navy/65 dark:text-cream/65 mt-0.5 font-body">
                      Wir antworten in der Regel innerhalb von 24 Stunden.
                    </p>
                  </div>
                </div>
              )}

              {state === "error" && (
                <div className="mt-5 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 text-navy dark:text-white">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium font-body">Senden fehlgeschlagen</p>
                    <p className="text-sm text-navy/65 dark:text-cream/65 mt-0.5 font-body">
                      {errorMsg} Sie können uns auch direkt unter{" "}
                      <a href="mailto:info@hamdan-sprachendienste.de" className="text-gold hover:underline">
                        info@hamdan-sprachendienste.de
                      </a>{" "}
                      erreichen.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </FadeIn>

          {/* ── Address & contact info (2/5) ───────────────── */}
          <FadeIn direction="right" delay={120} className="lg:col-span-2">
            <div className="flex flex-col gap-8 h-full">

              <div className="bg-cream dark:bg-navy border border-navy/8 dark:border-white/8 p-6 md:p-8 shadow-sm">
                <p className="font-mono text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Dresden</p>
                <address className="not-italic flex gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" aria-hidden="true" />
                  <div className="font-body">
                    <p className="font-medium text-navy dark:text-white">Agnes-Smedley-Straße 7</p>
                    <p className="text-navy/55 dark:text-cream/45 text-sm">01187 Dresden</p>
                  </div>
                </address>
              </div>

              <div className="bg-cream dark:bg-navy border border-navy/8 dark:border-white/8 p-6 md:p-8 shadow-sm">
                <p className="font-mono text-gold text-[10px] uppercase tracking-[0.3em] mb-4">Mannheim</p>
                <address className="not-italic flex gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" aria-hidden="true" />
                  <div className="font-body">
                    <p className="font-medium text-navy dark:text-white">Spinozastr. 5</p>
                    <p className="text-navy/55 dark:text-cream/45 text-sm">68165 Mannheim</p>
                  </div>
                </address>
              </div>

              <div className="bg-cream dark:bg-navy border border-navy/8 dark:border-white/8 p-6 md:p-8 shadow-sm flex flex-col gap-4">
                <a
                  href="tel:+4917684558344"
                  className="flex items-center gap-3 text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4 text-gold group-hover:text-navy transition-colors duration-300" />
                  </span>
                  <span className="font-body text-sm">+49 176 84558344</span>
                </a>
                <a
                  href="mailto:info@hamdan-sprachendienste.de"
                  className="flex items-center gap-3 text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors duration-300 group"
                >
                  <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-all duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4 text-gold group-hover:text-navy transition-colors duration-300" />
                  </span>
                  <span className="font-body text-sm break-all">info@hamdan-sprachendienste.de</span>
                </a>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
