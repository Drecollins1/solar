import Link from "next/link";
import { cacheLife } from "next/cache";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/data";

// Reading the clock isn't allowed in a prerendered component, so cache it.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
          <div className="flex gap-2">
            {Object.entries(site.socials).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-ink capitalize hover:border-ink/30"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Company</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Services</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <Link href="/#services" className="hover:text-ink">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Get in Touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {site.fullName}. All rights reserved.
          </p>
          <p>{site.hours}</p>
        </Container>
      </div>
    </footer>
  );
}
