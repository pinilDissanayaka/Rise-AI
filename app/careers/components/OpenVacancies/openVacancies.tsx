'use client'
import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaSearch, FaTimes, FaChevronDown } from 'react-icons/fa'
import { title, heading1, heading2, subtitle, body } from '../../../../fonts/font'
import { useRouter } from 'next/navigation'

// Dynamically import HoverCard with SSR disabled
const HoverCard = dynamic(() => import("./HoverCard"), { ssr: false });

type Vacancy = {
  id: string
  title: string
  level: string
  discipline: string
  type: string
  location: string
  salary?: string
  postedDate: string
  description: string
}

const OpenVacancies = () => {
  const router = useRouter()

  const vacancies: Vacancy[] = [
    {
      id: 'se-01',
      title: 'Software Engineer',
      level: 'Junior',
      discipline: 'Software Engineering',
      type: 'Full Time',
      location: 'London, UK (Hybrid)',
      salary: '£45,000 - £60,000',
      postedDate: '2023-11-15',
      description: "Join our engineering team to build innovative software solutions for our clients. You'll work on challenging projects using the latest technologies."
    },
    {
      id: 'de-02',
      title: 'Senior Engineer – Data Engineering',
      level: 'Mid-Senior',
      discipline: 'Data Engineering',
      type: 'Full Time',
      location: 'Remote (UK)',
      salary: '£70,000 - £90,000',
      postedDate: '2023-12-01',
      description: "Design and implement data pipelines and analytics solutions for cyber security applications. Experience with big data technologies required."
    },
    {
      id: 'ta-03',
      title: 'Talent Acquisition Specialist',
      level: 'Associate',
      discipline: 'Talent Acquisition',
      type: 'Full Time',
      location: 'Manchester, UK (On-site)',
      postedDate: '2023-12-10',
      description: "Help us find and recruit top talent across technical and non-technical roles. You'll manage the full recruitment lifecycle."
    },
    {
      id: 'ux-04',
      title: 'UX/UI Designer',
      level: 'Mid-Level',
      discipline: 'UI/UX Designer',
      type: 'Full Time',
      location: 'London, UK (Hybrid)',
      salary: '£55,000 - £70,000',
      postedDate: '2023-12-05',
      description: "Create intuitive and engaging user experiences for our digital products. You'll work closely with product managers and developers."
    },
    {
      id: 'fd-05',
      title: 'Frontend Developer',
      level: 'Senior',
      discipline: 'Frontend Developer',
      type: 'Full Time',
      location: 'Remote (UK)',
      salary: '£65,000 - £85,000',
      postedDate: '2023-11-25',
      description: "Build responsive and performant web applications using modern JavaScript frameworks like React and Next.js."
    },
    {
      id: 'ml-06',
      title: 'Machine Learning Engineer',
      level: 'Mid-Senior',
      discipline: 'Machine Learning Engineer',
      type: 'Full Time',
      location: 'Cambridge, UK (Hybrid)',
      salary: '£75,000 - £95,000',
      postedDate: '2023-12-08',
      description: "Develop and deploy machine learning models for production environments. Experience with PyTorch or TensorFlow required."
    }
  ]

  const disciplines = [
    'Software Engineering',
    'Data Engineering',
    'Talent Acquisition',
    'UI/UX Designer',
    'Frontend Developer',
    'Machine Learning Engineer'
  ]

  const locations = [
    'London, UK',
    'Manchester, UK',
    'Cambridge, UK',
    'Remote (UK)'
  ]

  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setShowFilters(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleDiscipline = (discipline: string) => {
    setSelectedDisciplines(prev => 
      prev.includes(discipline) 
        ? prev.filter(d => d !== discipline) 
        : [...prev, discipline]
    )
  }

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location) 
        : [...prev, location]
    )
  }

  const clearFilters = () => {
    setSelectedDisciplines([])
    setSelectedLocations([])
    setSearchQuery('')
  }

  const toggleJobDetails = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id)
  }

  const handleApply = (jobId: string) => {
    const job = vacancies.find(v => v.id === jobId)
    if (job) {
      localStorage.setItem('applyingJob', JSON.stringify(job))
      router.push(`/careers/apply?jobId=${jobId}`)
    }
  }

  const filteredVacancies = vacancies.filter(vacancy => {
    if (selectedDisciplines.length > 0 && !selectedDisciplines.includes(vacancy.discipline)) {
      return false
    }

    if (selectedLocations.length > 0 && !selectedLocations.some(loc => vacancy.location.includes(loc))) {
      return false
    }

    if (searchQuery && !vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !vacancy.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    return true
  })

  const sortedVacancies = [...filteredVacancies].sort((a, b) => 
    new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  )

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-GB', options)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto py-8 sm:py-16">
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-white tracking-wider ${title.className}`}>
        Open Positions
      </h2>
      <p className={`text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 ${body.className}`}>
        Join our team of passionate professionals and help us build the future of AI.
        We're looking for talented individuals to fill the following positions.
      </p>

      <div className="relative bg-gradient-to-br from-[#1a1f2c] to-[#0d1117] rounded-xl shadow-xl border border-purple-900/20 overflow-hidden mx-3 sm:mx-0">
        <div className="p-4 sm:p-6 border-b border-gray-800">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-start md:items-center">
            <div className="relative flex-grow">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent tracking-wide text-sm sm:text-base ${body.className}`}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <button
              className={`md:hidden flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-purple-700 text-white rounded-lg tracking-wide text-sm ${body.className}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <FaChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3 sm:mt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  <div>
                    <h3 className={`text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base ${heading2.className}`}>Job Category</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {disciplines.map((discipline) => (
                        <label key={discipline} className={`flex items-center gap-2 cursor-pointer text-sm ${body.className}`}>
                          <input
                            type="checkbox"
                            checked={selectedDisciplines.includes(discipline)}
                            onChange={() => toggleDiscipline(discipline)}
                            className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-purple-600 rounded border-gray-700 bg-gray-900 focus:ring-purple-600"
                          />
                          <span className="text-gray-300">{discipline}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base ${heading2.className}`}>Location</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {locations.map((location) => (
                        <label key={location} className={`flex items-center gap-2 cursor-pointer text-sm ${body.className}`}>
                          <input
                            type="checkbox"
                            checked={selectedLocations.includes(location)}
                            onChange={() => toggleLocation(location)}
                            className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-purple-600 rounded border-gray-700 bg-gray-900 focus:ring-purple-600"
                          />
                          <span className="text-gray-300">{location}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {(selectedDisciplines.length > 0 || selectedLocations.length > 0 || searchQuery) && (
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 items-center">
                    <span className="text-gray-400 text-xs sm:text-sm">Active filters:</span>
                    {selectedDisciplines.map(discipline => (
                      <span key={discipline} className="inline-flex items-center gap-1 bg-purple-900/50 px-3 py-1 rounded-full text-purple-200 text-xs sm:text-sm">
                        {discipline}
                        <button 
                          onClick={() => toggleDiscipline(discipline)}
                          className="text-purple-300 hover:text-white"
                        >
                          <FaTimes size={12} />
                        </button>
                      </span>
                    ))}
                    {selectedLocations.map(location => (
                      <span key={location} className="inline-flex items-center gap-1 bg-blue-900/50 px-3 py-1 rounded-full text-blue-200 text-xs sm:text-sm">
                        {location}
                        <button 
                          onClick={() => toggleLocation(location)}
                          className="text-blue-300 hover:text-white"
                        >
                          <FaTimes size={12} />
                        </button>
                      </span>
                    ))}
                    {searchQuery && (
                      <span className="inline-flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-gray-200 text-xs sm:text-sm">
                        "{searchQuery}"
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="text-gray-400 hover:text-white"
                        >
                          <FaTimes size={12} />
                        </button>
                      </span>
                    )}
                    <button 
                      onClick={clearFilters}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white underline ml-2"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4 sm:p-6">
          {sortedVacancies.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3 sm:space-y-4"
            >
              {sortedVacancies.map((vacancy) => (
                <motion.div
                  key={vacancy.id}
                  variants={itemVariants}
                  className={`
                    bg-gradient-to-r from-[#12151e] to-[#0d1117] 
                    rounded-lg overflow-hidden transition-all duration-300
                    border border-gray-800 hover:border-purple-800/40
                    ${expandedJobId === vacancy.id ? 'shadow-lg shadow-purple-900/10' : ''}
                  `}
                >
                  <div 
                    className="p-3 sm:p-5 cursor-pointer"
                    onClick={() => toggleJobDetails(vacancy.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold text-white tracking-wider ${heading1.className}`}>{vacancy.title}</h3>
                        <div className={`flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm ${body.className}`}>
                          <span className="inline-flex items-center gap-1 text-purple-400">
                            <FaBriefcase className="text-purple-500" size={12} />
                            {vacancy.discipline} • {vacancy.level}
                          </span>
                          <span className="inline-flex items-center gap-1 text-blue-400">
                            <FaMapMarkerAlt className="text-blue-500" size={12} />
                            {vacancy.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-normal w-full sm:w-auto">
                        <span className={`text-gray-400 text-xs sm:text-sm mr-2 sm:mr-4 ${body.className}`}>
                          Posted: {formatDate(vacancy.postedDate)}
                        </span>
                        <FaChevronDown 
                          className={`text-purple-500 transition-transform ${expandedJobId === vacancy.id ? 'rotate-180' : ''}`} 
                          size={16}
                        />
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJobId === vacancy.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-gray-800"
                      >
                        <div className="p-4 sm:p-5 bg-[#0d1117]/50">
                          <div className="space-y-3 sm:space-y-4">
                            <div>
                              <h4 className={`text-white font-semibold mb-1 sm:mb-2 tracking-wide text-sm sm:text-base ${heading2.className}`}>Job Description</h4>
                              <p className={`text-gray-300 leading-relaxed text-sm sm:text-base ${body.className}`}>{vacancy.description}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              <div>
                                <h4 className={`text-white font-semibold mb-1 sm:mb-2 tracking-wide text-sm sm:text-base ${heading2.className}`}>Employment Type</h4>
                                <p className={`text-gray-300 text-sm sm:text-base ${body.className}`}>{vacancy.type}</p>
                              </div>
                              {vacancy.salary && (
                                <div>
                                  <h4 className={`text-white font-semibold mb-1 sm:mb-2 tracking-wide text-sm sm:text-base ${heading2.className}`}>Salary Range</h4>
                                  <p className={`text-gray-300 text-sm sm:text-base ${body.className}`}>{vacancy.salary}</p>
                                </div>
                              )}
                            </div>
                            
                            <div className="pt-1 sm:pt-2">
                              <button
                                onClick={() => handleApply(vacancy.id)}
                                className={`inline-block bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white font-medium py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-300 tracking-wide text-sm sm:text-base ${body.className}`}
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="py-10 sm:py-16 text-center">
              <div className="inline-flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full mb-3 sm:mb-4">
                <FaSearch className="text-gray-400" size={20} />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-white mb-2 tracking-wider ${heading1.className}`}>No positions found</h3>
              <p className={`text-gray-400 max-w-md mx-auto mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${body.className}`}>
                We couldn't find any positions matching your criteria. Try adjusting your filters or check back later.
              </p>
              <button
                onClick={clearFilters}
                className={`inline-block bg-purple-700 hover:bg-purple-600 text-white font-medium py-2 px-4 sm:px-5 rounded-lg transition-colors duration-300 tracking-wide text-sm sm:text-base ${body.className}`}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {sortedVacancies.length > 0 && (
          <div className={`px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-800 flex justify-between items-center text-xs sm:text-sm text-gray-400 ${body.className}`}>
            <span>Showing {sortedVacancies.length} of {vacancies.length} positions</span>
            <button 
              onClick={() => {
                clearFilters()
                setExpandedJobId(null)
              }}
              className="text-purple-400 hover:text-purple-300"
            >
              View all positions
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default OpenVacancies
