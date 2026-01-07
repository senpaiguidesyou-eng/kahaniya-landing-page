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
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-3QT3EL5J28"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3QT3EL5J28');
        `}
            </Script>
        </main>
    )
}
