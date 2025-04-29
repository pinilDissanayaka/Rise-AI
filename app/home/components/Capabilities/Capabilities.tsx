'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ClientOnly from '../../../components/ClientOnly/ClientOnly'
import { heading1, heading2, body } from '../../../../fonts/font'

// HoverCard is still loaded without SSR to avoid hydration issues
const HoverCard = dynamic(() => import('./HoverCard'), { ssr: false })

type Props = {}

const Capabilities = (props: Props) => {
  // three little helpers for the underline / arrow hover animations
  const [hoverAi, setHoverAi] = useState(false)
  const [hoverMarketing, setHoverMarketing] = useState(false)
  const [hoverTech, setHoverTech] = useState(false)

  return (
    <ClientOnly>
      <div className='max-w-[1280px] mx-auto'>
        {/* Heading */}
        <div className='flex md:pl-10 space-x-3 md:space-x-10'>
          <div className='md:w-10/12 mb-24'>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              viewport={{ once: false }}
              className={`text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white`}
            >
              <p className={`text-[#939aff] ${heading1.className}`}>
                We Build Thinkers, Not Just Tools
              </p>
              <span
                className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}
              >
                From digital minds that manage customer experiences to
                infrastructure that scales without a whisper—we build tools that
                think and tech that feels alive.
              </span>
            </motion.h3>
          </div>
        </div>

        {/* Cards */}
        <div className='flex justify-between items-center'>
          <div className='flex flex-col items-center max-lg:mt-10 w-full'>
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16'>

              {/* ---------- AI CARD ---------- */}
<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
  <HoverCard backgroundColor="#a55eea" direction="flex-col" left="0">
    {/* Image & overlay group */}
    <div className="relative w-[450px] h-[550px] overflow-hidden rounded-xl">
      {/* image */}
      <motion.img
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute inset-0 w-full h-full object-cover"
        width="300"
        height="300"
        loading="lazy"
        decoding="async"
        alt="Artificial Intelligence"
        aria-hidden="true"
        src="/home/ai.jpg"
      />

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* text + Discover button */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 space-y-3">
        <h4 className="text-white text-lg md:text-xl font-semibold">
          Artificial&nbsp;Intelligence
        </h4>
        <p className="text-white/90 text-sm md:text-base leading-snug">
          AI Solutions That Redefine Possibilities.
        </p>

        {/* Discover link now sits on top of the image */}
        <Link href="/ai" passHref legacyBehavior>
          <a
            onMouseEnter={() => setHoverAi(true)}
            onMouseLeave={() => setHoverAi(false)}
            className="inline-block text-xl font-semibold text-white"
          >
            Discover
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`mb-[2px] inline-block ml-3 transition ease-in duration-300 ${
                hoverAi ? 'translate-x-0' : '-translate-x-1'
              }`}
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L7.28 3.22ZM11 8l.53.53a.75.75 0 0 0 0-1.06L11 8Zm-4.78 3.72a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM6.22 4.28l4.25 4.25 1.06-1.06L7.28 3.22 6.22 4.28Zm4.25 3.19l-4.25 4.25 1.06 1.06 4.25-4.25-1.06-1.06Z"
              />
              <path
                className={`transition ease-in duration-150 ${
                  hoverAi ? 'opacity-100' : 'opacity-0'
                }`}
                stroke="currentColor"
                d="M1.75 8H11"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`block h-[2.5px] origin-left transition ease-in duration-300 bg-white rounded-full ${
                hoverAi ? 'w-11/12 scale-100' : 'w-0 scale-0'
              }`}
            />
          </a>
        </Link>
      </div>
    </div>
  </HoverCard>
</motion.div>

              {/* ---------- MARKETING CARD ---------- */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
  <HoverCard backgroundColor="#a55eea" direction="flex-col" left="0">
    <div className="relative w-[450px] h-[550px] overflow-hidden rounded-xl p-4">
      {/* image */}
      <motion.img
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute inset-0 w-full h-full object-cover"
        width="300"
        height="300"
        loading="lazy"
        decoding="async"
        alt="Marketing Strategies"
        src="/home/marketing.png"
        aria-hidden="true"
      />

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* text + Discover button overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 space-y-3">
        <h4 className="text-white text-lg md:text-xl font-semibold">
          Marketing
        </h4>
        <p className="text-white/90 text-sm md:text-base leading-snug">
          Strategies That Speak. Marketing That Converts.
        </p>

        {/* keeps previous hover styles */}
        <Link href="/marketing" passHref legacyBehavior>
          <a
            onMouseEnter={() => setHoverMarketing(true)}
            onMouseLeave={() => setHoverMarketing(false)}
            className="inline-block py-1 text-xl font-semibold text-white"
          >
            Discover
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`mb-[2px] inline-block ml-3 transition ease-in duration-300 ${
                hoverMarketing ? 'translate-x-0' : '-translate-x-1'
              }`}
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L7.28 3.22ZM11 8l.53.53a.75.75 0 0 0 0-1.06L11 8Zm-4.78 3.72a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM6.22 4.28l4.25 4.25 1.06-1.06L7.28 3.22 6.22 4.28Zm4.25 3.19l-4.25 4.25 1.06 1.06 4.25-4.25-1.06-1.06Z"
              />
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                d="M1.75 8H11"
                className={`transition ease-in duration-150 ${
                  hoverMarketing ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </svg>
            <span
              className={`block h-[2.5px] origin-left rounded-full bg-white transition ease-in duration-300 ${
                hoverMarketing ? 'w-11/12 scale-100' : 'w-0 scale-0'
              }`}
            />
          </a>
        </Link>
      </div>
    </div>
  </HoverCard>
</motion.div>


              {/* ---------- TECHNOLOGY CARD ---------- */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
  <HoverCard backgroundColor="#a55eea" direction="flex-col" left="0">
    <div className="relative w-[450px] h-[550px] overflow-hidden rounded-xl p-4">
      {/* image */}
      <motion.img
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute inset-0 w-full h-full object-cover"
        width="300"
        height="300"
        loading="lazy"
        decoding="async"
        alt="Innovative Technology"
        src="/home/technology.png"
        aria-hidden="true"
      />

      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* text + Discover button */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 space-y-3">
        <h4 className="text-white text-lg md:text-xl font-semibold">
          Technology
        </h4>
        <p className="text-white/90 text-sm md:text-base leading-snug">
          Innovative Technology Solutions for a Connected World
        </p>

        <Link href="/technology" passHref legacyBehavior>
          <a
            onMouseEnter={() => setHoverTech(true)}
            onMouseLeave={() => setHoverTech(false)}
            className="inline-block py-1 text-xl font-semibold text-white"
          >
            Discover
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`mb-[2px] inline-block ml-3 transition ease-in duration-300 ${
                hoverTech ? 'translate-x-0' : '-translate-x-1'
              }`}
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L7.28 3.22ZM11 8l.53.53a.75.75 0 0 0 0-1.06L11 8Zm-4.78 3.72a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM6.22 4.28l4.25 4.25 1.06-1.06L7.28 3.22 6.22 4.28Zm4.25 3.19l-4.25 4.25 1.06 1.06 4.25-4.25-1.06-1.06Z"
              />
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                d="M1.75 8H11"
                className={`transition ease-in duration-150 ${
                  hoverTech ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </svg>
            <span
              className={`block h-[2.5px] origin-left rounded-full bg-white transition ease-in duration-300 ${
                hoverTech ? 'w-11/12 scale-100' : 'w-0 scale-0'
              }`}
            />
          </a>
        </Link>
      </div>
    </div>
  </HoverCard>
</motion.div>


            </div>
          </div>
        </div>

        {/* decorative vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '160px' }}
          transition={{ delay: 0.2 }}
          className='md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent'
        ></motion.div>
      </div>
    </ClientOnly>
  )
}

export default Capabilities
