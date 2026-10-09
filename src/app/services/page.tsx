import type { Metadata } from "next";
import { ContactCTA, PageHero } from "@/components/ui";
import { ServiceDirectory } from "@/components/service-directory";
export const metadata: Metadata = {
  title: "Our Care & Services",
  description:
    "Discover 13 dental service concepts, including general, cosmetic, restorative, orthodontic and family care. Fictional Brampton studio demonstration.",
};
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our care"
        title={
          <>
            Many possibilities.
            <br />
            <em>One personal approach.</em>
          </>
        }
        text="Every smile is different. Explore our dental service concepts and find a starting point for your questions."
      />
      <section className="container directory-section">
        <ServiceDirectory />
        <p className="section-note">
          Service information is illustrative, not medical advice. Individual
          suitability requires assessment by a real qualified dental
          professional.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
