import type { MetadataRoute } from "next";
import { siteConfig } from "./seo.config";

/**
 * Single-page portfolio: the landing page is the only crawlable route.
 * Section anchors (#about, #skills, …) live within it and don't need
 * separate sitemap entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
