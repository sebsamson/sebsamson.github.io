import Image from "next/image"
import { CalendarDays, Download, Mail } from "lucide-react"
import {
  CALENDAR_HREF,
  FOOTER_LEGAL_TEXT,
  GO_FRACTIONAL_HREF,
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
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href={CALENDAR_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <CalendarDays className="h-4 w-4" />
            Schedule a call
          </a>
          <a
            href={GO_FRACTIONAL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
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
          <a
            href={ONE_PAGER_HREF}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Image
              src="/images/LinkedIn_icon.png"
              alt="LinkedIn logo"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            LinkedIn
          </a>
        </div>
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {FOOTER_LEGAL_TEXT}
        </p>
      </div>
    </footer>
  )
}
