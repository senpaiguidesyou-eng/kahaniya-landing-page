import { Layers, Tv, Heart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Layers,
      title: "Stories, Not Timelines",
      description:
        "Weave your memories into chapters that move the heart. This isn't chronology—it's narrative. This is how legends are told.",
    },
    {
      icon: Tv,
      title: "Cinematic by Nature",
      description:
        "Your memories deserve to be felt, not just seen. Immersive galleries. Breathtaking layouts. The respect that great moments command.",
    },
    {
      icon: Heart,
      title: "Love as Curation",
      description:
        "Every photo chosen with care. Every detail a declaration. This is how you celebrate the souls who shaped your journey.",
    },
  ]

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
            For the storytellers, not the broadcasters.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Built for those who understand that true connection lives in the quiet spaces between moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1c60d]/30 to-black border border-[#f1c60d]/30 flex items-center justify-center mx-auto shadow-lg shadow-[#f1c60d]/30">
                <feature.icon className="w-8 h-8 text-[#f1c60d]" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
