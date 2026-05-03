"use client";

import { ChangeEvent, DragEvent, FC, FormEvent, useRef, useState } from "react";
import { Upload, FileText, X, CheckCircle2, AlertCircle, Loader2, Send, Languages } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { useLanguage } from "../LanguageProvider";

type FormState = "idle" | "submitting" | "success" | "error";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_SIZE = 30 * 1024 * 1024;
const MAX_FILES = 8;
const ALLOWED_EXT = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx", ".heic"];

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
};

// Simple {placeholder} interpolation
const interp = (s: string, vars: Record<string, string | number>): string =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));

const QuoteForm: FC = () => {
  const { dict } = useLanguage();
  const t = dict.quote;
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndAdd = (incoming: File[]) => {
    setFileError("");
    const current = [...files];

    for (const f of incoming) {
      if (current.length >= MAX_FILES) {
        setFileError(interp(t.fileTooMany, { max: MAX_FILES }));
        break;
      }
      const ext = f.name.toLowerCase().slice(f.name.lastIndexOf("."));
      if (!ALLOWED_EXT.includes(ext)) {
        setFileError(interp(t.fileFormat, { ext }));
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        setFileError(interp(t.fileSize, { name: f.name }));
        continue;
      }
      current.push(f);
    }

    const total = current.reduce((sum, f) => sum + f.size, 0);
    if (total > MAX_TOTAL_SIZE) {
      setFileError(t.fileTotal);
      return;
    }
    setFiles(current);
  };

  const handleFilePick = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    validateAndAdd(Array.from(e.target.files));
    e.target.value = "";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) {
      validateAndAdd(Array.from(e.dataTransfer.files));
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setFileError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length === 0) {
      setFileError(t.fileMissing);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    files.forEach((f) => formData.append("documents[]", f));

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote.php", { method: "POST", body: formData });
      const result = await res.json();
      if (result.success) {
        setState("success");
        form.reset();
        setFiles([]);
        setTimeout(() => setState("idle"), 8000);
      } else {
        setState("error");
        setErrorMsg(result.error ?? "");
      }
    } catch {
      setState("error");
      setErrorMsg(t.errorTransport);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white dark:bg-navy-light border border-navy/15 dark:border-white/15 focus:border-gold focus:ring-2 focus:ring-gold/25 outline-none rounded-sm font-body text-navy dark:text-white placeholder:text-navy/35 dark:placeholder:text-white/30 text-base transition-all duration-200";

  const labelClass =
    "font-mono text-[11px] uppercase tracking-widest text-navy/60 dark:text-white/55 block mb-2 font-medium";

  const sectionLabel =
    "font-mono text-gold text-[11px] uppercase tracking-[0.3em] block mb-5 pb-3 border-b border-gold/20";

  const totalSize = files.reduce((s, f) => s + f.size, 0);

  return (
    <section id="formular" className="w-full py-20 bg-cream-dark dark:bg-navy transition-colors duration-300 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">

        <FadeIn className="text-center mb-12">
          <p className="font-mono text-gold text-xs uppercase tracking-[0.3em] mb-4">{t.label}</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-navy dark:text-white">{t.heading}</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
          <p className="font-body text-navy/65 dark:text-cream/60 text-base mt-6 max-w-2xl mx-auto">
            {t.intro} <span className="text-gold font-medium">{t.intro24h}</span> {t.introTail}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            encType="multipart/form-data"
            className="bg-white dark:bg-navy-light border border-navy/8 dark:border-white/8 p-6 md:p-12 shadow-xl"
          >
            {/* 1. Persönliche Daten */}
            <span className={sectionLabel}>{t.section1}</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label htmlFor="qf-name" className={labelClass}>{t.name} <span className="text-gold">*</span></label>
                <input id="qf-name" name="name" type="text" required autoComplete="name" placeholder={t.namePh} className={inputClass} />
              </div>
              <div>
                <label htmlFor="qf-email" className={labelClass}>{t.email} <span className="text-gold">*</span></label>
                <input id="qf-email" name="email" type="email" required autoComplete="email" placeholder={t.emailPh} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div>
                <label htmlFor="qf-phone" className={labelClass}>
                  {t.phone}{" "}
                  <span className="normal-case tracking-normal text-navy/40 dark:text-white/35">{dict.contact.form.optional}</span>
                </label>
                <input id="qf-phone" name="phone" type="tel" autoComplete="tel" placeholder={t.phonePh} className={inputClass} />
              </div>
              <div>
                <label htmlFor="qf-address" className={labelClass}>
                  {t.address}{" "}
                  <span className="normal-case tracking-normal text-navy/40 dark:text-white/35">{dict.contact.form.optional}</span>
                </label>
                <input id="qf-address" name="address" type="text" autoComplete="street-address" placeholder={t.addressPh} className={inputClass} />
              </div>
            </div>

            {/* 2. Sprachen */}
            <span className={sectionLabel}>{t.section2}</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label htmlFor="qf-source" className={labelClass}>
                  <Languages className="inline w-3 h-3 me-1 -mt-0.5 text-gold" />
                  {t.sourceLang} <span className="text-gold">*</span>
                </label>
                <select id="qf-source" name="sourceLang" required defaultValue="" className={inputClass}>
                  <option value="" disabled>{t.selectPh}</option>
                  {t.languages.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="qf-target" className={labelClass}>{t.targetLang} <span className="text-gold">*</span></label>
                <select id="qf-target" name="targetLang" required defaultValue="" className={inputClass}>
                  <option value="" disabled>{t.selectPh}</option>
                  {t.languages.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label htmlFor="qf-doctype" className={labelClass}>{t.documentType} <span className="text-gold">*</span></label>
                <select id="qf-doctype" name="documentType" required defaultValue="" className={inputClass}>
                  <option value="" disabled>{t.selectPh}</option>
                  {t.documentTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="qf-pages" className={labelClass}>
                  {t.pages}{" "}
                  <span className="normal-case tracking-normal text-navy/40 dark:text-white/35">{dict.contact.form.optional}</span>
                </label>
                <input id="qf-pages" name="pages" type="number" min="1" max="500" placeholder="1" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <label className="flex items-start gap-3 cursor-pointer p-4 border border-navy/12 dark:border-white/10 hover:border-gold/50 transition-colors duration-200 group">
                <input type="checkbox" name="certified" value="ja" defaultChecked className="mt-1 w-4 h-4 accent-gold flex-shrink-0 cursor-pointer" />
                <div>
                  <p className="font-display text-navy dark:text-white font-semibold text-base">{t.certifiedTitle}</p>
                  <p className="font-body text-navy/55 dark:text-cream/45 text-xs mt-0.5">{t.certifiedDesc}</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer p-4 border border-navy/12 dark:border-white/10 hover:border-gold/50 transition-colors duration-200 group">
                <input type="checkbox" name="express" value="ja" className="mt-1 w-4 h-4 accent-gold flex-shrink-0 cursor-pointer" />
                <div>
                  <p className="font-display text-navy dark:text-white font-semibold text-base">{t.expressTitle}</p>
                  <p className="font-body text-navy/55 dark:text-cream/45 text-xs mt-0.5">{t.expressDesc}</p>
                </div>
              </label>
            </div>

            <div className="mb-10">
              <label htmlFor="qf-deadline" className={labelClass}>
                {t.deadline}{" "}
                <span className="normal-case tracking-normal text-navy/40 dark:text-white/35">{dict.contact.form.optional}</span>
              </label>
              <input id="qf-deadline" name="deadline" type="date" className={inputClass} />
            </div>

            {/* 3. Upload */}
            <span className={sectionLabel}>{t.section3} <span className="text-gold">*</span></span>

            <div
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => fileInputRef.current?.click()}
              className={`relative p-8 md:p-10 border-2 border-dashed cursor-pointer transition-all duration-300 ${
                isDragging
                  ? "border-gold bg-gold/5"
                  : "border-navy/20 dark:border-white/15 hover:border-gold/60 hover:bg-cream/40 dark:hover:bg-navy/40"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={ALLOWED_EXT.join(",")}
                onChange={handleFilePick}
                aria-label={t.uploadHeading}
                title={t.uploadHeading}
                className="hidden"
              />
              <div className="flex flex-col items-center text-center gap-3 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-gold" />
                </div>
                <p className="font-display font-semibold text-navy dark:text-white text-lg">
                  {t.uploadHeading}
                </p>
                <p className="font-body text-navy/55 dark:text-cream/45 text-sm">
                  {interp(t.uploadDesc, { max: MAX_FILES })}
                </p>
              </div>
            </div>

            {files.length > 0 && (
              <ul className="mt-5 flex flex-col gap-2">
                {files.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="flex items-center gap-3 px-4 py-3 bg-cream dark:bg-navy border border-navy/8 dark:border-white/8">
                    <FileText className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-body text-sm text-navy dark:text-white flex-1 truncate">{f.name}</span>
                    <span className="font-mono text-xs text-navy/55 dark:text-cream/45 flex-shrink-0">{formatSize(f.size)}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="p-1 text-navy/50 hover:text-red-500 dark:text-cream/50 dark:hover:text-red-400 transition-colors duration-200"
                      aria-label={interp(t.removeFile, { name: f.name })}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
                <li className="flex items-center justify-between px-4 pt-2 font-mono text-[11px] text-navy/50 dark:text-cream/40">
                  <span>{interp(t.filesCount, { n: files.length, max: MAX_FILES })}</span>
                  <span>{interp(t.filesSize, { used: formatSize(totalSize) })}</span>
                </li>
              </ul>
            )}

            {fileError && (
              <p className="mt-3 flex items-center gap-2 font-body text-sm text-red-600 dark:text-red-400">
                <AlertCircle className="w-4 h-4" />
                {fileError}
              </p>
            )}

            {/* 4. Notes */}
            <div className="mt-10">
              <span className={sectionLabel}>{t.section4}</span>
              <label htmlFor="qf-notes" className="sr-only">{t.section4}</label>
              <textarea id="qf-notes" name="notes" rows={5} placeholder={t.notesPh} className={`${inputClass} resize-none`} />
            </div>

            {/* Honeypot */}
            <div className="fixed -left-[9999px] -top-[9999px]" aria-hidden="true">
              <label htmlFor="qf-website">Website</label>
              <input id="qf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {/* DSGVO */}
            <label className="flex items-start gap-3 mt-8 mb-6 cursor-pointer">
              <input type="checkbox" name="consent" required value="ja" className="mt-1 w-4 h-4 accent-gold flex-shrink-0 cursor-pointer" />
              <span className="font-body text-sm text-navy/70 dark:text-cream/60 leading-relaxed">
                {t.consent}{" "}
                <a href="/datenschutz" className="text-gold hover:text-gold-light underline underline-offset-2">
                  {t.consentLink}
                </a>{" "}
                {t.consentSuffix}
                <span className="text-gold"> *</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full bg-gold text-navy font-body font-semibold py-4 uppercase tracking-widest text-xs hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,169,110,0.4)] hover:-translate-y-0.5 disabled:hover:translate-y-0 flex items-center justify-center gap-3"
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t.submitting}
                </>
              ) : (
                <>
                  {t.submitIdle}
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {state === "success" && (
              <div className="mt-5 flex items-start gap-3 p-5 bg-gold/10 border border-gold/30 text-navy dark:text-white">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-base">{t.successTitle}</p>
                  <p className="font-body text-sm text-navy/65 dark:text-cream/65 mt-1">{t.successDesc}</p>
                </div>
              </div>
            )}

            {state === "error" && (
              <div className="mt-5 flex items-start gap-3 p-5 bg-red-500/10 border border-red-500/30">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-base text-navy dark:text-white">{t.errorTitle}</p>
                  <p className="font-body text-sm text-navy/65 dark:text-cream/65 mt-1">
                    {errorMsg || t.errorTransport} {t.errorContact}{" "}
                    <a href="mailto:info@hamdan-sprachendienste.de" className="text-gold hover:underline">
                      info@hamdan-sprachendienste.de
                    </a>.
                  </p>
                </div>
              </div>
            )}
          </form>
        </FadeIn>

      </div>
    </section>
  );
};

export default QuoteForm;
