"use client";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} bg-[#030014] min-h-screen`}>
      {children}
    </div>
  )
}