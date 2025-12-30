import { Card } from "@/components/ui/card"
import { Lock, EyeOff } from "lucide-react"

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border-amber-900/20 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-950/30 to-zinc-900 flex items-center justify-center ring-2 ring-amber-900/30">
              <EyeOff className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Hidden From the World</h3>
            <p className="text-zinc-400 leading-relaxed">
              No prying eyes. No search engines prowling. Your sanctuary remains invisible—a secret garden accessible
              only to those you cherish.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border-amber-900/20 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-950/30 to-zinc-900 flex items-center justify-center ring-2 ring-amber-900/30">
              <Lock className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">You Hold Every Key</h3>
            <p className="text-zinc-400 leading-relaxed">
              Absolute sovereignty. Password-protected chapters. Time-limited access. Your legacy, your rules—guarded
              with the reverence it deserves.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
