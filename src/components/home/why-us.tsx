import Image from "next/image";
import { BadgeCheck, ShieldCheck, Wallet, Wrench } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";
import { features, images } from "@/lib/data";

const icons = { badge: BadgeCheck, shield: ShieldCheck, wrench: Wrench, wallet: Wallet };

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const Icon = icons[feature.icon];
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <span className="flex size-9 items-center justify-center rounded-full bg-surface text-brand">
        <Icon className="size-4" />
      </span>
      <h3 className="mt-6 text-sm font-semibold text-ink">{feature.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="Why Choose Us"
          title={
            <>
              Going Off-Grid Doesn’t Have <br className="hidden sm:block" />
              To Be Complicated
            </>
          }
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.15fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-2xl">
            <Image
              src={images.hillside}
              alt="Solar array installed on a green hillside"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <FeatureCard feature={features[2]} />
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </Container>
    </section>
  );
}
