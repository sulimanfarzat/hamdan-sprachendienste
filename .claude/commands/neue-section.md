---
description: Erstellt eine Section-Komponente in components/sections/ nach Hamdan-Stilstandard
---

# Neue Section-Komponente

Lege eine wiederverwendbare Section in `components/sections/` an. Beschreibung: $ARGUMENTS

## Anforderungen

1. **Dateiname**: PascalCase, sprechend (z. B. `LeistungenHero.tsx`, `KundenStimmen.tsx`).
2. **Server Component** als Standard. Nur wenn Animation/Event nötig: `'use client'`.
3. **Props-Interface** explizit typisieren — keine `any`, keine impliziten Props.
4. **Styling-Regeln**:
   - Tailwind-v4-Utilities mit Tokens aus [`app/globals.css`](app/globals.css) (`navy*`, `gold*`, `cream*`, `muted`).
   - Schriften: `font-display` für Headings, `font-body` für Fließtext.
   - Container-Maximalbreite und Innenabstand konsistent zu bestehenden Sections halten.
   - Dark-Mode-Klassen (`dark:...`) wo Kontraste anders sein müssen.
5. **Scroll-Animation**: Inhalte in [`components/ui/FadeIn.tsx`](components/ui/FadeIn.tsx) wickeln, framer-motion nur bei komplexer Choreographie.
6. **Semantik**: `<section>` als Root, sinnvolle `aria-label`/Heading-Hierarchie. Falls Anchor-Link gewünscht: `id="..."`-Attribut.
7. **Deutsche Copy**: Sie-Form, Ton einer professionellen Übersetzungsagentur.

## Vorgehen

1. Schaue dir 1–2 bestehende Sections in [`components/sections/`](components/sections/) als Stilreferenz an.
2. Lege die neue Datei nach dem dort vorgefundenen Muster an.
3. Wenn die Section auf einer Seite eingebunden werden soll: Import + Platzierung in der entsprechenden `page.tsx` ergänzen.
4. Kurze Zusammenfassung, welche Tokens und vorhandenen UI-Primitive verwendet wurden.
