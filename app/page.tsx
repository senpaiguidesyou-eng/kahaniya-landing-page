import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FolderProblem } from "@/components/folder-problem"
import { Offering } from "@/components/offering"
import { Belief } from "@/components/belief"
import { UseCases } from "@/components/use-cases"
import { CTA } from "@/components/cta"
import { Privacy } from "@/components/privacy"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <FolderProblem />
      <Offering />
      <Belief />
      <UseCases />
      <CTA />
      <Privacy />
      <Footer />
    </main>
  )
}
