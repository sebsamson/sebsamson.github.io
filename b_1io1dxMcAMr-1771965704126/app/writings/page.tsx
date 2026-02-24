import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/content/core-content"

export const metadata: Metadata = {
  title: "Redirecting to Writings",
  alternates: { canonical: `${SITE_URL}/essays-and-talks/` },
  robots: { index: false, follow: true },
}

export default function WritingsRedirectPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 font-serif text-3xl font-semibold">Page moved</h1>
      <p className="text-muted-foreground">
        This content moved to <Link href="/essays-and-talks" className="underline">Writings</Link>. If you are not redirected automatically, use the link.
      </p>
    </main>
  )
}
