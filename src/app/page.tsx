import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Audiences } from "@/components/home/audiences";
import { Process } from "@/components/home/process";
import { WhyUs } from "@/components/home/why-us";
import { Packages } from "@/components/home/packages";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Audiences />
      <Process />
      <WhyUs />
      <Packages />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
