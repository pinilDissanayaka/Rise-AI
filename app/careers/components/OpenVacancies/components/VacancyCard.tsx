'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GlowingButton from './GlowingButton'

type Vacancy = {
  title: string
  level: string
  discipline: string
  type: string
}

type VacancyCardProps = {
  vacancy: Vacancy
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleApply = () => {
    // You could also add analytics tracking here
    const subject = `Application for ${vacancy.title} position`
    const mailtoLink = `mailto:careers@risedigital.io?subject=${encodeURIComponent(subject)}`
    window.open(mailtoLink, '_blank')
  }

  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg shadow flex items-center justify-between cursor-pointer bg-white/30 backdrop-blur-md border border-white/10 text-white hover:shadow-[0_0_20px_rgba(162,112,214,0.7)] transition-shadow duration-300"
    >
      <div className="flex-1 mr-3">
        <h3 className="text-xl font-semibold line-clamp-2">{vacancy.title}</h3>
        <p className="opacity-80">{vacancy.discipline}</p>
        <p className="opacity-80">{vacancy.type}</p>
      </div>
      <div className="text-right flex flex-col items-end">
        <p className="font-medium">{vacancy.level}</p>
        
        {/* Conditional rendering based on screen size */}
        {isMobile ? (
          <button 
            onClick={handleApply}
            className="mt-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 p-2 rounded-full shadow-md transition-colors text-white"
            aria-label={`Apply for ${vacancy.title}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        ) : (
          <GlowingButton vacancyTitle={vacancy.title} onClick={handleApply} />
        )}
      </div>
    </motion.div>
  )
}

export default VacancyCard
