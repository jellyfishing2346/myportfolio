import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="hero-in mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-md md:max-w-none">
          <Image
            src="/avatar.jpg"
            alt="Faizan standing in front of a brick building on campus"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-accent">
            Software engineer · Brooklyn, NY
          </p>
          <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-ink sm:text-7xl lg:text-8xl">
            I build systems for messy, real-world data.
          </h1>

          <div className="mt-8 max-w-[34rem] space-y-4 text-lg leading-relaxed text-muted md:text-xl">
            <p>
              I&rsquo;m a computer science student at Brooklyn College building backend
              services, data pipelines, and ML applications. I care about the part after
              the demo: validation, failure modes, and whether someone else can reproduce
              the result.
            </p>
            <p>
              I&rsquo;m currently looking for an entry-level software engineering role where
              I can work on reliable systems and learn from people who take the details seriously.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-base">
            <a
              href="#projects"
              className="rounded-md bg-ink px-5 py-3 font-medium text-paper transition-colors hover:bg-accent"
            >
              View my work
            </a>
            <a href="mailto:faizanakhan2003@gmail.com" className="link">Email me</a>
            <a href="https://github.com/jellyfishing2346" className="link">GitHub</a>
            <a href="https://linkedin.com/in/faizan-khan234" className="link">LinkedIn</a>
            <a href="/Faizan-Khan-Resume.pdf" className="link">Résumé</a>
          </div>
        </div>
      </div>
    </section>
  )
}
