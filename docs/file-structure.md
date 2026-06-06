# File Structure — Vithaya Portfolio

Codebase organization for the Next.js 16 (App Router) portfolio. This document
describes the intended structure; items not yet created are marked accordingly.

- **Status:** Implemented (content populated from official CV).

## 1. Tech Stack

- **Framework:** Next.js 16.2.7 (App Router)
- **UI:** React 19.2.4
- **Styling:** Tailwind CSS v4 (CSS-first, `@theme`)
- **Language:** TypeScript 5

> **Note:** This is Next.js 16 — App Router conventions. Before writing routing,
> rendering, or caching code, consult `node_modules/next/dist/docs/` for the
> version-specific guides (per project `AGENTS.md`).

## 2. Directory Layout (actual)

```
vithaya-portfolio/
├── app/                      # App Router root
│   ├── layout.tsx            # Root layout — fonts, metadata, nav + footer
│   ├── page.tsx              # Home — composes all portfolio sections
│   ├── globals.css           # Tailwind v4 entry + design tokens (@theme)
│   ├── seo.config.ts         # Single source of truth for SEO metadata
│   ├── opengraph-image.tsx   # Build-time OG card (1200×630)
│   ├── robots.ts             # robots.txt route
│   ├── sitemap.ts            # sitemap.xml route
│   └── favicon.ico
├── components/               # Section + UI components (flat, PascalCase)
│   ├── layout/               # Navbar, Footer
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Projects.tsx          # Web dev builds + research papers
│   ├── AIProductivity.tsx
│   ├── Certifications.tsx
│   ├── Languages.tsx
│   └── Contact.tsx
├── public/                   # Static assets — images, resume, icons
├── docs/                     # Project documentation (this folder)
├── AGENTS.md                 # Agent/codebase instructions
├── CLAUDE.md                 # Re-exports AGENTS.md
├── tailwind.config.ts        # Brand color utilities (opted in from globals.css)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

> **Note:** Content currently lives inline within each section component (typed
> `const` arrays). A dedicated `content/` layer can be extracted later if the
> data set grows.

## 3. Conventions

- **Components:** PascalCase files (`Hero.tsx`), one component per file.
- **Sections:** Each portfolio section is a self-contained component in
  `components/sections/`, composed in `app/page.tsx`.
- **Content vs. presentation:** Keep copy and data in `content/`; components
  stay presentational and import their data.
- **Styling:** Tailwind utility classes; shared design tokens live in
  `globals.css` under the `@theme` layer (see `design-system.md`).
- **Server-first:** Default to Server Components; add `"use client"` only where
  interactivity (animation, form state) requires it.
- **Imports:** Use the `@/` path alias for project-root imports.

## 4. Key Files

| File                  | Responsibility                                      |
| --------------------- | --------------------------------------------------- |
| `app/layout.tsx`      | Root HTML shell, fonts, SEO metadata, nav + footer. |
| `app/page.tsx`        | Assembles the single-page portfolio.                |
| `app/globals.css`     | Tailwind import and red/white/gray design tokens.    |
| `components/sections/`| Individual content sections.                         |
| `content/`            | Centralized profile, education, experience, skills.  |

## 5. Status

All section components exist under `components/` and `components/layout/`, and
are composed in `app/page.tsx`. Every section is populated with Vithaya's
official CV data, including the `Projects` section. Remaining work is polish and
launch (see `tasks.md`).
