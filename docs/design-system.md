# Design System — Red / White / Gray Premium Minimal

The visual language for Vithaya Chanthasy's portfolio. The goal is **premium
minimalism**: generous whitespace, restrained color, sharp typography, and a
single confident red accent. Nothing decorative for its own sake.

- **Status:** Implemented — tokens live in `globals.css` + `tailwind.config.ts`.

## 1. Design Principles

1. **Minimal by default.** Lead with whitespace; add elements only when they earn it.
2. **One accent.** Red is the single accent — used sparingly for emphasis and action.
3. **Premium restraint.** Neutral grays do the structural work; red punctuates.
4. **Clarity first.** Typography and hierarchy carry the experience.
5. **Quiet motion.** Subtle, purposeful transitions — never flashy.

## 2. Color Palette

### Brand tokens

These are the implemented tokens — defined in `tailwind.config.ts` (Tailwind
utilities) and `app/globals.css` (CSS variables). Tailwind class names follow the
`brand-*` keys (e.g. `bg-brand-red`, `text-brand-dark`, `bg-brand-light`).

| Token         | Hex       | Tailwind        | Usage                                       |
| ------------- | --------- | --------------- | ------------------------------------------- |
| `brand-red`   | `#DC2626` | `*-brand-red`   | Primary accent — CTAs, highlights, links.   |
| `brand-dark`  | `#111827` | `*-brand-dark`  | Primary text, headings, dark surfaces/bg.   |
| `brand-light` | `#F9FAFB` | `*-brand-light` | Premium clean background, light surfaces.   |

### Semantic CSS variables

Defined in `app/globals.css` and mapped into the `@theme` layer; they flip
automatically with `prefers-color-scheme`.

| Variable       | Light     | Dark      | Usage                                  |
| -------------- | --------- | --------- | -------------------------------------- |
| `--background`  | `#F9FAFB` | `#111827` | Page background.                       |
| `--foreground`  | `#111827` | `#F9FAFB` | Primary text.                          |
| `--muted`       | `#6B7280` | `#9CA3AF` | Secondary / caption text.              |
| `--border`      | `#E5E7EB` | `#1F2937` | Hairline dividers, card borders.       |
| `--accent`      | `#DC2626` | `#EF4444` | Brand red (lifted slightly in dark).   |

### Usage ratio

Aim for roughly **60% light / 30% neutral / 10% red**. Red should feel
intentional and scarce.

## 3. Typography

- **Display / Headings:** A clean geometric or grotesque sans (e.g. Inter,
  Geist, or similar). Tight tracking, heavy weight for impact.
- **Body:** Same family or a complementary humanist sans for readability.

| Token            | Size            | Weight | Usage                       |
| ---------------- | --------------- | ------ | --------------------------- |
| `--text-hero`    | 4–5rem (clamp)  | 700    | Hero name / headline.       |
| `--text-h1`      | 2.5rem          | 700    | Section titles.             |
| `--text-h2`      | 1.75rem         | 600    | Subsection titles.          |
| `--text-body`    | 1rem–1.125rem   | 400    | Paragraph text.             |
| `--text-small`   | 0.875rem        | 400    | Captions, meta.             |

- **Line height:** 1.1–1.2 for headings, 1.6 for body.
- **Max line length:** ~65–75 characters for readability.

## 4. Spacing & Layout

- **Scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Container max width:** 1200px, centered, with responsive horizontal padding.
- **Section vertical rhythm:** Large, consistent padding (e.g. 96–128px desktop).
- **Grid:** 12-column conceptual grid; content often constrained to 8 columns.

## 5. Components

- **Buttons**
  - _Primary:_ `brand-red` background, white text, subtle darken on hover.
  - _Secondary:_ transparent with `--border`, `--foreground` text; red on hover.
- **Cards:** `--background` surface, `--border` outline, generous padding, soft radius.
- **Links:** `--foreground` text with red underline-on-hover, or `brand-red` for inline emphasis.
- **Navigation:** Minimal top bar — name/logo left, anchor links right.
- **Dividers:** Thin `--border` rules; occasional short `brand-red` accent rule.

## 6. Radius, Borders & Elevation

- **Radius:** `--radius-sm` 6px, `--radius-md` 10px, `--radius-lg` 16px.
- **Borders:** 1px `--border` default.
- **Shadows:** Soft and minimal — used sparingly to lift key cards only.

## 7. Motion

- **Duration:** 150–250ms for interactions; up to 400ms for entrance reveals.
- **Easing:** `ease-out` for entrances, `ease-in-out` for state changes.
- **Patterns:** Fade-and-rise on scroll, subtle hover lifts, accent underlines.
- Respect `prefers-reduced-motion`.

## 8. Accessibility

- Maintain WCAG AA contrast (red on white and white on red both pass for large
  and UI text; verify body sizes).
- Visible focus states using the red accent ring.
- Semantic HTML and logical heading order.

## 9. Implementation Notes

- Tailwind CSS v4 (CSS-first). Brand color utilities (`brand-red`, `brand-dark`,
  `brand-light`) are defined in `tailwind.config.ts`, which is opted into from
  `app/globals.css` via `@config "../tailwind.config.ts";`.
- Semantic theme variables (`--background`, `--foreground`, `--muted`,
  `--border`, `--accent`) live in `app/globals.css` and are mapped through the
  `@theme inline` layer; they flip with `prefers-color-scheme`.
- Keep the palette centralized so the red / dark / light system stays consistent.
