"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';
import { motion } from "framer-motion";
import { heading1, heading2, body } from "../../../../fonts/font";
import Link from "next/link";

// Type definitions for success stories and success metric component
interface SuccessStory {
  id: number;
  metric: string;
  client: string;
  description: string;
  link: string;
  image: string;
}

interface SuccessMetricProps {
  metric: string;
  client: string;
  description: string;
  link: string;
  delay?: number;
}

// Marketing success stories
const successStories: SuccessStory[] = [
  {
    id: 1,
    metric: "400% ROI in 3 weeks",
    client: "E-commerce Fashion Brand",
    description: "AI-optimized ad targeting with dynamic creative rotation and real-time audience behavior analysis for a new product line launch.",
    link: "/marketing/case-studies/ecommerce",
    image: "/marketing/success1.jpg"
  },
  {
    id: 2,
    metric: "15K shares organically",
    client: "Fintech Startup",
    description: "Data-driven content strategy with viral-optimized assets that transformed complex financial concepts into engaging, shareable content.",
    link: "/marketing/case-studies/fintech",
    image: "/marketing/success2.jpg"
  },
  {
    id: 3,
    metric: "7.2x ROAS boost",
    client: "SaaS Platform",
    description: "Machine learning campaign optimization with real-time adjustments to bidding, messaging, and audience segments across multiple channels.",
    link: "/marketing/case-studies/saas",
    image: "/marketing/success3.jpg"
  },
];

// Component for the success metrics cards that rotate
const SuccessMetric = ({ metric, client, description, link, delay = 0 }: SuccessMetricProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.6 }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 30px rgba(78, 13, 216, 0.2)" }}
      className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 h-full cursor-pointer"
    >
      <Link href={link} className="flex flex-col h-full">
        <h3 className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          {metric}
        </h3>
        <p className={`text-white/90 text-lg mb-1 ${heading2.className}`}>{client}</p>
        <p className={`text-gray-400 flex-grow ${body.className}`}>{description}</p>
        
        <div className="mt-6 flex items-center opacity-80 group-hover:opacity-100">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="ml-2 text-sm text-gray-300">View Case Study</span>
        </div>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="md:w-10/12 mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <h3
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: "300ms" }}
            >
              <p className={`text-[#939aff] ${heading1.className}`}>Motion That Moves People</p>
              <span className={`text-[28px] md:text-[32px] leading-[36px] ${heading2.className}`}>
                Interactive Marketing Stories That Inspire
              </span>
            </h3>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`text-gray-300 text-lg max-w-3xl mb-12 ${body.className}`}
          >
            We don't make ads. We make experiences that your audience remembers.
            From kinetic storyboards to real-time campaign visualizers, we deliver marketing with movement.
          </motion.p>
        </div>
      </div>

      {/* Success Metrics Carousel */}
      <div className="mb-20 px-4">
        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-white text-xl md:text-2xl mb-8 ${heading2.className}`}
        >
          Our Success Stories
        </motion.h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <SuccessMetric 
              key={story.id}
              metric={story.metric} 
              client={story.client} 
              description={story.description}
              link={story.link}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>

      {/* Live Dashboard Preview */}
      <div className="my-20 px-4">
        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-white text-xl md:text-2xl mb-8 ${heading2.className}`}
        >
          Real-Time Campaign Performance
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden border border-purple-500/20 h-[300px] md:h-[400px] bg-gradient-to-br from-purple-900/10 via-black/60 to-blue-900/10"
        >
          <div className="absolute inset-0 flex flex-col">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Campaign Performance Dashboard</span>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Live</div>
                <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Last updated: Just now</div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stats Column */}
              <div className="flex flex-col gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-gray-400 text-xs mb-1">Total Conversions</div>
                  <div className="text-2xl text-white font-bold">1,482</div>
                  <div className="text-green-500 text-xs flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586l3.293-3.293A1 1 0 0112 7z" clipRule="evenodd" />
                    </svg>
                    24.3% this week
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-gray-400 text-xs mb-1">Average CTR</div>
                  <div className="text-2xl text-white font-bold">8.7%</div>
                  <div className="text-green-500 text-xs flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586l3.293-3.293A1 1 0 0112 7z" clipRule="evenodd" />
                    </svg>
                    2.1% this week
                  </div>
                </div>
              </div>
              
              {/* Graph Column */}
              <div className="md:col-span-2 bg-white/5 rounded-lg p-4 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-300">Campaign Performance</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="text-xs text-gray-400">Conversions</div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-gray-400">Traffic</div>
                  </div>
                </div>
                
                {/* Animated graph */}
                <div className="flex-1 flex items-end">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${Math.floor(Math.random() * 60) + 20}%` }}
                        transition={{ delay: 0.1 * i, duration: 1 }}
                        className="w-2/3 bg-purple-500/80 rounded-t"
                      ></motion.div>
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${Math.floor(Math.random() * 50) + 15}%` }}
                        transition={{ delay: 0.1 * i + 0.05, duration: 1 }}
                        className="w-2/3 bg-blue-500/80 rounded-t"
                      ></motion.div>
                      <div className="text-gray-500 text-[8px] mt-1">{i + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
    </div>
  );
};

export default Projects;
