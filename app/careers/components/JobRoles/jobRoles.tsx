'use client'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaChartLine, FaArrowRight, FaLightbulb, FaCogs, FaMobileAlt } from 'react-icons/fa'
import { title, heading1, heading2, subtitle, body } from '../../../../fonts/font'
import { CareersContext, CareersContextType } from '../../context/careersContext'

interface JobCategory {
  title: string
  description: string
  icon: React.ReactNode
  backgroundColor: string
  roles: {
    title: string
    description: string
    skills: string[]
    impact: string
  }[]
}

const JobRoles = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeRole, setActiveRole] = useState(0)
  const [elementVisible, setElementVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const { scrollToSection } = useContext<CareersContextType>(CareersContext)
  
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

  const jobCategories: JobCategory[] = [
    {
      title: "Engineering",
      description: "Build cutting-edge technology that powers our AI solutions and transforms industries.",
      icon: <FaCode className="text-blue-400" size={24} />,
      backgroundColor: "from-blue-900/20 to-blue-900/5",
      roles: [
        {
          title: "Full Stack Developer",
          description: "Design and implement scalable, high-performance web applications that power our AI platforms.",
          skills: ["React/Next.js", "Node.js", "TypeScript", "Cloud Infrastructure", "API Design"],
          impact: "Your work will directly shape the user experience of our flagship products and enable clients to harness the full power of our AI technologies."
        },
        {
          title: "Machine Learning Engineer",
          description: "Develop and optimize machine learning models and implement efficient inference pipelines.",
          skills: ["PyTorch/TensorFlow", "Python", "MLOps", "Data Pipelines", "Algorithm Design"],
          impact: "You'll create the intelligence behind our products, solving complex problems and building systems that learn and improve over time."
        },
        {
          title: "DevOps Engineer",
          description: "Build and maintain our cloud infrastructure and CI/CD pipelines to ensure reliable service delivery.",
          skills: ["Kubernetes", "Docker", "AWS/Azure/GCP", "Infrastructure as Code", "Monitoring"],
          impact: "Your expertise will enable us to scale reliably, deploy rapidly, and maintain the highest levels of system availability."
        }
      ]
    },
    {
      title: "Design",
      description: "Create intuitive, beautiful experiences that make complex AI capabilities accessible to everyone.",
      icon: <FaPaintBrush className="text-purple-400" size={24} />,
      backgroundColor: "from-purple-900/20 to-purple-900/5",
      roles: [
        {
          title: "UI/UX Designer",
          description: "Design intuitive interfaces that make complex AI capabilities accessible and delightful to use.",
          skills: ["User Research", "Figma/Adobe XD", "Information Architecture", "Prototyping", "Design Systems"],
          impact: "Your designs will shape how users interact with AI, making powerful technology intuitive and accessible to a wide audience."
        },
        {
          title: "3D Artist",
          description: "Create immersive 3D assets and environments for our virtual experiences and digital twins.",
          skills: ["Blender/Maya", "3D Modeling", "Texturing", "Animation", "Lighting"],
          impact: "Your work will create visually stunning virtual environments and assets that enhance our product offerings."
        },
        {
          title: "Motion Designer",
          description: "Craft engaging animations and micro-interactions that bring our interfaces to life.",
          skills: ["After Effects", "Lottie", "CSS Animations", "Framer Motion", "Storyboarding"],
          impact: "You'll add the polish and delight that differentiates our products, making complex processes feel simple and intuitive."
        }
      ]
    },
    {
      title: "Product",
      description: "Identify market opportunities and guide the development of innovative AI solutions.",
      icon: <FaChartLine className="text-green-400" size={24} />,
      backgroundColor: "from-green-900/20 to-green-900/5",
      roles: [
        {
          title: "Product Manager",
          description: "Define product vision and roadmap, balancing user needs with business objectives.",
          skills: ["Product Strategy", "User Research", "Market Analysis", "Roadmapping", "Stakeholder Management"],
          impact: "You'll guide our product development from concept to launch, ensuring we build the right solutions for our customers."
        },
        {
          title: "Data Analyst",
          description: "Extract insights from user behavior and product performance to inform business decisions.",
          skills: ["SQL", "Data Visualization", "Python/R", "Statistical Analysis", "A/B Testing"],
          impact: "Your insights will help us understand user needs, optimize our products, and identify new opportunities for growth."
        },
        {
          title: "Technical Project Manager",
          description: "Coordinate cross-functional teams to deliver complex AI projects on time and within scope.",
          skills: ["Agile Methodologies", "Risk Management", "Technical Background", "Communication", "Resource Planning"],
          impact: "You'll ensure our ambitious technical projects are delivered successfully, coordinating teams and managing dependencies."
        }
      ]
    },
    {
      title: "Innovation",
      description: "Explore emerging technologies and create new applications for artificial intelligence.",
      icon: <FaLightbulb className="text-yellow-400" size={24} />,
      backgroundColor: "from-yellow-900/20 to-yellow-900/5",
      roles: [
        {
          title: "Research Scientist",
          description: "Conduct cutting-edge research in artificial intelligence, machine learning, and natural language processing.",
          skills: ["Deep Learning", "NLP", "Computer Vision", "Academic Publishing", "Prototyping"],
          impact: "Your research will push the boundaries of what's possible with AI and form the foundation for our next generation of products."
        },
        {
          title: "Innovation Engineer",
          description: "Turn research concepts into practical applications and develop proof-of-concept prototypes.",
          skills: ["Rapid Prototyping", "Software Engineering", "ML Implementation", "Cross-functional Collaboration", "Problem Solving"],
          impact: "You'll bridge the gap between theoretical research and practical applications, bringing new AI capabilities to market."
        },
        {
          title: "Technical Writer",
          description: "Create clear, comprehensive documentation for our technologies, APIs, and solutions.",
          skills: ["Technical Documentation", "Content Strategy", "Information Architecture", "API Documentation", "Developer Experience"],
          impact: "Your work will make our technologies accessible to developers, partners, and users, accelerating adoption and integration."
        }
      ]
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="max-w-screen-xl mx-auto px-0 sm:px-6 py-8 sm:py-16 bg-transparent" ref={elementRef}>
      <motion.div 
        className="text-center mb-10 sm:mb-16 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={elementVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white tracking-wider ${title.className}`}>
          Explore Career Paths
        </h2>
        <p className={`text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg ${body.className}`}>
          At Rise AI, we offer diverse career paths across multiple disciplines. 
          Discover where your skills and passions could take you.
        </p>
      </motion.div>

      {/* Category cards in centered layout - more responsive grid */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-3"
        initial="hidden"
        animate={elementVisible ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {jobCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemFade}
            className={`
              w-[calc(50%-0.5rem)] sm:w-56 md:w-64 p-4 sm:p-5 rounded-xl cursor-pointer
              bg-gradient-to-br ${category.backgroundColor} border 
              ${activeCategory === idx 
                ? 'border-purple-600 shadow-lg shadow-purple-900/20' 
                : 'border-gray-800 hover:border-gray-700'}
              transition-all duration-300
            `}
            onClick={() => {
              setActiveCategory(idx)
              setActiveRole(0)
            }}
          >
            <div className="mb-2 sm:mb-3">{category.icon}</div>
            <h3 className={`text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide ${heading2.className}`}>{category.title}</h3>
            <p className={`text-gray-300 text-xs sm:text-sm ${body.className}`}>{category.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Active category content */}
      <motion.div
        key={`${activeCategory}-content`}
        initial="hidden"
        animate={elementVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-gradient-to-br from-[#161b22] to-[#0d1117] rounded-xl border border-gray-800 overflow-hidden mx-3 sm:mx-0"
      >
        {/* Role navigation tabs - horizontal scrolling on mobile */}
        <div className="border-b border-gray-800 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className="flex space-x-1 p-3 sm:p-4 min-w-max">
            {jobCategories[activeCategory].roles.map((role, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRole(idx)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg whitespace-nowrap transition-all duration-300 flex-shrink-0 text-sm sm:text-base ${
                  activeRole === idx 
                    ? 'bg-purple-700 text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                } ${subtitle.className} tracking-wide`}
              >
                {role.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Role details */}
        <motion.div
          key={`${activeCategory}-${activeRole}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 sm:p-6 md:p-8"
        >
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-wider ${heading1.className}`}>
                {jobCategories[activeCategory].roles[activeRole].title}
              </h3>
              <p className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed ${body.className}`}>
                {jobCategories[activeCategory].roles[activeRole].description}
              </p>
            </div>

            <div>
              <h4 className={`text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center tracking-wide ${heading2.className}`}>
                <FaCogs className="mr-2 text-purple-500" />
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                {jobCategories[activeCategory].roles[activeRole].skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className={`bg-gray-800 text-gray-300 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-gray-700 ${body.className} tracking-wide`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center tracking-wide ${heading2.className}`}>
                <FaMobileAlt className="mr-2 text-purple-500" />
                Your Impact
              </h4>
              <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-3 sm:p-4 md:p-6 rounded-lg border-l-4 border-purple-700">
                <p className={`text-gray-300 italic text-sm sm:text-base leading-relaxed ${body.className}`}>
                  {jobCategories[activeCategory].roles[activeRole].impact}
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <button 
                onClick={() => scrollToSection('openVacancies')}
                className={`inline-flex items-center group bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base ${body.className} tracking-wide`}
              >
                View Open Positions
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default JobRoles
