import type { ReactNode } from "react";
import { Link } from "../lib/router";

export function Section({
  id,
  title,
  children,
  action,
}: {
  id: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-rule py-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">
          {title}
        </h2>
        {action ? <div className="font-sans text-xs text-muted">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}

export function SubHead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-muted">
      {children}
    </h3>
  );
}

export function Chip({
  children,
  to,
  active,
  onClick,
}: {
  children: ReactNode;
  to?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const cls =
    "inline-block rounded-full border px-2.5 py-0.5 font-sans text-[0.68rem] tracking-wide transition-colors " +
    (active
      ? "border-accent bg-accent/10 text-accent"
      : "border-rule bg-panel text-muted hover:border-accent hover:text-accent");
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function A({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const base =
    "border-b border-rule pb-px transition-colors hover:border-accent hover:text-accent " + className;
  return (
    <Link to={href} className={base}>
      {children}
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  meta,
  backTo = "/",
  backLabel = "Home",
}: {
  eyebrow?: string;
  title: string;
  meta?: ReactNode;
  backTo?: string;
  backLabel?: string;
}) {
  return (
    <header className="border-b border-rule pb-6 pt-10">
      <Link
        to={backTo}
        className="font-sans text-xs text-muted transition-colors hover:text-accent"
      >
        ← {backLabel}
      </Link>
      {eyebrow ? (
        <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-2xl leading-snug tracking-tight sm:text-[1.9rem]">{title}</h1>
      {meta ? <div className="mt-2 font-sans text-sm text-muted">{meta}</div> : null}
    </header>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-3 text-[1.05rem] leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
