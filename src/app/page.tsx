import {
  HeartHandshake,
  ScanLine,
  Armchair,
  MessagesSquare,
  Sparkles,
  MoveDown,
} from "lucide-react";
import {
  Button,
  ContactCTA,
  Eyebrow,
  Photo,
  SectionHeading,
  ServiceCard,
  TextLink,
} from "@/components/ui";
import { FAQAccordion } from "@/components/faq";
import { GalleryGrid } from "@/components/gallery";
import { ProcessSteps } from "@/components/journey";
import { Reveal } from "@/components/motion";
import { featured, faqs } from "@/data/site";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Thoughtful care. Beautiful possibilities.</Eyebrow>
            <h1>
              Your smile deserves
              <br />
              something <em>extraordinary.</em>
            </h1>
            <p className="hero-description">
              Discover a more thoughtful approach to family and cosmetic
              dentistry. A calm space. A personal touch. A smile that feels like
              you.
            </p>
            <div className="hero-actions">
              <Button href="/book-appointment/">Book a consultation</Button>
              <TextLink href="/services/">Explore our care</TextLink>
            </div>
            <div className="hero-reassurance">
              <span>
                <HeartHandshake
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Patient-first thinking
              </span>
              <span>
                <Sparkles size={17} strokeWidth={1.5} aria-hidden="true" />A
                considered experience
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-ring" aria-hidden="true" />
            <div className="hero-main-image">
              <Photo
                image="smile"
                alt="Stock photograph of a woman smiling in a dental chair while holding a mirror"
                priority
                sizes="(max-width: 767px) 100vw, 48vw"
              />
              <span className="hero-image-label">
                A BRIGHTER SMILE BEGINS HERE
              </span>
            </div>
            <div className="hero-inset">
              <Photo
                image="treatment-room"
                alt="Stock photograph of a bright modern dental treatment room"
                priority
                sizes="(max-width: 767px) 150px, 200px"
              />
              <span>A space to feel at ease.</span>
            </div>
            <div className="hero-note">
              <span className="note-icon">
                <Sparkles size={22} strokeWidth={1.2} aria-hidden="true" />
              </span>
              <span>
                Made for <em>your smile.</em>
                <small>Brampton, Ontario · Studio concept</small>
              </span>
            </div>
            <span className="hero-side-note">
              LUMINA / A DENTAL STUDIO CONCEPT
            </span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>FAMILY & COSMETIC DENTAL CARE · REIMAGINED</span>
          <a href="#our-studio">
            Discover LUMINA
            <MoveDown size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="care-ribbon">
        <div className="container">
          <span>Care that listens.</span>
          <span aria-hidden="true">✧</span>
          <span>Space to feel comfortable.</span>
          <span aria-hidden="true">✧</span>
          <span>Confidence to be yourself.</span>
        </div>
      </div>
      <section id="our-studio" className="section container intro-grid">
        <Reveal className="intro-visual">
          <div className="intro-photo">
            <Photo
              image="care"
              alt="Stock photograph of a dental professional attending to a person during a check-up"
            />
            <span className="photo-caption">
              THOUGHTFUL CARE, IN EVERY DETAIL · STOCK IMAGE
            </span>
          </div>
          <div className="intro-quote">
            <span className="quote-star" aria-hidden="true">
              ✧
            </span>
            <p>
              “Good care begins
              <br />
              with being heard.”
            </p>
            <small>THE LUMINA PHILOSOPHY</small>
          </div>
        </Reveal>
        <Reveal className="intro-copy">
          <Eyebrow>Welcome to a different kind of dentistry</Eyebrow>
          <h2>
            Modern dentistry.
            <br />
            <em>
              A more personal
              <br />
              experience.
            </em>
          </h2>
          <p>
            We believe the best dental experience starts with how you feel.
            Welcome. Understood. Comfortable asking one more question.
          </p>
          <p>
            LUMINA imagines a studio where considered design meets thoughtful
            care — and every conversation starts with you.
          </p>
          <TextLink href="/about/">Get to know our studio</TextLink>
        </Reveal>
      </section>
      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="A little care. A world of possibility."
            title={
              <>
                For every smile.
                <br />
                <em>For every chapter.</em>
              </>
            }
            text="From everyday care to the possibilities of a new smile, explore a thoughtful range of dental service concepts."
          >
            <Button href="/services/" secondary>
              View all services
            </Button>
          </SectionHeading>
          <div className="services-grid">
            {featured.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={
                  index === 0
                    ? { ...service, name: "General Dentistry" }
                    : index === 4
                      ? { ...service, name: "Veneers" }
                      : service
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section container why-section">
        <SectionHeading
          eyebrow="The LUMINA difference"
          title={
            <>
              It’s the little things
              <br />
              <em>that make you feel cared for.</em>
            </>
          }
        />
        <div className="values-grid">
          {[
            {
              icon: HeartHandshake,
              title: "People before procedures",
              text: "An approach built around listening, clear conversations and your individual priorities.",
            },
            {
              icon: ScanLine,
              title: "Considered technology",
              text: "A concept where modern tools support clear explanations and informed decisions.",
            },
            {
              icon: Armchair,
              title: "Comfort in every corner",
              text: "Soft textures, natural light and a welcoming environment, thoughtfully imagined.",
            },
            {
              icon: MessagesSquare,
              title: "A plan that feels personal",
              text: "Room to explore options, understand the next step and move at your own pace.",
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <article className="value-card">
                <v.icon size={30} strokeWidth={1.25} aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="experience-section">
        <div className="experience-photo">
          <Photo
            image="treatment-room"
            alt="Stock photograph of a bright dental treatment environment with a chair and equipment"
            sizes="100vw"
          />
        </div>
        <div className="container experience-content">
          <Eyebrow>Room to breathe. Reasons to smile.</Eyebrow>
          <h2>
            Feel comfortable.
            <br />
            <em>Leave confident.</em>
          </h2>
          <p>
            A dental visit can be more than an appointment.
            <br />
            Imagine a moment of care, made around you.
          </p>
          <Button href="/gallery/" light>
            Step inside the concept
          </Button>
          <span>STOCK PHOTOGRAPHY · NOT ACTUAL LUMINA PREMISES</span>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Your next chapter starts here"
          title={
            <>
              A simple beginning.
              <br />
              <em>A thoughtful journey.</em>
            </>
          }
          text="A glimpse of the experience we’ve imagined, from the first hello to understanding your options."
        />
        <ProcessSteps />
        <p className="section-note">
          Illustrative care journey. This demonstration does not offer real
          clinical services.
        </p>
      </section>
      <section className="section gallery-section">
        <div className="container">
          <SectionHeading
            eyebrow="The art of feeling good"
            title={
              <>
                Every smile
                <br />
                <em>has a story.</em>
              </>
            }
            text="A visual moodboard of care, comfort and confidence. Licensed stock photography — never presented as patient results."
          >
            <TextLink href="/gallery/">Explore the gallery</TextLink>
          </SectionHeading>
          <GalleryGrid preview />
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <Eyebrow>A little clarity</Eyebrow>
          <h2>
            Good questions.
            <br />
            <em>Thoughtful answers.</em>
          </h2>
          <p>Getting to know a dental studio should feel simple. Start here.</p>
          <TextLink href="/faqs/">All your questions</TextLink>
        </div>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </section>
      <ContactCTA />
    </>
  );
}
