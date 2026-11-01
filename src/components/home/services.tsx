import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="Our Services"
          title={
            <>
              Solar & Inverter Solutions <br className="hidden sm:block" />
              For Every Need
            </>
          }
          description="Professional, scalable and future-ready energy systems — from a single home backup to a fully off-grid factory."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid grid-cols-[1fr_auto] gap-4 rounded-2xl bg-surface p-4 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(31,60,136,0.25)] sm:p-5"
            >
              <div className="flex flex-col py-1">
                <p className="text-[0.7rem] font-medium text-brand">{service.tag}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                <div className="mt-auto pt-5">
                  <Link
                    href="/contact?subject=quote"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-ink shadow-[0_1px_2px_rgba(16,24,40,0.06)] hover:text-brand"
                  >
                    Get a Quote <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
              <div className="relative h-40 w-32 overflow-hidden rounded-xl sm:h-44 sm:w-44">
                <Image src={service.image} alt="" fill sizes="176px" className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
