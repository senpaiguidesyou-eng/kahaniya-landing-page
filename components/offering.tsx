"use client"

import { Link as LinkIcon, Sparkles, Lock, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { ProcessHorizontal } from "./process-horizontal"

export function Offering() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: "/images/societal-approval.png",
      alt: "The Day We Got Societal & Legal Approval",
      category: "Anniversaries",
      subtext: "Turn your years together into a story with Kahaania.The laughs. The fights. The trips. The small routines. The way you slowly became “us.”",
      link: "https://app.kahaania.com/akhil-anushka-journey",
    },
    {
      src: "/images/digital-ads.png",
      alt: "Digital Ads",
      category: "Creative Portfolios",
      subtext: "Your work deserves more than grids and thumbnails.Your work is not meant to be skimmed. It’s meant to be experienced.",
      link: "https://app.kahaania.com/ved-006",
    },
    {
      src: "/images/birthday.png",
      alt: "Birthdays",
      category: "Birthdays",
      subtext: "Wishes captured on video, smiles you didn’t notice, photographs that move again, and messages meant for another time, gathered into one unfolding story.",
      link: "https://app.kahaania.com/sameer-pasha-life-moments-SP30X",
    },
    {
      src: "/images/travel.png",
      alt: "Travel Memories",
      category: "Your Personal Journal",
      subtext: "A place for your travels, your moments, your chapters. Trips, late nights, small wins, big changes. The people you met. The versions of you that existed.",
      link: "https://app.kahaania.com/rahul-travel-diaries-RK20",
    },
    {
      src: "/images/meant-to-happen.jpg",
      alt: "This was meant to happen",
      category: "Surprise Your Loved Ones",
      subtext: "Why wait for a date on the calendar to tell someone they matter? Some of the most meaningful surprises are the ones that say: “I was thinking about you.”",
      link: "https://app.kahaania.com/shivani-and-mohit-journey",
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
    <section id="offering" className="relative pt-0 pb-10 px-6 bg-zinc-950/30 -mt-10 scroll-mt-32">
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
        {/* Mobile View - Vertical Stack */}
        <div className="lg:hidden flex flex-col gap-12">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col gap-6">
              <Link href={image.link} target={image.link === "#" ? undefined : "_blank"} className="block relative group">
                <div className="relative overflow-hidden rounded-lg shadow-2xl p-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 border-2 border-[#f1c60d] bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#f1c60d] fill-[#f1c60d] ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="text-center">
                <h3
                  className="text-2xl font-serif text-[#f1c60d] font-bold mb-3"
                  style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
                >
                  {image.category}
                </h3>
                <p className="text-white text-base font-normal">
                  {image.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Carousel */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-16 mb-24">
          {/* Left Column - Wrapper for Carousel */}
          <div className="relative group w-3/5">
            <div className="relative overflow-hidden rounded-lg shadow-2xl p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
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
                  className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-[#f1c60d] w-8" : "bg-white/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Header */}
          <div className="text-left transition-all duration-500 ease-in-out w-2/5 max-w-md">
            <h3
              className="text-3xl font-serif text-[#f1c60d] font-bold mb-3"
              style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
            >
              {images[currentSlide].category}
            </h3>
            <p className="text-white text-lg font-normal">
              {images[currentSlide].subtext}
            </p>
            <div className="flex justify-start w-full">
              <Link
                href={images[currentSlide].link}
                target="_blank"
                className="mt-20 text-sm uppercase tracking-wider text-[#f1c60d] hover:text-black transition-all border border-[#f1c60d]/50 hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] px-4 py-1.5 rounded"
              >
                Watch Kahaania
              </Link>
            </div>
          </div>
        </div>

      </div>

      <ProcessHorizontal />
    </section >
  )
}
