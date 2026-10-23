import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { SectionHeading } from '@/components/ui'
import { POSTS } from './data'

export const metadata = {
  title: 'Writing | Faizan Khan',
  description: 'Short posts on quantitative finance, ML engineering, and what I learn while building.',
}

export default function Blog() {
  return (
    <main className="relative z-10">
      <Navbar />

      <section className="px-4 pb-28 pt-36 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            as="h1"
            title="Writing"
            note="Short posts on quantitative finance, ML engineering, and the things I run into while building. No tutorials, no hot takes. Just what I actually learned."
          />

          <ul className="space-y-8">
            {POSTS.map(({ slug, title, date, readTime, summary, tag }, i) => (
              <li key={slug} className={`slab-wrap slab-hover ${i % 2 ? 'md:rotate-[0.4deg]' : 'md:-rotate-[0.4deg]'}`}>
                <Link href={`/blog/${slug}`} className={`slab ${i % 2 ? 'cut-b' : 'cut-a'} group grid gap-4 p-7 md:grid-cols-12 md:gap-10 md:p-9`}>
                  <div className="flex flex-wrap items-start gap-2 md:col-span-3 md:flex-col">
                    <span className="tag tag-gold"><span>{tag}</span></span>
                    <span className="font-mono text-xs font-bold text-fog">{date}, {readTime}</span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-2xl font-black leading-tight [font-stretch:115%] group-hover:text-gold md:text-3xl">{title}</h2>
                    <p className="mt-3 max-w-[44rem] leading-relaxed text-fog">{summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
