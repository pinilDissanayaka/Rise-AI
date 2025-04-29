"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';

import { PinContainer } from "./Pin";
import { motion } from "framer-motion";
import { heading1, heading2 } from "../../../../fonts/font";

const Projects = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="md:w-10/12 mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <h3
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: "300ms" }}
            >
              <p className={`text-[#939aff] ${heading1.className}`}>See Intelligence in Motion</p>
              <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>
                Experience the Power of AI in Action
              </span>
            </h3>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mb-12"
          >
            Our algorithms aren't static—they're storytellers. See raw data morph into meaningful moves.
          </motion.p>
        </div>
      </div>

      {/* AI Dashboard Animation */}
      <div className="relative w-full bg-gradient-to-b from-gray-900/60 to-black/60 rounded-2xl backdrop-blur-sm border border-gray-800/40 overflow-hidden mb-24">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        
        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Animated AI Dashboard</h3>
            <p className="text-gray-300 mb-6">Watch as our AI transforms complex data patterns into actionable insights in real-time.</p>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ width: "30%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></motion.div>
              
              <motion.div 
                initial={{ width: "60%" }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                className="h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
              ></motion.div>
              
              <motion.div 
                initial={{ width: "20%" }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"
              ></motion.div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-gray-800/70 rounded-full text-sm text-white">Pulse-line predictions</div>
              <div className="px-4 py-2 bg-gray-800/70 rounded-full text-sm text-white">Live recommendation cards</div>
              <div className="px-4 py-2 bg-gray-800/70 rounded-full text-sm text-white">Auto-adaptive UI</div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-80 overflow-hidden rounded-xl border border-gray-700/50">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Dashboard components */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4 right-4 h-12 bg-gray-800/70 rounded-lg backdrop-blur-sm border border-gray-700/50 flex items-center px-4"
              >
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="flex-1"></div>
                <div className="w-24 h-6 bg-gray-700/70 rounded-full"></div>
              </motion.div>
              
              <div className="absolute top-20 left-4 right-4 bottom-4 flex gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-1/3 h-full bg-gray-800/60 rounded-lg border border-gray-700/50 p-3 flex flex-col gap-2"
                >
                  <div className="h-5 w-2/3 bg-gray-700/70 rounded-md"></div>
                  <div className="flex-1 relative mt-2">
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-purple-500/30 rounded-md"
                      initial={{ height: "30%" }}
                      whileInView={{ height: "60%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-2/3 h-full bg-gray-800/60 rounded-lg border border-gray-700/50 p-3 flex flex-col gap-2"
                >
                  <div className="h-5 w-1/2 bg-gray-700/70 rounded-md"></div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-3/4 relative">
                      <motion.div
                        className="absolute h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 3 }}
                      >
                        <motion.svg viewBox="0 0 350 100" className="h-full w-full">
                          <motion.path
                            d="M 0,50 Q 50,30 100,50 Q 150,70 200,50 Q 250,30 300,50 Q 350,70 400,50"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                            fill="none"
                            stroke="#8B5CF6"
                            strokeWidth="3"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/40 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="mb-24">
        <div className="flex md:pl-10 space-x-3 md:space-x-10 mb-16">
          <div className="md:w-10/12">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              viewport={{ once: false }}
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: "300ms" }}
            >
              <h3
                className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                style={{ transitionDelay: "300ms" }}
              >
                <p className={`text-[#939aff] ${heading1.className}`}>Industries We've Upgraded with AI</p>
                <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>
                  AI Solutions, Built for Your Industry's Rhythm
                </span>
              </h3>
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/30 p-8 group"
          >
            <div className="absolute inset-0 bg-[url('/ai/retail-pattern.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center mb-6 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Retail</h3>
            <p className="text-gray-300 mb-6 relative z-10">From shelf to screen—predict what buyers want before they do.</p>
            <div className="relative z-10">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mb-4"></div>
              <div className="text-sm text-gray-400">
                <div className="mb-1">• Smart inventory management</div>
                <div className="mb-1">• Customer behavior analysis</div>
                <div>• Personalized shopping experiences</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/30 p-8 group"
          >
            <div className="absolute inset-0 bg-[url('/ai/healthcare-pattern.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Healthcare</h3>
            <p className="text-gray-300 mb-6 relative z-10">Patient flows that save time. AI that saves lives.</p>
            <div className="relative z-10">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4"></div>
              <div className="text-sm text-gray-400">
                <div className="mb-1">• Predictive diagnostics</div>
                <div className="mb-1">• Administrative automation</div>
                <div>• Patient care optimization</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/30 p-8 group"
          >
            <div className="absolute inset-0 bg-[url('/ai/finance-pattern.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Finance</h3>
            <p className="text-gray-300 mb-6 relative z-10">Real-time fraud radar and smarter risk insights.</p>
            <div className="relative z-10">
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4"></div>
              <div className="text-sm text-gray-400">
                <div className="mb-1">• Anomaly detection</div>
                <div className="mb-1">• Market trend forecasting</div>
                <div>• Automated compliance</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/30 p-8 group"
          >
            <div className="absolute inset-0 bg-[url('/ai/education-pattern.png')] opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Education</h3>
            <p className="text-gray-300 mb-6 relative z-10">Classrooms that learn back. Tools that empower.</p>
            <div className="relative z-10">
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4"></div>
              <div className="text-sm text-gray-400">
                <div className="mb-1">• Adaptive learning pathways</div>
                <div className="mb-1">• Student engagement analysis</div>
                <div>• Personalized curriculum generation</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-700 rounded-full text-white font-medium shadow-lg shadow-purple-900/30 inline-flex items-center transform hover:scale-105 transition-all duration-300"
          >
            Explore Industry Solutions
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Final CTA Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 mb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Embrace the Future with AI That Works With You</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to transform your business with AI solutions tailored to your needs? Our team of experts is ready to help you harness the full potential of artificial intelligence.
          </p>
          <a 
            href="#" 
            className="px-10 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-700 rounded-full text-white font-medium shadow-lg shadow-purple-900/30 inline-flex items-center transform hover:scale-105 transition-all duration-300"
          >
            Let's Collaborate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
      </div>
      
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
    </div>
  );
};

export default Projects;
