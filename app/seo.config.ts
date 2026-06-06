/**
 * Single source of truth for site-wide SEO metadata.
 * Consumed by layout.tsx (metadata), sitemap.ts, robots.ts, and the OG image.
 *
 * NOTE: Update `url` to your production domain (or set NEXT_PUBLIC_SITE_URL).
 * The current default targets the Vercel deployment.
 */
export const siteConfig = {
  name: "Vithaya Chanthasy",
  title: "Vithaya Chanthasy | International Marketing & MarCom Professional",
  description:
    "Marketing communications professional in Vientiane, Laos, with a Master's in Management (International Marketing) and a foundation in infocommunication systems — pairing brand strategy with technical literacy and daily AI-accelerated workflows, paired with human review, to ship campaigns faster.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://vithaya-portfolio.vercel.app"
  ).replace(/\/$/, ""),
  locale: "en_US",
  author: "Vithaya Chanthasy",
  keywords: [
    "Vithaya Chanthasy",
    "International Marketing",
    "Marketing Communications",
    "MarCom Officer",
    "Infocommunication Technologies",
    "AI-driven marketing",
    "Digital Marketing",
    "Content Strategy",
    "Laos",
    "Vientiane",
  ],
} as const;
