import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Currently from '@/components/Currently'
import Contact from '@/components/Contact'
import Reveal from '@/components/motion/Reveal'

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Currently /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  )
}
