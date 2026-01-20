import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kahaania",
  description: "The Archive of Your Life",
  openGraph: {
    title: "Kahaania | The Archive of Your Life",
    description: "Turn your memories into a cinematic experience. Your life story, beautifully told.",
    url: "https://kahaania.com",
    siteName: "Kahaania",
    images: [
      {
        url: "https://kahaniya-memory-as-a-service.s3.us-east-1.amazonaws.com/public/thumbnails/Kahaania+Plain+Black.png",
        width: 1200,
        height: 630,
        alt: "Kahaania - Memory As A Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-3QT3EL5J28" />
      </body>
    </html>
  )

}