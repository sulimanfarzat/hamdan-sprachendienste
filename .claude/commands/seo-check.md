---
description: Prüft und ergänzt Metadata, Open Graph und SEO-Basics für eine Seite
---

# SEO- und Metadata-Check

Prüfe die SEO-Tauglichkeit einer Seite und ergänze fehlende Metadaten. Ziel: $ARGUMENTS

## Was zu prüfen ist

### 1. Next.js `Metadata` Export
In jeder `page.tsx` (oder `layout.tsx` für Defaults):
- `title` — prägnant, max. ~60 Zeichen, Marken-Suffix konsistent (z. B. „| Hamdan Sprachendienste").
- `description` — 140–160 Zeichen, deutsch, Sie-Form, mit Suchintention.
- `keywords` — sparsam, nur wenn relevant.
- `alternates.canonical` — bei Routen mit möglichen Duplikaten.

### 2. Open Graph & Twitter
- `openGraph.title`, `openGraph.description`, `openGraph.images` (mind. ein OG-Image pro wichtiger Seite, 1200×630).
- `openGraph.locale: 'de_DE'`, `openGraph.type: 'website'`.
- `twitter.card: 'summary_large_image'`.

### 3. Strukturelle Basics
- Genau **ein** `<h1>` pro Seite, danach `<h2>`/`<h3>` hierarchisch.
- `<html lang="de">` (in [`app/layout.tsx`](app/layout.tsx)) — prüfen.
- Sinnvolle `alt`-Texte auf allen `<Image>`-Komponenten.
- Interne Links statt nur visueller Buttons für wichtige Navigation.

### 4. Performance-Signale (SEO-relevant)
- Bilder via `next/image` mit `priority` für LCP-Bild.
- Fonts via `next/font` (kein externer Request).
- Keine layout shifts durch fehlende `width`/`height`.

### 5. Robots & Sitemap
- `app/robots.ts` und `app/sitemap.ts` vorhanden? Falls nicht und sinnvoll: vorschlagen.

## Vorgehen

1. Lies die genannte Seite (oder alle relevanten `page.tsx`-Dateien).
2. Erstelle eine kurze **Checkliste** mit ✓/✗ pro Punkt oben.
3. Schlage konkrete Edits vor und führe sie nach Bestätigung aus.
4. Bei Bildempfehlungen: nur erwähnen, dass ein OG-Image fehlt — nicht selbst generieren.
