"use client";

import dynamic from "next/dynamic";
import Capabilities from "./components/Capabilities/Capabilities";
import Expertise from "./components/Expertise/Expertise";
import Footer from "../components/Footer/Footer";
import Clients from "./components/Clients/Clients";
import Tools from "./components/Tools/Tools";
import Nav from "../components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Hero from "./components/Hero-section/Hero";
import RiseAI from "./components/RiseAI/RiseAI";
import ScrollIndicator from "../components/ScrollNavigation/ScrollIndicator";
import MobileHeader from "../components/MobileHeader/MobileHeader";

const Model = dynamic(
  () => import("../components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);

export default function Home() {
  // Define sections for the ScrollIndicator
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "clients", label: "Clients" },
    { id: "tools", label: "Tools" },
    { id: "ai", label: "AI" },
    { id: "capabilities", label: "Capabilities" },
    { id: "expertise", label: "Expertise" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Background layers or absolute positioned elements */}
        <div className="relative z-40">
          <div className="absolute inset-0"></div>
        </div>
        <MobileHeader /> 
        <div className="overflow-hidden w-full">
          {/* Hero Section */}
          <div 
            id="hero"
            className="relative min-h-screen w-full overflow-x-hidden flex justify-center"
          >
            <Hero />
          </div>

          {/* About Section */}
          <div
            id="about"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <About />
          </div>

          {/* Clients Section */}
          <div
            id="clients"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <Clients />
          </div>

          {/* Tools Section */}
          <div
            id="tools"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <Tools />
          </div>

          {/* Rise AI Section */}
          <div
            id="ai"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <RiseAI />
          </div>

          {/* Capabilities Section */}
          <div
            id="capabilities"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <Capabilities />
          </div>

          {/* Expertise Section */}
          <div
            id="expertise"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <Expertise />
          </div>

          {/* Contact Section */}
          <div
            id="contact"
            className="px-4 py-12 sm:px-8 md:px-16 overflow-hidden flex justify-center"
          >
            <Contact />
          </div>
        </div>

        
      </div>
      <Footer />
      {/* Navigation overlay */}
      <Nav />

      {/* Bot Model Fixed Element */}
      <div
        className="fixed bottom-4 right-4 z-50 pointer-events-auto"
        onClick={() => (window.location.href = "/")}
      >
        <Model />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator sections={sections} />
    </>
  );
}
