"use client";

import { startTransition, useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { sendContact, type ContactState } from "@/app/contact/actions";

export const subjects = [
  "Request a Quote",
  "Free Consultation",
  "Inverter & Battery Backup",
  "Complete Off-Grid System",
  "Commercial / Industrial Project",
  "Maintenance & Repairs",
  "Other",
];

const subjectFromParam: Record<string, string> = {
  quote: "Request a Quote",
  consultation: "Free Consultation",
};

const inputClass =
  "w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition focus:border-brand/40 focus:ring-4 focus:ring-brand/10 aria-[invalid=true]:border-red-400";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center gap-4 rounded-3xl bg-surface p-8 text-center">
        <CheckCircle2 className="size-12 text-emerald-600" />
        <h3 className="heading text-2xl text-ink">Message received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">{state.message}</p>
      </div>
    );
  }

  const errorProps = (name: keyof typeof errors) =>
    errors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  return (
    <form
      action={formAction}
      // Dispatch manually so React doesn't reset the fields when validation fails.
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(() => formAction(formData));
      }}
      noValidate
      className="flex flex-col gap-5 rounded-3xl bg-surface p-5 sm:p-7"
    >
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-sm font-medium text-ink">I&apos;m enquiring as</legend>
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-white p-1">
          {["Individual", "Organization"].map((type, i) => (
            <label key={type} className="cursor-pointer">
              <input type="radio" name="customerType" value={type} defaultChecked={i === 0} className="peer sr-only" />
              <span className="block rounded-lg px-3 py-2 text-center text-sm text-muted transition peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Full Name" htmlFor="name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" placeholder="Enter your full name" required className={inputClass} {...errorProps("name")} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email Address" htmlFor="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" required className={inputClass} {...errorProps("email")} />
        </Field>
        <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" required className={inputClass} {...errorProps("phone")} />
        </Field>
      </div>

      <Field label="Subject" htmlFor="subject" error={errors.subject}>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            defaultValue={subjectFromParam[defaultSubject] ?? ""}
            required
            className={`${inputClass} appearance-none pr-10 invalid:text-muted/70`}
            {...errorProps("subject")}
          >
            <option value="" disabled>
              Choose your subject
            </option>
            {subjects.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" />
        </div>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you'd like to power (e.g. 3-bedroom flat, 2 ACs, borehole pump) and your location"
          required
          className={`${inputClass} resize-y`}
          {...errorProps("message")}
        />
      </Field>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black disabled:opacity-70"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

// Reads ?subject= so "Get a Quote" / "Consult Us" buttons preselect the right option.
export function ContactFormFromParams() {
  const params = useSearchParams();
  return <ContactForm defaultSubject={params.get("subject") ?? ""} />;
}
