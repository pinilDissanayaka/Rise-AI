"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Variants } from "framer-motion";
import { title, subtitle, heading1 } from "../../../../fonts/font";

// Dynamically import Typewriter with no SSR
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

interface ImageFadeOverlayProps {
  variants?: Variants;
  className: string;
  initial?: string | object;
  animate?: string | object;
  custom?: Record<string, any>;
}

const ImageFadeOverlay: React.FC<ImageFadeOverlayProps> = ({
  variants,
  className,
  initial = "initial",
  animate = "animate",
  custom = {}
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    variants={variants}
    {...custom}
    className={className}
  />
);

const HeroContent = () => {
  const [isClient, setIsClient] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const floatVariants: Variants = {
    float: {
      y: [-20, 20],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const fadeVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  const bottomFadeVariants: Variants = {
    initial: { opacity: 0, height: "20%" },
    animate: {
      opacity: 1,
      height: "65%",
      transition: {
        duration: 1.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row relative w-full pt-4 lg:pt-16 px-6 md:px-12 xl:px-16 mx-auto items-center justify-between"
    >
      {/* Image Section */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="w-full lg:w-1/2 h-full flex justify-center lg:justify-end items-center order-first lg:order-last mb-8 lg:mb-0 lg:pr-6 xl:pr-12"
      >
        <div className="relative w-full max-w-[750px] lg:max-w-[800px] xl:max-w-[900px]">
          <Image
            src="/home/hero.png"
            alt="Rise AI - Marketing, AI, and Tech Solutions"
            height={1000}
            width={900}
            className="w-auto h-auto max-w-full object-contain min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
            style={{ background: "transparent" }}
            priority
            quality={90}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center text-start order-last lg:order-first -mt-4 lg:pl-6 xl:pl-12">
        <motion.div
          className={`
            flex flex-col gap-6 
            font-bold text-white tracking-wider
            ${title.className}
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            max-w-[700px] w-full mx-auto lg:mx-0
          `}
        >
          {/* Heading */}
          <h3 className="text-left w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
              WHERE AI BECOMES YOUR SHARPEST TEAMMATE
            </span>
          </h3>

          {/* Typewriter Subtitle */}
          <div
            className={`
              text-[#ffffff] 
              ${heading1.className}
              text-base sm:text-lg md:text-xl lg:text-2xl 
              h-[4.5rem] sm:h-[6rem] md:h-[7rem] lg:h-[8rem]
              relative overflow-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
            `}
          >
            <div className="absolute inset-0 flex">
              <p className="w-full">
                {/* 
                {isClient ? (
                  <Typewriter
                    options={{
                      strings: [
                        "Not just smart. Strategic. Scalable. Soulful. Rise AI crafts digital minds that think, act, and grow with you.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 20,
                    }}
                  />
                ) : (
                  "Not just smart. Strategic. Scalable. Soulful."
                )}
                */}
                Not just smart. Strategic. Scalable. Soulful. Rise AI crafts digital minds that think, act, and grow with you.
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <div className="mt-4">
            <a
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="#services"
              className="border border-neutral-600 copilot rounded-full inline-block hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-cyan-900/20 transition-all duration-300"
            >
              <div className="flex items-center p-3 px-5">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-11 h-11 flex-grow-0 flex-shrink-0 mr-4 sm:mr-6 text-purple-500"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
                <div className="pr-3 sm:pr-5">
                  <div className="font-medium text-white text-sm sm:text-[16px] leading-5">
                    Explore Our Services
                  </div>
                </div>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-white transition-transform duration-150 ${
                      hovered ? "translate-x-0" : "-translate-x-1"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={`transition-opacity duration-150 ${
                        hovered ? "opacity-100" : "opacity-0"
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-purple-700 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-cyan-700 rounded-full filter blur-[120px]"></div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
