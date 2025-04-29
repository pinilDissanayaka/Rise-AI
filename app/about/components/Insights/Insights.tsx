"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import styles from "../../../../styles";
import { staggerContainer } from "../../../../utils/motion";
import InsightCard from "./InsightCard";
import { heading1, heading2, title } from "../../../../fonts/font";

const insights = [
  {
    imgUrl: "/about/spirituality.png",
    title: "Intelligence First",
    description: "Every product we build is infused with smart, scalable decision-making—driven by real-time data and optimized for exceptional performance in real-world conditions."
  },
  {
    imgUrl: "/planet-07.png",
    title: "Human-Centered AI",
    description: "We design systems that feel human—not robotic. Our AI solutions enhance the human experience, creating meaningful interactions that build trust and drive engagement."
  },
  {
    imgUrl: "/planet-08.png",
    title: "Innovation with Purpose",
    description: "We don't follow trends—we create the future you wish existed. Every solution we design is built with clear intention and measurable impact for your business growth."
  },
];

const Insights = () => {
  const [inView, setInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current; // Store ref in variable
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use stored variable in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-[1280px] mx-auto relative w-full">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="flex justify-between items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 sm:px-6"
        >
          {/* Decorative element */}
          <div className="flex items-center mb-3">
            <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-purple-300 opacity-70 mr-3"></div>
            <p className="text-purple-400 text-sm uppercase tracking-wider font-medium">Our Philosophy</p>
          </div>
          
          <h2 className={`text-2xl md:text-3xl text-white ${title.className} flex items-center gap-3 mb-2`}>
            <div className="items-center justify-center w-8 h-8 text-white"></div>
            Core Insights
          </h2>
          
          <p className="text-gray-400 max-w-2xl">
            The principles that guide our approach to intelligent technology and business transformation
          </p>
        </motion.div>
      </div>
      
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`${styles.innerWidth} mx-auto flex flex-col px-4`}
      >
        <div className="mt-[10px] flex flex-col gap-[60px] md:gap-[80px]">
          {insights.map((item, index) => (
            <InsightCard
              key={`insight-${index}`}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 text-center px-4 pb-8 relative"
      >
        {/* Decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-purple-600/10 rounded-full blur-[80px] -z-10"></div>
        
        <div className="flex justify-center mb-6">
          <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>
        </div>
        
        <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${heading2.className} leading-relaxed`}>
          <span className="text-purple-400 font-medium">Our mission:</span> To craft intelligent systems that learn, adapt, and act, 
          helping businesses unlock limitless growth and transformation.
        </p>
        
        <motion.div 
          className="w-16 h-16 mx-auto mt-10 opacity-70"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#a78bfa" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16L16 12M12 16L8 12M12 16V8" stroke="#a78bfa" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Insights;
