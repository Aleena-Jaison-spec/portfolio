import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Calendar, Award, X } from 'lucide-react';
import { useZoomNavigation } from '../hooks/useZoomNavigation';
import microsoftCert from 'figma:asset/756a06e8e0140b360b0f21e130f225987201a422.png';
import siemensCert from 'figma:asset/8444fdc7177cd05c61963b151eafb900cc99b66f.png';

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const isZooming = useZoomNavigation('education');

  const educationData = [
    {
      degree: 'Bachelor of Technology',
      specialization: 'Computer Science and Engineering',
      institution: 'Cochin University of Science and Technology',
      location: 'Kochi,Kerala',
      period: '2025 - present',
      description: 'Focused on web development, software architecture, and user interface design.',
      achievements: [
        'Content Writer of Aroha Drone Club',
        'Contributing to open-source projects',
        'Member of ACES CUSAT',
        'Member of SOCE CUSAT'
      ],
    },
  ];

  const certifications = [
   
    {
      title: 'Microsoft Learn Upskilling Program',
      issuer: 'Microsoft Learn (Organized by GDGC MBCET & TPU MBCET) ',
      year: '2025',
      image: microsoftCert,
    },
    {
      title: 'Siemens Project Manager Job Simulation',
      issuer: 'Forage',
      year: '2026',
      image: siemensCert,
    },
  ];

  return (
    <motion.section 
      id="education" 
      className="py-20 relative overflow-hidden"
      animate={isZooming ? { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] } : { scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-1">{edu.degree}</h3>
                    <p className="text-lg text-blue-400 mb-1">{edu.specialization}</p>
                    <p className="text-lg text-gray-300">{edu.institution}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{edu.description}</p>

              <div className="space-y-2">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  Activities and Involvements
                </h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl text-white mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedCert(cert.image)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="overflow-auto max-h-[90vh] p-4">
              <img 
                src={selectedCert} 
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
