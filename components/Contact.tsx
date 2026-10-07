const LINKS = [
  { href: 'mailto:faizanakhan2003@gmail.com', label: 'faizanakhan2003@gmail.com' },
  { href: 'https://github.com/jellyfishing2346', label: 'github.com/jellyfishing2346' },
  { href: 'https://linkedin.com/in/faizan-khan234', label: 'linkedin.com/in/faizan-khan234' },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-20 pb-12 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent">Next step</p>
        <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">Let&rsquo;s build something useful.</h2>
        <p className="mt-5 max-w-[36rem] text-lg leading-relaxed text-muted">
          I&rsquo;m looking for an entry-level software engineering role, especially on a
          team working with backend systems, data engineering, ML infrastructure, or
          fintech. If that sounds like your team, email is the fastest way to reach me.
        </p>

        <ul className="mt-10 space-y-3 text-lg">
          {LINKS.map(({ href, label }) => (
            <li key={href}><a href={href} className="link">{label}</a></li>
          ))}
        </ul>

        <p className="mt-20 text-sm text-muted">
          &copy; {new Date().getFullYear()} Faizan Khan. Built with Next.js and Tailwind.
        </p>
      </div>
    </section>
  )
}
