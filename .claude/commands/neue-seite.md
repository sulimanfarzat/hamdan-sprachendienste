---
description: Erstellt eine neue App-Router-Seite mit Hamdan-Konventionen (Tokens, FadeIn, deutsche Metadata)
---

# Neue Seite anlegen

Lege eine neue Seite unter `app/<route>/page.tsx` an. Die Route ergibt sich aus: $ARGUMENTS

## Anforderungen

1. **Server Component** als Standard — `'use client'` nur wenn unbedingt nötig (Events, State).
2. **Metadata** exportieren mit deutschem `title` und `description` (Tonalität: professionell, Sie-Form, Übersetzungsdienst).
3. **Layout-Konvention**:
   - Ganze Sektionen in `components/sections/` ablegen, nicht inline.
   - Verwende vorhandene Sections wo möglich (siehe `components/sections/`).
4. **Styling**:
   - Nur Tailwind-v4-Utilities mit Tokens aus [`app/globals.css`](app/globals.css) (`navy`, `gold`, `cream`, `muted`).
   - Schriften: `font-display` (Cormorant) für Headings, `font-body` (Inter) für Text.
   - Keine eigenen Hex-Farben — Tokens aus dem `@theme {}`-Block verwenden.
5. **Animation**: Scroll-Reveals via [`components/ui/FadeIn.tsx`](components/ui/FadeIn.tsx).
6. **Dark Mode**: Dark als Standard. Theme-abhängige Logik nur nach `mounted`-Guard rendern.
7. **Navigation**: Falls die Seite in der Hauptnavigation erscheinen soll, Eintrag in `navLinks` von [`components/Navbar.tsx`](components/Navbar.tsx) ergänzen.
8. **Deutsche Copy**: Alle UI-Texte auf Deutsch, Sie-Form, professioneller Ton für Sprachendienst.

## Vorgehen

1. Prüfe die bestehende Struktur in [`app/`](app/) auf ähnliche Seiten als Vorlage.
2. Erstelle `app/<route>/page.tsx` und ggf. `app/<route>/components/` für seitenspezifische Teile.
3. Wenn Navi-Eintrag nötig: Navbar entsprechend erweitern.
4. Kurz zusammenfassen, was angelegt wurde und welche Tokens/Sections wiederverwendet wurden.
