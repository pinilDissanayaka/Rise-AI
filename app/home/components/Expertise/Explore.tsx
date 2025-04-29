'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../../../styles';
import { staggerContainer } from '../../../../utils/motion';
import { heading2 } from "../../../../fonts/font";

const exploreExpertise = [
  {
    id: 'Education',
    imgUrl: '/home/education.jpg',
    title: 'Education',
    hoveredText: 'Transform learning with AI-powered personalized education, automated grading, and intelligent tutoring systems.',
  },
  {
    id: 'Government',
    imgUrl: '/home/governance.jpg',
    title: 'Government',
    hoveredText: 'Optimize public services with AI-driven security, smart citizen engagement, and automated administrative processes.',
  },
  {
    id: 'Retail',
    imgUrl: '/home/retail.png',
    title: 'Retail',
    hoveredText: 'Enhance customer experience with AI-driven recommendations, automated inventory management, and smart customer support.',
  },
  {
    id: 'Finance',
    imgUrl: '/home/finance.png',
    title: 'Finance',
    hoveredText: 'Secure and streamline financial operations with AI-powered fraud detection, risk assessment, and intelligent financial forecasting.',
  },
  {
    id: 'Healthcare',
    imgUrl: '/home/health.jpg',
    title: 'Healthcare',
    hoveredText: 'Revolutionize patient care with AI-assisted diagnostics, predictive analytics, and automated medical data processing.',
  },
];

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  hovered: string | null;
  handleHover: (id: string | null) => void;
  hoveredText: string;
}

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  hovered,
  handleHover,
  hoveredText,
}: ExploreCardProps) => {
  const isExpanded = hovered ? id === hovered : id === active;

  const cardVariants = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover(null)}
      onClick={() => handleClick(id)}
      className={`relative ${
        isExpanded ? 'lg:flex-[4] flex-[10]' : 'lg:flex-[0.8] flex-[2]'
      } flex items-center justify-center min-h-[450px] rounded-[24px] overflow-hidden cursor-pointer group`}
      style={{
        transition: 'flex 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0)'
      }}
      whileHover={{ scale: 1.02 }}
      transition={{
        scale: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
        />
      </div>

      <AnimatePresence>
        {hovered === id ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.19, 1.0, 0.22, 1.0] 
            }}
            className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`font-bold text-[28px] md:text-[32px] text-white mb-3 font-heading3`}
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-[#7d8590] text-[16px] md:text-[18px] leading-[30px] max-w-sm"
            >
              {hoveredText}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-4"
            >
              <a className="text-[#939aff] text-[16px] md:text-[18px] font-medium hover:underline inline-flex items-center group/link">
                Explore
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transition-transform duration-300 ease-out group-hover/link:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute z-20 bottom-0 p-8 w-full"
          >
            {isExpanded ? (
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`font-bold sm:text-[28px] text-[24px] text-white font-heading3 ${heading2.className}`}
              >
                {title}
              </motion.h2>
            ) : (
              <motion.h3 
                className="font-semibold sm:text-[22px] text-[18px] text-white lg:rotate-[-90deg] lg:origin-[0,0] lg:absolute lg:bottom-[90px] lg:left-8"
                style={{ 
                  transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0), opacity 0.5s ease' 
                }}
              >
                {title}
              </motion.h3>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const [hovered, setHovered] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleClick = useCallback((id: string) => {
    setHovered(id);
    
    // Navigate to the corresponding page based on the clicked card
    switch(id) {
      case 'ai-solutions':
        window.location.href = '/ai';
        break;
      case 'marketing':
        window.location.href = '/marketing';
        break;
      case 'technology':
        window.location.href = '/technology';
        break;
      default:
        // If no specific routing needed, just expand the card
        setExpandedId(id === expandedId ? null : id);
    }
  }, [expandedId]);

  return (
    <motion.section
      className="py-0 px-2 md:px-4 mb-16 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col w-full"
      >
        <motion.div 
          className="flex lg:flex-row flex-col min-h-[75vh] gap-3 w-full"
          transition={{ 
            staggerChildren: 0.15,
            delayChildren: 0.3,
          }}
        >
          {exploreExpertise.map((area, index) => (
            <ExploreCard
              key={area.id}
              {...area}
              index={index}
              active={active}
              handleClick={handleClick}
              hovered={hovered}
              handleHover={setHovered}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Explore;

