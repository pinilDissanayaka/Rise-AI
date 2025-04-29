"use client"
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa";  // Import from react-icons/fa
import { heading1, heading2, title, subtitle, body } from "../../../../fonts/font";

const About = () => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [inView, setInView] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track when component is in viewport
    useEffect(() => {
    const currentRef = sectionRef.current; // Copy the ref value to a local variable

    const observer = new IntersectionObserver(
        ([entry]) => {
            setInView(entry.isIntersecting);
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (currentRef) {
        observer.observe(currentRef);
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef); // Use the copied variable here
        }
    };
}, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const impactStats = [
        { number: "400+", text: "experts across AI, cloud, engineering, and digital strategy" },
        { number: "10+", text: "countries with startups, enterprises, and governments trusting us" },
        { number: "Multiple", text: "AI agents deployed in marketing, customer care, logistics, and beyond" },
        { number: "1M+", text: "users impacted by our tech worldwide" }
    ];

    const coreBeliefs = [
        { 
            title: "Intelligence First", 
            description: "Every product we build is infused with smart, scalable decision-making—driven by real-time data.",
            icon: "🧠" 
        },
        { 
            title: "Human-Centered AI", 
            description: "We design systems that feel human—not robotic. Because real connection drives real growth.",
            icon: "👤" 
        },
        { 
            title: "Innovation with Purpose", 
            description: "We don't follow trends—we create the future you wish existed.",
            icon: "🚀" 
        }
    ];

    return (
        <div ref={sectionRef} className="max-w-[1280px] mx-auto w-full">
            <div className='max-w-[1280px] mx-auto relative z-[2]'>
                {/* Hero section with headline and subheadline */}
                <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                        className='py-3 mb-2 flex flex-col justify-center items-center'
                    >
                        {/* Decorative element */}
                        <div className="mb-6 flex items-center justify-center">
                            <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-purple-300 opacity-70"></div>
                            <span className="mx-4 text-purple-400 text-xl">Rise AI</span>
                            <div className="h-0.5 w-10 bg-gradient-to-r from-purple-300 to-purple-500 opacity-70"></div>
                        </div>
                        
                        <h2 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-8 font-medium text-white">
                            <p className={`text-[#939aff] ${heading1.className} mb-2`}>About Rise AI</p>
                            <span className={`text-[29px] md:text-[30px] leading-[38px] ${heading2.className}`}>
                            We Don&#39;t Just Build Tech—We Engineer Intelligence. At Rise AI, we&#39;re reimagining the digital world—one intelligent agent, one breakthrough solution at a time.
                            </span>
                        </h2>
                        
                        {/* Decorative glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
                    </motion.div>
                </div>

                {/* Our Story Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-20 md:mb-28 px-4 relative"
                >
                    <div className="absolute top-20 right-0 w-[200px] h-[200px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
                    
                    <h2 className={`text-3xl md:text-4xl text-white mb-6 ${title.className} flex items-center gap-3`}>
                        <div className="items-center justify-center w-8 h-8 text-white"></div> 
                        Our Story
                    </h2>
                    
                    <div className="prose prose-lg text-gray-300 max-w-none space-y-6">
                        <p className={`text-xl ${subtitle.className} text-white`}>
  Rise AI was born out of a single belief: <span className="text-purple-400 font-medium">The future doesn&#39;t wait—so why should innovation?</span>
</p>
                        
                        <p className={`${body.className} text-gray-300 leading-relaxed`}>
  We&#39;re not your typical tech company. We are a team of builders, thinkers, creators, and visionaries—pioneering 
  the fusion of AI, advanced technology, and strategic marketing. Our mission is to craft intelligent systems 
  that learn, adapt, and act, helping businesses unlock limitless growth and transformation.
</p>
                        
                        <p className={`text-xl ${subtitle.className} text-white`}>
                        What sets us apart isn&#39;t just what we build— <span className="text-purple-400 font-medium">It&#39;s where we build it and how we build it.</span>
                        </p>
                        
                        <motion.div 
                            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/20 relative overflow-hidden"
                            whileHover={{ scale: 1.01, borderColor: 'rgba(168, 85, 247, 0.4)' }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Decorative glow */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/20 rounded-full blur-[30px]"></div>
                            
                            <p className={`${body.className} mb-5 relative z-10`}>
                            <span className="text-green-400 text-lg"></span> Rooted in the heart of Sri Lanka, at Kandy&#39;s Bellwood Hills—inside the innovation hub of Rise Tech Village—we 
                            carry the spirit of resilience, creativity, and brilliance that defines our nation.
                            </p>
                            <p className={`${body.className} relative z-10`}>
                                Every line of code, every AI agent we deploy, every solution we deliver—echoes the soul of Sri Lankan ingenuity.
                            </p>
                        </motion.div>
                        
                        <p className={`${body.className} text-gray-300 leading-relaxed`}>
                            From digital minds that manage customer experiences to infrastructure that scales without a whisper—we build tools 
                            that think and tech that feels alive.
                        </p>
                    </div>
                </motion.div>

                {/* What We Believe In Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="mb-20 md:mb-28 px-4"
                >
                    <h2 className={`text-2xl md:text-3xl text-white mb-8 ${title.className} flex items-center gap-3`}>
                        <div className="items-center justify-center w-8 h-8 text-white"></div>
                        What We Believe In
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreBeliefs.map((belief, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ 
                                    scale: 1.03, 
                                    boxShadow: '0 15px 30px -10px rgba(124, 58, 237, 0.15), 0 8px 12px -6px rgba(124, 58, 237, 0.15)'
                                }}
                                className="bg-gradient-to-br from-[#161b22] to-[#0d1117] p-7 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Decorative element */}
                                <div className="absolute -top-5 -right-5 w-16 h-16 bg-purple-600/10 rounded-full blur-xl"></div>
                                
                                <div className="flex items-center mb-4">
                                    {/* <div className="flex items-center justify-center w-10 h-10 text-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 mr-3">
                                        {belief.icon}
                                    </div> */}
                                    <h3 className={`text-xl text-white ${heading2.className}`}>{belief.title}</h3>
                                </div>
                                <p className={`text-gray-300 ${body.className} leading-relaxed`}>{belief.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Our Impact Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-20 md:mb-28 px-4"
                >
                    <h2 className={`text-2xl md:text-3xl text-white mb-8 ${title.className} flex items-center gap-3`}>
                        <div className="items-center justify-center w-8 h-8 text-white"></div>
                        Our Impact (So Far)
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impactStats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: '0 15px 30px -10px rgba(124, 58, 237, 0.15), 0 8px 12px -6px rgba(124, 58, 237, 0.15)',
                                }}
                                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 flex flex-col items-center text-center relative overflow-hidden"
                            >
                                {/* Decorative glow */}
                                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-600/20 rounded-full blur-xl"></div>
                                
                                <span className={`text-3xl md:text-4xl font-bold text-purple-400 mb-3 ${heading1.className}`}>{stat.number}</span>
                                <p className={`text-gray-300 ${body.className} leading-relaxed`}>{stat.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* What's Next Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-20 md:mb-28 px-4"
                >
                    <h2 className={`text-2xl md:text-3xl text-white mb-6 ${title.className} flex items-center gap-3`}>
  <div className="items-center justify-center w-8 h-8 text-white"></div>
  What&#39;s Next?
</h2>
                    
                    <motion.div 
                        className="bg-gradient-to-r from-[#12151e] to-[#0d1117] p-8 md:p-10 rounded-xl border border-purple-900/30 relative overflow-hidden"
                        whileHover={{ 
                            scale: 1.01,
                            boxShadow: '0 15px 30px -10px rgba(124, 58, 237, 0.15), 0 8px 12px -6px rgba(124, 58, 237, 0.15)',
                        }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-16 -left-16 w-32 h-32 bg-purple-600/10 rounded-full blur-[80px]"></div>
                        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-600/10 rounded-full blur-[80px]"></div>
                        
                        <p className={`text-gray-300 mb-5 ${body.className} leading-relaxed relative z-10`}>
                            We&#39;re building the next generation of AI-native platforms—smart enough to learn from you, fast enough to scale with you, 
                            and intuitive enough to feel like part of your team.
                            </p>
                        
                        <p className={`text-xl ${subtitle.className} relative z-10`}>
                        The future isn&#39;t automated. <span className="text-purple-400 font-medium">It&#39;s intelligent. It&#39;s personal. It&#39;s Rise AI.</span>
                        </p>
                    </motion.div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="mb-16 md:mb-24 px-4"
                >
                    <h2 className={`text-2xl md:text-3xl text-white mb-8 ${title.className} flex items-center gap-3`}>
                        <div className="items-center justify-center w-8 h-8 text-white"></div>
                        Want to Join the Movement?
                    </h2>
                    
                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link href="/about#team" className="block">
                            <motion.span
                                className="px-7 py-3 inline-block bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-colors shadow-lg shadow-purple-900/30 cursor-pointer"
                                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -10px rgba(124, 58, 237, 0.3), 0 8px 12px -6px rgba(124, 58, 237, 0.2)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Meet Our Team
                            </motion.span>
                        </Link>
                        <Link href="/careers" className="block">
                            <motion.span
                                className="px-7 py-3 inline-block bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-colors shadow-lg shadow-purple-900/30 cursor-pointer"
                                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -10px rgba(124, 58, 237, 0.3), 0 8px 12px -6px rgba(124, 58, 237, 0.2)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Careers
                            </motion.span>
                        </Link>
                        <Link href="/contact" className="block">
                          <IconContext.Provider value={{ className: "transition-transform group-hover:translate-x-1" }}>
                            <motion.span
                              className="px-7 py-3 inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-colors shadow-lg shadow-purple-900/30 cursor-pointer group"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Let&#39;s Collaborate
                              <FaArrowRight size={16} />
                            </motion.span>
                          </IconContext.Provider>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;