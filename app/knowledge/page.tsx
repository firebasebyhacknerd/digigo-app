import { posts } from "@/content/knowledge/posts";
import Link from "next/link";

export const metadata = {
  title: "Knowledge Hub | DIGIGO Technology",
  description: "Technical articles on electronic water conditioning, scale behavior, and system evaluation.",
};

export default function KnowledgePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-12">
      <h1 className="text-3xl font-semibold text-white">Knowledge Hub</h1>
      <p className="text-white/70">Engineering-grade articles for facility managers, consultants, and homeowners.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/knowledge/${p.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-neon/50"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.summary}</p>
            <div className="mt-3 text-xs uppercase tracking-[0.12em] text-neon">Read Article</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
