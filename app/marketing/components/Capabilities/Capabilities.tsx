'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from "framer-motion"
import Link from 'next/link'
import { heading1, heading2, body } from "../../../../fonts/font";
import ClientOnly from '../../../components/ClientOnly/ClientOnly'

// Dynamically import HoverCard with SSR disabled
const HoverCard = dynamic(() => import('./HoverCard'), { ssr: false });

type Props = {}

// Type definitions for FeatureBadge props
interface FeatureBadgeProps {
  text: string;
  icon: string;
  delay?: number;
}

const Capabilities = (props: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: .1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  // Animation for feature icon badges
  const FeatureBadge = ({ text, icon, delay = 0 }: FeatureBadgeProps) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="bg-gradient-to-br from-purple-600/20 to-blue-700/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-3 flex items-center gap-3 max-w-[220px]"
    >
      {/* <div className="text-purple-500 text-lg">{icon}</div> */}
      <p className="text-white text-sm font-medium">{text}</p>
    </motion.div>
  );

  // Service card links
  const serviceLinks = {
    goToMarket: "/marketing/services/go-to-market",
    performance: "/marketing/services/performance",
    content: "/marketing/services/content",
    automation: "/marketing/services/automation"
  };

  return (
    <ClientOnly>
      <div className='max-w-[1280px] mx-auto'>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '160px' }}
          transition={{ delay: 0.2 }}
          className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
        ></motion.div>
        <div className='flex md:pl-10 space-x-3 md:space-x-10'>
          <div className='md:w-10/12 mb-16'>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              viewport={{ once: false }}
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: '300ms' }}
            >
              <h3
                className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                style={{ transitionDelay: '300ms' }}
              >
                <p className={`text-[#939aff] ${heading1.className}`}>Core Services | Smart. Sharp. Scalable.</p>
                <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>
                  Comprehensive Marketing Solutions for Every Goal
                </span>
              </h3>
            </motion.h3>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className="flex flex-col items-center max-lg:mt-10">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              <div className='flex justify-between items-center'>
               <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8 mt-8 md:mt-10 px-4">

  {/* Card 1: Go-to-Market */}
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
    className="relative w-full sm:w-[380px] md:w-[460px] lg:w-[500px] h-[450px] sm:h-[430px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/85 to-black/80 z-10" />
    <img
      src="/Go-to-Market-But Smarter.jpg"
      alt="Go-to-Market"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 p-4 sm:p-6 z-20 flex flex-col justify-end h-full">
      <div>
        <p className={`text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${body.className}`}>
          Go-to-Market, But Smarter
        </p>
        <p className="text-[#c2c2c2] text-sm sm:text-md mb-3 sm:mb-4">
          Step into the spotlight with AI-crafted launch strategies that cut through the noise. We map your audience, dissect the competition, and craft a plan that hits fast and stays strong.
        </p>
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <FeatureBadge text="Market Intel" icon="🔍" delay={0.1} />
          <FeatureBadge text="Positioning" icon="🎯" delay={0.2} />
          <FeatureBadge text="Smart Pricing" icon="💸" delay={0.3} />
          <FeatureBadge text="Viral-Ready Promotion" icon="📣" delay={0.4} />
        </div>
        <p className="text-[#a0a0a0] text-xs sm:text-sm">
          Launch faster. Scale smarter.
        </p>
      </div>
    </div>
  </motion.div>

  {/* Repeat the same pattern for Card 2, 3, and 4 */}

  {/* Card 2: Performance Marketing */}
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
    className="relative w-full sm:w-[380px] md:w-[460px] lg:w-[500px] h-[450px] sm:h-[430px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/85 to-black/80 z-10" />
    <img
      src="/Performance Marketing That Performs.jpg"
      alt="Performance Marketing"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 p-4 sm:p-6 z-20 flex flex-col justify-end h-full">
      <div>
        <p className={`text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${body.className}`}>
          Performance Marketing That Performs
        </p>
        <p className="text-[#c2c2c2] text-sm sm:text-md mb-3 sm:mb-4">
          Run leaner, faster campaigns fueled by real-time machine learning. Our AI optimizes spend, targeting, and timing to keep results climbing.
        </p>
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <FeatureBadge text="Live Data Feedback" icon="📊" delay={0.1} />
          <FeatureBadge text="Smart A/B Testing" icon="🧪" delay={0.2} />
          <FeatureBadge text="Adaptive Campaign Loops" icon="🔁" delay={0.3} />
        </div>
        <p className="text-[#a0a0a0] text-xs sm:text-sm">
          Smarter spend. Bigger wins.
        </p>
      </div>
    </div>
  </motion.div>

  {/* Card 3: Content Creation */}
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
    className="relative w-full sm:w-[380px] md:w-[460px] lg:w-[500px] h-[450px] sm:h-[430px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/85 to-black/80 z-10" />
    <img
      src="/Content That Captivates and Converts.jpg"
      alt="Content Creation"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 p-4 sm:p-6 z-20 flex flex-col justify-end h-full">
      <div>
        <p className={`text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${body.className}`}>
          Content That Captivates (and Converts)
        </p>
        <p className="text-[#c2c2c2] text-sm sm:text-md mb-3 sm:mb-4">
          Not just pretty words. AI-enhanced content that's laser-focused on what your audience actually wants. SEO meets storytelling. Clicks become conversions.
        </p>
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <FeatureBadge text="Intent-Driven Blogs" icon="📈" delay={0.1} />
          <FeatureBadge text="Short-Form Magic" icon="🎥" delay={0.2} />
          <FeatureBadge text="NLP-Powered Copywriting" icon="🧠" delay={0.3} />
        </div>
        <p className="text-[#a0a0a0] text-xs sm:text-sm">
          Create. Connect. Convert.
        </p>
      </div>
    </div>
  </motion.div>

  {/* Card 4: Marketing Automation */}
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
    className="relative w-full sm:w-[380px] md:w-[460px] lg:w-[500px] h-[450px] sm:h-[430px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/85 to-black/80 z-10" />
    <img
      src="/Marketing on Autopilot.jpg"
      alt="Marketing on Autopilot"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 p-4 sm:p-6 z-20 flex flex-col justify-end h-full">
      <div>
        <p className={`text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 ${body.className}`}>
          Marketing on Autopilot
        </p>
        <p className="text-[#c2c2c2] text-sm sm:text-md mb-3 sm:mb-4">
          Automation with a heartbeat. Our systems personalize emails, segment your CRM, and scale campaigns—while you focus on the big picture.
        </p>
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <FeatureBadge text="Drip Campaigns" icon="📩" delay={0.1} />
          <FeatureBadge text="Smart Segments" icon="👥" delay={0.2} />
          <FeatureBadge text="Auto-Scheduling with Soul" icon="📆" delay={0.3} />
        </div>
        <p className="text-[#a0a0a0] text-xs sm:text-sm">
          Automate without losing the human touch.
        </p>
      </div>
    </div>
  </motion.div>
</div>

              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center my-16">
          <Link href="/marketing/approach">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-700 rounded-full text-white font-medium shadow-lg shadow-purple-900/30 flex items-center hover:shadow-xl hover:from-purple-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Our Approach
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </Link>
        </div>

        {/* Client-Centric Experiences Section */}
        <div className='flex md:pl-10 space-x-3 md:space-x-10 mt-20'>
          <div className='md:w-10/12 mb-16'>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              viewport={{ once: false }}
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: '300ms' }}
            >
              <h3
                className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                style={{ transitionDelay: '300ms' }}
              >
                <p className={`text-[#939aff] ${heading1.className}`}>Client-Centric Experiences</p>
                <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>
                  User-Centered Marketing, Personalized for Your Audience
                </span>
              </h3>
            </motion.h3>
          </div>
        </div>

        {/* Client experience panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 px-4">
          {/* Customer Insights Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm"
          >
            {/* <div className="text-purple-400 text-4xl mb-4">🧠</div> */}
            <h3 className={`text-white text-3xl mb-3 ${heading2.className}`}>Customer Insights</h3>
            <p className={`text-gray-300 ${body.className}`}>Deep dive into behavior, interests, and buying triggers.</p>
            
            {/* Example insights dashboard */}
            <div className="mt-6 bg-black/30 rounded-lg p-4 border border-purple-500/10">
              <div className="h-3 w-24 bg-purple-600/50 rounded-full mb-3"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-blue-500/30"></div>
                <div className="flex-1">
                  <div className="h-2 w-16 bg-gray-400/30 rounded-full mb-1"></div>
                  <div className="h-3 w-24 bg-gray-400/40 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-gradient-to-t from-purple-600/20 to-purple-600/5 rounded-md"></div>
                <div className="h-16 bg-gradient-to-t from-blue-600/20 to-blue-600/5 rounded-md"></div>
                <div className="h-16 bg-gradient-to-t from-indigo-600/20 to-indigo-600/5 rounded-md"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Campaign Design Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm"
          >
            {/* <div className="text-purple-400 text-4xl mb-4">🎨</div> */}
            <h3 className={`text-white text-3xl mb-3 ${heading2.className}`}>Campaign Design</h3>
            <p className={`text-gray-300 ${body.className}`}>Tailored down to the click. Built for the scroll.</p>
            
            {/* Example campaign visual */}
            <div className="mt-6 bg-black/30 rounded-lg p-4 border border-purple-500/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-600 rounded-full filter blur-3xl"></div>
              </div>
              <div className="relative">
                <div className="h-2 w-20 bg-gray-400/30 rounded-full mb-2"></div>
                <div className="h-4 w-32 bg-white/30 rounded-full mb-3"></div>
                <div className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-3"></div>
                <div className="h-3 w-full bg-gray-400/20 rounded-full mb-1"></div>
                <div className="h-3 w-3/4 bg-gray-400/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Brand Engagement Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20 p-6 backdrop-blur-sm"
          >
            {/* <div className="text-purple-400 text-4xl mb-4">💬</div> */}
            <h3 className={`text-white text-3xl mb-3 ${heading2.className}`}>Brand Engagement</h3>
            <p className={`text-gray-300 ${body.className}`}>Not just seen. Felt. Trusted. Shared.</p>
            
            {/* Example engagement visualization */}
            <div className="mt-6 bg-black/30 rounded-lg p-4 border border-purple-500/10">
              <div className="flex justify-between items-center mb-4">
                <div className="h-4 w-20 bg-purple-500/40 rounded-full"></div>
                <div className="flex gap-1">
                  <div className="h-4 w-4 rounded-full bg-purple-500/30"></div>
                  <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                  <div className="h-4 w-4 rounded-full bg-indigo-500/30"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1 mb-3">
                <div className="h-2 bg-purple-500/50 rounded-full"></div>
                <div className="h-4 bg-purple-500/50 rounded-full"></div>
                <div className="h-6 bg-purple-500/50 rounded-full"></div>
                <div className="h-10 bg-purple-500/50 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-white/20 rounded-full"></div>
                <div className="h-2 flex-1 bg-gray-400/20 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Visual Style Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-xl overflow-hidden"
          >
            <div className="h-36 bg-gradient-to-r from-purple-600/20 to-purple-900/20 relative">
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="h-2 w-32 bg-white/40 rounded-full mb-2"></div>
                <div className="h-3 w-48 bg-white/70 rounded-full mb-3"></div>
                <div className="h-8 w-32 bg-gradient-to-r from-purple-600 to-blue-700 rounded-full flex items-center justify-center">
                  <div className="h-2 w-20 bg-white/80 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className={`text-gray-300 text-sm ${body.className}`}>AI-personalized email journey</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-xl overflow-hidden"
          >
            <div className="h-36 bg-gradient-to-r from-blue-600/20 to-blue-900/20 relative">
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="h-2 w-24 bg-white/40 rounded-full mb-2"></div>
                <div className="h-3 w-40 bg-white/70 rounded-full mb-3"></div>
                <div className="h-20 w-20 absolute top-2 right-4 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-4">
              <p className={`text-gray-300 text-sm ${body.className}`}>Scroll-stopping IG/FB ad in action</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-xl overflow-hidden"
          >
            <div className="h-36 bg-gradient-to-r from-indigo-600/20 to-indigo-900/20 relative">
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between">
                  <div className="h-3 w-20 bg-white/40 rounded-full"></div>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 bg-white/30 rounded-full"></div>
                    <div className="h-3 w-3 bg-white/30 rounded-full"></div>
                    <div className="h-3 w-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="h-2 w-full bg-green-500/40 rounded-full mb-2"></div>
                  <div className="h-2 w-3/4 bg-blue-500/40 rounded-full mb-2"></div>
                  <div className="h-2 w-1/2 bg-purple-500/40 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className={`text-gray-300 text-sm ${body.className}`}>PPC ad dashboard climbing in ROI</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '160px' }}
          transition={{ delay: 0.2 }}
          className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
        ></motion.div>

        {/* Final CTA Section */}
        <div className="py-20 px-6 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-5xl text-white mb-8 ${heading1.className}`}
          >
            Ready to Elevate Your Marketing?
          </motion.h2>
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-700 rounded-full text-white text-lg font-medium shadow-lg shadow-purple-900/30 flex items-center hover:shadow-xl hover:from-purple-700 hover:to-blue-900 transition-all duration-300"
            >
              Contact Us Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </ClientOnly>
  )
}

export default Capabilities;





