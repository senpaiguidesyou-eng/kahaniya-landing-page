"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
    {
        question: "How do I share my photos and videos?",
        answer: "It's a seamless process. Once we connect on WhatsApp, you'll share your content via a secure link. Our storytellers then begin the narrative architecture of your site."
    },
    {
        question: "How long does it take to build my Kahaani?",
        answer: "Artisan curation takes time. Typically, your legacy site is ready within 2 business days. We'll provide a private review link as each chapter takes shape."
    },
    {
        question: "Is my content private and secure?",
        answer: "Privacy is our cornerstone. Your Kahaani is protected by individual passwords and hosted on secure, private architecture. We are guardians of your story, not data brokers."
    },
    {
        question: "Can I expand my story later?",
        answer: "Always. Kahaania is designed as a living archive. You can add new chapters or milestones anytime by simply reaching out to our team."
    },
    {
        question: "How does it look on mobile?",
        answer: "Stunning. Your Kahaani is optimized for a cinematic experience on every device, from iPhones to large-screen displays."
    }
]

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">Details for the Curious</h2>
                    <p className="text-zinc-500">How we weave your legacy with care.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-zinc-800/30 transition-colors"
                            >
                                <span className="text-white font-medium text-lg pr-8">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="w-5 h-5 text-[#f1c60d] shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-zinc-500 shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
