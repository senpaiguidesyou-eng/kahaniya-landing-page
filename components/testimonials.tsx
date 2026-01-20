"use client"

import { Check, CheckCheck } from "lucide-react"

export function Testimonials() {
    const reviews = [
        {
            name: "Rohan & Meera",
            message: "Hey! We just watched the Kahaania you made for our anniversary. Meera is literally crying right now (happy tears!). It felt like reliving the whole year in 10 minutes. Thank you so so much! ❤️",
            time: "10:42 PM",
            type: "partner",
        },
        {
            name: "Ananya",
            message: "I wanted to gift something meaningful to my parents for their 25th, but didn't know what. This was perfect. They saw their old photos and videos from 1999 and were so emotional. Best gift ever.",
            time: "11:15 AM",
            type: "parents",
        },
        {
            name: "Vikram",
            message: "Bro, the portfolio is insane. Clients are actually spending time watching the projects instead of just skimming through. It looks so professional. 🚀",
            time: "4:20 PM",
            type: "portfolio",
        },
        {
            name: "Sneha",
            message: "I’ve been journaling for years but never looked back at them. Turning my travel notes and small clips into a 'Season' is such a beautiful idea. I feel like the main character of my own movie haha.",
            time: "9:30 AM",
            type: "journal",
        },
        {
            name: "Arjun",
            message: "The quality is top notch. I was worried about privacy but the password protection is solid. Felt safe sharing the link with my family group.",
            time: "2:05 PM",
            type: "general",
        },
        {
            name: "Priya",
            message: "It’s not just a slideshow. The music, the flow... it tells a story. I didn't realize how much we had grown as a couple until I watched it all together.",
            time: "8:50 PM",
            type: "partner",
        },
        {
            name: "Rahul's Mom",
            message: "Beta, this is beautiful. Seeing you growing up, your college days, your first job... it’s a treasure. God bless you.",
            time: "6:15 PM",
            type: "parents",
        },
        {
            name: "Siddharth",
            message: "Just sent the link to my girlfriend. She’s watching it right now and texting me non-stop. You guys are magicians! ✨",
            time: "11:59 PM",
            type: "partner",
        },
    ]

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,44,51,0.2),transparent_60%)]" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <p className="font-sans text-[12px] lg:text-[14px] font-medium tracking-[0.18em] uppercase text-[#f1c60d]">
                        Real Stories
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-serif text-white font-medium"
                        style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
                    >
                        The feelings that matter most.
                    </h2>
                </div>

                <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`break-inside-avoid bg-[#0b141a] rounded-xl p-3 md:p-4 border border-zinc-800/50 shadow-lg relative group hover:scale-[1.02] transition-transform duration-300 ${index % 2 === 0 ? "rotate-1" : "-rotate-1"
                                } ${index % 3 === 0 ? "md:rotate-2" : ""} ${index === 4 ? "md:-rotate-2" : ""}`}
                        >
                            {/* WhatsApp Header Mock */}
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 border-b border-zinc-800/50 pb-2">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center text-[10px] md:text-xs text-white font-medium">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <p className="text-[#e9edef] text-[11px] md:text-sm font-medium leading-none">{review.name}</p>
                                </div>
                            </div>

                            {/* Message Bubble - Received Style (Left Aligned, Dark Gray) */}
                            <div className="bg-[#202c33] rounded-tl-none rounded-lg p-2 md:p-3 relative mr-auto max-w-[95%] md:max-w-[90%] w-fit text-left">
                                {/* Tail for bubble */}
                                <div className="absolute top-0 -left-2 w-0 h-0 border-[8px] border-transparent border-t-[#202c33] border-r-[#202c33] transform rotate-0" />

                                <p className="text-[#e9edef] text-[11px] md:text-[15px] leading-snug">
                                    {review.message}
                                </p>
                                <div className="flex items-center justify-end gap-1 mt-1 opacity-70">
                                    <span className="text-[9px] md:text-[10px] text-[#e9edef]">{review.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
