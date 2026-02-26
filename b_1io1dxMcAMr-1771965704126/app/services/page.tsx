import Image from "next/image"
import type { Metadata } from "next"
import { CalendarDays, Check } from "lucide-react"
import { CTAStrip } from "@/components/cta-strip"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { CALENDAR_HREF, GO_FRACTIONAL_HREF, SERVICES_CONTENT, SITE_URL } from "@/content/core-content"

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: `${SITE_URL}/services/` },
  description: "Productized fractional game direction services and deliverables.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader currentPath="/services" />
      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="mb-6 font-serif text-3xl font-semibold md:text-5xl">Services</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{SERVICES_CONTENT.lead}</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-serif text-2xl font-semibold md:text-3xl">Engagement options</h2>
            <div className="space-y-10">
              {SERVICES_CONTENT.offers.map((offer) => (
                <article key={offer.title} className="rounded-lg border border-border bg-card p-8 md:p-10">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{offer.duration}</p>
                  <h3 className="mb-4 font-serif text-2xl font-semibold md:text-3xl">{offer.title}</h3>
                  <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">{offer.useCase}</p>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">Deliverables</h4>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {offer.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={CALENDAR_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Schedule a call
                    </a>
                    <a
                      href={GO_FRACTIONAL_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                    >
                      <Image
                        src="/images/go_fractional.jpg"
                        alt="GO Fractional logo"
                        width={16}
                        height={16}
                        className="h-4 w-4 rounded-sm object-cover"
                      />
                      Hire me on GO Fractional
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTAStrip message={SERVICES_CONTENT.closingCta} />
      </main>
      <SiteFooter />
    </>
  )
}
