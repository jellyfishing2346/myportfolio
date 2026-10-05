import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="px-6 py-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] md:gap-16">
        <h2 className="section-title">About me</h2>

        <div className="max-w-[40rem] space-y-5 text-lg leading-relaxed text-muted">
          <p>
           I got into software engineering first. Fintech came later, while I was
           figuring out what kind of engineer I wanted to be. I started reading about
           how financial systems actually work, saw some projects at hackathons that
           pulled me further in, and eventually started building my own.
          </p>
          <p>
            Most of my week is split three ways. At Brooklyn College I do research on
            turning firefighter incident reports into data people can actually query. I
            TA courses in cybersecurity, web development, AI, and data science, which
            mostly means helping people figure out why their code won&rsquo;t run. And I
            build my own projects, which lately means arguing with a walk-forward
            optimizer.
          </p>
          <p>
            Outside of that I play pickup soccer and football, work out, and watch a lot
            of horror, especially revenge stories where the person everyone underestimated
            turns the tables. My friends mostly don&rsquo;t know what quantitative finance
            is. I&rsquo;m working on an explanation that doesn&rsquo;t make their eyes glaze over.
          </p>
          <p>
            I&rsquo;m studying for a B.S. in Computer Science with a minor in Data Science
            at CUNY Brooklyn College, and I&rsquo;m involved with Project Alpaca, CUNY Tech
            Prep, CodePath, and the CS Club.
          </p>
          <p>
            <Link href="/personal" className="link">More about life outside code</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
