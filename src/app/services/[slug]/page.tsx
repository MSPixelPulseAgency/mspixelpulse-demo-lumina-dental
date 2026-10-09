import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/site";
import {
  Button,
  ContactCTA,
  Eyebrow,
  PageHero,
  TextLink,
} from "@/components/ui";
import { FAQAccordion } from "@/components/faq";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s?.name || "Service",
    description: s
      ? `${s.short} Explore the ${s.name.toLowerCase()} concept at LUMINA, a fictional dental studio website demonstration.`
      : undefined,
  };
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const related = services
    .filter((r) => r.category === s.category && r.slug !== s.slug)
    .slice(0, 3);
  return (
    <>
      <PageHero
        eyebrow={s.name}
        title={
          <>
            {s.name}.<br />
            <em>Considered for you.</em>
          </>
        }
        text={s.short}
        image={s.image}
      />
      <section className="section container service-detail-layout">
        <div>
          <Eyebrow>{s.category}</Eyebrow>
          <h2>
            A thoughtful
            <br />
            <em>starting point.</em>
          </h2>
          <p className="lead">{s.overview}</p>
          <div className="detail-block">
            <h2>Who may benefit</h2>
            <p>{s.benefit}</p>
          </div>
          <div className="detail-block">
            <h2>What to expect</h2>
            <ol className="expect-list">
              {s.expect.map((step, i) => (
                <li key={step}>
                  <span>0{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="detail-block">
            <h2>A question worth asking</h2>
            <FAQAccordion items={[{ q: s.question, a: s.answer }]} />
          </div>
          {related.length > 0 && (
            <div className="detail-block">
              <h2>Explore related care</h2>
              <div className="related-services">
                {related.map((r) => (
                  <Link key={r.slug} href={`/services/${r.slug}/`}>
                    {r.name}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="detail-aside">
          <p className="small-label">Your next step</p>
          <h3>
            Space for
            <br />
            <em>your questions.</em>
          </h3>
          <p>
            Try a sample consultation request and discover the experience we’ve
            imagined.
          </p>
          <ul>
            <li>
              <Check size={17} />
              Clear, simple steps
            </li>
            <li>
              <Check size={17} />
              No real booking
            </li>
            <li>
              <Check size={17} />
              No data sent or stored
            </li>
          </ul>
          <Button href="/book-appointment/">Try the appointment demo</Button>
          <p className="fine-print">
            Fictional practice. This page is not a diagnosis, care
            recommendation or offer of treatment.
          </p>
          <TextLink href="/services/">Back to all care</TextLink>
        </aside>
      </section>
      <ContactCTA />
    </>
  );
}
