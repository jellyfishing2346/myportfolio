import { PROJECTS, type Project } from '@/app/projects/_data'

export function getAllProjects(): Project[] {
  return PROJECTS
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((project) => project.slug)
}
