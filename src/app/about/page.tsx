import type { Metadata } from "next";
import { HeartHandshake, Leaf, MessagesSquare } from "lucide-react";
import {
  Button,
  ContactCTA,
  Eyebrow,
  PageHero,
  Photo,
  SectionHeading,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "Our Studio",
  description:
    "Meet the philosophy behind LUMINA, a fictional Brampton dental studio concept built around thoughtful care and welcoming design.",
};
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our studio"
        title={
          <>
            Thoughtful dentistry.
            <br />
            <em>Human by design.</em>
          </>
        }
        text="A studio concept built on a simple idea: care should feel as good as it looks."
        image="treatment-room"
      />
      <section className="section container story-grid">
        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2>
            A little more listening.
            <br />
            <em>A little more you.</em>
          </h2>
        </div>
        <div>
          <p className="lead">
            LUMINA began as a design question. What if a dental website felt
            less clinical — and more like a warm welcome?
          </p>
          <p>
            We imagined a Canadian studio with family and cosmetic care at its
            heart. A place for clear conversations, considered details and
            individual choices. Every page reflects that idea, from discovering
            a service to trying a sample appointment request.
          </p>
          <p>
            This fictional Brampton practice is an original website concept by
            MSPixelPulse. It demonstrates an experience; it does not represent a
            real care team or clinic.
          </p>
        </div>
      </section>
      <section className="section sage-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our philosophy"
            title={
              <>
                Care with intention.
                <br />
                <em>From the very first hello.</em>
              </>
            }
          />
          <div className="values-grid three">
            {[
              {
                icon: HeartHandshake,
                title: "Make it personal",
                text: "Begin with the person. Listen before explaining. Make space for different needs and priorities.",
              },
              {
                icon: MessagesSquare,
                title: "Make it clear",
                text: "A thoughtful conversation helps people understand their choices, without pressure or promises.",
              },
              {
                icon: Leaf,
                title: "Make it comfortable",
                text: "Consider every detail, from an easy-to-use website to an environment that feels calm and welcoming.",
              },
            ].map((v) => (
              <article className="value-card" key={v.title}>
                <v.icon size={32} strokeWidth={1.2} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container intro-grid">
        <div className="intro-photo">
          <Photo
            image="care-room"
            alt="Stock photograph of a clean and comfortable dental treatment room"
          />
        </div>
        <div>
          <Eyebrow>A space for people</Eyebrow>
          <h2>
            A calmer kind
            <br />
            <em>of care.</em>
          </h2>
          <p>
            Natural tones. Room to breathe. Details that feel considered. The
            LUMINA identity pairs forest green with warm ivory to create a
            welcoming, contemporary point of view.
          </p>
          <p>
            The photography is a visual moodboard, not a representation of an
            actual LUMINA location.
          </p>
          <Button href="/our-team/" secondary>
            Meet the example team
          </Button>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
