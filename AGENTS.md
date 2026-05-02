<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hamdan Sprachendienste – Agent Guide

**Project**: German language-services website (translation & interpretation). UI copy is in German.

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
npm run build  # production build
npm run lint   # ESLint
```

## Critical conventions — READ BEFORE WRITING CODE

### Tailwind v4 — CSS-first configuration
Design tokens live in [`app/globals.css`](app/globals.css) inside `@theme {}`, **not** in `tailwind.config.ts`.
- To add a new color/token → add it to the `@theme` block in `globals.css`.
- Do **not** add `extend.colors` to `tailwind.config.ts` — it won't be picked up in v4.
- Dark-mode variant is declared as `@custom-variant dark (&:where(.dark, .dark *))`.

### Design tokens (from globals.css `@theme`)
| Token | Value | Usage |
|---|---|---|
| `navy` / `navy-light` / `navy-dark` | `#0A1628` family | dark backgrounds |
| `gold` / `gold-light` / `gold-dark` | `#C8A96E` family | accent / CTA |
| `cream` / `cream-dark` | `#F7F5F0` family | light backgrounds |
| `muted` | `#8A8A99` | secondary text |

### Fonts
Three fonts loaded via `next/font/google` and exposed as CSS variables:
- `font-display` → Cormorant Garamond (headings)
- `font-body` → Inter (body text)
- `font-mono` → DM Mono (code/labels)

### Dark mode
- Class-based: `.dark` on `<html>`. Default SSR render is **dark**.
- Use the custom `ThemeProvider` / `useTheme()` hook from [`components/ThemeProvider.tsx`](components/ThemeProvider.tsx). **Do not** install next-themes.
- Always guard theme-dependent rendering behind `mounted` to avoid hydration mismatch.

### Routing & file structure
- `app/` — Next.js App Router pages (one `page.tsx` per route)
- `components/` — shared components; sub-folder `components/sections/` for page sections; `components/ui/` for primitives
- Anchor links on the home page use `id` attributes (e.g. `id="start"`, `id="services"`)

### Animation
- Prefer the lightweight [`components/ui/FadeIn.tsx`](components/ui/FadeIn.tsx) (IntersectionObserver-based) for scroll reveals.
- Use framer-motion only when FadeIn is insufficient (complex keyframes, drag, etc.).

## Key files
- [`app/globals.css`](app/globals.css) — design system (all tokens, keyframes, base styles)
- [`app/layout.tsx`](app/layout.tsx) — root layout (fonts, Navbar, Footer, ThemeProvider)
- [`components/Navbar.tsx`](components/Navbar.tsx) — navigation link list lives here (`navLinks` array)
- [`tailwind.config.ts`](tailwind.config.ts) — content globs + forms plugin only; tokens are in CSS

