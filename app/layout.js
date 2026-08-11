import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata = {
  title: "Selinna Tran | Design Impact Portfolio",
  description:
    "Design Ops & Impact Portfolio for Selinna Tran — Graphic Designer & Visual Marketer at Ethico. Multi-channel campaigns, webinar graphics, and product collateral.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0b111e",
  colorScheme: "dark",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-ink`}>
      <body className="font-sans text-slate-200 antialiased">{children}</body>
    </html>
  )
}
