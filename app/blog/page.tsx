import Navbar from '@/components/Navbar'
import { ArrowUpRight } from 'lucide-react'
import { POSTS } from './data'

export const metadata = {
  title: 'Writing | Faizan Khan',
  description: 'Thoughts on quantitative finance, machine learning, and financial systems engineering.',
}

export default function Blog() {
  return (
    <main className="relative z-10">
      <Navbar />

      <section className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Writing</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Thinking out loud.</h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Short posts on quantitative finance, ML engineering, and the things I run into while building.
              No tutorials, no hot takes. Just what I actually learned.
            </p>
          </div>

          <div className="space-y-4">
            {POSTS.map(({ slug, title, date, readTime, summary, tag, tagClass }) => (
              <a
                key={slug}
                href={`/blog/${slug}`}
                className="glass rounded-2xl p-7 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-violet-400/30 transition-all duration-200 hover:-translate-y-1 group border border-white/10"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${tagClass}`}>
                      {tag}
                    </span>
                    <span className="text-slate-600 text-xs">{date}</span>
                    <span className="text-slate-600 text-xs">{readTime}</span>
                  </div>
                  <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors">
                    {title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{summary}</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-violet-400 transition-colors flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
