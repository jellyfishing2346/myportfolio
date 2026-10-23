import { Wordmark } from '@/components/ui'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-28 text-center">
        <h1 className="sr-only">Faizan Khan, computer science student and software engineer</h1>

        <p className="slam flex items-stretch font-display text-[clamp(1.6rem,1rem+3.2vw,3.6rem)] font-black uppercase leading-none" aria-hidden="true">
          <span className="bg-paper px-[0.35em] py-[0.18em] text-slab shadow-[6px_6px_0_var(--slab)]">Portfolio</span>
          <span className="bg-slab px-[0.3em] py-[0.18em] text-paper">2026</span>
        </p>

        <div className="fade-late mt-10 max-w-[38rem]">
          <p className="text-lg font-medium leading-relaxed text-white/90 md:text-xl">
            I&rsquo;m a computer science student at Brooklyn College building backend services,
            data pipelines, and ML applications. I care about the part after the demo: validation,
            failure modes, and whether someone else can reproduce the result.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <a href="#projects" className="btn"><span>See my work</span></a>
            <a href="mailto:faizanakhan2003@gmail.com" className="btn btn-slab"><span>Email me</span></a>
          </div>
        </div>

        <a href="#projects" className="fade-late mt-14 p-2" aria-label="Scroll to projects">
          <span className="diamond diamond-bob" />
        </a>
      </div>

      <Wordmark animate />
    </section>
  )
}
