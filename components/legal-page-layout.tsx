import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type LegalPageLayoutProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function LegalPageLayout({ title, subtitle, children }: LegalPageLayoutProps) {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl space-y-10">
          <header className="space-y-4 text-center">
            <h1
              className="font-serif text-[32px] md:text-5xl lg:text-6xl font-normal text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
            >
              {title}
            </h1>
            {subtitle ? <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p> : null}
          </header>

          <div className="w-full h-px bg-zinc-900" />

          <div className="space-y-6 text-zinc-300 leading-relaxed text-sm md:text-base">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
