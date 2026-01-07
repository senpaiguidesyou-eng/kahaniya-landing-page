import { Navbar } from "@/components/navbar"
import Script from "next/script"
import { Hero } from "@/components/hero"

import { Offering } from "@/components/offering"



import { Privacy } from "@/components/privacy"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />

      <Offering />



      <Privacy />
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
