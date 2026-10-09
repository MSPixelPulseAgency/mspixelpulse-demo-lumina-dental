import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the LUMINA demonstration handles privacy: no form transmission, no saved appointment data, no analytics or tracking integrations.",
};
export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title={
          <>
            Privacy, considered.
            <br />
            <em>Clarity, always.</em>
          </>
        }
        text="How this fictional website demonstration handles your information. Updated 9 October 2026."
      />
      <article className="container legal-content">
        <h2>A demonstration, not a clinic</h2>
        <p>
          LUMINA Dental Studio is a fictional portfolio concept created by
          MSPixelPulse. It provides no medical care and does not collect patient
          records.
        </p>
        <h2>The appointment form</h2>
        <p>
          The form is a client-side demonstration. Validation happens in your
          browser. The sample request is not sent to a server, email inbox,
          booking provider or database. No appointment is created. Form values
          are held temporarily in page memory, cleared on simulated submission,
          and lost when the page reloads. There is no local-storage or cookie
          persistence.
        </p>
        <p>
          Use fictional sample information only. Do not enter personal contact
          details, patient records, medical history or other sensitive
          information.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This application does not install analytics, advertising trackers or
          application cookies. It does not embed maps, external booking tools or
          social widgets. Fonts and images are served as local project assets.
        </p>
        <h2>Technical access information</h2>
        <p>
          A hosting provider, if this website is published, may process ordinary
          technical request information such as IP addresses and browser
          details. This is separate from the demo form. Hosting and its privacy
          terms must be confirmed before a production release.
        </p>
        <h2>External links</h2>
        <p>
          Links to MSPixelPulse and GitHub lead to separate sites with their own
          policies. Following a link may disclose ordinary web-request
          information to that site.
        </p>
        <h2>Questions</h2>
        <p>
          The displayed email and telephone number are agency placeholders, not
          clinic contact channels. Visit{" "}
          <a href="https://mspixelpulse.com" target="_blank" rel="noreferrer">
            MSPixelPulse
          </a>{" "}
          for information about the design concept. See the{" "}
          <Link href="/terms/">terms and demo disclaimer</Link> for the scope of
          this website.
        </p>
      </article>
    </>
  );
}
