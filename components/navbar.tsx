"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { ContactModal } from "@/components/contact-modal"

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
      <div className="container mx-auto px-2 md:px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="block relative h-[35px] w-[140px] md:h-12 md:w-48 ml-2 md:ml-0">
          <img
            src="/kahaania-logo.png"
            alt="Kahaania"
            className="object-contain w-full h-full"
          />
        </Link>
        <div className="flex items-center gap-2 md:gap-8">
          <Link
            href="/pricing"
            className="hidden md:block text-[10px] md:text-sm uppercase tracking-normal md:tracking-wider text-[#f1c60d] hover:text-black transition-all border border-[#f1c60d]/50 hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] px-3 py-1 md:px-4 md:py-2 rounded whitespace-nowrap"
          >
            Begin Your Story
          </Link>
          <ContactModal>
            <button
              className="text-[10px] md:text-sm uppercase tracking-normal md:tracking-wider text-[#f1c60d] hover:text-black transition-all border border-[#f1c60d]/50 hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] px-3 py-1 md:px-4 md:py-2 rounded mr-2 md:mr-0 whitespace-nowrap"
            >
              Contact Us
            </button>
          </ContactModal>
        </div>
      </div>
    </nav>
  )
}
