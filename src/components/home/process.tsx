import Image from "next/image";
import { Container, SectionHeader } from "@/components/ui";
import { steps } from "@/lib/data";

export function Process() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="How It Works"
          title={
            <>
              From First Call To <br className="hidden sm:block" />
              Powering Your Space
            </>
          }
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">
                {String(i + 1).padStart(2, "0")} — {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
