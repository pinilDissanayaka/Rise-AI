"use client";

import  Hero  from './components/Hero/Hero';
import Capabilities from './components/Capabilities/Capabilities';
import Footer from '../components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Nav from '../components/Nav/Nav'
import dynamic from 'next/dynamic';
import ScrollIndicator from "../components/ScrollNavigation/ScrollIndicator";

const Model = dynamic(
  () => import("../components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);


export default function AI() {
  // Define sections for the ScrollIndicator
  const sections = [
    { id: "hero", label: "Home" },
    { id: "Capabilities", label: "Capabilities" },
    { id: "Projects", label: "Projects" }
  ];

  return (
    <>
      <div className=' '>
        <div className='relative z-50'>
          <div className='absolute'>
          </div>
        </div>
        <div>
          <div className='overflow-hidden'>
            <div id='hero' className='hero-section px-3 '>
              <Hero/>
            </div>
            <div id='Capabilities' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              <Capabilities />
            </div>
            <div id='Projects' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
              <Projects />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Nav />
      <div
        className="fixed bottom-4 right-4 z-50 pointer-events-none"
        onClick={() => (window.location.href = "/")}
      >
        <Model />
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator sections={sections} />
    </>
  );
}

