import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

import { Offering } from "@/components/offering"



import { Privacy } from "@/components/privacy"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />

      <Offering />



      <Privacy />
      <Footer />
    </main>
  )
}
