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

const Capabilities = (props: Props) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:.1,
          },
        },
      };
    
    const item = {
      hidden: { opacity: 0, y:40 },
      show: { opacity: 1, y:0},
    };
    
    return (
      <ClientOnly>
        <div className='max-w-[1280px] mx-auto relative'>
          {/* Background gradients removed */}
          
          <div className='flex md:pl-10 space-x-3 md:space-x-10'>
            <div className='md:w-10/12'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: false }}
                className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-12 font-medium text-white"
              >
                <h3 className={`text-[#939aff] ${heading1.className} mb-6 relative`}>
                  Innovative Tech Solutions for a Connected World
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
                </h3>
                <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className} text-gray-200`}>
                  From blueprint to breakthrough—build the future with systems that adapt, scale, and never miss a beat.
                </span>
              </motion.div>
            </div>
          </div>
          
          <div className='flex justify-between items-center'>
            <div className="flex flex-col items-center w-full max-lg:mt-10">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full"
              >
                {/* Full-Stack Excellence */}
                <motion.div 
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-1"
                >
                  <HoverCard backgroundColor='rgba(106, 90, 205, 0.2)' direction='flex-col' left='-400px' customClass="backdrop-blur-sm border border-purple-500/10 shadow-xl">
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-12 lg:pl-12 lg:pr-12'>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-white">Full-Stack Excellence</h4>
                      </div>
                      <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                        Front-end finesse + back-end power = seamless digital experience. Our full-stack AI-enhanced builds go beyond function—they anticipate user behavior, simplify complexity, and run like clockwork.
                      </p>
                      <p className={`text-md md:text-lg text-[#939aff] ${body.className}`}>UX + UI + API + DB = Unified Engine</p>
                    </div>
                  </HoverCard>
                </motion.div>

                {/* Cloud Computing */}
                <motion.div 
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-1"
                >
                  <HoverCard backgroundColor='rgba(65, 105, 225, 0.2)' direction='flex-col' left='0' customClass="backdrop-blur-sm border border-blue-500/10 shadow-xl">
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-12 lg:pl-12 lg:pr-12'>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-white">Cloud Computing, Reimagined</h4>
                      </div>
                      <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                        Elastic. Secure. Aware. Cloud services that think. From architecture to auto-scaling, we keep your systems light, tight, and smart—with built-in intelligence to handle scale and threats alike.
                      </p>
                      <p className={`text-md md:text-lg text-[#939aff] ${body.className}`}>Bonus: Our clouds forecast more than weather—they predict usage, cost, and needs.</p>
                    </div>
                  </HoverCard>
                </motion.div>

                {/* Data Engineering & BI */}
                <motion.div 
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-1"
                >
                  <HoverCard backgroundColor='rgba(72, 61, 139, 0.2)' direction='flex-col' left='0' customClass="backdrop-blur-sm border border-indigo-500/10 shadow-xl">
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-12 lg:pl-12 lg:pr-12'>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-indigo-500/20 rounded-xl mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343-7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-white">Data Engineering & BI</h4>
                      </div>
                      <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                        Make your data speak volumes. Multi-source integration, real-time dashboards, and AI-powered pipelines that turn raw numbers into next moves.
                      </p>
                      <p className={`text-md md:text-lg text-[#939aff] ${body.className}`}>It's not big data. It's smart data.</p>
                    </div>
                  </HoverCard>
                </motion.div>

                {/* Cybersecurity That Anticipates */}
                <motion.div 
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-1"
                >
                  <HoverCard backgroundColor='rgba(128, 0, 128, 0.2)' direction='flex-col' left='-400px' customClass="backdrop-blur-sm border border-purple-600/10 shadow-xl">
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-12 lg:pl-12 lg:pr-12'>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-purple-600/20 rounded-xl mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944A11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-white">Cybersecurity That Anticipates</h4>
                      </div>
                      <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                        Defend before danger knocks. Real-time detection, adaptive firewalls, and predictive threat hunting. Our AI-based frameworks are your always-on security ops team.
                      </p>
                      <p className={`text-md md:text-lg text-[#939aff] ${body.className}`}>Safety isn't a feature—it's the foundation.</p>
                    </div>
                  </HoverCard>
                </motion.div>

                {/* AI & Machine Learning - Full Width */}
                <motion.div 
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="col-span-1 md:col-span-2"
                >
                  <HoverCard backgroundColor='rgba(108, 92, 231, 0.2)' direction='flex-col' left='0' customClass="backdrop-blur-sm border border-indigo-500/10 shadow-xl">
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-12 lg:px-12'>
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-indigo-600/20 rounded-xl mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-white">AI & Machine Learning</h4>
                      </div>
                      <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                        From guesswork to precision. We train your systems to think. Whether it's pattern detection, auto-decisions, or smarter ops, our ML models push your productivity into a new dimension.
                      </p>
                      <p className={`text-md md:text-lg text-[#939aff] ${body.className}`}>Think: Automation meets curiosity.</p>
                    </div>
                  </HoverCard>
                </motion.div>
              </motion.div>
              
              {/* Core Services Heading & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full mt-20 mb-16 text-center"
              >
                <h2 className={`text-3xl md:text-4xl text-white mb-4 ${heading1.className}`}>
                  Core Services <span className="text-purple-400">|</span> Built for Bold, Modern Ops
                </h2>
                
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                  Comprehensive Tech Solutions for the Fast-Moving World
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                 
                  <Link href="/contact" className="relative inline-flex items-center justify-center px-10 py-5 
                          font-medium text-white rounded-lg 
                          bg-gradient-to-r from-purple-600/90 to-blue-700/90 
                          hover:from-purple-700 hover:to-blue-800
                          shadow-lg shadow-purple-900/30 transition-all duration-300">
                    <span>Explore Technology Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </ClientOnly>
    )
}

export default Capabilities;





