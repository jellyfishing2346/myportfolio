import { notFound } from 'next/navigation'
import { getAllSlugs, getProject } from '@/lib/projects'
import CaseStudy from '@/components/CaseStudy'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) return {}
  return { title: `${project.title} | Faizan Khan`, description: project.objective }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return <CaseStudy project={project} />
}
