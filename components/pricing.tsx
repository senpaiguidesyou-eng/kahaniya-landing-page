import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"

export function Pricing() {
    return (
        <section id="pricing" className="relative py-24 px-6 bg-zinc-950/50 border-t border-zinc-900">
            <div className="container mx-auto max-w-7xl space-y-20">

                {/* Header & Definitions */}
                <div className="text-center space-y-8 max-w-6xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#b79c5a]">
                        You pay once, it’s yours forever.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-left bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm">
                        <div className="space-y-2">
                            <span className="text-[#b79c5a] font-serif text-lg block">Story</span>
                            <p className="text-zinc-400 text-sm max-w-[250px]">
                                Your own private Netflix-themed website where all your memories or chapters live together and can be revisited anytime.
                            </p>
                        </div>
                        <div className="w-px h-auto bg-zinc-800 hidden md:block"></div>
                        <div className="space-y-2">
                            <span className="text-[#b79c5a] font-serif text-lg block">Chapter</span>
                            <p className="text-zinc-400 text-sm max-w-[250px]">
                                A meaningful part of your life such as a birthday, a trip, a relationship, a year, or a milestone.
                            </p>
                        </div>
                        <div className="w-px h-auto bg-zinc-800 hidden md:block"></div>
                        <div className="space-y-2">
                            <span className="text-[#b79c5a] font-serif text-lg block">Moment</span>
                            <p className="text-zinc-400 text-sm max-w-[250px]">
                                A short cinematic clip capturing a core memory such as a sunset, a message from someone you love, a shared laugh, or a moment you wish time would pause on.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-transparent">

                    {/* BASE */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/20 md:rounded-l-2xl md:border-r-0 hover:bg-zinc-900/40 transition-colors">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">The First Chapter</h3>
                            <p className="text-zinc-400 text-sm h-10">For telling one complete, meaningful story.</p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[32px] md:text-4xl font-light text-white">₹3,500</span>
                                <span className="text-zinc-500 text-sm">/ one-time</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Your private Kahaania website",
                                "One chapter of memories",
                                "Up to 10 carefully crafted moments",
                                "A secure link, meant only for those you choose"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#b79c5a] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ContactModal>
                            <button className="w-full py-3 border border-[#b79c5a]/50 text-[#b79c5a] hover:bg-[#b79c5a] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                                Begin Your Story
                            </button>
                        </ContactModal>
                    </div>

                    {/* ADD-ON SERIES */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/40 border-y md:border-x hover:bg-zinc-900/60 transition-colors z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b79c5a] text-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                            Most stories grow with time.
                        </div>
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">Another Chapter</h3>
                            <p className="text-zinc-400 text-sm h-10">Because life doesn’t happen just once.</p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[32px] md:text-4xl font-light text-white">₹1,500</span>
                                <span className="text-zinc-500 text-sm">/ per chapter</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Add a new chapter to the same story",
                                "Up to 10 new moments",
                                "Perfect for new trips, birthdays, years, or phases",
                                "Seamlessly woven into your existing Kahaania"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#b79c5a] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ContactModal>
                            <button className="w-full py-3 border border-[#b79c5a]/50 text-[#b79c5a] hover:bg-[#b79c5a] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                                Continue the story
                            </button>
                        </ContactModal>
                    </div>

                    {/* ENTERPRISE */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/20 md:rounded-r-2xl md:border-l-0 hover:bg-zinc-900/40 transition-colors">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">Bespoke Stories</h3>
                            <p className="text-zinc-400 text-sm h-10">For stories that don’t fit templates.</p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[32px] md:text-4xl font-light text-white">Curated</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Large collections of memories",
                                "Family archives",
                                "Custom visual direction",
                                "Personally crafted, start to finish"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#b79c5a] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ContactModal>
                            <button className="w-full py-3 border border-[#b79c5a]/50 text-[#b79c5a] hover:bg-[#b79c5a] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                                Talk to Us
                            </button>
                        </ContactModal>
                    </div>

                </div>
            </div>
        </section>
    )
}
