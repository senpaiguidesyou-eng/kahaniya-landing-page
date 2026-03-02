"use client"

import Link from "next/link"
import { ContactModal } from "@/components/contact-modal"
import { motion } from "framer-motion"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative border-t border-zinc-900 bg-black py-16 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="relative h-14 w-56 mx-auto md:mx-0">
              <img
                src="https://kahaniya-memory-as-a-service.s3.us-east-1.amazonaws.com/public/thumbnails/Kahaania+Transparent2.png"
                alt="Kahaania"
                className="object-contain w-full h-full object-center md:object-left"
              />
            </div>

          </div>

          <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-1 md:gap-8">
            <Link href="/terms-and-conditions" className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
              Privacy
            </Link>
            <Link href="/refund-policy" className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
              Refunds
            </Link>
            <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
              Pricing
            </Link>
            <ContactModal>
              <button className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
                Contact
              </button>
            </ContactModal>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-sm text-zinc-600 space-y-3">
          <div className="flex items-center justify-center gap-4">
            <a
              className="text-zinc-400 hover:text-white transition-colors"
              href="mailto:getmykahaania@gmail.com"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              className="text-zinc-400 hover:text-white transition-colors"
              href="https://www.instagram.com/kahaa.nia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
          <p>© 2026 Kahaania. Where memories become legacy.</p>
        </div>
      </div>
    </motion.footer>
  )
}
