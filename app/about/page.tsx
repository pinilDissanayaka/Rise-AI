"use client";

import Hero from './components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav'
import dynamic from 'next/dynamic';
import Insights from './components/Insights/Insights';
import About from './components/About/About';
import ScrollIndicator from "../components/ScrollNavigation/ScrollIndicator";
import { useEffect } from 'react';

const Model = dynamic(
  () => import("../components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);

export default function AboutPage() {
  // Define sections for the ScrollIndicator
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "Insights", label: "Insights" }
  ];

  // Enhance scroll behavior
  useEffect(() => {
    // Handle initial scroll position based on URL hash
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    
    // Add smooth scrolling for all anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target) return;
      
      const anchorElement = target.closest('a[href^="#"]');
      if (!anchorElement) return;
      
      const targetId = anchorElement.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const element = document.getElementById(targetId);
      
      if (element) {
        e.preventDefault();
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen bg-[#0d1117] overflow-x-hidden relative flex flex-col items-center">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[200px]"></div>
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[200px]"></div>
      </div>
      
      <Nav />
      
      {/* Main content sections with improved spacing and structure */}
      <section id="hero" className="hero-section relative z-10 w-full flex justify-center">
        <Hero />
      </section>
      
      <section id="about" className="py-20 md:py-28 px-4 sm:px-6 overflow-hidden relative z-10 w-full flex justify-center">
        <About />
      </section>
      
      <section id="Insights" className="py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#0d1117] to-[#101520] relative z-10 w-full flex justify-center">
        <Insights />
      </section>
      
      <Footer />
      
      {/* Bot component with improved accessibility */}
      <div
        className="fixed bottom-6 right-6 z-50 pointer-events-auto cursor-pointer"
        role="complementary"
        aria-label="AI Assistant"
        onClick={() => (window.location.href = "/")}
      >
        <Model />
      </div>
      
      {/* Scroll Indicator with improved visibility */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30">
        <ScrollIndicator sections={sections} />
      </div>
    </main>
  );
}

