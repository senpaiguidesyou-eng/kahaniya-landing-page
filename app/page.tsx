import { Navbar } from "@/components/navbar"
import Script from "next/script"
import { Hero } from "@/components/hero"


import { Offering } from "@/components/offering"
import { Testimonials } from "@/components/testimonials"
import { ProcessHorizontal } from "@/components/process-horizontal"




import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />

      <Offering />
      <Testimonials />
      <ProcessHorizontal />




      <Footer />

    </main>
  )
}
