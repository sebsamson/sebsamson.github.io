import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SITE_URL, WRITINGS_CONTENT } from "@/content/core-content"

export const metadata: Metadata = {
  title: "Writings",
  alternates: { canonical: `${SITE_URL}/essays-and-talks/` },
  description: "Talks and essays on production, player psychology, and game design systems.",
}

export default function EssaysAndTalksPage() {
  return (
    <>
      <SiteHeader currentPath="/essays-and-talks" />
      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="mb-6 font-serif text-3xl font-semibold md:text-5xl">Writings</h1>
            <p className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">{WRITINGS_CONTENT.intro}</p>

            <div className="space-y-12">
              {WRITINGS_CONTENT.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-6 font-serif text-2xl font-semibold">{section.title}</h2>
                  <div className="space-y-5">
                    {section.items.map((item) => (
                      <article key={item.title} className="rounded-lg border border-border bg-card p-6">
                        <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{item.tag}</p>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                        <div className="flex flex-wrap gap-3">
                          {item.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium transition-colors hover:bg-secondary"
                            >
                              <FileText className="h-4 w-4" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
