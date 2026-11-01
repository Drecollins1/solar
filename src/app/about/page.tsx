import type { Metadata } from "next";
import Image from "next/image";
import { Crosshair, HeartHandshake, Mountain } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, SectionHeader, Badge } from "@/components/ui";
import { Stats } from "@/components/sections/stats";
import { CtaBanner } from "@/components/sections/cta-banner";
import { images, team, timeline } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.fullName}, the team helping homes and organizations achieve energy independence.`,
};

const pillars = [
  {
    icon: Mountain,
    title: "Vision",
    text: "A future where every home and business has reliable, affordable power — independent of the grid.",
  },
  {
    icon: Crosshair,
    title: "Mission",
    text: "To design and install solar and inverter systems with honest advice, expert craftsmanship and lasting support.",
  },
  {
    icon: HeartHandshake,
    title: "Promise",
    text: "No oversized systems, no hidden costs. We recommend exactly what your load needs and stand behind our work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Empowering Homes And Businesses With Energy Independence"
        description="We deliver reliable, efficient and future-ready solar and inverter solutions that help families and organizations take control of their power."
      />

      <Container>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[21/9]">
          <Image
            src={images.buildingArray}
            alt="Solar array installed beside a commercial building at sunset"
            fill
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover"
          />
        </div>
        <Stats />
      </Container>

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[28rem]">
            <Image
              src={images.solarFarm}
              alt="Aerial view of a large solar installation"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Badge>Our Story</Badge>
            <h2 className="heading mt-4 text-3xl text-ink sm:text-4xl">Our Journey Toward A Power-Secure Future</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {site.name} started with a simple frustration: unreliable power was holding people back. What began as
              home inverter installations has grown into a full-service energy company — designing solar, storage and
              off-grid systems for families, schools, clinics, farms and factories.
            </p>
            <ul className="mt-8 divide-y divide-line">
              {pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4 py-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-brand">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              align="left"
              badge="Milestones"
              title="Our Evolution: Building A Brighter Future"
              description="Each milestone reflects how we've grown to deliver more reliable power and greater impact for the communities we serve."
            />
          </div>
          <ol className="relative flex flex-col gap-5 before:absolute before:top-2 before:bottom-2 before:left-[9px] before:w-px before:bg-line">
            {timeline.map((item) => (
              <li key={item.year} className="relative grid grid-cols-[20px_1fr] gap-5">
                <span className="relative z-10 mt-5 size-5 rounded-full border-[5px] border-brand bg-white" />
                <div className="rounded-2xl bg-surface p-5 sm:p-6">
                  <p className="heading text-2xl text-muted/70">{item.year}</p>
                  <h3 className="mt-3 text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            badge="Our Crew"
            title={`The ${site.name} Crew`}
            description="The engineers and technicians who keep your lights on."
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.name} className="text-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 270px, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{member.name}</p>
                <p className="text-xs text-muted">{member.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
