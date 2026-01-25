import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { CSPostHogProvider } from "./providers"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kahaania",
  description: "The Archive of Your Life",
  icons: {
    icon: "https://kahaniya-memory-as-a-service.s3.us-east-1.amazonaws.com/public/thumbnails/Kahaania+Plain+Black.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${playfair.variable}`}>
        <CSPostHogProvider>
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-3QT3EL5J28" />
        </CSPostHogProvider>
      </body>
    </html>
  )

}