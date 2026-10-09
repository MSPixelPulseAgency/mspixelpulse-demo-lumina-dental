"use client";
import { useState } from "react";
import { categories, services } from "@/data/site";
import { ServiceCard } from "./ui";
export function ServiceDirectory() {
  const [category, setCategory] = useState("All care");
  const filtered = services.filter(
    (s) => category === "All care" || s.category === category,
  );
  return (
    <>
      <div className="filter-tabs" aria-label="Filter services">
        {["All care", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} services shown
      </p>
      <div className="services-grid">
        {filtered.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
    </>
  );
}
