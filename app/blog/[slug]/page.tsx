import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { POSTS, getPost } from '../data'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return { title: `${post.title} | Faizan Khan`, description: post.summary }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <main className="relative z-10">
      <Navbar />

      <article className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-[42rem]">
          <Link href="/blog" className="link text-sm">All posts</Link>

          <header className="mt-10 mb-12">
            <p className="text-sm text-muted">{post.date}, {post.readTime}, {post.tag}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-ink md:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="space-y-6 text-lg leading-[1.7] text-muted">
            {post.blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="!mt-12 text-2xl font-bold tracking-tight text-ink">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'callout') {
                return (
                  <p key={i} className="border-l-2 border-accent py-1 pl-6 text-xl leading-relaxed text-ink">
                    {block.text}
                  </p>
                )
              }
              return <p key={i}>{block.text}</p>
            })}
          </div>

          <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <Link href="/blog" className="link">All posts</Link>
            <a href="mailto:faizanakhan2003@gmail.com" className="link">Email me about this post</a>
          </footer>
        </div>
      </article>
    </main>
  )
}
