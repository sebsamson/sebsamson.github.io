interface CTAStripProps {
  message: string
}

export function CTAStrip({ message }: CTAStripProps) {
  return (
    <section className="border-t border-border/50 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {message}
        </p>
      </div>
    </section>
  )
}
