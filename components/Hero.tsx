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
          <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl lg:text-8xl">
            Hi, I&rsquo;m Faizan.
          </h1>

          <div className="mt-8 max-w-[34rem] space-y-4 text-lg leading-relaxed text-muted md:text-xl">
            <p>
              I&rsquo;m a computer science student at Brooklyn College. I build software
              for financial data: fraud detection, credit risk models, and trading research
              where the backtest is usually more optimistic than reality.
            </p>
            <p>
              I also TA, do research on firefighter incident reports, and spend more time
              than I should on revenge horror films.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-base">
            <a
              href="mailto:faizanakhan2003@gmail.com"
              className="rounded-md bg-ink px-5 py-3 font-medium text-paper transition-colors hover:bg-accent"
            >
              Email me
            </a>
            <a href="https://github.com/jellyfishing2346" className="link">GitHub</a>
            <a href="https://linkedin.com/in/faizan-khan234" className="link">LinkedIn</a>
            <a href="#projects" className="link">See my projects</a>
          </div>
        </div>
      </div>
    </section>
  )
}
