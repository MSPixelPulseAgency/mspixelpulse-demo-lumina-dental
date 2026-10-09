import type { Metadata } from "next";
import { ContactCTA, PageHero } from "@/components/ui";
import { GalleryGrid } from "@/components/gallery";
export const metadata: Metadata = {
  title: "Studio & Smile Gallery",
  description:
    "Explore a licensed stock-photography moodboard of dental care, comfort and smiles. Not LUMINA patients, premises or clinical outcomes.",
};
export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A feeling, captured.
            <br />
            <em>A smile, imagined.</em>
          </>
        }
        text="A visual moodboard of the LUMINA experience. Comfortable spaces, human moments and care in the details."
      />
      <section className="container gallery-page">
        <div className="demo-notice">
          All images are licensed stock photographs. They do not show actual
          LUMINA patients, premises, staff or treatment results. Select an image
          for a closer look.
        </div>
        <GalleryGrid />
      </section>
      <ContactCTA />
    </>
  );
}
