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
            how financial systems work, then built projects to understand the ideas
            instead of leaving them as notes in a notebook.
          </p>
          <p>
            Most of my week is split between research, teaching, and building. At Brooklyn
            College I work on turning firefighter incident reports into data people can
            actually query. As a teaching assistant, I help students in cybersecurity,
            web development, AI, and data science understand both the code and the reason
            behind it.
          </p>
          <p>
            I like work that rewards careful thinking: defining the data model, testing
            the uncomfortable cases, and being honest when a result is weaker than the
            first version suggested. That is usually more interesting to me than making a
            demo look impressive.
          </p>
          <p>
            I&rsquo;m studying for a B.S. in Computer Science with a minor in Data Science
            at CUNY Brooklyn College. I&rsquo;m also involved with Project Alpaca, CUNY Tech
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
