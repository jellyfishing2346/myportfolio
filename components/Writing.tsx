import Link from 'next/link'
import { POSTS } from '@/app/blog/data'

export default function Writing() {
  return (
    <section id="writing" className="px-6 py-20 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-3">Writing</h2>
        <p className="mb-10 max-w-[36rem] text-muted">
          Notes on what I got wrong while building these projects, and what I learned.
        </p>
        <ul className="divide-y divide-line border-y border-line">
          {POSTS.map(({ slug, title, date, summary, readTime }) => (
            <li key={slug} className="grid gap-2 py-7 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
              <p className="text-sm text-muted">{date}, {readTime}</p>
              <div>
                <Link href={`/blog/${slug}`} className="text-xl font-semibold text-ink hover:text-accent transition-colors">
                  {title}
                </Link>
                <p className="mt-2 max-w-[40rem] leading-relaxed text-muted">{summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
