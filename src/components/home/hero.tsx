import Image from "next/image";
import { ArrowRight, BatteryCharging, Zap } from "lucide-react";
import { Badge, ButtonLink, Container } from "@/components/ui";
import { Stats } from "@/components/sections/stats";
import { images } from "@/lib/data";

export function Hero() {
  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge>Solar · Inverters · Off-Grid Systems</Badge>
          <h1 className="heading mt-5 text-[2.6rem] text-ink sm:text-6xl md:text-7xl">
            Power Your Life <br className="hidden sm:block" />
            Beyond The Grid
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Clean, uninterrupted electricity for homes and organizations. We design and install solar, inverter
            and battery systems that keep you powered 24/7 — no generator, no blackouts.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/contact?subject=quote" variant="dark">
              Get a Free Quote <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/contact?subject=consultation" variant="outline">
              Consult Us
            </ButtonLink>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[21/9]">
            <Image
              src={images.hero}
              alt="Ground-mounted solar panels under a bright sky"
              fill
              priority
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-lg backdrop-blur sm:bottom-6 sm:left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white">
              <Zap className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">No more blackouts</p>
              <p className="text-xs text-muted">Power that stays on, day and night</p>
            </div>
          </div>

          <div className="absolute top-6 right-6 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-lg backdrop-blur md:flex">
            <span className="flex size-10 items-center justify-center rounded-xl bg-surface text-brand">
              <BatteryCharging className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Lithium storage</p>
              <p className="text-xs text-muted">Silent, long-life backup</p>
            </div>
          </div>
        </div>

        <Stats />
      </Container>
    </section>
  );
}
