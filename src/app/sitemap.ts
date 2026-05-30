import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const pages = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/disclaimer", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/terms-and-conditions", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about-us", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
