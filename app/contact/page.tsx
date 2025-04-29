"use client";

import Hero from './components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import dynamic from 'next/dynamic';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { Suspense, useEffect } from 'react';
import Head from 'next/head';
import ScrollIndicator from "../components/ScrollNavigation/ScrollIndicator";

// Dynamically import the 3D model with client-side rendering only
const Model = dynamic(
  () => import("../components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);

// Loading component for suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-20 w-20">
    <div className="animate-spin h-6 w-6 border-2 border-[#939aff] border-t-transparent rounded-full"></div>
  </div>
);

export default function ContactPage() {
  // Define sections for the ScrollIndicator
  const sections = [
    { id: "hero", label: "Home" },
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" }
  ];

  // Scroll to section if URL contains hash
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Contact Rise AI | AI Solutions & Services</title>
        <meta name="description" content="Get in touch with Rise AI for AI solutions, consultation, and services. Let's transform your business with innovative technology." />
        <meta name="keywords" content="contact, AI solutions, Rise AI, technology consultation" />
        <meta property="og:title" content="Contact Rise AI" />
        <meta property="og:description" content="Get in touch with Rise AI for AI solutions and services." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="relative min-h-screen">
        <Nav />
        
        <div className="overflow-hidden">
          <section id="hero" className="hero-section px-3">
            <Hero />
          </section>
          
          <section id="About" className="home-campaign-productivity px-4 pt-8 overflow-hidden">
            <About />
          </section>
          
          <section id="Contact" className="home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden">
            <Contact />
          </section>
        </div>
        
        <Footer />
        
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
          <Suspense fallback={<LoadingFallback />}>
            <Model />
          </Suspense>
        </div>
        
        {/* Scroll Indicator */}
        <ScrollIndicator sections={sections} />
      </main>
    </>
  );
}

