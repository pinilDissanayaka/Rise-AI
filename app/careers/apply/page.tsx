"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft, FaBriefcase, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone, FaFileAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { title, heading1, heading2, subtitle, body } from '../../../fonts/font';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

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

export default function ApplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');
  
  const [job, setJob] = useState<Vacancy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    linkedIn: '',
    portfolio: ''
  });
  const [errors, setErrors] = useState({} as Record<string, string>);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Get job details from localStorage (initially stored when Apply button was clicked)
  useEffect(() => {
    try {
      const storedJob = localStorage.getItem('applyingJob');
      if (storedJob) {
        setJob(JSON.parse(storedJob));
      } else if (jobId) {
        // If we have jobId but no stored job, we could fetch from an API here
        // For now, redirect back to careers
        router.push('/careers#openVacancies');
      }
    } catch (error) {
      console.error('Error retrieving job details:', error);
    }
    setIsLoading(false);
  }, [jobId, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
      
      // Clear error when user uploads
      if (errors.resume) {
        setErrors({
          ...errors,
          resume: ''
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically submit to an API
      // For this demo, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      
      // Clear form data
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        linkedIn: '',
        portfolio: ''
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    router.push('/careers#openVacancies');
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen bg-[#0d1117] flex items-center justify-center ${body.className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className={`min-h-screen bg-[#0d1117] flex flex-col items-center justify-center px-4 ${body.className}`}>
        <h1 className={`text-2xl text-white mb-4 ${heading1.className}`}>Job Not Found</h1>
        <p className="text-gray-300 mb-6">The job you're looking for does not exist or has been removed.</p>
        <button 
          onClick={goBack}
          className="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          <FaArrowLeft /> Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#0d1117] ${body.className}`}>
      <Nav />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-screen-lg mx-auto">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors"
          >
            <FaArrowLeft /> Back to Careers
          </button>
          
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#161b22] to-[#0d1117] rounded-xl border border-green-500/30 p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPaperPlane className="text-green-400" size={28} />
              </div>
              <h2 className={`text-2xl text-white mb-4 ${heading1.className}`}>Application Submitted!</h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Thank you for applying to {job.title}. We've received your application and will be in touch soon.
              </p>
              <button 
                onClick={goBack}
                className="bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white py-2.5 px-6 rounded-lg transition-all duration-300 tracking-wide"
              >
                Return to Careers
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Job details sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#161b22] to-[#0d1117] rounded-xl border border-gray-800 p-6 sticky top-32">
                  <h2 className={`text-2xl text-white mb-4 tracking-wider ${heading1.className}`}>{job.title}</h2>
                  
                  <div className="mb-4 flex items-start gap-2">
                    <FaBriefcase className="text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className={`text-gray-300 ${body.className}`}>{job.discipline} • {job.level}</p>
                      <p className={`text-gray-400 text-sm ${body.className}`}>{job.type}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 flex items-start gap-2">
                    <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                    <p className={`text-gray-300 ${body.className}`}>{job.location}</p>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6 mt-4">
                    <h3 className={`text-white font-semibold mb-3 ${heading2.className}`}>Job Description</h3>
                    <p className={`text-gray-300 ${body.className}`}>{job.description}</p>
                  </div>
                  
                  {job.salary && (
                    <div className="border-t border-gray-800 pt-4 mt-4">
                      <h3 className={`text-white font-semibold mb-2 ${heading2.className}`}>Salary Range</h3>
                      <p className={`text-gray-300 ${body.className}`}>{job.salary}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Application form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-[#161b22] to-[#0d1117] rounded-xl border border-gray-800 p-6">
                  <h2 className={`text-2xl text-white mb-6 tracking-wider ${heading1.className}`}>Apply for this Position</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className={`block text-white mb-2 ${body.className}`}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-[#0d1117] border ${errors.fullName ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${body.className}`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className={`block text-white mb-2 ${body.className}`}>
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-[#0d1117] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${body.className}`}
                            placeholder="johndoe@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className={`block text-white mb-2 ${body.className}`}>
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-[#0d1117] border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${body.className}`}
                            placeholder="+44 7123 456789"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      
                      {/* Resume */}
                      <div>
                        <label htmlFor="resume" className={`block text-white mb-2 ${body.className}`}>
                          Resume/CV <span className="text-red-500">*</span>
                        </label>
                        <div className={`border ${errors.resume ? 'border-red-500' : 'border-gray-700'} border-dashed rounded-lg p-4 bg-[#0d1117]`}>
                          <div className="flex items-center justify-center">
                            <label htmlFor="resume" className="cursor-pointer text-center p-4 w-full">
                              <FaFileAlt className="text-gray-400 mx-auto mb-2" size={24} />
                              <span className={`text-gray-300 block mb-2 ${body.className}`}>
                                {formData.resume ? formData.resume.name : 'Upload your resume (PDF, DOCX)'}
                              </span>
                              <span className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg inline-block transition-colors">
                                Browse Files
                              </span>
                              <input
                                type="file"
                                id="resume"
                                name="resume"
                                onChange={handleFileChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                              />
                            </label>
                          </div>
                        </div>
                        {errors.resume && (
                          <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                        )}
                      </div>
                      
                      {/* Cover Letter */}
                      <div>
                        <label htmlFor="coverLetter" className={`block text-white mb-2 ${body.className}`}>
                          Cover Letter
                        </label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows={5}
                          className={`w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${body.className}`}
                          placeholder="Tell us why you're interested in this position (optional)"
                        />
                      </div>
                      
                      {/* LinkedIn */}
                      <div>
                        <label htmlFor="linkedIn" className={`block text-white mb-2 ${body.className}`}>
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          id="linkedIn"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${body.className}`}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      
                      {/* Portfolio */}
                      <div>
                        <label htmlFor="portfolio" className={`block text-white mb-2 ${body.className}`}>
                          Portfolio/Website
                        </label>
                        <input
                          type="url"
                          id="portfolio"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${body.className}`}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                      
                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg transition-all duration-300 tracking-wide ${body.className} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </span>
                          ) : (
                            'Submit Application'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
