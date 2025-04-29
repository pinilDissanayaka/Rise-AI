"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Check, AlertCircle } from "lucide-react";
import { heading1, heading2 } from "../../../../fonts/font";
import { ContactFormData, submitContactForm } from "./api";
import ClientOnly from "../../../components/ClientOnly/ClientOnly";

// Dynamically import components with browser APIs
const LocationMap = dynamic(() => import("./Map"), { ssr: false });
const ContactCard = dynamic(() => import("./ContactCard"), { ssr: false });

type Direction = "up" | "down" | "left" | "right";

const FadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Contact = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState<string[]>([]);

  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    company_name: "",
    phone_number: "",
    description: "",
    email: "",
    services: [],
    goal: "",
    other_service: "",
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.company_name.trim()) newErrors.company_name = "Company name is required";
    
    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid phone number";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.description.trim()) newErrors.description = "Project description is required";
    else if (formData.description.length < 10) newErrors.description = "Description is too short";
    
    if (formData.services.length === 0) newErrors.services = "Please select at least one service";
    
    if (!formData.goal) newErrors.goal = "Please select a goal";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      const newServices = [...formData.services, value];
      setFormData({ ...formData, services: newServices });
      setServices(newServices);
    } else {
      const newServices = formData.services.filter(service => service !== value);
      setFormData({ ...formData, services: newServices });
      setServices(newServices);
    }
    
    // Clear service error when user selects a service
    if (errors.services) {
      setErrors({ ...errors, services: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    const newErrors: Record<string, string> = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone_number.trim()) newErrors.phone_number = "Phone number is required";
    if (!formData.description.trim()) newErrors.description = "Project description is required";
    
    setErrors(newErrors);
    
    // If there are any validation errors, stop submission
    if (Object.keys(newErrors).length > 0) return;
    
    try {
      setLoading(true);
      
      // Simulate form submission (replace with actual API call later)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set success message and reset form
      setMessage({
        type: "success",
        text: "Thank you for your message! We'll get back to you soon."
      });
      
      // Reset form data
      setFormData({
        first_name: '',
        last_name: '',
        company_name: '',
        email: '',
        phone_number: '',
        description: '',
        services: [],
        goal: '',
        other_service: ''
      });
      
      // Show the submitted state after a brief delay
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        text: "There was an error submitting your form. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4">
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
            <p className={`text-[#939aff] ${heading1.className}`}>Let's Collaborate to Build Your Digital Future</p>
            <span className={`text-xl text-gray-400`}>Share your vision—our tech, AI, and marketing teams will bring it to life.</span>
          </motion.h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center w-full">
          <div className="grid md:grid-cols-2 gap-6 w-full">
            <ContactCard backgroundColor="#bd93f980" direction="left" left="0">
              <div className="flex flex-col flex-1 p-8 md:p-10 justify-between">
                <div className="container flex flex-col justify-between py-1 text-lg">
                  <motion.div
                    variants={FadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="mb-8 flex items-center py-4"
                  >
                    <h1 className={`text-[40px] font-bold uppercase leading-[3rem] text-white ${heading2.className}`}>
                      Tell Us <br />{" "}
                      <span className="relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-[#939aff] after:bottom-0 after:left-0">About Your Project</span>
                    </h1>
                  </motion.div>
                  
                  {submitted ? (
                    <motion.div
                      variants={FadeIn("up", 0.3)}
                      initial="hidden"
                      animate="show"
                      className="flex flex-col items-center justify-center space-y-4 py-12 text-center"
                    >
                      <div className="rounded-full bg-green-500/20 p-4">
                        <Check size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-2xl font-medium text-white">Thank You!</h3>
                      <p className="text-gray-400 max-w-md">
                        Your message has been sent successfully. We will get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 inline-flex items-center justify-center px-6 py-3 
                                  font-medium text-white rounded-lg 
                                  bg-[#939aff] hover:bg-[#636cff] transition-all duration-200"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      variants={FadeIn("left", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="flex max-w-3xl flex-1 flex-col items-start gap-y-6 rounded-md p-4 md:p-6"
                    >
                      <div className="w-full">
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          value={formData.first_name}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.first_name ? 'border-red-500' : 'border-white/25'} bg-transparent py-3 text-white outline-none placeholder:text-white/30`}
                        />
                        {errors.first_name && <p className="mt-1 text-red-500 text-sm">{errors.first_name}</p>}
                      </div>
                      
                      <div className="w-full">
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          value={formData.last_name}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.last_name ? 'border-red-500' : 'border-white/25'} bg-transparent py-3 text-white outline-none placeholder:text-white/30`}
                        />
                        {errors.last_name && <p className="mt-1 text-red-500 text-sm">{errors.last_name}</p>}
                      </div>
                      
                      <div className="w-full">
                        <input
                          type="text"
                          name="company_name"
                          placeholder="Company Name"
                          value={formData.company_name}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.company_name ? 'border-red-500' : 'border-white/25'} bg-transparent py-3 text-white outline-none placeholder:text-white/30`}
                        />
                        {errors.company_name && <p className="mt-1 text-red-500 text-sm">{errors.company_name}</p>}
                      </div>
                      
                      <div className="w-full">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-white/25'} bg-transparent py-3 text-white outline-none placeholder:text-white/30`}
                        />
                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      
                      <div className="w-full">
                        <input
                          type="text"
                          name="phone_number"
                          placeholder="Phone Number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          className={`w-full border-b ${errors.phone_number ? 'border-red-500' : 'border-white/25'} bg-transparent py-3 text-white outline-none placeholder:text-white/30`}
                        />
                        {errors.phone_number && <p className="mt-1 text-red-500 text-sm">{errors.phone_number}</p>}
                      </div>
                      
                      <div className="w-full">
                        <fieldset className="flex flex-col gap-2">
                          <legend className="text-white/30">Which services are you interested in?</legend>
                          <label className="flex items-center gap-2 text-white/30">
                            <input
                              type="checkbox"
                              value="Marketing"
                              checked={services.includes("Marketing")}
                              onChange={handleServiceChange}
                              className="accent-[#939aff]"
                            />
                            Marketing
                          </label>
                          <label className="flex items-center gap-2 text-white/30">
                            <input
                              type="checkbox"
                              value="AI Solutions"
                              checked={services.includes("AI Solutions")}
                              onChange={handleServiceChange}
                              className="accent-[#939aff]"
                            />
                            AI Solutions
                          </label>
                          <label className="flex items-center gap-2 text-white/30">
                            <input
                              type="checkbox"
                              value="Technology Development"
                              checked={services.includes("Technology Development")}
                              onChange={handleServiceChange}
                              className="accent-[#939aff]"
                            />
                            Technology Development
                          </label>
                          <label className="flex items-center gap-2 text-white/30">
                            <input
                              type="checkbox"
                              value="Other"
                              checked={services.includes("Other")}
                              onChange={handleServiceChange}
                              className="accent-[#939aff]"
                            />
                            Other
                          </label>
                        </fieldset>
                        {errors.services && <p className="mt-1 text-red-500 text-sm">{errors.services}</p>}
                      </div>
                      
                      <div className="w-full">
                        <select
                          name="project_goal"
                          onChange={handleChange}
                          className={`w-full border-b border-white/25 bg-transparent py-3 text-white outline-none`}
                        >
                          <option value="" className="bg-[#20232a] text-white">What are your goals?</option>
                          <option value="Build My Software/Product" className="bg-[#20232a] text-white">Build My Software/Product</option>
                          <option value="Increase Engineering Bandwidth" className="bg-[#20232a] text-white">Increase Engineering Bandwidth</option>
                          <option value="Go to Market" className="bg-[#20232a] text-white">Go to Market</option>
                          <option value="Generate More Leads/Customers" className="bg-[#20232a] text-white">Generate More Leads/Customers</option>
                        </select>
                      </div>
                      
                      <div className="w-full">
                        <textarea
                          name="description"
                          placeholder="Project Description"
                          value={formData.description}
                          onChange={handleChange}
                          className={`mb-12 w-full resize-none border-b ${errors.description ? 'border-red-500' : 'border-white/25'} bg-transparent py-12 text-white outline-none placeholder:text-white/30`}
                        ></textarea>
                        {errors.description && <p className="mt-1 text-red-500 text-sm">{errors.description}</p>}
                      </div>

                      <button
                        type="submit"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        disabled={loading}
                        className="relative inline-flex items-center justify-center px-8 py-4 
                                overflow-hidden font-bold text-white rounded-lg group 
                                bg-[#20232a] border-2 border-[#939aff] hover:border-[#636cff]
                                transition-all duration-300 ease-out disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out 
                                      bg-[#636cff] rounded-full group-hover:w-full group-hover:h-56 
                                      opacity-10"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 
                                      group-hover:opacity-20 bg-gradient-to-b from-transparent 
                                      via-transparent to-[#939aff]"></span>
                        <span className="relative flex items-center gap-2">
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Start Your Journey Today
                              <Send
                                className={`ml-2 transition-transform ease-in-out duration-300 ${
                                  hovered ? "translate-x-1" : "translate-x-0"
                                }`}
                                size={20}
                                color="currentColor"
                              />
                            </>
                          )}
                        </span>
                      </button>

                      {message.text && (
                        <div className={`w-full mt-4 p-3 rounded-md flex items-start space-x-2 ${
                          message.type === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                        }`}>
                          {message.type === "success" ? (
                            <Check size={20} className="mt-0.5 flex-shrink-0" />
                          ) : (
                            <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                          )}
                          <span>{message.text}</span>
                        </div>
                      )}
                    </motion.form>
                  )}
                </div>
              </div>
            </ContactCard>

            <ContactCard backgroundColor="#ff9580" direction="right" left="auto">
              <div className="flex flex-col space-y-5 flex-1 p-8 md:p-10 justify-between">
                <motion.div
                  variants={FadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.8 }}
                  className="flex flex-col gap-6"
                >
                  <h1 className={`text-[32px] font-bold uppercase leading-[3rem] text-white ${heading2.className}`}>
                    contact <br />{" "}
                    <span className="relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-[#ff9580] after:bottom-0 after:left-0">information</span>
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#939aff] p-4 flex-shrink-0">
                      <Send size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <a
                        href="mailto:contact@risedigital.com"
                        className="text-gray-400 hover:text-[#939aff] transition-colors duration-200"
                      >
                        contact@risedigital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#939aff] p-4 flex-shrink-0">
                      <Phone size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <a
                        href="tel:+18001234567"
                        className="text-gray-400 hover:text-[#939aff] transition-colors duration-200"
                      >
                        +1 800 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#939aff] p-4 flex-shrink-0">
                      <MapPin size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Global Presence</h4>
                      <p className="text-gray-400">
                        Remote-first. Globally present.
                      </p>
                      <p className="text-gray-400 text-sm">
                        Whether you're in NYC, Tokyo, Dubai, or Berlin—we're just a Zoom away.
                      </p>
                    </div>
                  </div>
                  
                  {/* Why Choose Rise AI Section */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h4 className="text-white text-lg font-medium mb-3">Why Choose Rise AI as Your Innovation Partner?</h4>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#939aff] text-sm">✓</div>
                      <div>
                        <p className="text-white text-sm font-medium">Tailored Results</p>
                        <p className="text-gray-400 text-xs">Every project is a custom build—crafted with care.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#939aff] text-sm">✓</div>
                      <div>
                        <p className="text-white text-sm font-medium">Deep Talent Bench</p>
                        <p className="text-gray-400 text-xs">50+ experts across AI, tech, and strategy.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-[#939aff] text-sm">✓</div>
                      <div>
                        <p className="text-white text-sm font-medium">Client Loyalty</p>
                        <p className="text-gray-400 text-xs">75% of partners continue beyond year one.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ContactCard>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
      
      {/* Final CTA Section */}
      <div className="my-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-4xl text-white mb-4 ${heading1.className}`}
        >
          Ready to Get Started?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto mb-8"
        >
          Let's build something extraordinary—together.
        </motion.p>
        
        <motion.a
          href="#Contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-8 py-4 
                  font-medium text-white rounded-lg 
                  bg-gradient-to-r from-purple-600 to-blue-700 
                  hover:from-purple-700 hover:to-blue-800
                  shadow-lg shadow-purple-900/30 transition-all duration-300"
        >
          Start Your Journey Today
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
