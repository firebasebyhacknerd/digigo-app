import { ReactNode } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  kicker?: string;
  actions?: ReactNode;
};

export function PageHero({ title, subtitle, kicker, actions }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-2 py-16">
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden />
      <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-neon/10 blur-3xl" aria-hidden />
      <div className="absolute -right-40 -bottom-32 h-80 w-80 rounded-full bg-neon-ice/8 blur-3xl" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 md:max-w-3xl">
          {kicker && (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">
              {kicker}
            </span>
          )}
          <h1 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="text-muted text-base md:text-lg">{subtitle}</p>
        </div>
        {actions ?? (
          <div className="flex gap-3">
            <Button asChild className="btn-primary">
              <Link href="/contact">Talk to a Technical Expert</Link>
            </Button>
            <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
