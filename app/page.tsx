import { Navbar } from "@/components/navbar"
import Script from "next/script"
import { Hero } from "@/components/hero"

import { Offering } from "@/components/offering"
import { ProcessHorizontal } from "@/components/process-horizontal"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Offering />
      <ProcessHorizontal />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
