import Link from "next/link";
import { Check, X } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";
import { packageRows, packages } from "@/lib/data";

function Value({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="size-4 text-emerald-600" aria-label="Included" />;
  if (value === false) return <X className="size-4 text-red-500" aria-label="Not included" />;
  return <>{value}</>;
}

export function Packages() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeader
          badge="Packages"
          title={
            <>
              Systems Built For Homes <br className="hidden sm:block" />& Businesses
            </>
          }
          description="Every system is custom-sized, but here's where most of our clients start. Prices depend on your load — request a quote for an exact figure."
        />

        {/* Desktop: comparison table */}
        <div className="mt-12 hidden overflow-hidden rounded-3xl bg-white p-6 md:block">
          <table className="w-full table-fixed text-left text-sm">
            <thead>
              <tr>
                <th className="w-[22%] align-bottom pb-6 text-base font-semibold text-ink">Features</th>
                {packages.map((p) => (
                  <th key={p.name} className="px-3 pb-6 align-top font-normal">
                    <div className={`h-full rounded-2xl p-4 ${p.popular ? "bg-surface ring-1 ring-brand/15" : ""}`}>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-ink">{p.name}</p>
                        {p.popular && (
                          <span className="rounded-full bg-brand px-2 py-0.5 text-[0.65rem] font-medium text-white">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 min-h-10 text-xs leading-relaxed text-muted">{p.summary}</p>
                      <Link
                        href="/contact?subject=quote"
                        className="mt-4 flex justify-center rounded-full bg-ink px-4 py-2 text-xs font-medium text-white hover:bg-black"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packageRows.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="py-3.5 font-normal text-muted">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className="px-7 py-3.5 text-ink">
                      <Value value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          {packages.map((p, col) => (
            <div key={p.name} className={`rounded-2xl bg-white p-5 ${p.popular ? "ring-2 ring-brand" : ""}`}>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-ink">{p.name}</p>
                {p.popular && (
                  <span className="rounded-full bg-brand px-2 py-0.5 text-[0.65rem] font-medium text-white">Popular</span>
                )}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted">{p.summary}</p>
              <dl className="mt-4 divide-y divide-line text-sm">
                {packageRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="text-right text-ink">
                      <Value value={row.values[col]} />
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/contact?subject=quote"
                className="mt-4 flex justify-center rounded-full bg-ink px-4 py-3 text-sm font-medium text-white"
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
