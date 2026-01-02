import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function ProductMockup() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative group">
          {/* Mockup container */}
          <div className="relative bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl aspect-video p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
              <Badge className="bg-[#b79c5a]/95 text-black border-0 backdrop-blur-sm font-semibold shadow-lg shadow-[#b79c5a]/30">
                Exclusive Collection
              </Badge>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Summer in Amalfi</h2>

              <div className="flex items-center gap-4 text-sm text-zinc-300">
                <span className="font-semibold text-[#b79c5a]">2024</span>
                <span className="w-1 h-1 bg-[#b79c5a] rounded-full" />
                <span>4K HDR</span>
                <span className="w-1 h-1 bg-[#b79c5a] rounded-full" />
                <span>12 Intimate Chapters</span>
              </div>

              <Button className="bg-[#b79c5a] hover:bg-[#b79c5a] text-black font-semibold mt-4 shadow-xl shadow-[#b79c5a]/40 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Relive the Journey
              </Button>
            </div>

            {/* Background placeholder */}
            <img
              src="/cinematic-view-of-amalfi-coast-at-golden-hour.jpg"
              alt="Amalfi coast"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
