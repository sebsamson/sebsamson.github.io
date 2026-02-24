export interface NavLink {
  label: string
  href: string
}

export interface HomeServiceCard {
  title: string
  summary: string
}

export interface SelectedOutcome {
  title: string
  description: string
  href: string
}

export interface ServiceOffer {
  title: string
  duration: string
  useCase: string
  deliverables: string[]
}

export interface ProofCaseStudy {
  id: "vision-reset" | "backlog-triage" | "retention-feature"
  title: string
  context: string
  problem: string
  whatIDid: string[]
  artifactsDelivered: string[]
  result: string
}

export interface Testimonial {
  quote: string
  cite: string
}

export interface ContactAction {
  label: string
  href: string
  external?: boolean
}

export interface WritingLink {
  label: string
  href: string
}

export interface WritingItem {
  title: string
  tag: string
  summary: string
  links: WritingLink[]
}

export interface WritingSection {
  title: string
  items: WritingItem[]
}

export type ProjectMedia =
  | {
      type: "image"
      src: string
      alt: string
      width?: number
      height?: number
    }
  | {
      type: "iframe"
      src: string
      title: string
    }

export interface ProjectReference {
  label: string
  href: string
}

export interface ProjectEntry {
  slug: string
  title: string
  metaLine?: string
  paragraphs: string[]
  bullets: string[]
  media: ProjectMedia[]
  referenceLinks?: ProjectReference[]
}

export interface EmployerItem {
  label: string
  href?: string
}

export interface EmployerEntry {
  company: string
  logoSrc: string
  logoAlt: string
  rolePeriod: string
  intro?: string
  items: EmployerItem[]
}
