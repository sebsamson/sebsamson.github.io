import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { EMPLOYERS } from "@/content/employers"
import { GAMES_CONTENT, SITE_URL } from "@/content/core-content"

export const metadata: Metadata = {
  title: "Credits",
  alternates: { canonical: `${SITE_URL}/games/` },
  description: "Professional credits across studios, platforms, and live operations programs.",
}

export default function GamesPage() {
  return (
    <>
      <SiteHeader currentPath="/games" />
      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="mb-6 font-serif text-3xl font-semibold md:text-5xl">Credits</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {GAMES_CONTENT.intro} See how this experience maps into my{" "}
              <Link href="/services" className="underline decoration-border underline-offset-4 hover:text-foreground">
                services
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-14 px-6">
            {EMPLOYERS.map((employer) => (
              <article key={employer.company} className="rounded-lg border border-border bg-card p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded bg-secondary/70">
                    <Image src={employer.logoSrc} alt={employer.logoAlt} fill className="object-contain p-1" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold">{employer.company}</h2>
                    <p className="text-sm text-muted-foreground">{employer.rolePeriod}</p>
                  </div>
                </div>

                {employer.intro && <p className="mb-4 leading-relaxed text-muted-foreground">{employer.intro}</p>}

                <ul className="space-y-3">
                  {employer.items.map((item) => (
                    <li key={`${employer.company}-${item.label}`} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item.href ? (
                        <Link href={item.href} className="group inline-flex items-start gap-2 hover:text-accent">
                          <span>{item.label}</span>
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      ) : (
                        <span className="text-muted-foreground">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
