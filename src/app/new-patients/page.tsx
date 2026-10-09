import type { Metadata } from "next";
import { Check, FileText, HeartHandshake, MessagesSquare } from "lucide-react";
import { Button, ContactCTA, PageHero, SectionHeading } from "@/components/ui";
import { ProcessSteps } from "@/components/journey";
import { FAQAccordion } from "@/components/faq";
import { faqs } from "@/data/site";
export const metadata: Metadata = {
  title: "New Patients",
  description:
    "Explore a welcoming first-visit concept at LUMINA Dental Studio. Learn how a fictional Brampton practice might introduce new patients to care.",
};
export default function NewPatients() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={
          <>
            A new beginning.
            <br />
            <em>A warm welcome.</em>
          </>
        }
        text="New places can bring new questions. We’ve imagined a first visit that makes space for all of them."
        image="care"
      />
      <section className="section container">
        <SectionHeading
          eyebrow="Your first visit, thoughtfully imagined"
          title={
            <>
              From your first hello
              <br />
              <em>to feeling at home.</em>
            </>
          }
        />
        <ProcessSteps />
      </section>
      <section className="section sage-section">
        <div className="container checklist-grid">
          <div>
            <p className="eyebrow">A little preparation</p>
            <h2>
              Feel ready.
              <br />
              <em>Feel reassured.</em>
            </h2>
            <p>
              For a real first visit, a practice might ask you to bring a few
              details. Here’s an illustrative checklist — nothing is collected
              by this demo.
            </p>
            <Button href="/book-appointment/">
              Explore the sample request
            </Button>
          </div>
          <div className="checklist">
            {[
              "Your questions and care priorities",
              "Relevant history to discuss with your actual provider",
              "Insurance details, if you plan to use coverage",
              "Information about previous dental care, where available",
            ].map((t) => (
              <div key={t}>
                <Check size={20} aria-hidden="true" />
                <span>{t}</span>
              </div>
            ))}
            <p>
              Please do not enter any personal or health information on this
              demonstration website.
            </p>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Know what comes next"
          title={
            <>
              Clarity makes
              <br />
              <em>all the difference.</em>
            </>
          }
        />
        <div className="values-grid three">
          {[
            {
              icon: MessagesSquare,
              title: "Time for your questions",
              text: "An opportunity to talk through your goals, preferences and concerns with a real care provider.",
            },
            {
              icon: FileText,
              title: "Insurance, explained",
              text: "Actual coverage depends on your insurer and plan. This concept offers no insurance processing or billing.",
            },
            {
              icon: HeartHandshake,
              title: "Care at your pace",
              text: "Thoughtful explanations support informed choices. No treatment can be assessed or provided through this demo.",
            },
          ].map((v) => (
            <article className="value-card" key={v.title}>
              <v.icon size={30} strokeWidth={1.2} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <p className="eyebrow">Before you begin</p>
          <h2>
            A little
            <br />
            <em>peace of mind.</em>
          </h2>
          <p>Explore common first-visit questions.</p>
        </div>
        <FAQAccordion items={faqs.slice(0, 4)} />
      </section>
      <ContactCTA />
    </>
  );
}
