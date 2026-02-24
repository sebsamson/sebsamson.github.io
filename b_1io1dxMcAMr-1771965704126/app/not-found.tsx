import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-4 font-serif text-4xl font-semibold">Page not found</h1>
        <p className="mb-6 text-muted-foreground">The page you requested is not available.</p>
        <Link href="/" className="underline decoration-border underline-offset-4">
          Return home
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
