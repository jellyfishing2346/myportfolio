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

      <article className="px-4 pb-28 pt-32 sm:px-6">
        <div className="mx-auto max-w-[50rem]">
          <Link href="/blog" className="tag tag-slab"><span>All posts</span></Link>

          <header className="mb-12 mt-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag tag-gold"><span>{post.tag}</span></span>
              <span className="font-mono text-xs font-bold text-white/80">{post.date}, {post.readTime}</span>
            </div>
            <h1 className="mt-6 -rotate-[1deg] text-[clamp(2rem,1.3rem+3vw,3.6rem)] font-black leading-[1.02] [font-stretch:118%]">
              <span className="box-decoration-clone bg-slab px-3 leading-[1.25]">{post.title}</span>
            </h1>
          </header>

          <div className="slab-wrap" style={{ ['--shadow' as string]: 'var(--slab)' }}>
            <div className="sheet cut-c px-6 py-10 sm:px-10 md:px-14 md:py-14">
              <div className="space-y-6 text-lg leading-[1.75] text-slab/80">
                {post.blocks.map((block, i) => {
                  if (block.type === 'h2') {
                    return (
                      <h2 key={i} className="!mt-12 text-2xl font-black leading-tight text-slab [font-stretch:115%]">
                        {block.text}
                      </h2>
                    )
                  }
                  if (block.type === 'callout') {
                    return (
                      <p key={i} className="-rotate-[0.5deg] bg-field px-6 py-5 text-lg leading-relaxed text-paper shadow-[6px_6px_0_var(--slab)]">
                        {block.text}
                      </p>
                    )
                  }
                  return <p key={i}>{block.text}</p>
                })}
              </div>

              <footer className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t-2 border-slab pt-8">
                <Link href="/blog" className="link">All posts</Link>
                <a href="mailto:faizanakhan2003@gmail.com" className="btn btn-sm btn-slab"><span>Email me about this post</span></a>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
