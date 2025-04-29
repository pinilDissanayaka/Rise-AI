'use client'
import React from 'react'

type GlowingButtonProps = {
  vacancyTitle?: string
  onClick?: () => void
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ vacancyTitle, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      // Default behavior - open email application with predefined subject
      const subject = vacancyTitle ? `Application for ${vacancyTitle} position` : 'Job Application'
      const mailtoLink = `mailto:careers@risedigital.io?subject=${encodeURIComponent(subject)}`
      window.open(mailtoLink, '_blank')
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium 
      shadow-[0_0_15px_rgba(123,90,203,0.6)] hover:shadow-[0_0_25px_rgba(162,112,214,0.8)] 
      transition-all duration-300 transform hover:scale-105"
    >
      Apply Here
    </button>
  )
}

export default GlowingButton
