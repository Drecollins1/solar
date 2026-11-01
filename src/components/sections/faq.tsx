import { Plus } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="FAQs"
          title={
            <>
              Get Clarity Before <br className="hidden sm:block" />
              You Go Solar
            </>
          }
          description="Quick answers to the questions we hear most about going off-grid."
        />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              name="faq"
              open={i === 0}
              className="group rounded-xl bg-surface px-5 py-4 open:pb-5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-ink sm:text-[0.95rem]">
                {item.q}
                <Plus className="size-4 shrink-0 text-muted transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
