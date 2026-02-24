import type { Metadata } from "next"
import { ArrowUpRight, Download, Mail } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { CONTACT_CONTENT, SITE_URL } from "@/content/core-content"

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: `${SITE_URL}/contact/` },
  description: "Contact Sebastien Samson for fractional game direction support.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader currentPath="/contact" />
      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="mb-6 font-serif text-3xl font-semibold md:text-5xl">Contact</h1>
            <p className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">{CONTACT_CONTENT.intro}</p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <section className="rounded-lg border border-border bg-card p-8">
                <h2 className="mb-6 text-xl font-semibold">Direct actions</h2>
                <div className="flex flex-col gap-4">
                  {CONTACT_CONTENT.directActions.map((action) => {
                    const isPrimary = action.label === "Book an intro call"
                    const isLinkedIn = action.label === "Connect on LinkedIn"
                    const icon = isLinkedIn ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : action.label === "Download one-pager" ? (
                      <Download className="h-4 w-4" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )

                    return (
                      <a
                        key={action.label}
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noopener noreferrer" : undefined}
                        className={
                          isPrimary
                            ? "inline-flex items-center gap-3 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                            : "inline-flex items-center gap-3 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                        }
                      >
                        {icon}
                        {action.label}
                      </a>
                    )
                  })}
                </div>
              </section>

              <div className="flex flex-col gap-8">
                <section className="rounded-lg border border-border bg-card p-8">
                  <h2 className="mb-4 text-xl font-semibold">Engagement fit checklist</h2>
                  <ul className="space-y-3">
                    {CONTACT_CONTENT.engagementFitChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-lg border border-border bg-card p-8">
                  <h2 className="mb-4 text-xl font-semibold">Response expectations</h2>
                  <ul className="space-y-3">
                    {CONTACT_CONTENT.responseExpectations.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
