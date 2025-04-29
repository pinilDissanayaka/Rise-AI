"use client";
import { useEffect, useState, useCallback } from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav'
import Hero from './components/Hero/Hero';
import dynamic from 'next/dynamic';
import OpenVacancies from './components/OpenVacancies/openVacancies';
import CareerPath from './components/CareerPath/careerPath';
import JobRoles from './components/JobRoles/jobRoles';
import Benefits from './components/Benefits/benefits';
import TeamTestimonials from './components/TeamTestimonials/teamTestimonials';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronCircleUp } from 'react-icons/fa';
import { pageTitle, title, heading1, heading2, subtitle, body } from '../../fonts/font';

// Create context to share data between components
import { CareersContext } from './context/careersContext';

const Model = dynamic(() => import("../components/Bot/Bot").then(mod => mod.Model), {
  ssr: false
});

export default function Careers() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to smoothly scroll to a section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset to account for fixed header if needed
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
      const sections = document.querySelectorAll('section[id]');
      
      // Determine which section is currently in view
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
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
  }, []);

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
    <CareersContext.Provider value={{ scrollToSection, activeSection }}>
      {/* Main content */}
      <div className={`min-h-screen bg-[#0d1117] ${body.className}`}>
        <div className="relative z-50">
          <div className="absolute"></div>
        </div>
        
        <div className="overflow-hidden">
          {/* Hero section */}
          <section id="hero" className="relative">
            <Hero />
          </section>
          
          {/* Navigation dots for each section - styled to match your design system */}
          <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-2 md:gap-3">
            {['hero', 'jobRoles', 'openVacancies', 'benefits', 'careerPath', 'teamTestimonials'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-purple-600 w-4 md:w-5 h-2 md:h-5 shadow-md shadow-purple-600/30' 
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Navigate to ${section} section`}
              />
            ))}
          </div>
          
          {/* Mobile navigation */}
          <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent pb-2 pt-6">
            <div className="flex justify-around px-2 overflow-x-auto hide-scrollbar">
              {[
                { id: 'hero', label: 'Top' },
                { id: 'jobRoles', label: 'Roles' },
                { id: 'openVacancies', label: 'Jobs' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'teamTestimonials', label: 'Team' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-xs rounded-lg whitespace-nowrap flex-shrink-0 transition-all ${
                    activeSection === item.id 
                      ? 'bg-purple-700 text-white' 
                      : 'bg-gray-800/70 text-gray-300'
                  } ${body.className}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Job Roles section with consistent gradient background */}
          <section id="jobRoles" className="py-12 sm:py-16 bg-gradient-to-b from-[#0d1117] to-[#101620] px-3 sm:px-0">
            <JobRoles />
          </section>
          
          {/* Open Vacancies section with alternating gradient */}
          <section id="openVacancies" className="py-12 sm:py-16 bg-gradient-to-b from-[#101620] to-[#0d1117] px-3 sm:px-0">
            <OpenVacancies />
          </section>
          
          {/* Benefits section with consistent gradient */}
          <section id="benefits" className="py-12 sm:py-16 bg-gradient-to-b from-[#0d1117] to-[#101620] px-3 sm:px-0">
            <Benefits />
          </section>
          
          {/* Career Path section with alternating gradient */}
          <section id="careerPath" className="py-12 sm:py-16 bg-gradient-to-b from-[#101620] to-[#0d1117] px-3 sm:px-0">
            <CareerPath />
          </section>
          
          {/* Team Testimonials section with consistent gradient */}
          <section id="teamTestimonials" className="py-12 sm:py-16 bg-gradient-to-b from-[#0d1117] to-[#101620] px-3 sm:px-0">
            <TeamTestimonials />
          </section>
        </div>
        
        <Footer />
      </div>
      
      {/* Fixed navigation */}
      <Nav />
      
      {/* Bot component */}
      <div
        className="fixed bottom-16 sm:bottom-4 right-4 z-50 pointer-events-none"
        onClick={() => (window.location.href = "/")}
      >
        <Model />
      </div>
      
      {/* Scroll to top button with design matching your purple gradient style */}
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
    </CareersContext.Provider>
  );
}

