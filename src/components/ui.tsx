import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Badge({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  const styles =
    tone === "dark"
      ? "border-white/40 text-white"
      : "border-line bg-white text-ink shadow-[0_1px_2px_rgba(16,24,40,0.04)]";
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      <span className="size-1 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className="heading text-3xl text-ink sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {description && <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>}
    </div>
  );
}

const buttonVariants = {
  dark: "bg-ink text-white hover:bg-black",
  brand: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-line bg-white text-ink hover:border-ink/30",
  white: "bg-white text-brand hover:bg-white/90",
  ghostLight: "border border-white/40 text-white hover:bg-white/10",
};

export function ButtonLink({
  variant = "dark",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof buttonVariants }) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${buttonVariants[variant]} ${className}`}
      {...props}
    />
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
