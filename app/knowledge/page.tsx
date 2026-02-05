import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/content/knowledge/posts";
import Link from "next/link";

export const metadata = {
  title: "Knowledge Hub | DIGIGO Technology",
  description: "Technical articles on electronic water conditioning, scale behavior, and system evaluation.",
};

export default function KnowledgePage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Knowledge"
        title="Technical Articles"
        subtitle="Engineering-grade articles for facility managers, consultants, and homeowners. Understand scale behavior, evaluation methods, and E‑SOFT technology."
      />

      <section className="mx-auto max-w-6xl grid gap-4 px-4 py-12 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/knowledge/${p.slug}`}
            className="group rounded-2xl border border-border bg-surface-2/40 p-5 transition hover:border-neon/50"
          >
            <CardHeader className="p-0">
              <CardTitle className="text-ink group-hover:text-neon transition-colors">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-sm text-muted">{p.summary}</p>
              <div className="mt-3 text-xs uppercase tracking-[0.12em] text-neon">Read Article</div>
            </CardContent>
          </Link>
        ))}
      </section>
    </main>
  );
}
