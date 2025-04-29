"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { heading1, heading2, title } from "../../../../fonts/font";

const Clients = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <motion.div
            className="max-w-[1280px] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className='max-w-[1280px] mx-auto relative z-[2]'>
                <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
                    <div className='py-3 mb-2 flex flex-col justify-center items-center'>
                        <motion.h3
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            viewport={{ once: false }}
                            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <p className={`text-4xl md:text-5xl mb-10 text-[#939aff] ${title.className}`}>
                            Welcome to Rise AI
                            </p>

                            <span className={`text-[20px] md:text-[24px] leading-[22px] text-justify ${heading1.className}`}>
                            "Not Just Digital—Dimensional." We don't just deliver services—we build intelligent ecosystems.
                            Whether you're crafting the next unicorn startup or streamlining an enterprise workflow,
                            Rise AI is your co-pilot in the age of artificial intelligence.
                            </span>
                        </motion.h3>
                        <motion.a
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            href="/about"
                            className='flex items-center bg-black hover:bg-white text-white hover:text-black transition-colors duration-300 font-bold px-14 py-3 justify-center rounded-md text-[20px]'
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 transition ease-in duration-150 ${hovered ? "translate-x-2" : "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none">
                                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                <path className={`transition ease-in duration-150 ${hovered ? "opacity-100" : "opacity-0"}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Clients;