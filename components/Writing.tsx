import Link from 'next/link'
import { POSTS } from '@/app/blog/data'
import { SectionHeading } from '@/components/ui'

const TILTS = ['-rotate-[1deg]', 'rotate-[0.8deg]', '-rotate-[0.4deg]', 'rotate-[1.2deg]']

export default function Writing() {
  return (
    <section id="writing" className="px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Writing"
          dark
          note={
            <>
              Notes on what I got wrong while building these projects, and what I learned.{' '}
              <Link href="/blog" className="link whitespace-nowrap">Read all notes</Link>
            </>
          }
        />

        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {POSTS.map(({ slug, title, date, summary, readTime, tag }, i) => (
            <li key={slug} className={`slab-wrap slab-hover ${TILTS[i % TILTS.length]}`}>
              <Link href={`/blog/${slug}`} className="sheet cut-a group flex h-full flex-col p-7">
                <span className="tag tag-field self-start"><span>{tag}</span></span>
                <h3 className="mt-5 text-xl font-black leading-tight [font-stretch:112%] group-hover:text-field">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slab/70">{summary}</p>
                <p className="mt-6 font-mono text-xs font-bold text-slab/60">{date}, {readTime}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
