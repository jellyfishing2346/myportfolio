import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Focus from '@/components/Focus'
import Writing from '@/components/Writing'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Contact from '@/components/Contact'

// The homepage is organized for a quick recruiter scan: identity, evidence,
// engineering focus, experience, then the fuller story.
export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <Focus />
      <Experience />
      <About />
      <Writing />
      <Contact />
    </main>
  )
}
