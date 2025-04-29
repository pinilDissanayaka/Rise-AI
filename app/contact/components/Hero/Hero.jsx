'use client';

import { motion } from 'framer-motion';
import styles from "../../../../styles";
import { slideIn, staggerContainer, textVariant } from "../../../../utils/motion"
import { pageTitle, subtitle } from "../../../../fonts/font";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center max-w-[1750px] mx-auto md:px-6 px-4">
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#090c2b] to-[#0c0f36] opacity-50 z-0"></div>
      )}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center relative z-10`}
      >
        <motion.div
          variants={textVariant(1.1)}
          className={`flex flex-col justify-center items-center relative z-10 ${isMobile ? 'pt-20 px-3' : 'pt-16 md:pt-20 lg:pt-24'}`}
        >
          {isMobile && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-600 to-blue-800 px-5 py-2 rounded-full mb-6 flex items-center justify-center shadow-lg shadow-purple-900/30"
            >
              <span className="text-white text-base font-medium">Contact Us</span>
            </motion.div>
          )}
          <h1 className={`text-white font-bold ${isMobile ? 'text-[32px] leading-[1.15] mx-1' : 'text-[28px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.2] sm:leading-[1.25]'} text-center font-heading4 ${pageTitle.className} ${isMobile ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white' : ''}`}>
            Collaborate to Build Your Digital Future
          </h1>
          <h2 className={`${isMobile ? 'text-[16px] leading-[1.6] px-2 mt-4 mb-6' : 'text-[14px] sm:text-[18px] md:text-[20px] leading-[1.5] sm:leading-[1.6] mt-2 sm:mt-3 md:mt-4 mb-4 sm:mb-6 md:mb-8'} text-[#c7c7c7] font-normal text-center ${subtitle.className}`}>
            Share your vision, and let's work together to create exceptional solutions.
          </h2>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full"
        >
          {isMobile ? (
            <>
              <div className="absolute w-full h-[200px] bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-[40px] z-0 -top-[10px]"></div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full relative z-10 mb-8 mt-2"
              >
                <img
                  src="/ai/ai-bg.png"
                  alt="hero_cover"
                  className="w-full h-[300px] object-cover rounded-[30px] z-10 relative shadow-xl shadow-purple-900/20"
                />
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-black/40 to-transparent z-20"></div>
              </motion.div>
            </>
          ) : (
            <>
              <div className="absolute w-full h-[150px] sm:h-[250px] md:h-[300px] hero-gradient rounded-tl-[40px] sm:rounded-tl-[100px] md:rounded-tl-[140px] z-[0] -top-[20px] sm:-top-[30px]" />
              <div className="w-full relative z-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                <img
                  src="/ai/ai-bg.png"
                  alt="hero_cover"
                  className={`w-full sm:h-[350px] md:h-[425px] lg:h-[500px] object-cover rounded-tl-[70px] sm:rounded-tl-[100px] md:rounded-tl-[140px] z-10 relative`}
                />
              </div>
            </>
          )}
        </motion.div>
        
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-4 mb-8"
          >
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-800 rounded-full text-white font-medium shadow-lg shadow-purple-900/30 flex items-center">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;