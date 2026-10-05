import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { POSTS } from './data'

export const metadata = {
  title: 'Writing | Faizan Khan',
  description: 'Short posts on quantitative finance, ML engineering, and what I learn while building.',
}

export default function Blog() {
  return (
    <main className="relative z-10">
      <Navbar />

      <section className="px-6 pt-36 pb-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-ink md:text-7xl">Writing</h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
            Short posts on quantitative finance, ML engineering, and the things I run into while
            building. No tutorials, no hot takes. Just what I actually learned.
          </p>

          <ul className="mt-14 divide-y divide-line border-y border-line">
            {POSTS.map(({ slug, title, date, readTime, summary, tag }) => (
              <li key={slug} className="grid gap-2 py-8 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
                <p className="text-sm text-muted">{date}, {readTime}<br className="hidden md:block" /><span className="md:hidden">, </span>{tag}</p>
                <div>
                  <Link href={`/blog/${slug}`} className="text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-accent">
                    {title}
                  </Link>
                  <p className="mt-2 max-w-[40rem] leading-relaxed text-muted">{summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
