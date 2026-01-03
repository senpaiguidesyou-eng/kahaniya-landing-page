"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-900" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="block relative h-[34px] w-[136px] md:h-10 md:w-40">
          <img
            src="https://kahaniya-memory-as-a-service.s3.us-east-1.amazonaws.com/public/thumbnails/kahaania+transparent.png"
            alt="Kahaania"
            className="object-contain w-full h-full"
          />
        </Link>
        <div className="flex items-center gap-12">
          <Link
            href="/pricing"
            className="text-xs md:text-sm uppercase tracking-wider text-[#b79c5a] hover:text-black transition-all border border-[#b79c5a]/50 hover:bg-[#b79c5a] px-3.5 py-1.5 md:px-4 md:py-2 rounded"
          >
            Begin Your Story
          </Link>
        </div>
      </div>
    </nav>
  )
}
