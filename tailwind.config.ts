import type { Config } from "tailwindcss";

/**
 * Tailwind v4 uses CSS-first configuration. This file is opted into via the
 * `@config "../tailwind.config.ts";` directive in `app/globals.css`, where it
 * augments the theme with the portfolio's premium brand tokens.
 *
 * Brand palette (red / dark / light premium minimal — see docs/design-system.md):
 *   brand-red   #DC2626  Primary accent — CTAs, highlights, emphasis.
 *   brand-dark  #111827  Primary text / max-contrast headings, dark surfaces.
 *   brand-light #F9FAFB  Premium clean background, light surfaces.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#DC2626",
        "brand-dark": "#111827",
        "brand-light": "#F9FAFB",
      },
    },
  },
};

export default config;
