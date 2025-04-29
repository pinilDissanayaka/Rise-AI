"use client";
import React, { useState } from "react";

export const CustomButton = () => {
  const [isTransitioning, setTransitioning] = useState(false);

  // Handle button click: trigger transition then navigate to homepage
  const handleClick = () => {
    setTransitioning(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 700);
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={handleClick}
        className={`group relative ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {/* Background gradient layers with a darker purple and reduced glow strength */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6b3cb0] to-[#6b3cb0] opacity-50 blur transition duration-300 group-hover:opacity-80"></div>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6b3cb0] to-[#6b3cb0] opacity-50 blur transition duration-300 group-hover:opacity-80 animation-delay-200"></div>

        {/* Button content */}
        <span className="relative flex items-center justify-center rounded-lg bg-black px-7 py-3 leading-none text-lg font-bold text-[#a55eea]">
          Visit To Rise With Us
        </span>
      </button>
    </div>
  );
};
