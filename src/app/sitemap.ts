import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  "",
  "/saat-hesaplama",
  "/saat-farki-hesaplama",
  "/saat-ekleme",
  "/saat-cikarma",
  "/calisma-saati-hesaplama",
  "/72-saat-kac-gundur",
  "/hakkimizda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/kullanim-kosullari",
  "/cerez-politikasi",
  "/sorumluluk-reddi",
  "/yazar/aylin-durmus",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
