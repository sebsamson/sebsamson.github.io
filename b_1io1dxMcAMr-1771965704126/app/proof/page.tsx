import type { Metadata } from "next"
import { CalendarDays, Quote } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { CALENDAR_HREF, PROOF_CONTENT, SITE_URL } from "@/content/core-content"

export const metadata: Metadata = {
  title: "Proof",
  alternates: { canonical: `${SITE_URL}/proof/` },
  description: "Selected outcomes from director and manager roles.",
}

export default function ProofPage() {
  return (
    <>
      <SiteHeader currentPath="/proof" />
      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="mb-6 font-serif text-3xl font-semibold md:text-5xl">Proof</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{PROOF_CONTENT.intro}</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
            {PROOF_CONTENT.caseStudies.map((study) => (
              <article
                key={study.id}
                id={study.id}
                className="scroll-mt-24 rounded-lg border border-border bg-card p-8 md:p-10"
              >
                <h2 className="mb-8 font-serif text-2xl font-semibold md:text-3xl">{study.title}</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-10">
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Context</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{study.context}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Problem</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">What I did</h3>
                    <ul className="space-y-2">
                      {study.whatIDid.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Artifacts delivered
                    </h3>
                    <ul className="space-y-2">
                      {study.artifactsDelivered.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 border-t border-border/60 pt-6">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Result</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{study.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-semibold md:text-3xl">Testimonials</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROOF_CONTENT.testimonials.map((testimonial) => (
                <blockquote key={testimonial.cite} className="rounded-lg border border-border bg-card p-8">
                  <Quote className="mb-4 h-6 w-6 text-accent" />
                  <p className="mb-4 text-sm leading-relaxed">{testimonial.quote}</p>
                  <cite className="text-xs not-italic text-muted-foreground">{testimonial.cite}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8 md:flex-row md:items-center md:justify-between">
              <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {PROOF_CONTENT.closingCta}
              </p>
              <a
                href={CALENDAR_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-secondary"
              >
                <CalendarDays className="h-4 w-4" />
                Schedule a call
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
