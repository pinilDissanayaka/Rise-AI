'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import {motion} from "framer-motion"
import Image from 'next/image'
import { heading1, heading2, body } from "../../../../fonts/font"
import ClientOnly from '../../../components/ClientOnly/ClientOnly'  // Updated import path

// Dynamically import HoverCard with SSR disabled
const HoverCard = dynamic(() => import('./HoverCard'), { ssr: false });

const Capabilities = () => {
    return (
        <ClientOnly fallback={null}>
            <div className='max-w-[1280px] mx-auto'>
                <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"></motion.div>
                <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                    <div className='md:w-10/12 mb-12'>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="js-build-in-item build-in-slideX-left build-in-animate">
                            <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white" style={{transitionDelay: '300ms'}}>
                                <p className={`text-[#939aff] ${heading1.className}`}>Core AI Services | Built for Real Impact</p>
                                <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>An AI Engine for Every Business Beat</span>
                            </h3>
                        </motion.div>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className="flex flex-col items-center max-lg:mt-10 w-full">
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex justify-between md:space-x-10 max-md:flex-col w-full'>
                                    <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='-400px'>
                                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                                            <h3 className="text-2xl md:text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                                                Predictive Analytics
                                            </h3>
                                            <p className={`text-xl md:text-2xl mb-6 font-medium text-[#7d8590] ${body.className}`}>
                                                <span className='text-white font-semibold'>See around corners.</span> Our machine learning models don't just analyze data—they forecast your future. From demand surges to churn alerts, we help you act before the market shifts.
                                            </p>
                                            <div className="mt-4">
                                                <p className="text-white font-semibold mb-2">Use Cases:</p>
                                                <ul className="text-[#a2a8b3] space-y-1 pl-4">
                                                    <li>• Sales forecasting</li>
                                                    <li>• Inventory planning</li>
                                                    <li>• Smart budgeting</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='overflow-hidden rounded-s-lg'>
                                            <motion.img initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="/ai/predictive analytics.png" />
                                        </div>
                                    </HoverCard>
                                    <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='0'>
                                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                                            <h3 className="text-2xl md:text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                                                Intelligent Automation
                                            </h3>
                                            <p className={`text-xl md:text-2xl mb-6 font-medium text-[#7d8590] ${body.className}`}>
                                                <span className='text-white font-semibold'>Ditch the manual grind.</span> From inbox triage to invoice processing, our bots handle the boring stuff—perfectly.
                                            </p>
                                            <div className="mt-4">
                                                <p className="text-white font-semibold mb-2">Use Cases:</p>
                                                <ul className="text-[#a2a8b3] space-y-1 pl-4">
                                                    <li>• Customer support workflows</li>
                                                    <li>• Data migration</li>
                                                    <li>• Lead scoring & routing</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className='overflow-hidden rounded-s-lg'>
                                            <Image className="w-full h-auto" width={1209} height={890} loading="lazy" alt="" aria-hidden="true" src="/ai/intelligentautomation.png" />
                                        </motion.div>
                                    </HoverCard>
                                </div>
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex justify-between md:space-x-10 max-md:flex-col w-full'>
                                    <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='0'>
                                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                                            <h3 className="text-2xl md:text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                                                Personalization at Scale
                                            </h3>
                                            <p className={`text-xl md:text-2xl mb-6 font-medium text-[#7d8590] ${body.className}`}>
                                                <span className='text-white font-semibold'>AI that speaks to every single customer—like you know them personally.</span> From smart product recs to micro-personalized emails, we deliver relevance that converts.
                                            </p>
                                            <div className="mt-4">
                                                <p className="text-white font-semibold mb-2">Use Cases:</p>
                                                <ul className="text-[#a2a8b3] space-y-1 pl-4">
                                                    <li>• Dynamic content delivery</li>
                                                    <li>• Real-time product suggestions</li>
                                                    <li>• Personalized marketing journeys</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className='overflow-hidden rounded-s-lg'>
                                            <Image className="w-full h-auto" width={1209} height={890} loading="lazy" alt="" aria-hidden="true" src="/ai/personalizationatscale.png" />
                                        </motion.div>
                                    </HoverCard>
                                    <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='-400px'>
                                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                                            <h3 className="text-2xl md:text-3xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                                                AI Chatbots That Get It
                                            </h3>
                                            <p className={`text-xl md:text-2xl mb-6 font-medium text-[#7d8590] ${body.className}`}>
                                                <span className='text-white font-semibold'>They don't just answer—they assist.</span> Available 24/7, trained in your tone, and smart enough to solve problems.
                                            </p>
                                            <div className="mt-4">
                                                <p className="text-white font-semibold mb-2">Features:</p>
                                                <ul className="text-[#a2a8b3] space-y-1 pl-4">
                                                    <li>• Context-aware conversations</li>
                                                    <li>• Integration with CRMs, FAQs, and helpdesks</li>
                                                    <li>• Multilingual, multi-platform, always on</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='overflow-hidden rounded-s-lg'>
                                            <motion.img initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className="w-full h-auto" width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="/ai/chatbot.png" />
                                        </div>
                                    </HoverCard>
                                </div>
                            </div>
                        </div>
                        
                        {/* Call to Action */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-16 mb-10 text-center"
                        >
                            <a 
                                href="#" 
                                className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-700 rounded-full text-white font-medium shadow-lg shadow-purple-900/30 inline-flex items-center transform hover:scale-105 transition-all duration-300"
                            >
                                Learn How AI Can Transform Your Business
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>                
                </div>
                
                {/* Why Rise AI Section */}
                <div className="mt-16 mb-8">
                    <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                        <div className='md:w-10/12 mb-12'>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="js-build-in-item build-in-slideX-left build-in-animate">
                                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white" style={{transitionDelay: '300ms'}}>
                                    <p className={`text-[#939aff] ${heading1.className}`}>Why Rise AI?</p>
                                    <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>Because You Deserve Better Than Off-the-Shelf</span>
                                </h3>
                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 px-4 md:px-10 mb-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/40"
                        >
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Custom AI Development</h3>
                            <p className="text-gray-300">We build brains, not templates. Every solution is purpose-crafted.</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/40"
                        >
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
                            <p className="text-gray-300">Plug-and-play is cute. We do plug-and-thrive.</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/40"
                        >
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Scalable and Adaptive</h3>
                            <p className="text-gray-300">As your business grows, our AI evolves—with zero bottlenecks.</p>
                        </motion.div>
                    </div>
                    
                    {/* Visual Layout */}
                    <div className="flex flex-wrap justify-center gap-6 mb-16 px-4">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative rounded-xl overflow-hidden w-full md:w-[30%] h-64 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <Image src="/ai/dashboard.png" alt="Custom analytics dashboard" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h4 className="text-white font-bold">Custom Analytics Dashboard</h4>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative rounded-xl overflow-hidden w-full md:w-[30%] h-64 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <Image src="/ai/ai-recommendations.png" alt="AI making recommendations" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h4 className="text-white font-bold">AI-Driven Recommendations</h4>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="relative rounded-xl overflow-hidden w-full md:w-[30%] h-64 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <Image src="/ai/integration.png" alt="Seamless integration" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h4 className="text-white font-bold">Seamless CRM Integration</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"></motion.div>
            </div>
        </ClientOnly>
    )
}

export default Capabilities;





