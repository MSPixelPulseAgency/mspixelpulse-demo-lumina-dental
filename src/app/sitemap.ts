import type { MetadataRoute } from "next";
import { services } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];
  return [
    "",
    "about",
    "services",
    ...services.map((s) => `services/${s.slug}`),
    "new-patients",
    "our-team",
    "gallery",
    "faqs",
    "contact",
    "book-appointment",
    "privacy",
    "terms",
  ].map((path) => ({
    url: `${base.replace(/\/$/, "")}/${path ? path + "/" : ""}`,
    lastModified: "2026-10-09",
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
