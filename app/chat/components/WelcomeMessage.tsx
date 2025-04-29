"use client";

import React from "react";
import { title, subtitle } from "../../../fonts/font";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h1
        className={`
          text-[#ffffff]
          text-center
          font-bold
          tracking-widest
          text-2xl sm:text-3xl md:text-4xl
          ${title.className}
        `}
      >
        Welcome to Rise AI
      </h1>

      <p
        className={`
          text-[#ffffff]
          text-center
          font-medium
          mt-4 sm:mt-6 md:mt-8
          text-base sm:text-lg md:text-xl
          ${subtitle.className}
        `}
      >
        We are committed to transforming businesses with innovative digital
        solutions. Whether it’s cutting-edge software, seamless management tools,
        or AI-powered automation, we help you stay ahead in the digital era.
        Let’s build the future together!
      </p>
    </div>
  );
};

export default WelcomeMessage;
