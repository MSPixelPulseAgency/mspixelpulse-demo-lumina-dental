"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "@/data/site";
export function FAQAccordion({
  items = faqs,
}: {
  items?: { q: string; a: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          key={item.q}
          className={`faq-item ${active === i ? "faq-active" : ""}`}
        >
          <h3>
            <button
              onClick={() => setActive(active === i ? null : i)}
              aria-expanded={active === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span>{item.q}</span>
              {active === i ? (
                <Minus size={19} aria-hidden="true" />
              ) : (
                <Plus size={19} aria-hidden="true" />
              )}
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {active === i && (
              <motion.div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.22 }}
                className="faq-answer"
              >
                <p>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
