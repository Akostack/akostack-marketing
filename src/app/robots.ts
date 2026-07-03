import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/waitlist-success"], // Keep success conversions private from indexing
    },
    sitemap: "https://akostack.com/sitemap.xml",
  };
}
