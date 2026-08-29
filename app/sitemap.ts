import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://carlaprado.pages.dev/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://carlaprado.pages.dev/autismo-criciuma", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://carlaprado.pages.dev/deficiencia-intelectual-criciuma", lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
