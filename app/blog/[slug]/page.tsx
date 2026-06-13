import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { ArrowLeft } from 'lucide-react'
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

      <article className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Back link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-300 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> All posts
          </a>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${post.tagClass}`}>
                {post.tag}
              </span>
              <span className="text-slate-600 text-xs">{post.date}</span>
              <span className="text-slate-600 text-xs">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {post.blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="text-xl font-semibold text-white mt-10 mb-2">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'callout') {
                return (
                  <div key={i} className="glass rounded-xl px-6 py-5 border-l-2 border-violet-400/60">
                    <p className="text-slate-300 text-sm leading-relaxed italic">{block.text}</p>
                  </div>
                )
              }
              return (
                <p key={i} className="text-slate-400 text-sm leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-300 text-sm transition-colors"
            >
              <ArrowLeft size={14} /> All posts
            </a>
            <span className="text-slate-600 text-xs">Faizan Khan</span>
          </div>

        </div>
      </article>
    </main>
  )
}
