import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="hero">
      <HeroContent />
    </div>
  );
};

export default Hero;