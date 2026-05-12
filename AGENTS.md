<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hamdan Sprachendienste – Agent Guide

**Project**: German language-services website (Arabic–German translation & interpretation). UI copy is in German (Sie-form). Supports a second locale, Arabic, with full RTL layout.

## Stack

| Layer | Version / Package |
|---|---|
| Framework | Next.js **16.2.4** + React **19.2.4** — App Router |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS **v4** (CSS-first) |
| Animation | framer-motion, custom `FadeIn` component |
| Icons | lucide-react |
| UI helpers | @headlessui/react, @radix-ui/react-toast |

## Commands

```sh
npm run dev    # start dev server (localhost:3000)
npm run build  # production build (static export)
npm run lint   # ESLint
```

## Deployment

The site is a **static export** (`output: "export"` in `next.config.ts`).

- In production the site lives under `/hamdan-sprachendienste` (GitHub Pages basePath).
- Use the `asset(path)` helper from [`lib/basePath.ts`](lib/basePath.ts) for all image `src` and icon `href` values — never hardcode `/logo.png`.
- `trailingSlash: true` is set; links don't need it but Next.js will add it on build.
- `images: { unoptimized: true }` — use `next/image` normally; optimisation is disabled for static export.

## Critical conventions — READ BEFORE WRITING CODE

### Tailwind v4 — CSS-first configuration

Design tokens live in [`app/globals.css`](app/globals.css) inside `@theme {}`, **not** in `tailwind.config.ts`.

- To add a new color/token → add it to the `@theme {}` block in `globals.css`.
- **Do not** add `extend.colors` or other theme extensions to `tailwind.config.ts` — v4 ignores them.
- `tailwind.config.ts` must only contain `content` globs and `plugins` (currently `@tailwindcss/forms`).
- **Warning**: the current `tailwind.config.ts` has a stale `theme.extend` block left from a refactor. Those entries (`primary`, `accent`, etc.) are **not active** and must not be relied upon. Ignore them.
- Dark-mode variant is declared as `@custom-variant dark (&:where(.dark, .dark *))`.

### Design tokens (from `globals.css` `@theme`)

| Token | Value | Usage |
|---|---|---|
| `navy` / `navy-light` / `navy-dark` | `#0A1628` family | dark backgrounds |
| `gold` / `gold-light` / `gold-dark` | `#C8A96E` family | accent / CTA |
| `cream` / `cream-dark` | `#F7F5F0` family | light backgrounds |
| `muted` | `#8A8A99` | secondary text |

All tokens follow the `--color-*` convention; Tailwind generates `bg-navy`, `text-gold`, `border-cream` etc. automatically.

### Fonts

Four fonts are loaded via `next/font/google` and exposed as CSS variables:

| Utility | Font | Use for |
|---|---|---|
| `font-display` | Bricolage Grotesque | headings (`<h1>`–`<h3>`) |
| `font-body` | Inter | body text, UI labels |
| `font-mono` | DM Mono | badges, labels, eyebrows |
| `font-cairo` (via CSS var) | Cairo | Arabic/RTL locale only |

> **Note**: older slash-command docs mention "Cormorant Garamond" — that font was replaced. `font-display` is now Bricolage Grotesque.

### Dark mode

- Class-based: `.dark` on `<html>`. Default SSR render is **dark** (the `dark` class is hard-coded in `layout.tsx`).
- Use the custom `ThemeProvider` / `useTheme()` hook from [`components/ThemeProvider.tsx`](components/ThemeProvider.tsx). **Do not** install next-themes.
- `ThemeProvider` reads `localStorage("theme")` on mount, falls back to `prefers-color-scheme`, then dark.
- Always guard theme-dependent rendering behind `mounted` (exposed by `useTheme()`) to avoid hydration mismatch.
- The `mounted` flag is also available from `useLanguage()`.

### Internationalisation (i18n)

The site supports two locales: German (`de`, LTR) and Arabic (`ar`, RTL).

- **No file-system routing** for locales. Switching locale is a client-side toggle stored in `localStorage("locale")`.
- [`components/LanguageProvider.tsx`](components/LanguageProvider.tsx) provides `{ locale, dict, setLocale, toggle, mounted }` via `useLanguage()`.
- Dictionaries: [`dictionaries/de.json`](dictionaries/de.json) (source of truth) and [`dictionaries/ar.json`](dictionaries/ar.json).
- On locale switch, `LanguageProvider` sets `document.documentElement.lang` and `document.documentElement.dir` (`ltr`/`rtl`).
- All UI strings must come from `dict.*` — never hardcode German text in components.
- When adding new strings: add the key to **both** `de.json` and `ar.json`.

### RTL support

- `globals.css` swaps all font utilities to Cairo when `html[dir="rtl"]`.
- `html[dir="rtl"] *` sets `letter-spacing: 0` (Arabic connected script breaks with spacing).
- `html[dir="rtl"] .rtl-flip { transform: scaleX(-1) }` — apply to left-facing arrow icons.
- Select dropdowns use the `.select-rtl` class to move the arrow to the left side under RTL.
- Always test new UI components in both `locale === "de"` and `locale === "ar"`.

### Routing & file structure

```
app/
├── layout.tsx          # Root layout: fonts, Navbar, Footer, ThemeProvider, LanguageProvider
├── globals.css         # Design system (tokens, keyframes, RTL, base styles)
├── page.tsx            # Home page (/)
├── robots.ts           # Robots.txt generation
├── sitemap.ts          # Sitemap generation
├── about/
│   ├── page.tsx        # Metadata export + renders AboutContent
│   └── AboutContent.tsx
├── angebot/            # Quote / beglaubigte Übersetzung order page
├── branchen/           # Industries page
├── datenschutz/        # Privacy policy
├── impressum/          # Legal notice
├── kontakt/            # Contact page
├── referenzen/         # References / clients
├── services/           # Services overview
└── uebersetzen/        # Translation services detail

components/
├── Navbar.tsx          # Fixed navbar with scroll effect, dark/light toggle, locale toggle
├── Footer.tsx
├── HeroSection.tsx
├── ThemeProvider.tsx   # Custom theme context + hook
├── LanguageProvider.tsx # i18n context + hook
├── sections/           # Full-width page sections
│   ├── AngebotTeaser.tsx
│   ├── ContactSection.tsx   # Contact form → POST /api/contact.php
│   ├── HighlightsSection.tsx
│   ├── QuoteForm.tsx        # File-upload quote form → POST /api/quote.php
│   ├── ReviewsSection.tsx
│   └── StepsSection.tsx
└── ui/
    ├── FadeIn.tsx      # IntersectionObserver scroll-reveal
    └── HashScroll.tsx  # Smooth-scroll to #hash on page load (client, renders null)

lib/
└── basePath.ts         # asset() helper for basePath-aware image/asset URLs

dictionaries/
├── de.json             # German strings (source of truth)
└── ar.json             # Arabic strings

public/
└── api/
    ├── contact.php     # Contact form handler (JSON POST)
    └── quote.php       # Quote form handler (multipart POST with file upload)
```

### Page structure pattern

Each route follows a two-file pattern:

```tsx
// app/<route>/page.tsx  — Server Component; exports Metadata
import type { Metadata } from "next";
import FooContent from "./FooContent";

export const metadata: Metadata = { title: "...", description: "..." };
export default function FooPage() { return <FooContent />; }

// app/<route>/FooContent.tsx — "use client" component with the actual UI
```

This keeps Metadata (server-only) and interactive UI (client) separated.

### Navigation

`navLinks` is defined in [`components/Navbar.tsx`](components/Navbar.tsx). Labels come from `dict.nav.links`. To add a route to the navbar, add an entry to both `navLinks` and the dictionary files.

Home-page anchor IDs: `#start`, `#services`, `#kontakt`.

### Animation

- Prefer the lightweight [`components/ui/FadeIn.tsx`](components/ui/FadeIn.tsx) for scroll reveals.
  - Props: `delay` (ms, 0–500), `direction` (`"up"` | `"left"` | `"right"`), `className`.
  - Uses IntersectionObserver (threshold 0.12); fires once, then disconnects.
- Use framer-motion only when FadeIn is insufficient (complex keyframes, drag, etc.).
- Available keyframes in `globals.css`: `fadeSlideUp`, `expandWidth`, `float`, `floatAlt`, `fadeScale`, `glowPulse`, `shimmerLine`, `spinReverse`, `drift`, `driftAlt`.

### Forms & backend

- **ContactSection** POSTs JSON to `/api/contact.php`. Includes honeypot field (`name="website"`).
- **QuoteForm** POSTs multipart to `/api/quote.php`. File constraints: max 8 files, 10 MB/file, 30 MB total, allowed exts: `.pdf .jpg .jpeg .png .doc .docx .heic`.
- Both forms use `FormState = "idle" | "submitting" | "success" | "error"`.
- Error messages come from `dict` (no hardcoded strings).

### SEO

- Root `layout.tsx` exports full `Metadata` with OG, Twitter, keywords, JSON-LD (LocalBusiness schema).
- Each `page.tsx` overrides `title` and `description` and sets `alternates.canonical`.
- `app/robots.ts` and `app/sitemap.ts` generate robots.txt and XML sitemap.
- Images use `next/image` with `priority` on LCP images. `alt` text is mandatory.

## Key files

| File | Purpose |
|---|---|
| [`app/globals.css`](app/globals.css) | Design system: all tokens, keyframes, RTL, base styles |
| [`app/layout.tsx`](app/layout.tsx) | Root layout: fonts, providers, JSON-LD, global metadata |
| [`components/Navbar.tsx`](components/Navbar.tsx) | `navLinks` array; dark/locale toggles |
| [`components/ThemeProvider.tsx`](components/ThemeProvider.tsx) | `useTheme()` hook |
| [`components/LanguageProvider.tsx`](components/LanguageProvider.tsx) | `useLanguage()` hook |
| [`lib/basePath.ts`](lib/basePath.ts) | `asset()` helper for GitHub Pages basePath |
| [`tailwind.config.ts`](tailwind.config.ts) | Content globs + forms plugin only — tokens live in CSS |
| [`next.config.ts`](next.config.ts) | Static export, basePath, trailingSlash, unoptimized images |
| [`dictionaries/de.json`](dictionaries/de.json) | All German UI strings (source of truth) |
| [`dictionaries/ar.json`](dictionaries/ar.json) | All Arabic UI strings |

## Slash commands (`.claude/commands/`)

| Command | Purpose |
|---|---|
| `/neue-section` | Scaffold a new section in `components/sections/` following Hamdan style |
| `/neue-seite` | Scaffold a new App Router page with Metadata, tokens, FadeIn |
| `/design-token` | Add a new design token correctly to `globals.css @theme {}` |
| `/i18n-copy` | Polish German UI copy to Hamdan tone (Sie-form, professional) |
| `/dark-mode-fix` | Audit a component for dark-mode correctness (hydration, tokens, contrast) |
| `/seo-check` | Audit and complete Metadata, Open Graph, and SEO basics for a page |
