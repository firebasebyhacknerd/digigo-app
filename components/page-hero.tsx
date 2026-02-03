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
    <section className="border-b border-white/10 bg-gradient-to-b from-white/3 to-transparent py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 md:max-w-3xl">
          {kicker && (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">
              {kicker}
            </span>
          )}
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="text-white/70 text-base md:text-lg">{subtitle}</p>
        </div>
        {actions ?? (
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/contact">Talk to a Technical Expert</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/technology">Download Technology Brief</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
