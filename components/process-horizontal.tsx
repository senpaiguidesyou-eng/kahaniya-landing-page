"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ProcessHorizontal() {
    const steps = [
        {
            number: "Step 1",
            title: "Collect Your Moments",
            content: [
                "Videos, photographs, screenshots of conversations, anything you want to remember.",
                "Not sure what to pick?",
                "That’s completely okay. The Kahaania team is always here to help you decide what feels right.",
            ],
        },
        {
            number: "Step 2",
            title: "Share With Us",
            content: [
                "Upload and share your content via Google Drive or email, and complete the one-time payment.",
            ],
        },
        {
            number: "Step 3",
            title: "Receive Your Kahaania",
            content: [
                "Your private Kahaania is delivered as a secure website, protected with a password.",
                "It’s yours to revisit, share, whenever you want, for years to come.",
            ],
        },
    ]

    return (
        <div className="mt-16 md:mt-24 border-t border-zinc-900 pt-16">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-4xl font-serif text-[#f1c60d] mb-4">From Moments to a Kahaania</h3>
            </div>

            {/* Mobile: Vertical Stack | Desktop: Grid */}
            <div className="pb-8 md:pb-0">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm"
                        >
                            <span className="text-[#f1c60d] font-serif text-sm tracking-wider mb-3 block uppercase opacity-80">
                                {step.number}
                            </span>
                            <h4 className="text-xl md:text-2xl font-serif text-white mb-4">
                                {step.title}
                            </h4>
                            <div className="space-y-3 text-zinc-400 leading-relaxed text-sm md:text-base">
                                {step.content.map((text, i) => (
                                    <p key={i} className={i === 1 && index === 0 ? "font-serif text-[#f1c60d] pt-1" : ""}>
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Begin Your Story Button */}
            <div className="flex justify-center mt-12 md:mt-16">
                <Link
                    href="/pricing"
                    className="text-xs md:text-sm uppercase tracking-wider text-[#f1c60d] hover:text-black transition-all border border-[#f1c60d]/50 hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] px-6 py-3 md:px-8 md:py-3 rounded whitespace-nowrap"
                >
                    Begin Your Story
                </Link>
            </div>
        </div>
    )
}
