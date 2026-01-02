"use client"

import { Sparkles, Lock, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Offering() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "/images/gemini-generated-image-ooc3yoooc3yoooc3.jpeg",
      alt: "PRIYAFLIX - The Priya Chronicles: A Love Story",
    },
    {
      src: "/images/gemini-generated-image-cmepsncmepsncmep.jpeg",
      alt: "RIYAFLIX - A Year of Us",
    },
    {
      src: "https://kahaniya-memory-as-a-service.s3.us-east-1.amazonaws.com/public/thumbnails/Travel.png",
      alt: "TRAVEL - Our Adventures",
    },
    {
      src: "/images/gemini-generated-image-a9i71na9i71na9i7.jpeg",
      alt: "SAKSHIFLIX - Sakshi's 24th celebration",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-0 pb-10 px-6 bg-zinc-950/30 -mt-10">
      {/* Subtle star particles background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 font-light">What You Leave Behind</p>
        </div>

        <div className="flex justify-center items-center">
          {/* Left Column - Feature Cards */}


          {/* Right Column - Netflix Mockup Carousel */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full h-auto transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-amber-600 w-8" : "bg-white/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
