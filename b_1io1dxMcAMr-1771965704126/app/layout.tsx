import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "@/app/globals.css"
import { SITE_NAME, SITE_URL } from "@/content/core-content"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Fractional Game Director`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Fractional game direction for vision clarity, roadmap prioritization, and stakeholder alignment.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  )
}
