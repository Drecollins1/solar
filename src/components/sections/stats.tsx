import { stats } from "@/lib/data";

export function Stats() {
  return (
    <dl className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
          <dt className="order-2 text-xs text-muted sm:text-sm">{stat.label}</dt>
          <dd className="heading order-1 text-3xl text-ink sm:text-4xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
