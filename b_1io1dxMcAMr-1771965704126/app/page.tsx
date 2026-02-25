import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Download } from "lucide-react"
import { CTAStrip } from "@/components/cta-strip"
import { ExperienceBio } from "@/components/experience-bio"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { EMPLOYERS } from "@/content/employers"
import {
  CALENDAR_HREF,
  HOME_CONTENT,
  ONE_PAGER_HREF,
  SITE_URL,
} from "@/content/core-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: `${SITE_URL}/` },
  description:
    "Fractional game direction for vision clarity, roadmap prioritization, and stakeholder alignment.",
}

export default function HomePage() {
  const employerLogos = EMPLOYERS.map((employer) => ({
    company: employer.company,
    logoSrc: employer.logoSrc,
    logoAlt: employer.logoAlt,
  }))

  return (
    <>
      <SiteHeader currentPath="/" />
      <main id="main">
        <section className="section-enter py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[240px_1fr] md:gap-14">
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-border/60 md:h-60 md:w-60">
              <Image
                src={HOME_CONTENT.heroImage.src}
                alt={HOME_CONTENT.heroImage.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="mb-4 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl">
                {HOME_CONTENT.heroTitle}
              </h1>
              <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {HOME_CONTENT.heroLead}
              </p>
              <ExperienceBio />
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={CALENDAR_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <CalendarDays className="h-4 w-4" />
                  Schedule a call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={ONE_PAGER_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-semibold md:text-3xl">What I do</h2>
            <ul className="space-y-4">
              {HOME_CONTENT.whatIDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border/50 bg-secondary/45 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-semibold md:text-3xl">How I work</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {HOME_CONTENT.howIWork.map((service) => (
                <Link
                  key={service.title}
                  href="/services"
                  className="group rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25"
                >
                  <h3 className="mb-3 text-lg font-semibold group-hover:text-accent">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-semibold md:text-3xl">Selected outcomes</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {HOME_CONTENT.selectedOutcomes.map((outcome) => (
                <Link
                  key={outcome.title}
                  href={outcome.href}
                  className="group rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25"
                >
                  <h3 className="mb-3 text-lg font-semibold group-hover:text-accent">{outcome.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{outcome.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 bg-secondary/45 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-6 font-serif text-2xl font-semibold md:text-3xl">Where I have done it</h2>
            <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">{HOME_CONTENT.whereDoneIt}</p>
            <ul className="mb-5 flex flex-wrap items-center gap-4">
              {employerLogos.map((employer) => (
                <li
                  key={employer.company}
                  title={employer.company}
                  className="relative h-10 w-10 overflow-hidden rounded bg-card ring-1 ring-border/60"
                >
                  <Image src={employer.logoSrc} alt={employer.logoAlt} fill className="object-contain p-1" />
                </li>
              ))}
            </ul>
            <ul className="mb-6 flex flex-wrap items-center gap-5">
              {HOME_CONTENT.experienceTools.map((tool) => (
                <li key={tool.label}>
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={tool.width}
                    height={tool.height}
                    className="h-10 w-10 object-contain md:h-12 md:w-12"
                  />
                </li>
              ))}
            </ul>
            <Link href="/games" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
              View full professional credits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <CTAStrip message={HOME_CONTENT.closingCta} />
      </main>
      <SiteFooter />
    </>
  )
}
