import { posts } from "@/content/knowledge/posts";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | DIGIGO Knowledge`,
    description: post.summary,
  };
}

export default function KnowledgeArticle({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <h1 className="text-3xl font-semibold text-white">{post.title}</h1>
      <p className="text-white/60">{post.summary}</p>
      <article
        className="space-y-4 text-white/80 text-base leading-7"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </main>
  );
}
