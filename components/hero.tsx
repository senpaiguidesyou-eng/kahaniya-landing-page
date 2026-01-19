"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle star particles background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[66px] lg:text-[80px] font-serif text-white tracking-tight leading-[1.15] md:leading-[1.1]"
          style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
        >
          Preserving Emotions,
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f1c60d] to-[#fcd432]">Not Just Files.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed pt-4 md:pt-10"
        >
          A private, cinematic Netflix themed website that turns your photos and videos into seasons and episodes. <span className="hidden sm:inline">Because some moments are meant to stay.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8"
        >
          <a
            href="#offering"
            className="px-8 py-4 md:px-8 md:py-3.5 bg-linear-to-r from-[#f1c60d] to-[#fcd432] text-black hover:from-[#dcb50b] hover:to-[#eec92e] transition-all duration-300 text-xs md:text-sm uppercase tracking-widest font-bold rounded shadow-[0_0_20px_rgba(241,198,13,0.3)] active:scale-95 touch-manipulation"
          >
            EXPLORE THE EXPERIENCE NOW
          </a>
        </motion.div>
      </div>
    </section>
  )
}

