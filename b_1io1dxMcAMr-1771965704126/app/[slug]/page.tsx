import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { PROJECT_SLUGS, PROJECTS_BY_SLUG } from "@/content/projects"
import { SITE_URL } from "@/content/core-content"

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS_BY_SLUG[slug]

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: project.title,
    alternates: { canonical: `${SITE_URL}/${project.slug}/` },
    description: project.paragraphs[0] ?? `${project.title} project details.`,
  }
}

function mediaLayoutClass(slug: string, mediaCount: number) {
  if (mediaCount <= 1) {
    return "space-y-4"
  }

  if (slug === "ugc") {
    return "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }

  if (slug === "petzfantasy-ds") {
    return "grid grid-cols-1 gap-4 md:grid-cols-2"
  }

  return "grid grid-cols-1 gap-4 sm:grid-cols-2"
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS_BY_SLUG[slug]

  if (!project) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="sr-only">{project.title}</h1>
            <p className="mb-8">
              <Link
                href="/games"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to experience
              </Link>
            </p>

            <article className="rounded-lg border border-border bg-card p-8 md:p-10">
              <h2 className="mb-8 font-serif text-2xl font-semibold md:text-4xl">{project.title}</h2>

              {project.media.length > 0 && (
                <div className={`mb-8 ${mediaLayoutClass(project.slug, project.media.length)}`}>
                  {project.media.map((media, index) => {
                    if (media.type === "iframe") {
                      return (
                        <div
                          key={`${project.slug}-iframe-${index}`}
                          className="relative w-full overflow-hidden rounded-md border border-border bg-secondary/30"
                          style={{ paddingBottom: "56.25%" }}
                        >
                          <iframe
                            src={media.src}
                            title={media.title}
                            className="absolute left-0 top-0 h-full w-full"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )
                    }

                    return (
                      <div
                        key={`${project.slug}-image-${media.src}`}
                        className="relative overflow-hidden rounded-md border border-border bg-secondary/30"
                      >
                        <Image
                          src={media.src}
                          alt={media.alt}
                          width={media.width ?? 1200}
                          height={media.height ?? 675}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )
                  })}
                </div>
              )}

              {project.metaLine && (
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{project.metaLine}</p>
              )}

              <div className="space-y-4">
                {project.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.bullets.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]">Key responsibilities</h3>
                  <ul className="space-y-2">
                    {project.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.referenceLinks && project.referenceLinks.length > 0 && (
                <p className="mt-6 text-sm text-muted-foreground">
                  Reference:{" "}
                  {project.referenceLinks.map((link, index) => (
                    <span key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 hover:text-foreground"
                      >
                        {link.label}
                      </a>
                      {index < project.referenceLinks!.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </p>
              )}
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
