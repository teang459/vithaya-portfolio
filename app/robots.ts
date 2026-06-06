import type { MetadataRoute } from "next";
import { siteConfig } from "./seo.config";

/**
 * Generates /robots.txt via the App Router metadata convention so it stays
 * in sync with the sitemap and site URL.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
