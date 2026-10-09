import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Button, PageHero, Photo } from "@/components/ui";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Contact & Location Concept",
  description:
    "Explore LUMINA’s fictional Brampton location and placeholder contact details. This demonstration does not operate a real clinic or accept enquiries.",
};
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Your next smile
            <br />
            <em>starts with a hello.</em>
          </>
        }
        text="A welcoming point of contact, thoughtfully designed. All clinic details below are demonstration placeholders."
      />
      <section className="section container contact-grid">
        <div>
          <div className="contact-detail">
            <MapPin size={23} strokeWidth={1.2} />
            <div>
              <h2>Our imagined neighbourhood</h2>
              <p>Brampton, Ontario, Canada</p>
              <span>Studio concept · No physical clinic address</span>
            </div>
          </div>
          <div className="contact-detail">
            <Mail size={23} strokeWidth={1.2} />
            <div>
              <h2>Email placeholder</h2>
              <p>{site.email}</p>
              <span>MSPixelPulse agency placeholder, not a clinic inbox</span>
            </div>
          </div>
          <div className="contact-detail">
            <Phone size={23} strokeWidth={1.2} />
            <div>
              <h2>Phone placeholder</h2>
              <p>{site.phone}</p>
              <span>Demonstration number · Not callable</span>
            </div>
          </div>
          <div className="contact-detail">
            <Clock size={23} strokeWidth={1.2} />
            <div>
              <h2>Visit planning</h2>
              <p>Morning, afternoon or flexible</p>
              <span>Sample preferences only · No real opening hours</span>
            </div>
          </div>
          <Button href="/book-appointment/">Try a sample appointment</Button>
        </div>
        <div className="contact-visual">
          <Photo
            image="care-room"
            alt="Stock photograph of a dental treatment room, used to illustrate the fictional studio"
          />
          <div className="location-card">
            <MapPin size={25} strokeWidth={1.2} />
            <p>
              Brampton,
              <br />
              <em>beautifully imagined.</em>
            </p>
            <span>CANADIAN DENTAL STUDIO CONCEPT</span>
          </div>
        </div>
      </section>
      <section className="container contact-bottom">
        <h2>A note about this demo</h2>
        <p>
          No enquiries are sent from this website. For actual dental care,
          please contact a real licensed provider. For information about this
          website concept, visit the MSPixelPulse agency website.
        </p>
        <a
          className="text-link"
          href="https://mspixelpulse.com"
          target="_blank"
          rel="noreferrer"
        >
          Visit MSPixelPulse
          <ArrowUpRight size={17} />
        </a>
      </section>
    </>
  );
}
