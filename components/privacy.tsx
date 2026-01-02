import { Card } from "@/components/ui/card"
import { Lock, EyeOff, Sparkles } from "lucide-react"

export function Privacy() {
  return (
    <section id="sanctuary" className="relative py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
            Your memories are sacred ground.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We guard what you treasure most with devotion. Fort Knox-level protection, because your heart's archive
            deserves nothing less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Wide */}
          <Card className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <EyeOff className="w-7 h-7 text-[#b79c5a]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Hidden From the World</h3>
            <p className="text-zinc-400 leading-relaxed">
              No prying eyes. No search engines prowling. Your sanctuary remains invisible—a secret garden accessible
              only to those you cherish.
            </p>
          </Card>

          {/* Card 2: Square-ish (Tall) */}
          <Card className="md:col-span-1 bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6">
                <Sparkles className="w-7 h-7 text-[#b79c5a]" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">Made to be Watched Together</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              A Netflix-style interface dedicated entirely to the couple. No ads, no distractions. Just their story in
              4K.
            </p>
          </Card>

          {/* Card 3: Small/Standard */}
          <Card className="md:col-span-1 bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Lock className="w-7 h-7 text-[#b79c5a]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">You Hold Every Key</h3>
            <p className="text-zinc-400 leading-relaxed">
              Absolute sovereignty. Password-protected chapters. Time-limited access. Your legacy, your rules—guarded
              with the reverence it deserves.
            </p>
          </Card>

          {/* Card 4: Wide */}
          <Card className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Sparkles className="w-7 h-7 text-[#b79c5a]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Every Moment Has Its Place</h3>
            <p className="text-zinc-400 leading-relaxed">
              We organize your memories into Seasons and Episodes - each moment given the space it deserves, beautifully
              and intentionally.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
