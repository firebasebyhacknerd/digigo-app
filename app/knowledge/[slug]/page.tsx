import { PageHero } from "@/components/page-hero";
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
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Knowledge"
        title={post.title}
        subtitle={post.summary}
        imageSrc="/digigostore-assets/hero-machine.png"
      />

      <section className="py-14">
        <div className="section-shell max-w-4xl">
          <article
            className="luxury-panel space-y-4 p-7 text-base leading-7 text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>
    </main>
  );
}
