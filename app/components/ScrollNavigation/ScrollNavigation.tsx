"use client";

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronCircleUp } from 'react-icons/fa';
import { body } from '../../../fonts/font';

interface Section {
  id: string;
  label: string;
}

interface ScrollNavigationProps {
  sections: Section[];
}

const ScrollNavigation = ({ sections }: ScrollNavigationProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to smoothly scroll to a section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset to account for fixed header
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  }, []);

  // Track scroll position to determine active section and show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Show scroll-to-top button after scrolling down 500px
      setShowScrollToTop(scrollPosition > 500);
      
      // Get all section elements
      const sectionElements = sections.map(section => document.getElementById(section.id)).filter(Boolean);
      
      // Determine which section is currently in view
      sectionElements.forEach(section => {
        if (!section) return;
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle initial hash in URL
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500); // Delay to ensure all content is loaded
    }
  }, [scrollToSection]);

  return (
    <>
      {/* Navigation dots for each section */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-2 md:gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-purple-600 w-4 md:w-5 h-2 md:h-5 shadow-md shadow-purple-600/30' 
                : 'bg-gray-700 hover:bg-gray-500'
            }`}
            aria-label={`Navigate to ${section.label} section`}
          />
        ))}
      </div>
      
      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent pb-2 pt-6">
        <div className="flex justify-around px-2 overflow-x-auto hide-scrollbar">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-2 text-xs rounded-lg whitespace-nowrap flex-shrink-0 transition-all ${
                activeSection === section.id 
                  ? 'bg-purple-700 text-white' 
                  : 'bg-gray-800/70 text-gray-300'
              } ${body.className}`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaChevronCircleUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollNavigation;