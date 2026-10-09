import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = {
  title: "Terms & Demo Disclaimer",
  description:
    "LUMINA is a fictional dental clinic website demonstration by MSPixelPulse. No real clinic, appointments, clinical advice or treatment claims.",
};
export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Terms & demo disclaimer"
        title={
          <>
            Beautifully imagined.
            <br />
            <em>Clearly a demo.</em>
          </>
        }
        text="Please read these notes before exploring the LUMINA concept. Updated 9 October 2026."
      />
      <article className="container legal-content">
        <h2>Fictional identity</h2>
        <p>
          LUMINA Dental Studio is an original fictional brand created for an
          MSPixelPulse website demonstration. There is no operating LUMINA
          clinic represented here. Brampton is a location context, not the
          location of a real practice.
        </p>
        <h2>No clinical service or medical advice</h2>
        <p>
          Service descriptions show a possible website content structure. They
          are not medical advice, a diagnosis, a treatment recommendation or a
          substitute for assessment by a qualified provider. No clinical
          suitability, outcome, pricing, availability or insurance coverage is
          promised.
        </p>
        <h2>No real bookings or emergency care</h2>
        <p>
          The appointment flow is simulated. No request is sent and no booking
          is made. Do not use this website to seek urgent care. Contact a real
          provider or appropriate local emergency services for actual help.
        </p>
        <h2>Profiles and photographs</h2>
        <p>
          Team names and roles are fictional examples. Their illustrations are
          original demo artwork. No actual dental qualifications, licensing,
          registrations, awards or patient reviews are claimed. All photographs
          are licensed stock imagery used for visual storytelling; they do not
          represent LUMINA patients, employees, premises or treatment outcomes.
          Depicted people do not endorse this concept.
        </p>
        <h2>Brands and intellectual property</h2>
        <p>
          LUMINA’s SVG branding is original for this project. Third-party
          images, fonts and icons remain subject to their respective licences.
          Clear aligners are described generically; no affiliation with
          Invisalign or another treatment brand is claimed.
        </p>
        <h2>Use of the demonstration</h2>
        <p>
          Explore using fictional sample details. Do not submit sensitive
          information. See the <Link href="/privacy/">privacy policy</Link> for
          details about how the demonstration form works.
        </p>
        <h2>Project information</h2>
        <p>
          This concept demonstrates website design and development by{" "}
          <a href="https://mspixelpulse.com" target="_blank" rel="noreferrer">
            MSPixelPulse
          </a>
          . Source code is maintained in the{" "}
          <a
            href="https://github.com/MSPixelPulseAgency/mspixelpulse-demo-lumina-dental"
            target="_blank"
            rel="noreferrer"
          >
            LUMINA project repository
          </a>
          .
        </p>
      </article>
    </>
  );
}
