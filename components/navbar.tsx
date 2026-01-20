"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { ContactModal } from "@/components/contact-modal"

import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-zinc-900 py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="block relative h-8 w-32 md:h-12 md:w-48">
          <img
            src="/kahaania-logo.png"
            alt="Kahaania"
            className="object-contain w-full h-full"
          />
        </Link>
        <div className="flex items-center gap-4">
          <ContactModal>
            <button
              className="hidden md:block text-sm uppercase tracking-wider text-[#f1c60d] hover:text-black transition-all border border-[#f1c60d]/50 hover:bg-linear-to-r hover:from-[#f1c60d] hover:to-[#fcd432] px-6 py-2.5 rounded whitespace-nowrap"
            >
              Request Early Access
            </button>
          </ContactModal>
          <ContactModal>
            <button
              className="md:hidden text-[10px] sm:text-xs uppercase tracking-wider text-[#f1c60d] hover:text-black transition-all border border-[#f1c60d]/50 hover:bg-linear-to-r hover:from-[#f1c60d] hover:to-[#fcd432] px-4 py-3 rounded whitespace-nowrap active:scale-95 touch-manipulation"
              style={{ minHeight: '44px' }}
            >
              Request Early Access
            </button>
          </ContactModal>
        </div>
      </div>
    </motion.nav>
  )
}

