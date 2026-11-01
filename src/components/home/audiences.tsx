import { Building2, Check, Home } from "lucide-react";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";

const audiences = [
  {
    icon: Home,
    title: "For Individuals & Families",
    description: "Stop planning your day around power cuts. Run your home quietly on the sun.",
    points: [
      "Inverter & battery backup for flats and duplexes",
      "Full off-grid systems that power AC, fridge and pumps",
      "Installment payment plans available",
    ],
    cta: "Get a Home Quote",
    dark: false,
  },
  {
    icon: Building2,
    title: "For Organizations",
    description: "Cut diesel costs and protect operations with energy you control.",
    points: [
      "Offices, schools, hospitals, hotels and factories",
      "Load audits and engineered commercial designs",
      "Maintenance contracts and remote monitoring",
    ],
    cta: "Request a Site Assessment",
    dark: true,
  },
];

export function Audiences() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <SectionHeader
          badge="Who We Power"
          title="Built For Homes And Businesses"
          description="Whether it's one bedroom or an entire campus, we size the system to the load — not the other way round."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {audiences.map(({ icon: Icon, ...a }) => (
            <div
              key={a.title}
              className={`flex flex-col rounded-3xl p-7 sm:p-10 ${a.dark ? "bg-brand text-white" : "bg-surface text-ink"}`}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-2xl ${
                  a.dark ? "bg-white/10 text-white" : "bg-white text-brand"
                }`}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="heading mt-6 text-2xl sm:text-3xl">{a.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${a.dark ? "text-white/75" : "text-muted"}`}>
                {a.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {a.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm">
                    <Check className={`mt-0.5 size-4 shrink-0 ${a.dark ? "text-white" : "text-brand"}`} />
                    <span className={a.dark ? "text-white/90" : "text-ink"}>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink href="/contact?subject=quote" variant={a.dark ? "white" : "dark"}>
                  {a.cta}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
