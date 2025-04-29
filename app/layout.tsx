import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import Nav from "./components/Nav/Nav"

// Dynamically import StarsCanvas with SSR disabled to prevent hydration errors
const StarsCanvas = dynamic(
  () => import("./components/Background/Background").then((mod) => mod.default),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rise AI',
  description: 'Rise AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Nav />
        <div className="relative z-10"> 
          {children}
        </div>
      </body>
    </html>
  )
}
