---
description: Prüft eine Komponente auf Dark-Mode-Tauglichkeit (Hydration-Guard, Tokens, Kontraste)
---

# Dark-Mode-Audit

Prüfe eine Komponente oder Seite auf korrekte Dark-Mode-Implementierung. Ziel: $ARGUMENTS

## Hamdan-Konventionen

- **Strategie**: Klassenbasiert — `.dark` auf `<html>`. Default-SSR-Render ist **dark**.
- **Theme-Hook**: Eigener [`components/ThemeProvider.tsx`](components/ThemeProvider.tsx) mit `useTheme()`. **Kein** `next-themes` installieren.
- **Hydration-Guard**: Theme-abhängige Logik nur nach `mounted`-State rendern, sonst Mismatch.
- **Custom Variant**: `@custom-variant dark (&:where(.dark, .dark *))` (in `globals.css`).

## Was zu prüfen ist

### 1. Hydration
- Wenn die Komponente das Theme abfragt (`theme === 'dark'`), gibt es einen `mounted`-Guard?
- Initial-Render entspricht Dark-Mode-Variante (Default-SSR).
- Keine direkten Zugriffe auf `window`/`localStorage` im Render-Pfad ohne Guard.

### 2. Klassen
- Jede `bg-*`, `text-*`, `border-*` mit explizitem Light- **und** Dark-Wert oder Token, das in beiden Themes funktioniert.
- Beispiel: `bg-cream dark:bg-navy text-navy dark:text-cream`.
- Keine hartkodierten Hex-Farben — Tokens aus `globals.css` verwenden.

### 3. Kontraste
- Text auf Hintergrund mind. AA (4.5:1 für Fließtext).
- Gold-Akzente (`gold`, `gold-light`, `gold-dark`) je nach Modus richtige Variante wählen.

### 4. Bilder & SVGs
- Logos/Icons, die monochrom sind: Variante pro Theme (CSS-Filter, separate Datei oder `currentColor` für SVG).
- Bilder mit weißem/dunklem Hintergrund: Container-Hintergrund anpassen.

### 5. Interaktive Zustände
- `hover:`, `focus-visible:`, `active:` ebenfalls für beide Themes definiert.
- Focus-Ring sichtbar in beiden Modi.

## Vorgehen

1. Lies die Zielkomponente und ggf. den ThemeProvider.
2. Erstelle eine **Liste konkreter Befunde** (Datei + Zeile + Problem).
3. Schlage minimale Fixes vor und führe sie nach Bestätigung aus.
4. Wenn nötig: kurze Notiz, warum ein bestimmter Token statt eines Hex-Werts verwendet wurde.
