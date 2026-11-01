import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Badge, Container } from "@/components/ui";
import { ContactForm, ContactFormFromParams } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/whatsapp";
import { Faq } from "@/components/sections/faq";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get a free quote or consultation from ${site.fullName}.`,
};

const channels = [
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us instantly", href: whatsappLink(), external: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.address },
  { icon: Clock, label: "Working Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s Connect And Power Your Future"
        description="Request a free quote or consultation. Our team will help you choose the right system to go off-grid."
      />

      <section>
        <Container className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          <div className="order-2 flex flex-col rounded-3xl bg-brand p-6 text-white sm:p-8 lg:order-1">
            <Badge tone="dark">Contact</Badge>
            <h2 className="heading mt-5 text-3xl sm:text-4xl">Contact Information</h2>
            <p className="mt-3 text-sm text-white/75">Reach out through any of the channels below. We’re ready to assist.</p>
            <ul className="mt-8 flex flex-col gap-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <Icon className="mt-0.5 size-5 shrink-0" />
                    <span>
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="mt-0.5 block text-sm text-white/75">{value}</span>
                    </span>
                  </>
                );
                const cls = "flex gap-4 rounded-2xl bg-white/10 px-5 py-4";
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className={`${cls} transition-colors hover:bg-white/15`}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromParams />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="pt-5">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title={`Map showing ${site.fullName} location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
              className="h-80 w-full sm:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      <Faq />
    </>
  );
}
