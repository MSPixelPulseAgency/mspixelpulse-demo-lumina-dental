import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { imageDescriptions, type Service } from "@/data/site";
import { Reveal } from "./motion";
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="LUMINA Dental Studio home" className="logo">
      <Image
        src={`/brand/logo-${light ? "light" : "dark"}.svg`}
        width={230}
        height={54}
        alt="LUMINA Dental Studio"
        priority
      />
    </Link>
  );
}
export function Button({
  href,
  children,
  secondary = false,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {children}
    </div>
  );
}
export function Photo({
  image,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 767px) 100vw, 50vw",
}: {
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet={`/images/${image}-small.webp`}
      />
      <Image
        src={`/images/${image}.webp`}
        alt={alt}
        width={1600}
        height={1067}
        sizes={sizes}
        priority={priority}
        className={`photo ${className}`}
      />
    </picture>
  );
}
export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <Link href={`/services/${service.slug}/`} className="service-card">
        <div className="service-card-image">
          <Photo
            image={service.image}
            alt={imageDescriptions[service.image]}
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
          <span className="service-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="card-arrow">
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </div>
        <div className="service-card-copy">
          <p className="small-label">{service.category}</p>
          <h3>{service.name}</h3>
          <p>{service.short}</p>
          <span className="service-learn">
            Explore this service <ArrowRight size={15} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
export function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div className="cta-mark" aria-hidden="true">
          <Sparkles size={38} strokeWidth={1} />
        </div>
        <Eyebrow>A brighter beginning</Eyebrow>
        <h2>
          Let’s make your next smile
          <br />
          <em>your favourite one.</em>
        </h2>
        <p>
          Your questions are welcome. Explore a more thoughtful
          <br className="desktop-break" /> approach to dental care with our
          demonstration experience.
        </p>
        <Button href="/book-appointment/" light>
          Request an appointment
        </Button>
        <span className="cta-note">
          A sample request. No appointment will be booked.
        </span>
      </div>
    </section>
  );
}
export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-split" : ""}`}>
      <div className="container">
        <div>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{eyebrow}</span>
          </div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {image && (
          <div className="page-hero-image">
            <Photo image={image} alt={imageDescriptions[image]} priority />
            <span className="photo-caption">
              STOCK IMAGERY · LUMINA CONCEPT
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
