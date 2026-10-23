import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import type { Project } from '@/app/projects/_data'

export default function CaseStudy({ project }: { project: Project }) {
  const { title, badge, objective, metrics, stack, githubUrl, demoUrl, story, relatedPost, accent } = project

  return (
    <main className="relative z-10">
      <Navbar />

      <article className="px-4 pb-28 pt-32 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/#projects" className="tag tag-slab"><span>Back to projects</span></Link>

          <header className="slab-wrap slab-accent mt-8" style={{ ['--accent' as string]: accent }}>
            <div className="slab cut-a grid gap-10 p-7 sm:p-10 md:grid-cols-12 md:p-12">
              <div className="md:col-span-7">
                <span className="tag tag-line"><span>{badge}</span></span>
                <h1 className="mt-5 text-[clamp(2.2rem,1.3rem+3.4vw,4rem)] font-black uppercase italic leading-[0.92] [font-stretch:120%]">
                  {title}
                </h1>
                <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-fog">{objective}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
                  {stack.map((s) => (
                    <li key={s} className="bg-white/[0.08] px-2.5 py-1 font-mono text-xs text-white/85">{s}</li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href={githubUrl} className="btn btn-sm"><span>Code</span></a>
                  {demoUrl && <a href={demoUrl} className="btn btn-sm btn-slab"><span>Live demo</span></a>}
                  {relatedPost && <Link href={`/blog/${relatedPost.slug}`} className="btn btn-sm btn-slab"><span>Blog post</span></Link>}
                </div>
              </div>

              <div className="md:col-span-5 md:self-end">
                <div className="-rotate-[1.5deg] p-6 text-slab sm:p-7" style={{ background: accent }}>
                  <dl className="grid grid-cols-2 gap-x-5 gap-y-6">
                    {metrics.map(({ label, value }) => (
                      <div key={label} className="flex flex-col-reverse">
                        <dt className="mt-2 text-[13px] font-semibold leading-snug">{label}</dt>
                        <dd className="font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.5rem)] font-black leading-none tabular-nums">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="mt-4 text-right text-xs text-fog">Measured in testing, not in live production.</p>
              </div>
            </div>
          </header>

          <div className="slab-wrap mt-14" style={{ ['--shadow' as string]: 'var(--slab)' }}>
            <div className="sheet cut-c px-6 py-12 sm:px-10 md:px-14 md:py-16">
              {story ? (
                <div className="space-y-16">
                  {story.map(({ heading, paragraphs, image }) => (
                    <section key={heading} className="grid gap-6 md:grid-cols-12 md:gap-12">
                      <h2 className="text-2xl font-black leading-tight [font-stretch:115%] md:col-span-4">{heading}</h2>
                      <div className="md:col-span-8">
                        <div className="max-w-[40rem] space-y-5 text-lg leading-relaxed text-slab/80">
                          {paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                        </div>
                        {image && (
                          <figure className="mt-10">
                            <div className="border-2 border-slab shadow-[8px_8px_0_var(--field)]">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                sizes="(min-width: 768px) 60vw, 100vw"
                                className="h-auto w-full"
                              />
                            </div>
                            <figcaption className="mt-4 text-sm text-slab/60">{image.caption}</figcaption>
                          </figure>
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-12 md:gap-12">
                  <h2 className="text-2xl font-black [font-stretch:115%] md:col-span-4">The full story</h2>
                  <p className="max-w-[40rem] text-lg leading-relaxed text-slab/80 md:col-span-8">
                    I&rsquo;m still writing this one up.
                    {relatedPost && (
                      <> In the meantime, <Link href={`/blog/${relatedPost.slug}`} className="link">{relatedPost.title}</Link> covers
                      the main decisions behind it.</>
                    )}
                  </p>
                </div>
              )}

              {story && relatedPost && (
                <p className="mt-16 border-t-2 border-slab pt-8 text-lg text-slab/80">
                  I wrote more about this in{' '}
                  <Link href={`/blog/${relatedPost.slug}`} className="link text-slab">{relatedPost.title}</Link>.
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
