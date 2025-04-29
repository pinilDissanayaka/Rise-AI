"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../../utils/motion";
import { heading2, body } from "../../../../fonts/font";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  description: string;
  index: number;
}

const InsightCard = ({ imgUrl, title, description, index }: InsightCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 1)}
    className="flex md:flex-row flex-col gap-6 items-center bg-gradient-to-br from-[#161b22]/70 to-[#0d1117]/70 p-5 md:p-7 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition-all duration-500"
    whileHover={{ 
      scale: 1.02, 
      boxShadow: '0 15px 30px -10px rgba(124, 58, 237, 0.2), 0 8px 12px -6px rgba(124, 58, 237, 0.15)'
    }}
  >
    <div className="relative overflow-hidden rounded-xl flex-shrink-0 group w-full md:w-[270px]">
      <Image
        src={imgUrl}
        alt={title}
        width={270}
        height={250}
        className="w-full md:w-[270px] h-[220px] md:h-[250px] rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      {/* Add a decorative element */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-80 blur-xl group-hover:opacity-100 transition-all duration-500"></div>
    </div>
    
    <div className="w-full flex flex-col justify-between">
      <div className="flex-1 flex flex-col max-w-[650px] px-2">
        <div className="flex items-center mb-2">
          <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400 to-purple-600 mr-3"></div>
          <h3 className={`text-2xl md:text-3xl text-white ${heading2.className} relative`}>
            {title}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </h3>
        </div>
        <p className={`text-gray-300 mt-3 ${body.className} leading-relaxed`}>
          {description}
        </p>
      </div>

      <motion.a 
        href="#"
        className="mt-5 self-end flex items-center justify-center rounded-full cursor-pointer group/arrow"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          // You can add functionality here or leave as is for design purposes
        }}
      >
        <span className="text-purple-400 text-sm font-medium mr-2 group-hover/arrow:text-purple-300 transition-colors">Learn more</span>
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-purple-400 group-hover/arrow:text-purple-300 transition-colors"
        >
          <path 
            d="M4.16666 10H15.8333" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M10 4.16669L15.8333 10L10 15.8334" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

export default InsightCard;
