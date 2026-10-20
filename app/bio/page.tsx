'use client';

import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaCode } from 'react-icons/fa';

export default function BioPage() {
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
            PLAYER PROFILE
          </h1>
          <p className="text-lg font-pixel text-gray-300">
            The story behind the developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Character Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black bg-opacity-70 border-2 border-neon-blue p-6 rounded pixel-corners"
          >
            <div className="flex items-center mb-6">
              <FaUser className="text-neon-blue text-3xl mr-4" />
              <h2 className="text-2xl font-arcade text-white">STATS</h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-neon-green font-pixel mb-1">NAME</p>
                <p className="text-white font-pixel text-lg">Enock Uwamahoro</p>
              </div>
              
              <div>
                <p className="text-neon-green font-pixel mb-1">CLASS</p>
                <p className="text-white font-pixel text-lg">Software & Application Engineer</p>
              </div>
              
              <div>
                <p className="text-neon-green font-pixel mb-1">SPECIALIZATION</p>
                <p className="text-white font-pixel text-lg">Full-Stack Development, APIs & Integration</p>
              </div>
              
              <div>
                <p className="text-neon-green font-pixel mb-1">LOCATION</p>
                <p className="text-white font-pixel text-lg">Rwanda | On-site or Remote</p>
              </div>
              
              <div>
                <p className="text-neon-green font-pixel mb-1">LANGUAGES</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-dark-purple px-2 py-1 text-neon-yellow font-pixel text-sm">JavaScript</span>
                  <span className="bg-dark-purple px-2 py-1 text-neon-yellow font-pixel text-sm">TypeScript</span>
                  <span className="bg-dark-purple px-2 py-1 text-neon-yellow font-pixel text-sm">Python</span>
                  <span className="bg-dark-purple px-2 py-1 text-neon-yellow font-pixel text-sm">Flutter</span>
                  <span className="bg-dark-purple px-2 py-1 text-neon-yellow font-pixel text-sm">C#</span>
                  <span className="bg-dark-purple px-2 py-1 text-neon-yellow font-pixel text-sm">Go</span>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black bg-opacity-70 border-2 border-neon-pink p-6 rounded pixel-corners lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <FaCode className="text-neon-pink text-3xl mr-4" />
              <h2 className="text-2xl font-arcade text-white">BACKSTORY</h2>
            </div>

            <div className="space-y-6 font-pixel text-gray-200">
              <p>
                I am a Software Engineer with over three years of experience building and supporting
                web applications and APIs used in production, and I currently serve as CTO and Team Lead
                at UbuntuNow. I work across the full software
                development life cycle: meeting users to understand their process, turning it into
                requirements and specifications, building and testing the solution, deploying it,
                and supporting it afterwards.
              </p>

              <p>
                My focus is on secure, maintainable systems that connect with each other. I design
                REST APIs, integrate applications with third-party and partner systems, and use
                JWT-based authentication and access control. I have delivered platforms backed by
                relational databases such as PostgreSQL and SQL Server, and I deploy with Git,
                CI/CD pipelines, Docker and cloud services on Azure and AWS.
              </p>

              <p>
                I work in Agile teams, write clean and testable code, review the code of
                teammates, and test APIs with tools like Postman. I hold IQBBA Agile Business
                Analysis and TMAP Quality Engineer certifications. I also enjoy replacing manual,
                paper-based processes with online workflows that work on computer and mobile.
              </p>

              <p>
                I document what I build, support users courteously, and share knowledge with the
                people I work with, including external partners and freelance clients. I
                communicate in English, French and Kinyarwanda, and I keep learning new technologies,
                including AI tools, to find better ways of working.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black bg-opacity-70 border-2 border-neon-green p-6 rounded pixel-corners lg:col-span-3"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-neon-green text-3xl mr-4" />
              <h2 className="text-2xl font-arcade text-white">EDUCATION & TRAINING</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-neon-green pl-4">
                <h3 className="text-neon-yellow font-arcade text-lg mb-2">The African Leadership University</h3>
                <p className="text-white font-pixel">B.Sc. with Honors in Software Engineering (2023 – 2025)</p>
                <p className="text-gray-400 font-pixel mt-2">
                  Core Coursework: Algorithms and Data Structures, Web Development & Infrastructure, 
                  Full-Stack Web Development, Leadership & Entrepreneurship
                </p>
              </div>
              
              
              <div className="border-l-2 border-neon-green pl-4">
                <h3 className="text-neon-yellow font-arcade text-lg mb-2">Certifications</h3>
                <ul className="text-gray-300 font-pixel list-disc list-inside">
                  <li>IQBBA Agile Business Analysis</li>
                  <li>TMAP Quality Engineer for cross-functional teams</li>
                  <li>DevOps - Coursera</li>
                  <li>Terraform for absolute beginners - Coursera</li>
                  <li>Docker - Hands on lab - Coursera</li>
                </ul>
              </div>

              <div className="border-l-2 border-neon-green pl-4">
                <h3 className="text-neon-yellow font-arcade text-lg mb-2">Languages</h3>
                <ul className="text-gray-300 font-pixel list-disc list-inside">
                  <li>English</li>
                  <li>French</li>
                  <li>Swahili</li>
                  <li>Arabic</li>
                  <li>Kinyarwanda</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 