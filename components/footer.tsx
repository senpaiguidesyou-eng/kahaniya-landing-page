"use client"

import Link from "next/link"
import { ContactModal } from "@/components/contact-modal"
import { motion } from "framer-motion"

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

          <div className="flex items-center gap-12 md:gap-8">

            <Link href="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
              Privacy
            </Link>
            <ContactModal>
              <button className="text-sm text-zinc-400 hover:text-white transition-colors py-3">
                Contact
              </button>
            </ContactModal>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-sm text-zinc-600">
          <p>© 2026 Kahaania. Where memories become legacy.</p>
        </div>
      </div>
    </motion.footer>
  )
}

