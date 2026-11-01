import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.8" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="16"
          y1="3"
          x2="16"
          y2="6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 16 16)`}
        />
      ))}
      <path d="M17 11.5 13.5 16.6h3.2L15 20.5l3.6-5.2h-3.2L17 11.5Z" fill="currentColor" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${light ? "text-white" : "text-ink"}`}>
      <LogoMark />
      <span className="text-xl font-semibold tracking-tight">{site.name}</span>
    </Link>
  );
}
