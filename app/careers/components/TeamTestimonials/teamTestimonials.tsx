'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { title, heading1, heading2, subtitle, body } from '../../../../fonts/font'

interface Testimonial {
  id: string
  name: string
  role: string
  department: string
  image: string
  backgroundImage: string
  quote: string
  linkedIn?: string
  twitter?: string
  yearsAtCompany: string
}

const TeamTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [elementVisible, setElementVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const elementRef = useRef<HTMLDivElement>(null)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  const testimonials: Testimonial[] = [
    {
      id: "01",
      name: "Sarah Johnson",
      role: "Senior UI/UX Designer",
      department: "Design",
      image: "/home/finance.png",
      backgroundImage: "/home/education.jpg",
      quote: "Working at Rise AI has been the highlight of my career. The culture encourages innovation and I've had the opportunity to work on projects that truly push the boundaries of what's possible with AI interfaces. There's a real emphasis on growth here - both personal and professional.",
      linkedIn: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahj_designs",
      yearsAtCompany: "2+ years"
    },
    {
      id: "02",
      name: "David Chen",
      role: "Machine Learning Engineer",
      department: "Engineering",
      image: "/home/governance.jpg",
      backgroundImage: "/home/health.jpg",
      quote: "As an ML Engineer, I'm constantly challenged to solve complex problems that have real-world impact. The team here is exceptional - everyone is passionate about AI ethics and creating technologies that benefit humanity. The collaborative environment makes even the most challenging projects enjoyable.",
      linkedIn: "https://linkedin.com/in/davidchenml",
      yearsAtCompany: "3+ years"
    },
    {
      id: "03",
      name: "Amara Okafor",
      role: "Product Manager",
      department: "Product",
      image: "/home/health.jpg",
      backgroundImage: "/home/governance.jpg",
      quote: "What I love about Rise AI is that we're not just building products - we're shaping the future of how humans interact with AI. My ideas are valued, and I've been able to lead initiatives that have transformed our product roadmap. The team's diversity brings so many perspectives that enrich our work.",
      linkedIn: "https://linkedin.com/in/amaraokafor",
      twitter: "https://twitter.com/amara_product",
      yearsAtCompany: "1.5 years"
    },
    {
      id: "04",
      name: "Miguel Santos",
      role: "Senior Data Scientist",
      department: "Data Science",
      image: "/home/education.jpg",
      backgroundImage: "/home/hero.png",
      quote: "Rise AI provides the perfect balance of research freedom and practical application. I've been able to publish papers while also seeing my models deployed in production, making real differences in people's lives. The company's investment in cutting-edge infrastructure makes it a joy to experiment and innovate.",
      linkedIn: "https://linkedin.com/in/miguelsantosdata",
      yearsAtCompany: "4+ years"
    }
  ]
  
  const navigate = (direction: 'next' | 'prev') => {
    setIsAutoPlaying(false)
    
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setElementVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current; // Store ref in variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use stored variable in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, [])
  
  useEffect(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }
    
    if (isAutoPlaying && elementVisible) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 6000)
    }
    
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isAutoPlaying, elementVisible, testimonials.length])
  
  useEffect(() => {
    const autoplayTimeoutId = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 15000)
    
    return () => {
      clearTimeout(autoplayTimeoutId)
    }
  }, [isAutoPlaying, activeIndex])
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  const getBackgroundStyle = (index: number) => {
    if (index === activeIndex) {
      return 'scale-105 opacity-100'
    }
    return 'scale-100 opacity-0'
  }

  return (
    <div 
      className="max-w-screen-xl mx-auto px-0 sm:px-6 py-8 sm:py-16 bg-transparent overflow-hidden" 
      ref={elementRef}
    >
      <motion.div 
        className="text-center mb-10 sm:mb-16 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={elementVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white tracking-wider ${title.className}`}>
          Meet Our Team
        </h2>
        <p className={`text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg ${body.className}`}>
          Hear what our talented professionals have to say about working at Rise AI.
          Our people are the heart of everything we do.
        </p>
      </motion.div>

      <div className="relative px-3 sm:px-0">
        <div className="relative bg-gradient-to-br from-[#161b22] to-[#0d1117] rounded-xl border border-gray-800 overflow-hidden shadow-xl">
          <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${getBackgroundStyle(index)}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/90 to-[#0d1117]/70" />
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${testimonial.backgroundImage}')`
                  }}
                />
              </div>
            ))}
          </div>

          <div className="relative z-10 p-4 sm:p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="order-2 lg:order-1">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-opacity duration-500 ${activeIndex === index ? 'block' : 'hidden'}`}
                  >
                    <motion.div
                      key={`quote-${testimonial.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FaQuoteLeft className="text-purple-500 mb-3 sm:mb-4" size={24} />
                      <p className={`text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed ${body.className}`}>
                        {testimonial.quote}
                      </p>
                      
                      <div className="border-t border-gray-800 pt-4 sm:pt-6">
                        <h3 className={`text-white text-lg sm:text-xl font-bold tracking-wide ${heading1.className}`}>{testimonial.name}</h3>
                        <p className={`text-purple-400 mb-1 sm:mb-2 text-sm sm:text-base ${subtitle.className}`}>{testimonial.role}, {testimonial.department}</p>
                        <p className={`text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 ${body.className}`}>Team member for {testimonial.yearsAtCompany}</p>
                        
                        <div className="flex space-x-2 sm:space-x-3">
                          {testimonial.linkedIn && (
                            <a 
                              href={testimonial.linkedIn}
                              onClick={(e) => handleSocialClick(e, testimonial.linkedIn!)}
                              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-blue-800/30 flex items-center justify-center text-blue-400 hover:bg-blue-800/50 transition-colors duration-300"
                              aria-label={`${testimonial.name}'s LinkedIn`}
                            >
                              <FaLinkedinIn size={14} />
                            </a>
                          )}
                          {testimonial.twitter && (
                            <a 
                              href={testimonial.twitter}
                              onClick={(e) => handleSocialClick(e, testimonial.twitter!)}
                              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/50 transition-colors duration-300"
                              aria-label={`${testimonial.name}'s Twitter`}
                            >
                              <FaTwitter size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <div className="order-1 lg:order-2 mx-auto">
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-4 sm:mb-6 lg:mb-0">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={`image-${testimonial.id}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: activeIndex === index ? 1 : 0,
                        scale: activeIndex === index ? 1 : 0.9
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                      style={{ display: activeIndex === index ? 'block' : 'none' }}
                    >
                      <div className="w-full h-full rounded-xl overflow-hidden border-2 border-purple-700/50 shadow-lg shadow-purple-900/20">
                        <div className="relative w-full h-full bg-gradient-to-tr from-blue-900/20 to-purple-900/20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/home/hero.png'
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-8 gap-4 sm:gap-0">
              <div className="flex space-x-1.5 sm:space-x-2 order-2 sm:order-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-purple-600 w-6 sm:w-10' 
                        : 'bg-gray-700 w-2 sm:w-3 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2 sm:space-x-3 order-1 sm:order-2">
                <button
                  onClick={() => navigate('prev')}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <FaArrowLeft size={14} />
                </button>
                <button
                  onClick={() => navigate('next')}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-700 flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamTestimonials
