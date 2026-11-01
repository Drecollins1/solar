import { Container, SectionHeader } from "@/components/ui";
import { testimonials } from "@/lib/data";

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title={
            <>
              Real People, Real Power, <br className="hidden sm:block" />
              Real Impact
            </>
          }
        />
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="grid gap-4 py-8 md:grid-cols-[auto_12rem_1fr_9rem] md:items-start md:gap-8"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-surface text-base font-semibold text-brand">
                {initials(t.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
              <blockquote className="text-sm leading-relaxed text-muted">“{t.quote}”</blockquote>
              <p className="text-xs font-medium text-ink md:text-right">{t.location}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
