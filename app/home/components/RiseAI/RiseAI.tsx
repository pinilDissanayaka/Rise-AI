'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { heading1, heading2, subtitle, body } from "../../../../fonts/font";

type Props = {}

const RiseAI = (props: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className='max-w-[1280px] mx-auto relative mt-16'>
      {/* Background gradients */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Headline Section */}
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
              Why Rise AI? Because You Deserve Better Than Off-the-Shelf
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Custom AI Development Panels */}
      <div className='flex justify-between items-center'>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
          >
            {/* Custom AI Development */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="col-span-1"
            >
              <div className='flex flex-col h-full backdrop-blur-sm border border-purple-500/10 shadow-xl rounded-xl bg-purple-500/10 p-8'>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-white">Custom AI Development</h4>
                </div>
                <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                  "We build brains, not templates. Every solution is purpose-crafted."
                </p>
                <div className="mt-auto">
                  <div className="w-full h-40 bg-gradient-to-br from-purple-600/30 to-indigo-800/30 rounded-lg flex items-center justify-center">
                    <div className="w-11/12 h-5/6 bg-gray-800/50 rounded-lg relative overflow-hidden">
                      {/* Mockup of a custom analytics dashboard */}
                      <div className="absolute top-2 left-2 right-2 h-4 bg-gray-700/60 rounded flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 ml-2"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 ml-1"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500 ml-1"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 p-2 mt-6">
                        <div className="bg-indigo-600/20 h-12 rounded"></div>
                        <div className="bg-purple-600/20 h-12 rounded"></div>
                        <div className="bg-blue-600/20 h-12 rounded"></div>
                        <div className="bg-violet-600/20 h-12 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Seamless Integration */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="col-span-1"
            >
              <div className='flex flex-col h-full backdrop-blur-sm border border-blue-500/10 shadow-xl rounded-xl bg-blue-500/10 p-8'>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-white">Seamless Integration</h4>
                </div>
                <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                  "Plug-and-play is cute. We do plug-and-thrive."
                </p>
                <div className="mt-auto">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-600/30 to-cyan-800/30 rounded-lg flex items-center justify-center">
                    <div className="w-11/12 h-5/6 bg-gray-800/50 rounded-lg relative overflow-hidden">
                      {/* Mockup of AI making recommendations */}
                      <div className="absolute top-2 left-2 right-2 h-4 bg-gray-700/60 rounded flex items-center">
                        <div className="ml-2 text-xs text-blue-300">AI Recommendations</div>
                      </div>
                      <div className="flex flex-col gap-2 p-2 mt-6">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <div className="bg-blue-600/20 h-4 rounded w-full"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <div className="bg-blue-600/20 h-4 rounded w-full"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                          <div className="bg-blue-600/20 h-4 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scalable and Adaptive */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="col-span-1"
            >
              <div className='flex flex-col h-full backdrop-blur-sm border border-indigo-500/10 shadow-xl rounded-xl bg-indigo-500/10 p-8'>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-500/20 rounded-xl mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-white">Scalable and Adaptive</h4>
                </div>
                <p className={`text-xl mb-6 font-medium text-gray-300 ${body.className}`}>
                  "As your business grows, our AI evolves—with zero bottlenecks."
                </p>
                <div className="mt-auto">
                  <div className="w-full h-40 bg-gradient-to-br from-indigo-600/30 to-purple-800/30 rounded-lg flex items-center justify-center">
                    <div className="w-11/12 h-5/6 bg-gray-800/50 rounded-lg relative overflow-hidden">
                      {/* Mockup of a smooth integration between AI and an ERP/CRM platform */}
                      <div className="absolute top-2 left-2 right-2 h-4 bg-gray-700/60 rounded flex items-center">
                        <div className="ml-2 text-xs text-indigo-300">AI + ERP Integration</div>
                      </div>
                      <div className="flex justify-between p-2 mt-6">
                        <div className="h-24 w-2/5 bg-indigo-600/20 rounded flex flex-col p-1">
                          <div className="h-2 w-4/5 bg-indigo-400/30 rounded mb-1"></div>
                          <div className="h-2 w-3/5 bg-indigo-400/30 rounded mb-1"></div>
                          <div className="h-2 w-full bg-indigo-400/30 rounded"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <div className="w-8 h-0.5 bg-indigo-400/50"></div>
                          <div className="w-8 h-0.5 bg-indigo-400/50 mt-2"></div>
                          <div className="w-8 h-0.5 bg-indigo-400/50 mt-2"></div>
                        </div>
                        <div className="h-24 w-2/5 bg-purple-600/20 rounded flex flex-col p-1">
                          <div className="h-2 w-4/5 bg-purple-400/30 rounded mb-1"></div>
                          <div className="h-2 w-3/5 bg-purple-400/30 rounded mb-1"></div>
                          <div className="h-2 w-full bg-purple-400/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Intelligence in Motion Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full mt-20 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-purple-500/10"
      >
        <h2 className={`text-3xl md:text-4xl text-white mb-4 ${heading1.className}`}>
          🎬 See Intelligence in Motion
        </h2>
        <h3 className={`text-xl md:text-2xl text-blue-300 mb-6 ${heading2.className}`}>
          Experience the Power of AI in Action
        </h3>
        <p className={`text-lg text-gray-300 max-w-3xl mb-8 ${body.className}`}>
          "Our algorithms aren't static—they're storytellers. See raw data morph into meaningful moves."
        </p>

        {/* Animated Dashboard Mockup */}
        <div className="w-full h-80 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Dashboard elements that simulate animation */}
          <div className="w-11/12 h-5/6 bg-gray-900/70 rounded-lg flex flex-col p-4 z-0">
            <div className="flex justify-between mb-4">
              <div className="h-6 w-40 bg-blue-600/30 rounded"></div>
              <div className="flex gap-2">
                <div className="h-6 w-6 bg-purple-600/30 rounded"></div>
                <div className="h-6 w-6 bg-blue-600/30 rounded"></div>
                <div className="h-6 w-6 bg-indigo-600/30 rounded"></div>
              </div>
            </div>
            
            {/* Pulse line predictions */}
            <div className="h-20 bg-gray-800/50 rounded mb-4 p-2 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </div>
              <div className="flex w-full h-full items-end space-x-1">
                {[...Array(40)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-purple-500/40" 
                    style={{ 
                      height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 10}%`,
                      opacity: i % 2 === 0 ? 0.7 : 0.5
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Live recommendation cards */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-900/20 p-3 rounded">
                <div className="h-3 w-3/4 bg-blue-600/30 rounded mb-2"></div>
                <div className="h-2 w-full bg-blue-600/20 rounded mb-1"></div>
                <div className="h-2 w-4/5 bg-blue-600/20 rounded"></div>
              </div>
              <div className="bg-purple-900/20 p-3 rounded">
                <div className="h-3 w-3/4 bg-purple-600/30 rounded mb-2"></div>
                <div className="h-2 w-full bg-purple-600/20 rounded mb-1"></div>
                <div className="h-2 w-4/5 bg-purple-600/20 rounded"></div>
              </div>
              <div className="bg-indigo-900/20 p-3 rounded">
                <div className="h-3 w-3/4 bg-indigo-600/30 rounded mb-2"></div>
                <div className="h-2 w-full bg-indigo-600/20 rounded mb-1"></div>
                <div className="h-2 w-4/5 bg-indigo-600/20 rounded"></div>
              </div>
            </div>
            
            {/* Auto-adaptive UI */}
            <div className="flex gap-4 flex-1">
              <div className="flex-1 bg-gray-800/50 rounded p-3">
                <div className="h-3 w-1/2 bg-gray-600/30 rounded mb-3"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-4 bg-purple-600/20 rounded"></div>
                  <div className="h-4 bg-blue-600/20 rounded"></div>
                  <div className="h-4 bg-indigo-600/20 rounded"></div>
                  <div className="h-4 bg-violet-600/20 rounded"></div>
                </div>
              </div>
              <div className="flex-1 bg-gray-800/50 rounded p-3">
                <div className="h-3 w-1/2 bg-gray-600/30 rounded mb-3"></div>
                <div className="h-4 w-full bg-gray-700/50 rounded mb-2"></div>
                <div className="h-4 w-full bg-gray-700/50 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-700/50 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Industries Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full mt-20"
      >
        <h2 className={`text-3xl md:text-4xl text-white mb-4 ${heading1.className}`}>
          Industries We've Upgraded with AI
        </h2>
        <h3 className={`text-xl md:text-2xl text-blue-300 mb-10 ${heading2.className}`}>
          AI Solutions, Built for Your Industry's Rhythm
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Retail */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-sm border border-purple-500/10 shadow-xl rounded-xl bg-purple-500/10 p-6"
          >
            {/* <div className="text-4xl mb-4">🛍️</div> */}
            <h4 className="text-3xl font-semibold text-white mb-3">Retail</h4>
            <p className={`text-gray-300 ${body.className}`}>
              "From shelf to screen—predict what buyers want before they do."
            </p>
          </motion.div>
          
          {/* Healthcare */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-sm border border-blue-500/10 shadow-xl rounded-xl bg-blue-500/10 p-6"
          >
            {/* <div className="text-4xl mb-4">🏥</div> */}
            <h4 className="text-3xl font-semibold text-white mb-3">Healthcare</h4>
            <p className={`text-gray-300 ${body.className}`}>
              "Patient flows that save time. AI that saves lives."
            </p>
          </motion.div>
          
          {/* Finance */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-sm border border-indigo-500/10 shadow-xl rounded-xl bg-indigo-500/10 p-6"
          >
            {/* <div className="text-4xl mb-4">💰</div> */}
            <h4 className="text-3xl font-semibold text-white mb-3">Finance</h4>
            <p className={`text-gray-300 ${body.className}`}>
              "Real-time fraud radar and smarter risk insights."
            </p>
          </motion.div>
          
          {/* Education */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-sm border border-purple-600/10 shadow-xl rounded-xl bg-purple-600/10 p-6"
          >
            {/* <div className="text-4xl mb-4">📚</div> */}
            <h4 className="text-3xl font-semibold text-white mb-3">Education</h4>
            <p className={`text-gray-300 ${body.className}`}>
              "Classrooms that learn back. Tools that empower."
            </p>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <Link href="/ai" className="relative inline-flex items-center justify-center px-8 py-4 
                      font-medium text-white rounded-lg 
                      bg-gradient-to-r from-purple-600/90 to-blue-700/90 
                      hover:from-purple-700 hover:to-blue-800
                      shadow-lg shadow-purple-900/30 transition-all duration-300">
              <span>Explore Industry Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full mt-20 mb-16 p-10 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-purple-500/10 text-center"
      >
        <h2 className={`text-3xl md:text-4xl text-white mb-6 ${heading1.className}`}>
          Embrace the Future with AI That Works With You
        </h2>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative group inline-block"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
          <Link href="/contact" className="relative inline-flex items-center justify-center px-10 py-5 
                    font-medium text-white rounded-lg 
                    bg-gradient-to-r from-purple-600/90 to-blue-700/90 
                    hover:from-purple-700 hover:to-blue-800
                    shadow-lg shadow-purple-900/30 transition-all duration-300">
            <span>Let's Collaborate</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default RiseAI