'use client';
import React from 'react';
import { motion } from "framer-motion";
import Explore from "./Explore";
import { heading1, heading2 } from "../../../../fonts/font";

type Props = {}

const Expertise = (props: Props) => {
  return (
    <motion.div
      className='max-w-[1920px] w-full mx-auto'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div className='flex flex-col items-center text-center mb-12 px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className='max-w-4xl'
        >
          <h3 className="mb-4">
            <p className={`text-[#939aff] ${heading1.className} text-[24px] md:text-[32px] mb-2`}>Expertise Areas</p>
            <span className={`text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] font-heading3 text-white ${heading2.className}`}>
              Industries We're Reinventing
            </span>
          </h3>
          <p className="text-[#7d8590] text-[16px] md:text-[18px] leading-[30px] mb-10 max-w-4xl mx-auto">
            Edu: Smart tutors, not static syllabi | Gov: Citizens served by digital-first minds | Retail: Stores that remember, recommend, and react | Health: Virtual care with real empathy | Finance: Advisors that never sleep
          </p>
        </motion.div>
      </motion.div>
      <Explore />
    </motion.div>
  )
}

export default Expertise;
