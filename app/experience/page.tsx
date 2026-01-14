'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Ironji",
    location: "Rwanda, Remote",
    period: "May 2023 – July 2025",
    achievements: [
      "Engineering 'Ironji Deals,' a customer engagement and loyalty platform leveraging Next.js for the front-end, Nest.js for the back-end, PostgreSQL for database management, and Stripe for subscription services",
      "Empowering brands to retarget, reward, and remarket to customers while improving marketing capabilities",
      "Developed a lead management SaaS using Next.js, Node.js, and GCP, resulting in streamlined lead conversion"
    ]
  },
  {
    id: 2,
    title: " Full-Stack Developer ",
    company: "Freelance",
    location: "Remote",
    period: "January 2025 – present",
    achievements: [
      "Currently developing Foster, a ride-sharing platform similar to VubaVuba for the Liberian market, focusing on localized features and user experience",
      "Developed and deployed full-stack web applications for various clients, managing both frontend and backend components",
      "Successfully deployed applications to Microsoft Azure using containerization, ensuring scalable and reliable hosting solutions",
      "Collaborated with clients to gather requirements, design solutions, and deliver high-quality software products",
      "Engineered TypeScript tools to seamlessly migrate data from AWS S3 (and compatible services) to Storacha hot storage, implementing protocol compatibility and preserving UnixFS metadata",
    ]
  },
  
];

export default function ExperiencePage() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-arcade text-white neon-text mb-4">
            CAREER QUESTS
          </h1>
          <p className="text-lg font-pixel text-gray-300">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline visualization */}
          <div className="relative mb-16 hidden md:block">
            <div className="absolute left-0 right-0 h-2 top-1/2 -translate-y-1/2 bg-dark-purple"></div>
            
            <div className="flex justify-between relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                >
                  <div 
                    className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                      selectedExp === exp.id ? 'bg-neon-green scale-125' : 'bg-neon-blue'
                    }`}
                  ></div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-pixel text-gray-400">{exp.period.split('–')[0]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience cards */}
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-black bg-opacity-70 border-2 p-6 rounded pixel-corners cursor-pointer transition-all duration-300 ${
                  selectedExp === exp.id 
                    ? 'border-neon-green transform scale-[1.02]' 
                    : 'border-neon-blue hover:border-neon-pink'
                }`}
                onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-3 md:mb-0">
                    <FaBriefcase className="text-neon-blue text-2xl mr-3" />
                    <h2 className="text-xl md:text-2xl font-arcade text-white">{exp.title}</h2>
                  </div>
                  
                  <div className="flex items-center text-neon-yellow font-pixel">
                    <FaCalendarAlt className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <FaBuilding className="text-neon-pink mr-2" />
                    <p className="text-neon-pink font-pixel">{exp.company}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-gray-400 mr-2" />
                    <p className="text-gray-400 font-pixel">{exp.location}</p>
                  </div>
                </div>
                
                <AnimatePresence>
                  {selectedExp === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-700">
                        <h3 className="flex items-center text-neon-green font-arcade text-lg mb-3">
                          <FaTrophy className="mr-2" /> Achievements
                        </h3>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start font-pixel text-gray-200"
                            >
                              <span className="text-neon-blue mr-2 mt-1">›</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-4 text-center text-sm font-pixel text-gray-400">
                  {selectedExp === exp.id ? "Click to collapse" : "Click to expand"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 