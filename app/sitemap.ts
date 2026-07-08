import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { listPublishedCategories } from "@/lib/queries/categories";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/catalogue"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  try {
    const categories = await listPublishedCategories();
    for (const category of categories) {
      routes.push({
        url: absoluteUrl(`/catalogue?category=${category.slug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.75,
      });
    }
  } catch {
    // Keep core routes if database is temporarily unavailable
  }

  return routes;
}
