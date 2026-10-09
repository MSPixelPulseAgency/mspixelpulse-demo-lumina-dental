import type { Metadata } from "next";
import { Check, Sparkles } from "lucide-react";
import { Eyebrow, PageHero, Photo } from "@/components/ui";
import { AppointmentForm } from "@/components/appointment-form";
export const metadata: Metadata = {
  title: "Try the Appointment Demo",
  description:
    "Try a safe, browser-only appointment demonstration using fictional sample details. No real booking, information storage or data transmission.",
};
export default function Appointment() {
  return (
    <>
      <PageHero
        eyebrow="Your appointment"
        title={
          <>
            A little time for you.
            <br />
            <em>A brighter beginning.</em>
          </>
        }
        text="Try our demonstration appointment experience. Use the sample-fill button to explore the journey safely."
      />
      <section className="container appointment-layout">
        <aside className="appointment-aside">
          <div className="appointment-photo">
            <Photo
              image="smile"
              alt="Stock photograph of a woman smiling in a dental chair"
            />
            <span className="photo-caption">
              STOCK PHOTOGRAPHY · NOT A PATIENT RESULT
            </span>
          </div>
          <Eyebrow>Your smile. Your pace.</Eyebrow>
          <h2>
            Good things begin
            <br />
            <em>with a conversation.</em>
          </h2>
          <p>
            This experience shows how simple an appointment request can feel. It
            is a demonstration, with no connection to a real clinic.
          </p>
          <ul className="appointment-benefits">
            {[
              "Use safe fictional sample details",
              "Explore the form and validation",
              "See a simulated confirmation",
            ].map((s) => (
              <li key={s}>
                <Check size={17} />
                {s}
              </li>
            ))}
          </ul>
          <div className="appointment-aside-note">
            <Sparkles size={23} strokeWidth={1.2} />
            <p>
              No pressure.
              <br />
              Just possibilities.
            </p>
          </div>
        </aside>
        <AppointmentForm />
      </section>
    </>
  );
}
