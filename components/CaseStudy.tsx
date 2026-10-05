import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import type { Project } from '@/app/projects/_data'

export default function CaseStudy({ project }: { project: Project }) {
  const { title, objective, metrics, stack, githubUrl, demoUrl, story, relatedPost } = project

  return (
    <main className="relative z-10">
      <Navbar />

      <article className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <Link href="/#projects" className="link text-sm">Back to projects</Link>

          <header className="mt-10 grid gap-10 border-b border-line pb-12 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16">
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl">{title}</h1>
              <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-muted">{objective}</p>
              <p className="mt-4 text-sm text-muted">Built with {stack.join(', ')}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <a href={githubUrl} className="link">Code</a>
                {demoUrl && <a href={demoUrl} className="link">Live demo</a>}
                {relatedPost && <Link href={`/blog/${relatedPost.slug}`} className="link">Blog post</Link>}
              </div>
            </div>

            <div className="self-end">
              <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-5">
                {metrics.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="text-3xl font-semibold tabular-nums text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-muted">Measured in testing, not in live production.</p>
            </div>
          </header>

          {story ? (
            <div className="mt-16 space-y-16">
              {story.map(({ heading, paragraphs, image }) => (
                <section key={heading} className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink">{heading}</h2>
                  <div>
                    <div className="max-w-[40rem] space-y-5 text-lg leading-relaxed text-muted">
                      {paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                    </div>
                    {image && (
                      <figure className="mt-10">
                        <div className="overflow-hidden rounded-md border border-line">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes="(min-width: 768px) 60vw, 100vw"
                            className="h-auto w-full"
                          />
                        </div>
                        <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>
                      </figure>
                    )}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="mt-16 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
              <h2 className="text-2xl font-bold tracking-tight text-ink">The full story</h2>
              <p className="max-w-[40rem] text-lg leading-relaxed text-muted">
                I&rsquo;m still writing this one up.
                {relatedPost && (
                  <> In the meantime, <Link href={`/blog/${relatedPost.slug}`} className="link">{relatedPost.title}</Link> covers
                  the main decisions behind it.</>
                )}
              </p>
            </div>
          )}

          {story && relatedPost && (
            <p className="mt-20 border-t border-line pt-10 text-lg text-muted">
              I wrote more about this in{' '}
              <Link href={`/blog/${relatedPost.slug}`} className="link">{relatedPost.title}</Link>.
            </p>
          )}
        </div>
      </article>
    </main>
  )
}
