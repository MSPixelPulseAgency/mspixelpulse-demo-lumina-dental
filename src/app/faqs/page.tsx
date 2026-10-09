import type { Metadata } from "next";
import { Button, ContactCTA, PageHero } from "@/components/ui";
import { FAQAccordion } from "@/components/faq";
export const metadata: Metadata = {
  title: "Common Questions",
  description:
    "Answers about the LUMINA dental website demo, sample appointments, fictional care concepts, insurance examples and licensed stock imagery.",
};
export default function FAQs() {
  return (
    <>
      <PageHero
        eyebrow="Common questions"
        title={
          <>
            A little clarity.
            <br />
            <em>A lot more confidence.</em>
          </>
        }
        text="From first visits to how this demonstration works, find answers to the questions on your mind."
      />
      <section className="section container faq-page">
        <FAQAccordion />
        <div className="faq-contact">
          <p className="eyebrow">Still curious?</p>
          <h2>
            Good care starts
            <br />
            <em>with a conversation.</em>
          </h2>
          <p>Explore the contact concept or try a safe sample request.</p>
          <Button href="/contact/" secondary>
            Explore contact details
          </Button>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
