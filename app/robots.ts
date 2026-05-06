import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://www.hamdan-sprachendienste.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
