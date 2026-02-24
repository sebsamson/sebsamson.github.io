import { ArrowUpRight, Download, Mail } from "lucide-react"
import {
  FOOTER_LEGAL_TEXT,
  INTRO_CALL_HREF,
  LINKEDIN_HREF,
  ONE_PAGER_HREF,
} from "@/content/core-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={INTRO_CALL_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Book an intro call
          </a>
          <a
            href={ONE_PAGER_HREF}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download one-pager
          </a>
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {FOOTER_LEGAL_TEXT}
        </p>
      </div>
    </footer>
  )
}
