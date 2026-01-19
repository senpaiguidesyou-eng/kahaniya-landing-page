"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { motion } from "framer-motion"

export function Pricing() {
    const [slots, setSlots] = useState(7)

    useEffect(() => {
        // Subtle realistic nudge: decrement a slot after 15 seconds
        const timer = setTimeout(() => {
            setSlots(prev => Math.max(prev - 1, 2))
        }, 20000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section id="pricing" className="relative py-24 px-6 bg-zinc-950/50">
            <div className="container mx-auto max-w-7xl space-y-16 md:space-y-20">

                {/* Header & Value Proposition */}
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#f1c60d] font-bold">
                        A Home for Your Legacy
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                        Your memories are more than just <br className="hidden md:block" />
                        <span className="text-[#f1c60d]">data in a folder.</span>
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        In an era of endless scrolling and lost cloud backups, we provide a private, cinematic sanctuary for the stories that actually matter.
                    </p>
                </div>

                {/* Value-Driven Call to Action (Instead of Pricing Grid) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-[#f1c60d]/10 to-[#fcd432]/10 blur-3xl -z-10 pointer-events-none" />

                    <div className="bg-zinc-900/40 border border-[#f1c60d]/30 rounded-3xl p-8 md:p-16 text-center space-y-10 shadow-[0_0_50px_rgba(241,198,13,0.05)]">
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                                Your Legacy Deserves <br />
                                <span className="text-[#f1c60d]">More Than a Price Tag.</span>
                            </h3>
                            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                Kahaania is a high-touch service where our narrative architects personally craft your legacy. No automated algorithms—just human artistry and a dedicated team for every story.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left py-8 border-y border-zinc-800/50">
                            {[
                                { title: "Hand-Curated", desc: "Every video and photo is placed with intention by our design team." },
                                { title: "Zero Maintenance", desc: "No subscriptions. No storage limits. Your legacy lives forever." },
                                { title: "Private & Secure", desc: "Direct control over who sees your story. Encrypted and safe." }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <span className="text-[#f1c60d] font-bold text-sm uppercase tracking-widest">{item.title}</span>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <p className="text-zinc-500 text-sm italic">
                                Due to the bespoke nature of our curation, we only take on 60 new stories each month.
                            </p>
                            <ContactModal>
                                <button className="inline-flex items-center justify-center px-10 py-5 bg-linear-to-r from-[#f1c60d] to-[#fcd432] text-black font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(241,198,13,0.2)] active:scale-95 text-xs md:text-sm">
                                    Request Your Personal Curation
                                </button>
                            </ContactModal>
                            <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs py-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                {slots} slots remaining for {new Date().toLocaleString('default', { month: 'long' })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


