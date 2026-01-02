import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Pricing() {
    return (
        <section id="pricing" className="relative py-24 px-6 bg-zinc-950/50 border-t border-zinc-900">
            <div className="container mx-auto max-w-7xl space-y-20">

                {/* Header & Definitions */}
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#b79c5a]">
                        No subscriptions. You pay once, it’s yours forever.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-left bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm">
                        <div className="space-y-2">
                            <span className="text-[#b79c5a] font-serif text-lg block">Project</span>
                            <p className="text-zinc-400 text-sm max-w-[200px]">
                                Your private, Netflix-style website that houses all your memories in one place.
                            </p>
                        </div>
                        <div className="w-px h-auto bg-zinc-800 hidden md:block"></div>
                        <div className="space-y-2">
                            <span className="text-[#b79c5a] font-serif text-lg block">Series</span>
                            <p className="text-zinc-400 text-sm max-w-[200px]">
                                A themed chapter of related moments (like a birthday, trip, or milestone).
                            </p>
                        </div>
                        <div className="w-px h-auto bg-zinc-800 hidden md:block"></div>
                        <div className="space-y-2">
                            <span className="text-[#b79c5a] font-serif text-lg block">Episode</span>
                            <p className="text-zinc-400 text-sm max-w-[200px]">
                                A short cinematic video (15–45 seconds) capturing one memory or moment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-transparent">

                    {/* BASE */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/20 md:rounded-l-2xl md:border-r-0 hover:bg-zinc-900/40 transition-colors">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">BASE</h3>
                            <p className="text-zinc-400 text-sm h-10">Perfect for gifting a single, meaningful story.</p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-light text-white">₹3,500</span>
                                <span className="text-zinc-500 text-sm">/ one-time</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "1 Project (invite-only website)",
                                "1 Series included",
                                "Up to 10 Episodes (videos)",
                                "Secure private link"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#b79c5a] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 border border-[#b79c5a]/50 text-[#b79c5a] hover:bg-[#b79c5a] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                            Start Your Story
                        </button>
                    </div>

                    {/* ADD-ON SERIES */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/40 border-y md:border-x hover:bg-zinc-900/60 transition-colors z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#b79c5a] text-black text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                            Most Popular Add-on
                        </div>
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">ADD-ON SERIES</h3>
                            <p className="text-zinc-400 text-sm h-10">Add more chapters to the same story.</p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-light text-white">₹1,500</span>
                                <span className="text-zinc-500 text-sm">/ per series</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Add 1 more Series to existing Project",
                                "Up to 10 Episodes per series",
                                "Ideal for new themes (b-days, trips)",
                                "Seamlessly added to same site"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#b79c5a] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-[#b79c5a] text-black hover:bg-[#cbb06d] transition-all text-sm uppercase tracking-wider rounded font-medium">
                            Add a Series
                        </button>
                    </div>

                    {/* ENTERPRISE */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/20 md:rounded-r-2xl md:border-l-0 hover:bg-zinc-900/40 transition-colors">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">ENTERPRISE</h3>
                            <p className="text-zinc-400 text-sm h-10">For special, custom, or large-scale requests.</p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-light text-white">Custom</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "High-volume video projects",
                                "Brand or institutional use cases",
                                "Custom design & integrations",
                                "Dedicated support & delivery"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#b79c5a] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-all text-sm uppercase tracking-wider rounded">
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
