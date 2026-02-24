import type { Metadata } from "next"
import { Check } from "lucide-react"
import { CTAStrip } from "@/components/cta-strip"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SERVICES_CONTENT, SITE_URL } from "@/content/core-content"

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
