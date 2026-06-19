import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  "",
  "/72-saat-kac-gun",
  "/saat-ucreti-hesaplama",
  "/saat-hesaplama",
  "/saat-farki-hesaplama",
  "/saat-ekleme",
  "/saat-cikarma",
  "/calisma-saati-hesaplama",
  "/hakkimizda",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
