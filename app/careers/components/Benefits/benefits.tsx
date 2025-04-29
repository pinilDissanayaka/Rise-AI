'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      icon: "🌟",
      title: "Competitive Compensation",
      description: "We offer salary packages that recognize your expertise and contributions to our success."
    },
    {
      icon: "🏥",
      title: "Comprehensive Healthcare",
      description: "Full medical, dental, and vision coverage for you and your dependents."
    },
    {
      icon: "🧠",
      title: "Learning & Development",
      description: "Annual learning stipend and dedicated time for professional growth."
    },
    {
      icon: "🏡",
      title: "Flexible Work Options",
      description: "Remote-friendly environment with flexible hours to support your ideal work-life integration."
    },
    {
      icon: "🏖️",
      title: "Generous Time Off",
      description: "Unlimited PTO policy that encourages taking time to recharge and refresh."
    },
    {
      icon: "💰",
      title: "Equity Participation",
      description: "Share in our success with equity grants that make you an owner in our journey."
    },
    {
      icon: "🚀",
      title: "Career Advancement",
      description: "Clear growth paths and regular performance reviews to accelerate your career."
    },
    {
      icon: "💻",
      title: "Latest Technology",
      description: "Access to cutting-edge tools and hardware to do your best work."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 py-12 bg-transparent">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Work With Us</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
          We value our team members and provide benefits that help you thrive both professionally and personally.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-[#161b22] to-[#0d1117] p-6 rounded-xl border border-purple-900/20 hover:border-purple-700/40 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Benefits
