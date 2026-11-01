import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Our Work",
  description: "A look at solar, inverter and off-grid systems we've installed for homes and organizations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Gallery"
        title="Projects That Keep The Lights On"
        description="From starter inverter setups to fully off-grid commercial sites — here's some of the work we're proud of."
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <CtaBanner title="Want Results Like These?" description="Tell us about your space and we'll design a system that fits." />
    </>
  );
}
