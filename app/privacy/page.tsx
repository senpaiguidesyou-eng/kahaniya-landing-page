import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />

            <section className="relative pt-32 pb-24 px-6 md:px-12">
                <div className="container mx-auto max-w-4xl space-y-16">

                    {/* Header */}
                    <div className="space-y-6 text-center">
                        <h1
                            className="font-serif text-[32px] md:text-5xl lg:text-6xl font-normal text-white leading-tight"
                            style={{ fontFamily: 'var(--font-playfair), "Georgia", serif' }}
                        >
                            Privacy, by Design
                        </h1>
                        <div className="space-y-4">
                            <p className="text-lg md:text-2xl text-[#b79c5a] font-light">
                                At Kahaania, privacy isn’t a feature.
                                <br />
                                It’s the foundation.
                            </p>
                            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                What you create here isn’t content for the internet, it’s a personal archive, meant for a few people, sometimes just one. We treat it with the same care we would our own memories.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-zinc-900" />

                    {/* Content Sections */}
                    <div className="space-y-16 text-left">

                        {/* What We Collect */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">What We Collect (and Why)</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>We collect only what’s necessary to create and deliver your Kahaania.</p>
                                <p>This may include:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Your name and email (to create and manage your account)</li>
                                    <li>Videos, photos, and text you choose to upload</li>
                                    <li>Basic usage data (to ensure the platform works smoothly)</li>
                                </ul>
                                <p className="text-white pt-2">We do not collect data for advertising, profiling, or resale.</p>
                            </div>
                        </div>

                        {/* Your Memories Are Private */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">Your Memories Are Private</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Your Kahaania is private by default</li>
                                    <li>Access is controlled by you (passwords, share links)</li>
                                    <li>Your content is never publicly discoverable unless you explicitly choose to share it</li>
                                </ul>
                                <p>We do not showcase, reuse, or view your content for marketing or promotional purposes.</p>
                            </div>
                        </div>

                        {/* Who Can See Your Content */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">Who Can See Your Content?</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li className="text-white">You</li>
                                    <li className="text-white">People you explicitly share access with</li>
                                    <li className="text-white">No one else</li>
                                </ul>
                                <div className="pl-5 space-y-1 pt-2">
                                    <p>Not advertisers.</p>
                                    <p>Not third-party platforms.</p>
                                    <p>Not random employees browsing through user data.</p>
                                </div>
                                <p>Internal access is strictly limited and only used when technically required (for example, debugging, with safeguards).</p>
                            </div>
                        </div>

                        {/* How Your Data Is Stored */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">How Your Data Is Stored</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Media is stored using secure, industry-standard cloud infrastructure</li>
                                    <li>Data is encrypted in transit and protected at rest</li>
                                    <li>We work only with trusted infrastructure partners required to run the service</li>
                                </ul>
                                <p className="text-white">Your memories are treated as sensitive personal data, not as “user-generated content.”</p>
                            </div>
                        </div>

                        {/* What We Don’t Do */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">What We Don’t Do</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>Let’s be clear:</p>
                                <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                        <span>We don’t sell your data</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>We don’t run ads on your Kahaania</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>We don’t train AI models on your videos or photos</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>We don’t scan your content for insights, trends, or “engagement”</span>
                                    </div>
                                </div>
                                <p className="text-white text-lg pt-2 font-serif italic">Your story stays yours.</p>
                            </div>
                        </div>

                        {/* Deleting Your Data */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">Deleting Your Data</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>You’re always in control.</p>
                                <p>If you choose to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Delete a project</li>
                                    <li>Close your account</li>
                                </ul>
                                <p>Your data will be permanently removed from our systems within a reasonable timeframe, unless we’re legally required to retain specific information.</p>
                            </div>
                        </div>

                        {/* Children’s Privacy */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">Children’s Privacy</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>Kahaania is designed for personal use by adults.</p>
                                <p>If content involves children, it remains private and accessible only to those you authorize.</p>
                                <p>We do not knowingly collect data from minors without parental consent.</p>
                            </div>
                        </div>

                        {/* Changes to This Policy */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif text-white">Changes to This Policy</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>If we ever update this policy, we’ll do so thoughtfully, and never in a way that compromises the core promise of privacy.</p>
                                <p>Major changes will be communicated clearly.</p>
                            </div>
                        </div>

                        {/* Questions or Concerns? */}
                        <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 space-y-6 text-center">
                            <h2 className="text-2xl font-serif text-white">Questions or Concerns?</h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                <p>If something doesn’t feel right, ask us.</p>
                                <a href="mailto:hello@kahaania.com" className="text-[#b79c5a] hover:underline text-lg block py-2">
                                    📩 hello@kahaania.com
                                </a>
                                <p>We’d rather explain than hide behind fine print.</p>
                            </div>
                        </div>

                        {/* In Short */}
                        <div className="pt-8 text-center space-y-4">
                            <h3 className="text-xl md:text-2xl font-serif text-white">In Short</h3>
                            <p className="text-lg text-zinc-300">
                                Your memories are not a product.
                                <br />
                                <span className="text-[#b79c5a]">They’re a trust.</span>
                            </p>
                            <p className="text-zinc-400">And we intend to keep it that way.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
