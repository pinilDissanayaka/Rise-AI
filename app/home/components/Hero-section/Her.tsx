"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import components that use browser APIs
const Earth = dynamic(() => import("./Earth1"), { ssr: false });
const Earth2 = dynamic(() => import("./Earth2"), { ssr: false });
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

type Props = {};

const Hero = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* === DESKTOP LAYOUT === */}
      <div className="hidden lg:flex relative max-w-[1680px] lg:pt-32 md:px-10 mx-auto pt-16 items-center justify-between">
        {/* Left: Full-size Earth */}
        <div className="relative w-[40%] max-w-[600px]">
          <Earth />
        </div>
        {/* Right: Text Content */}
        <div className="text-right pr-4 md:pr-12 w-full max-w-5xl">
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-tight font-heading1">
            Innovative Marketing, AI, and Technology Solutions for Unstoppable
            Growth
          </h1>
          <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mt-4 text-[#7d8590] font-heading3">
            {isClient ? (
              <Typewriter
                options={{
                  strings: [
                    "Partnering with forward-thinking brands to design and scale transformative digital solutions",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            ) : (
              "Partnering with forward-thinking brands..."
            )}
          </p>
          <div className="mt-8">
            <a
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href=""
              className="border border-neutral-600 copilot rounded-full inline-block"
            >
              <div className="flex items-center p-3 px-5">
                <Image
                  className="d-block w-auto flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3 scale-110"
                  width={44}
                  height={44}
                  loading="lazy"
                  alt=""
                  aria-hidden="true"
                  src=""
                />
                <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                  <div className="font-medium text-white text-[16px] max-md:text-[14px] leading-5">
                    Explore Our Services
                  </div>
                </div>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-white transition ease-in duration-150 ${
                      hovered ? "translate-x-0" : "-translate-x-1"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={`text-white transition ease-in duration-150 ${
                        hovered ? "opacity-100" : "opacity-0"
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

