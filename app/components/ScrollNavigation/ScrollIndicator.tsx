"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronCircleUp } from 'react-icons/fa';

interface Section {
  id: string;
  label: string;
}

interface ScrollIndicatorProps {
  sections: Section[];
  showMobile?: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ 
  sections,
  showMobile = true 
}) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  // Memoize the scroll to section function to prevent unnecessary re-renders
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Improved offset calculation for more accurate scrolling
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update active section
      setActiveSection(sectionId);
      
      // Update URL hash without causing a page jump
      window.history.pushState(null, '', `#${sectionId}`);
    }
  }, []);

  // Optimized scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Clear hash from URL
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
  }, []);

  // Optimized scroll tracking with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          
          // Show scroll-to-top button after scrolling down 500px
          setShowScrollToTop(scrollPosition > 500);
          
          // Get all section elements that match our section IDs
          const sectionElements = sections.map(section => 
            document.getElementById(section.id)
          ).filter(Boolean) as HTMLElement[];
          
          // Find the current active section with improved calculation
          // Using a variable to track if we've found an active section
          let foundActive = false;
          
          for (let i = 0; i < sectionElements.length; i++) {
            const section = sectionElements[i];
            const rect = section.getBoundingClientRect();
            
            // Consider a section in view if it's top is within the viewport
            // or if it's the first section and we're at the top of the page
            const isInView = 
              (rect.top <= 100 && rect.bottom >= 100) ||
              (i === 0 && window.scrollY === 0);
            
            if (isInView) {
              setActiveSection(section.id);
              foundActive = true;
              break;
            }
          }
          
          // If we've scrolled past the last section, set the last section as active
          if (!foundActive && sectionElements.length > 0 && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setActiveSection(sectionElements[sectionElements.length - 1].id);
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // Handle initial hash in URL with improved timing
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const matchesSection = sections.some(section => section.id === sectionId);
      
      if (matchesSection) {
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
          // First set the active section immediately to update UI
          setActiveSection(sectionId);
          
          // Then scroll to it with a slight delay to ensure content is loaded
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 300);
        });
      }
    }
  }, [sections, scrollToSection]);

  return (
    <>
      {/* Desktop navigation dots with improved interaction */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-2 md:gap-3">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-purple-600 w-4 md:w-5 h-2 md:h-5 shadow-md shadow-purple-600/30' 
                : 'bg-gray-700 hover:bg-gray-500'
            }`}
            aria-label={`Navigate to ${section.label} section`}
            title={section.label}
          />
        ))}
      </div>
      
      {/* Mobile navigation with improved UI */}
      {showMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent pb-2 pt-6">
          <div className="flex justify-around px-2 overflow-x-auto hide-scrollbar">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 text-xs rounded-lg whitespace-nowrap flex-shrink-0 transition-all ${
                  activeSection === section.id 
                    ? 'bg-gradient-to-r from-purple-700 to-blue-600 text-white font-medium shadow-sm shadow-purple-600/20' 
                    : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700/80'
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}
      
      {/* Scroll to top button with improved animations */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-24 sm:bottom-10 right-6 z-50 bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronCircleUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollIndicator;