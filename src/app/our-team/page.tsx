import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA, PageHero, SectionHeading } from "@/components/ui";
import { team } from "@/data/site";
export const metadata: Metadata = {
  title: "Our Example Team",
  description:
    "Meet clearly fictional example profiles created for the LUMINA dental studio demo. Original illustrations, no claimed clinical credentials.",
};
export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title={
          <>
            People make
            <br />
            <em>the difference.</em>
          </>
        }
        text="An imagined team. A shared philosophy. These fictional profiles show how a care team could be introduced with warmth and personality."
      />
      <section className="container team-section">
        <div className="demo-notice">
          <strong>Illustrated example profiles.</strong> These are fictional
          names and roles, not real clinicians. No qualifications, licences or
          professional registrations are claimed.
        </div>
        <div className="team-grid">
          {team.map((t) => (
            <article className="team-card" key={t.name}>
              <Image
                src={`/brand/profile-${t.image}.svg`}
                alt={`Original illustration for ${t.name}, a fictional demonstration profile`}
                width={480}
                height={580}
              />
              <div>
                <p className="small-label">FICTIONAL PROFILE</p>
                <h2>{t.name}</h2>
                <p className="team-role">{t.role}</p>
                <p>{t.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section sage-section">
        <div className="container story-grid">
          <SectionHeading
            eyebrow="A shared point of view"
            title={
              <>
                Warmth. Clarity.
                <br />
                <em>A personal connection.</em>
              </>
            }
          />
          <div>
            <p className="lead">
              In the LUMINA concept, care is a conversation between people.
            </p>
            <p>
              These profiles demonstrate a human approach to team storytelling
              without inventing patient testimonials or professional
              credentials. A real clinic would verify every biography and
              registration before publishing it.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
