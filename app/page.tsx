import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Currently from '@/components/Currently'
import Projects from '@/components/Projects'
import Writing from '@/components/Writing'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Contact from '@/components/Contact'

// Order: meet the person, see what they're doing now, then the work,
// then what you've written about it, then the résumé, then the fuller story. The old skills grid is gone from
// the homepage; each project already lists its own stack.
export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Currently />
      <Projects />
      <Writing />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}
