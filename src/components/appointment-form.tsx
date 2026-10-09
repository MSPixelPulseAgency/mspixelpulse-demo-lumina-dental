"use client";
import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck, RotateCcw } from "lucide-react";
import { services } from "@/data/site";
type Values = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};
const empty: Values = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};
const subscribeToHydration = () => () => {};
function currentLocalDate() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}
export function AppointmentForm() {
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [success, setSuccess] = useState(false);
  const result = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  function update(key: keyof Values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }
  function sample() {
    setValues({
      name: "Demo Visitor",
      email: "demo@example.com",
      phone: "000-000-0000",
      service: "Smile Consultations",
      date: currentLocalDate(),
      time: "Morning · 9 am–12 pm",
      message: "Sample consultation request for the website demonstration.",
    });
    setConsent(true);
    setErrors({});
    setConsentError(false);
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Values> = {};
    if (values.name.trim().length < 2)
      next.name = "Enter a sample name with at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid sample email, such as demo@example.com.";
    if (values.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a sample phone number with at least 10 digits.";
    if (!services.some((s) => s.name === values.service))
      next.service = "Choose a service of interest.";
    if (!values.date || values.date < currentLocalDate())
      next.date = "Choose today or a future sample date.";
    if (
      !["Morning · 9 am–12 pm", "Afternoon · 12–4 pm", "Flexible"].includes(
        values.time,
      )
    )
      next.time = "Choose a preferred sample time.";
    setErrors(next);
    setConsentError(!consent);
    if (Object.keys(next).length || !consent) {
      const key = Object.keys(next)[0];
      requestAnimationFrame(() =>
        form.current
          ?.querySelector<HTMLElement>(key ? `#${key}` : "#demo-consent")
          ?.focus(),
      );
      return;
    }
    setSuccess(true);
    setValues(empty);
    setConsent(false);
    requestAnimationFrame(() => result.current?.focus());
  }
  if (success)
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={result}>
        <div className="success-icon">
          <Check size={35} />
        </div>
        <p className="eyebrow">Demonstration complete</p>
        <h2>
          A brighter beginning.
          <br />
          <em>Beautifully imagined.</em>
        </h2>
        <p>
          Your sample request passed validation. No appointment was booked, no
          email was sent, and no information was stored or transmitted.
        </p>
        <button
          className="button"
          onClick={() => {
            setSuccess(false);
            requestAnimationFrame(() =>
              form.current
                ?.querySelector<HTMLButtonElement>(".sample-button")
                ?.focus(),
            );
          }}
        >
          Try another sample
          <RotateCcw size={16} />
        </button>
      </div>
    );
  const field = (key: keyof Values, label: string, type = "text") => (
    <div className="form-field">
      <label htmlFor={key}>
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={key}
        name={key}
        type={type}
        value={values[key]}
        onChange={(e) => update(key, e.target.value)}
        aria-required="true"
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${key}-error` : undefined}
        onFocus={(event) => {
          if (type === "date") event.currentTarget.min = currentLocalDate();
        }}
        maxLength={type === "text" ? 100 : undefined}
        autoComplete="off"
        placeholder={
          key === "name"
            ? "Demo Visitor"
            : key === "email"
              ? "demo@example.com"
              : key === "phone"
                ? "000-000-0000"
                : undefined
        }
      />
      {errors[key] && (
        <span id={`${key}-error`} className="field-error">
          {errors[key]}
        </span>
      )}
    </div>
  );
  return (
    <form
      ref={form}
      className="appointment-form"
      onSubmit={submit}
      noValidate
      autoComplete="off"
    >
      <div className="form-top">
        <div>
          <p className="small-label">Your demonstration visit</p>
          <h2>Let’s start a conversation.</h2>
        </div>
        <span className="demo-tag">DEMO ONLY</span>
      </div>
      <div className="form-demo-note">
        <ShieldCheck size={23} aria-hidden="true" />
        <p>
          Use fictional details only. This form runs entirely in your browser.
          Please do not enter health information or real contact details.
        </p>
      </div>
      {!hydrated && (
        <p className="form-demo-note">
          This sample interaction requires JavaScript. The form is disabled so
          no information can be submitted.
        </p>
      )}
      <fieldset disabled={!hydrated}>
        <legend className="sr-only">Sample appointment details</legend>
        <button type="button" className="sample-button" onClick={sample}>
          Fill with safe sample details
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <p className="required-note">Fields marked * are required.</p>
        <div className="form-grid">
          {field("name", "Full name")}
          {field("email", "Email address", "email")}
          {field("phone", "Phone number", "tel")}
          <div className="form-field">
            <label htmlFor="service">Service of interest *</label>
            <select
              id="service"
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug}>{s.name}</option>
              ))}
            </select>
            {errors.service && (
              <span id="service-error" className="field-error">
                {errors.service}
              </span>
            )}
          </div>
          {field("date", "Preferred date", "date")}
          <div className="form-field">
            <label htmlFor="time">Preferred time *</label>
            <select
              id="time"
              value={values.time}
              onChange={(e) => update("time", e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? "time-error" : undefined}
            >
              <option value="">Select a time</option>
              {["Morning · 9 am–12 pm", "Afternoon · 12–4 pm", "Flexible"].map(
                (t) => (
                  <option key={t}>{t}</option>
                ),
              )}
            </select>
            {errors.time && (
              <span id="time-error" className="field-error">
                {errors.time}
              </span>
            )}
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">
            Anything else? <span className="optional">(optional)</span>
          </label>
          <textarea
            id="message"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            maxLength={500}
            rows={3}
            placeholder="A sample question — no personal or health information."
          />
        </div>
        <div className="consent">
          <input
            id="demo-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              setConsentError(false);
            }}
            aria-invalid={consentError}
            aria-describedby={consentError ? "consent-error" : undefined}
          />
          <label htmlFor="demo-consent">
            I’m using fictional details and understand that this is a
            demonstration, not a real appointment request. *
          </label>
        </div>
        {consentError && (
          <span id="consent-error" className="field-error">
            Please acknowledge the demonstration before continuing.
          </span>
        )}
        <button className="button submit-button" type="submit">
          Simulate appointment request
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
        <p className="privacy-note">
          Nothing is sent or saved. Read our{" "}
          <Link href="/privacy/">privacy policy</Link>.
        </p>
      </fieldset>
    </form>
  );
}
