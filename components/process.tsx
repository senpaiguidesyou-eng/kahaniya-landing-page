"use client"

import { motion } from "framer-motion"

export function Process() {
    const steps = [
        {
            number: "01",
            title: "Collect Your Moments",
            content: [
                "Videos, photographs, screenshots of conversations, anything you want to remember.",
                "Not sure what to pick?",
                "That’s completely okay. The Kahaania team is always here to help you decide what feels right.",
                "Just drop us a message, we’ll guide you with ideas.",
            ],
        },
        {
            number: "02",
            title: "Share With Us",
            content: [
                "Upload and share your content via Google Drive or email, and complete the one-time payment.",
            ],
        },
        {
            number: "03",
            title: "Receive Your Kahaania",
            content: [
                "Your private Kahaania is delivered as a secure website, protected with a password.",
                "It’s yours to revisit, share, and keep, whenever you want, for years to come.",
            ],
        },
    ]

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#f1c60d] mb-4">From Moments to a Kahaania</h2>
                </div>

                <div className="space-y-2 md:space-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-12 items-start">
                                <span className="text-6xl md:text-8xl font-serif text-zinc-900 font-bold opacity-50 select-none">
                                    {step.number}
                                </span>
                                <div className="space-y-6 pt-4">
                                    <div>
                                        <span className="text-[#f1c60d] font-serif text-lg tracking-wider mb-2 block">Step {index + 1}</span>
                                        <h3 className="text-2xl md:text-3xl font-serif text-white">{step.title}</h3>
                                    </div>
                                    <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                                        {step.content.map((text, i) => (
                                            <p key={i} className={i === 1 && index === 0 ? "font-serif text-[#f1c60d] text-xl pt-2" : ""}>
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Arrow between steps */}
                            {index < steps.length - 1 && (
                                <div className="flex justify-center mt-12 mb-2 md:mb-4">
                                    <svg width="32" height="50" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0V38M19 31L12 38L5 31" stroke="#f1c60d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}
