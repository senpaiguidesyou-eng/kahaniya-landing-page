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
        <Link href="/" className="block relative h-10 w-40">
          <img
            src="https://kahaniya-memory-as-a-service.s3.us-east-1.amazonaws.com/public/thumbnails/kahaania+transparent.png"
            alt="Kahaania"
            className="object-contain w-full h-full"
          />
        </Link>
        <div className="hidden md:flex items-center gap-12">
          <Link
            href="#create"
            className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors border border-[#b79c5a]/50 hover:border-[#b79c5a] px-4 py-2 rounded"
          >
            Begin Your Story
          </Link>
        </div>
      </div>
    </nav>
  )
}
