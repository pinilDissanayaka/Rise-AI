"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { heading1, heading2 } from "../../../../fonts/font";


const Clients = () => {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className='max-w-[1280px] mx-auto relative z-[2]'>
                <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
                    <div className='py-3 mb-2 flex flex-col justify-center items-center'>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            viewport={{ once: false }}
                            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <p className={`text-[#939aff] ${heading1.className}`}>About Us</p>
                            <span className={`text-[28px] md:text-[32px] leading-[36px] ${heading2.className}`}>
                                At Rise AI, we don't just provide AI solutions—we build the future. By merging AI, spirituality, and sustainability, we are creating a model for responsible technology that enhances lives and protects the planet.
                                Are you ready to transform your business with AI? Let's build something extraordinary together.
                            </span>
                        </motion.h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;