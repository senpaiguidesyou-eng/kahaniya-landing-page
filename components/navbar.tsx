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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-normal tracking-tight text-amber-500">
          Kahani.
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link
            href="#vision"
            className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            THE VISION
          </Link>
          <Link
            href="#product"
            className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            THE PRODUCT
          </Link>
          <Link
            href="#create"
            className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors border border-amber-500/50 hover:border-amber-500 px-4 py-2 rounded"
          >
            Create Yours
          </Link>
        </div>
      </div>
    </nav>
  )
}
