import { Navbar } from "@/components/navbar"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

import Script from "next/script"

export default function PricingPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Pricing />
            </div>
            <Footer />

        </main>
    )
}
