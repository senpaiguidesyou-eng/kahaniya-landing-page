import { Card } from "@/components/ui/card"
import { Users, HardDrive, Sparkles } from "lucide-react"

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
            True intimacy demands silence.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            In a world drowning in noise, your most sacred moments deserve sanctuary. We created the refuge they've been
            waiting for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900/50 border-zinc-800 p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
              <Users className="w-6 h-6 text-zinc-400" />
            </div>
            <h3 className="font-semibold text-xl text-white">Social Feeds</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Public stages. Endless scrolling. Where memories become currency and intimacy dissolves into performance.
            </p>
            <div className="text-xs text-zinc-600 uppercase tracking-wider">The Performance</div>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-zinc-400" />
            </div>
            <h3 className="font-semibold text-xl text-white">Cloud Storage</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Scattered fragments. Forgotten folders. Where your life's most precious moments become nameless files lost
              in digital darkness.
            </p>
            <div className="text-xs text-zinc-600 uppercase tracking-wider">The Abyss</div>
          </Card>

          <Card className="bg-gradient-to-br from-[#f1c60d]/40 to-[#f1c60d]/20 border-[#f1c60d]/60 p-8 space-y-4 relative overflow-hidden shadow-xl shadow-[#f1c60d]/50">
            <div className="absolute inset-0 bg-[#f1c60d]/10" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#f1c60d]/40 flex items-center justify-center ring-2 ring-[#f1c60d]/40">
                <Sparkles className="w-6 h-6 text-[#f1c60d]" />
              </div>
              <h3 className="font-semibold text-xl text-amber-100 mt-4">Kahaania</h3>
              <p className="text-sm text-zinc-200 leading-relaxed mt-4">
                A private haven. Where every memory is honored. Where your story unfolds with the reverence of a
                masterpiece.
              </p>
              <div className="text-xs text-[#f1c60d] uppercase tracking-wider mt-4 font-semibold">Your Sanctuary</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
