"use client"

import { useState } from "react"

const categories = [
  {
    id: "expected",
    title: "The Expected",
    subtitle: "",
    chapters: [
      {
        title: "The Wedding",
        description: "A season where two lives choose permanence.",
      },
      {
        title: "The Birthday",
        description: "A yearly reminder that someone exists because the world is better with them in it.",
      },
      {
        title: "The Anniversary",
        description: "Time, measured not in years—but in shared becoming.",
      },
      {
        title: "Valentine's Day",
        description: "Love, written without witnesses.",
      },
    ],
  },
  {
    id: "intimate",
    title: "The Intimate",
    subtitle: "",
    chapters: [
      {
        title: "Just Because",
        description: "No reason. No occasion. Just love refusing to wait.",
      },
      {
        title: "The Letter",
        description: "What you never say out loud, finally said.",
      },
      {
        title: "The Promise",
        description: "A moment that didn't need a ring—but changed everything.",
      },
      {
        title: "The Apology",
        description: "When words matter enough to be kept forever.",
      },
    ],
  },
  {
    id: "transitional",
    title: "The Transitional",
    subtitle: "",
    chapters: [
      {
        title: "The Long Distance",
        description: "Miles apart. Still sharing a life.",
      },
      {
        title: "The Move",
        description: "One home ending. Another beginning.",
      },
      {
        title: "The Return",
        description: "Coming back—not to a place, but to a person.",
      },
      {
        title: "The Wait",
        description: "For news. For hope. For the future to answer.",
      },
    ],
  },
  {
    id: "legacy",
    title: "The Legacy",
    subtitle: "",
    chapters: [
      {
        title: "The Parents",
        description: "The people who made your story possible.",
      },
      {
        title: "The Child",
        description: "A life entering the world, already loved.",
      },
      {
        title: "The Memory",
        description: "For someone who never really left.",
      },
      {
        title: "The Time Capsule",
        description: "Meant to be opened by someone you'll never meet as the same person.",
      },
    ],
  },
]

export function UseCases() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left side */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Designed for
              <br />
              <span className="text-amber-600">Every Chapter.</span>
            </h2>
          </div>

          {/* Right side - 4x4 Grid */}
          <div className="space-y-8">
            <p className="text-zinc-400 text-lg italic">Not every chapter has a calendar reminder.</p>

            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="relative h-64 cursor-pointer perspective-1000"
                  onClick={() => setFlippedCard(flippedCard === category.id ? null : category.id)}
                  onMouseEnter={() => setFlippedCard(category.id)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                      flippedCard === category.id ? "rotate-y-180" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCard === category.id ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front Face - Category Title */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center items-center p-6 border border-zinc-800 bg-black/50 backdrop-blur-sm"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <h3 className="font-serif text-2xl text-white mb-2 text-center">{category.title}</h3>
                      {category.subtitle && (
                        <p className="text-xs text-amber-600 italic text-center">{category.subtitle}</p>
                      )}
                    </div>

                    {/* Back Face - Chapter Details */}
                    <div
                      className="absolute inset-0 p-4 border border-amber-600/30 bg-black/80 backdrop-blur-sm overflow-y-auto"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="space-y-3">
                        {category.chapters.map((chapter, idx) => (
                          <div key={idx} className="border-b border-zinc-900 pb-3 last:border-0">
                            <h4 className="text-sm font-medium text-amber-600 mb-1">{chapter.title}</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">{chapter.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
