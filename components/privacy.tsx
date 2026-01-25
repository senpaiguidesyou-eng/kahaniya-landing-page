import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Lock, HeartHandshake, Footprints } from "lucide-react"

export function Privacy() {
  return (
    <section id="sanctuary" className="relative py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2
            className="font-serif text-[30px] md:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
          >
            Your memories are sacred ground.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We guard what you treasure most with devotion. Fort Knox-level protection, because your heart's archive
            deserves nothing less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Every Moment Has Its Place */}
          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Footprints className="w-7 h-7 text-[#f1c60d]" strokeWidth={1.1} />
            </div>
            <h3
              className="font-serif text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
            >
              Every Moment Has Its Place
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              We organize your memories into Seasons and Episodes - each moment given the space it deserves, beautifully
              and intentionally.
            </p>
          </Card>

          {/* Card 2: Made to be Watched Together */}
          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <HeartHandshake className="w-7 h-7 text-[#f1c60d]" strokeWidth={1.1} />
            </div>
            <h3
              className="font-serif text-xl font-semibold text-white mb-2"
              style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
            >
              Made to be Watched Together
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              A quiet screen. No noise, no interruptions, just time, memories, and the presence they deserve.
            </p>
          </Card>

          {/* Card 3: You Hold Every Key */}
          <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 space-y-4 shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Lock className="w-7 h-7 text-[#f1c60d]" strokeWidth={1.1} />
            </div>
            <h3
              className="font-serif text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
            >
              You Hold Every Key
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Password-protected chapters, shared only with those you choose, your story, kept private and treated with care.
            </p>
          </Card>
        </div>

        <div className="flex justify-center pt-8">
          <Link
            href="/pricing"
            className="px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-[#f1c60d] to-[#fcd432] text-black hover:from-[#dcb50b] hover:to-[#eec92e] transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-medium rounded"
          >
            Begin Your Story
          </Link>
        </div>
      </div>
    </section>
  )
}
