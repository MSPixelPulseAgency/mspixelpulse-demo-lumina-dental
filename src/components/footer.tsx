import Link from "next/link";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "./ui";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              Thoughtful dentistry.
              <br />
              Confident smiles.
            </p>
            <span className="footer-location">
              <MapPin size={15} aria-hidden="true" />
              Brampton, Ontario · Clinic concept
            </span>
          </div>
          <div>
            <h2>Discover</h2>
            {[
              ["Our studio", "/about/"],
              ["Our care", "/services/"],
              ["Our team", "/our-team/"],
              ["Gallery", "/gallery/"],
            ].map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Your visit</h2>
            {[
              ["New patients", "/new-patients/"],
              ["Common questions", "/faqs/"],
              ["Contact", "/contact/"],
              ["Request an appointment", "/book-appointment/"],
            ].map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h2>Let’s connect</h2>
            <p className="contact-placeholder">
              <Mail size={15} aria-hidden="true" />
              {site.email}
            </p>
            <p>{site.phone}</p>
            <span className="footer-note">
              Agency placeholders · No clinic enquiries
            </span>
            <Link href="/book-appointment/" className="footer-book">
              Try the appointment demo
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-disclaimer">
          <span className="demo-tag">PORTFOLIO DEMO</span>
          <p>
            LUMINA Dental Studio is a fictional practice created by
            MSPixelPulse. No dental services, medical advice or real
            appointments are offered. Images are licensed stock photography, not
            patient results. Team profiles are fictional illustrations.
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 LUMINA concept. Crafted by{" "}
            <a href="https://mspixelpulse.com" target="_blank" rel="noreferrer">
              MSPixelPulse
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </p>
          <div>
            <Link href="/privacy/">Privacy policy</Link>
            <Link href="/terms/">Terms & demo disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
