import Link from "next/link"
import { NAV_LINKS, SITE_NAME } from "@/content/core-content"

interface SiteHeaderProps {
  currentPath?: string
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isCurrent = currentPath === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={
                  isCurrent
                    ? "text-sm font-semibold text-foreground"
                    : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <details className="group md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-border list-none">
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-5 bg-foreground before:block before:h-0.5 before:w-5 before:-translate-y-1.5 before:bg-foreground before:content-[''] after:block after:h-0.5 after:w-5 after:translate-y-1 after:bg-foreground after:content-['']" />
          </summary>
          <nav className="absolute left-0 right-0 top-[68px] border-t border-border/50 bg-background px-6 pb-6 pt-4" aria-label="Primary mobile">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isCurrent = currentPath === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      isCurrent
                        ? "text-sm font-semibold text-foreground"
                        : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        </details>
      </div>
    </header>
  )
}
