import type { ReactNode } from "react";
import { Badge, Container } from "@/components/ui";

export function PageHero({ badge, title, description }: { badge?: string; title: ReactNode; description: ReactNode }) {
  return (
    <section className="pt-10 pb-10 sm:pt-16 sm:pb-14">
      <Container className="flex flex-col items-start text-left sm:items-center sm:text-center">
        {badge && <Badge>{badge}</Badge>}
        <h1 className="heading mt-5 max-w-3xl text-4xl text-ink sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      </Container>
    </section>
  );
}
