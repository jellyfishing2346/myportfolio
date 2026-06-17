import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import GithubIcon from '@/components/GithubIcon'

const LINKS = [
  {
    href: 'mailto:faizanakhan2003@gmail.com',
    Icon: Mail,
    label: 'faizanakhan2003@gmail.com',
  },
  {
    href: 'https://github.com/jellyfishing2346',
    Icon: GithubIcon,
    label: 'github.com/faizankhan',
  },
  {
    href: 'https://linkedin.com/in/faizan-khan234',
    Icon: Linkedin,
    label: 'linkedin.com/in/faizankhan',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">Let's Connect</p>
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-12 leading-relaxed">
          Wrapping up at Brooklyn College in May 2026 and looking for full-time roles in
          FinTech and quant finance. If you want to talk about any of the work, reach out.
          And if you want to argue about whether Happy Death Day counts as horror, I'm
          available for that too.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-16">
          {LINKS.map(({ href, Icon, label }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3 px-6 py-4 rounded-xl glass glass-hover text-slate-300 text-sm"
            >
              <Icon size={16} className="text-violet-400 flex-shrink-0" />
              <span>{label}</span>
              <ArrowUpRight size={13} className="text-slate-600 flex-shrink-0" />
            </a>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Faizan Khan &nbsp;·&nbsp; Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}
