import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"

export function Pricing() {
    return (
        <section id="pricing" className="relative py-24 px-6 bg-zinc-950/50">
            <div className="container mx-auto max-w-7xl space-y-20">

                {/* Header & Definitions */}
                <div className="text-center space-y-8 max-w-6xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#f1c60d]">
                        You pay once, it’s yours forever - No subscriptions. No auto-renewals
                    </p>

                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-4 md:gap-6 text-left bg-transparent p-0 border-0">
                        <div className="space-y-2 w-full p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 md:bg-zinc-900/40 md:w-auto md:min-w-[300px]">
                            <span className="text-[#f1c60d] font-serif text-lg block">Story</span>
                            <p className="text-zinc-400 text-sm w-full md:max-w-[250px]">
                                Your private Netflix-style website.<br /><br />
                                This is the main website you get, where all your memories live together.
                            </p>
                        </div>

                        <div className="space-y-2 w-full p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 md:bg-zinc-900/40 md:w-auto md:min-w-[340px]">
                            <span className="text-[#f1c60d] font-serif text-lg block">Chapter</span>
                            <div className="text-zinc-400 text-sm w-full md:max-w-[300px]">
                                Each chapter represents one phase, theme, or period of your life.<br /><br />
                                For example:
                                <ul className="list-disc pl-4 mt-1 space-y-1">
                                    <li>School Days</li>
                                    <li>Japan Trip</li>
                                    <li>Early days of Dating</li>
                                    <li>London Days</li>
                                </ul>
                                <br />
                                Every new chapter appears as a new row on your Kahaania homepage.
                            </div>
                        </div>

                        <div className="space-y-2 w-full p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 md:bg-zinc-900/40 md:w-auto md:min-w-[340px]">
                            <span className="text-[#f1c60d] font-serif text-lg block">Moment</span>
                            <div className="text-zinc-400 text-sm w-full md:max-w-[300px]">
                                An individual memory inside a Chapter (like an episode).<br />
                                A moment can be:
                                <ul className="list-disc pl-4 mt-1 space-y-1">
                                    <li>a video</li>
                                    <li>a photo</li>
                                    <li>a screenshot of whatsapp conversation</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Mobile Pricing Header */}
                <div className="md:hidden text-center mt-12 mb-6">
                    <h3 className="text-2xl font-serif text-[#f1c60d]">Pricing</h3>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-transparent">

                    {/* BASE */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/20 md:rounded-l-2xl md:border-r-0 hover:bg-zinc-900/40 transition-colors">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">The First Chapter</h3>
                            <p className="text-zinc-400 text-sm h-auto min-h-[4rem]">
                                Everything you need to start your Kahaania.<br />
                                Best if you’re creating your story for the first time.
                            </p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg md:text-xl text-zinc-500 line-through">₹4,000</span>
                                    <span className="text-[32px] md:text-4xl font-light text-white">₹2,499</span>
                                    <span className="text-zinc-500 text-sm">/ one-time</span>
                                </div>
                                <p className="text-[#f1c60d] text-xs font-medium uppercase tracking-wider mt-2">Early bird offer</p>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Your private Kahaania website",
                                "1 chapter (one row on the homepage)",
                                "Up to 10 moments (videos or photos)",
                                "Secure, password-protected access"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#f1c60d] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ContactModal>
                            <button className="w-full py-3 border border-[#f1c60d]/50 text-[#f1c60d] hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                                BEGIN YOUR STORY
                            </button>
                        </ContactModal>
                    </div>

                    {/* ADD-ON SERIES */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/40 border-y md:border-x hover:bg-zinc-900/60 transition-colors z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#f1c60d] to-[#fcd432] text-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                            Most stories grow with time.
                        </div>
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">Another Chapter</h3>
                            <p className="text-zinc-400 text-sm h-auto min-h-[4rem]">
                                Add a new chapter/new row to your existing Kahaania.<br />
                                Perfect for new trips, milestones, or phases of life.
                            </p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[32px] md:text-4xl font-light text-white">₹1,500</span>
                                <span className="text-zinc-500 text-sm">/ per chapter</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "1 new chapter added to your website",
                                "Up to 10 new moments",
                                "Appears as a new row on your homepage",
                                "Seamlessly added to your existing Kahaania"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#f1c60d] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ContactModal>
                            <button className="w-full py-3 border border-[#f1c60d]/50 text-[#f1c60d] hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                                ADD A CHAPTER
                            </button>
                        </ContactModal>
                    </div>

                    {/* ENTERPRISE */}
                    <div className="relative flex flex-col p-8 md:p-10 border border-zinc-800 bg-zinc-900/20 md:rounded-r-2xl md:border-l-0 hover:bg-zinc-900/40 transition-colors">
                        <div className="mb-6">
                            <h3 className="font-serif text-2xl text-white mb-2">Bespoke Stories</h3>
                            <p className="text-zinc-400 text-sm h-auto min-h-[4rem]">
                                For stories that don’t fit into a simple structure.<br />
                                Ideal for large collections or family archives.
                            </p>
                        </div>

                        <div className="mb-8 pb-8 border-b border-zinc-800">
                            <div className="flex items-baseline gap-1">
                                <span className="text-[32px] md:text-4xl font-light text-white">Custom pricing</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Large volumes of photos & videos",
                                "Family histories or legacy projects",
                                "Custom visual layout and flow",
                                "End-to-end curation by the Kahaania team"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <Check className="w-4 h-4 text-[#f1c60d] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <ContactModal>
                            <button className="w-full py-3 border border-[#f1c60d]/50 text-[#f1c60d] hover:bg-gradient-to-r hover:from-[#f1c60d] hover:to-[#fcd432] hover:text-black transition-all text-sm uppercase tracking-wider rounded">
                                TALK TO US
                            </button>
                        </ContactModal>
                    </div>

                </div>
            </div>
        </section>
    )
}
