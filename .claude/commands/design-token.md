---
description: Fügt einen neuen Design-Token korrekt in globals.css @theme {} ein (nicht in tailwind.config.ts)
---

# Design-Token hinzufügen

Füge einen neuen Token hinzu. Beschreibung (Name + Wert + Verwendung): $ARGUMENTS

## Wichtig — Tailwind v4 (CSS-first)

- Tokens leben **ausschließlich** im `@theme {}`-Block in [`app/globals.css`](app/globals.css).
- **NICHT** in `tailwind.config.ts` unter `extend.colors` etc. — das wird in v4 ignoriert.
- Dark-Mode-Variante ist als `@custom-variant dark (&:where(.dark, .dark *))` deklariert.

## Token-Konventionen

| Typ | Präfix | Beispiel |
|---|---|---|
| Farbe | `--color-*` | `--color-navy: #0A1628;` |
| Schrift | `--font-*` | `--font-display: ...;` |
| Spacing | `--spacing-*` | `--spacing-section: 6rem;` |
| Radius | `--radius-*` | `--radius-card: 1rem;` |
| Schatten | `--shadow-*` | `--shadow-soft: ...;` |

Tailwind generiert daraus automatisch Utilities (z. B. `bg-navy`, `font-display`, `rounded-card`).

## Vorgehen

1. Öffne [`app/globals.css`](app/globals.css) und finde den `@theme {}`-Block.
2. Füge den Token in der richtigen thematischen Gruppe ein (Farben zu Farben, Spacing zu Spacing).
3. Falls eine Variante für Hover/Light/Dark gewünscht ist: dem bestehenden `*-light`/`*-dark`-Muster folgen (`navy`, `navy-light`, `navy-dark`).
4. **Verifikation**: Suche im Code, ob der Tokenname kollidiert oder bereits ähnlich existiert.
5. Kurz angeben: welcher Token wo eingefügt wurde und welche Tailwind-Utility daraus entsteht (z. B. `bg-foo`, `text-foo`).
