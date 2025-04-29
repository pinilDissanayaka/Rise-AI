'use client'
import React from 'react'
import { motion } from 'framer-motion'

const CareerPath = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  // Culture values with icons
  const cultureValues = [
    {
      icon: "🚀",
      title: "Innovation-Driven",
      description: "We push boundaries and embrace cutting-edge technologies to create solutions that shape the future."
    },
    {
      icon: "🤝",
      title: "Collaborative Environment",
      description: "Our teams work together across disciplines, sharing knowledge and expertise to achieve common goals."
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description: "We invest in continuous learning and provide opportunities for personal and professional development."
    },
    {
      icon: "🔍",
      title: "Problem Solvers",
      description: "We approach challenges with creativity and determination, turning obstacles into opportunities."
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "We value wellbeing and promote a healthy balance between professional achievement and personal fulfillment."
    },
    {
      icon: "🌐",
      title: "Global Perspective",
      description: "Our diverse team brings varied perspectives, enriching our solutions and workplace culture."
    }
  ]

  return (
    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 py-12 bg-transparent">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Culture at Rise AI</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
          Join a team where innovation meets collaboration. At Rise AI, we're building a culture 
          that empowers talent and pushes the boundaries of what's possible.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cultureValues.map((value, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-[#161b22] to-[#0d1117] p-6 rounded-xl shadow-lg hover:shadow-purple-900/20 transition-all duration-300 border border-purple-900/20 hover:border-purple-700/40"
          >
            {/* <div className="text-4xl mb-4">{value.icon}</div> */}
            <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
            <p className="text-gray-300">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-16 text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 rounded-xl border border-purple-900/30"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          We're always looking for passionate individuals who are excited about technology and want to make an impact.
          Explore our open roles and find where you fit in.
        </p>
        <a 
          href="#OpenVacancies" 
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-purple-700/50"
        >
          View Open Positions
        </a>
      </motion.div>
    </div>
  )
}

export default CareerPath
