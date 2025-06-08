import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Code, Camera, Video, User, Mail } from "lucide-react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NorbelD | Portfolio",
  description: "Multimedia Artist, Front-end Developer, UI/UX Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Fixed floating navbar - visible on all pages */}
        <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200 flex items-center gap-4 z-50">
          <Link href="/" className="px-3 py-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1">
            <svg
              className="w-4 h-4 text-zinc-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
          <Link
            href="/coding"
            className="px-3 py-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1"
          >
            <Code className="w-4 h-4 text-zinc-700" />
          </Link>
          <Link
            href="/photo"
            className="px-3 py-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1"
          >
            <Camera className="w-4 h-4 text-zinc-700" />
          </Link>
          <Link
            href="/video"
            className="px-3 py-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1"
          >
            <Video className="w-4 h-4 text-zinc-700" />
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1"
          >
            <User className="w-4 h-4 text-zinc-700" />
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1"
          >
            <Mail className="w-4 h-4 text-zinc-700" />
          </Link>
        </nav>
      </body>
    </html>
  )
}
