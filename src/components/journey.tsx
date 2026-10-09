import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
export function ProcessSteps() {
  return (
    <div className="process-grid">
      {[
        {
          title: "Book your visit",
          text: "Start with a few simple details. Tell us what you would like to explore.",
        },
        {
          title: "Meet your dental team",
          text: "A warm welcome. Time to talk. Space for all the questions on your mind.",
        },
        {
          title: "Explore your options",
          text: "Understand the possibilities, at your pace, with a plan built around you.",
        },
      ].map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <article className="process-card">
            <div>
              <span className="process-number">0{i + 1}</span>
              <ArrowUpRight size={24} strokeWidth={1} aria-hidden="true" />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
