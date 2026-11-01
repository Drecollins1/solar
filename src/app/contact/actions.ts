"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "subject" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const field = (key: string) => String(formData.get(key) ?? "").trim();

  // Honeypot: real visitors never fill this hidden field.
  if (field("company_website")) return { status: "success", message: "Thanks! We'll be in touch shortly." };

  const data = {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    customerType: field("customerType") || "Individual",
    subject: field("subject"),
    message: field("message"),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!data.subject) errors.subject = "Please choose a subject.";
  if (data.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  if (Object.keys(errors).length) return { status: "error", errors };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] Email delivery not configured — submission:", data);
      return { status: "success", message: "Thanks! (Dev mode: submission logged to the server console.)" };
    }
    console.error("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL are not set; enquiry not delivered.");
    return {
      status: "error",
      message: `Sorry, our form is unavailable right now. Please call ${site.phone} or message us on WhatsApp.`,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? `${site.name} Website <onboarding@resend.dev>`,
      to: [to],
      reply_to: data.email,
      subject: `[Website] ${data.subject} — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Enquiring as: ${data.customerType}`,
        `Subject: ${data.subject}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return {
      status: "error",
      message: `Something went wrong sending your message. Please try again or call ${site.phone}.`,
    };
  }

  return { status: "success", message: "Thanks! Your message is in — our team will reach out within one business day." };
}
