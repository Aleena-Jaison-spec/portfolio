import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useZoomNavigation } from '../hooks/useZoomNavigation';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isZooming = useZoomNavigation('skills');

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'Flutter', level: 65 },
      ],
    },
    {
      title: 'Design &\nUI/UX',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Canva', level: 75 },
      ],
    },
    {
      title: 'Backend & Cloud',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Google Firebase', level: 70 },
        { name: 'API Development', level: 68 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 80 },
        { name: 'Visual Studio Code', level: 85 },
      ],
    },
  ];

  return (
    <motion.section 
      id="skills" 
      className="py-20"
      animate={isZooming ? { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] } : { scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 w-full max-w-sm"
            >
              <h3 className="text-2xl mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-pre-line">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.3, rotateX: -90, y: 50 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1, 
                      rotateX: 0, 
                      y: 0 
                    } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: categoryIndex * 0.15 + skillIndex * 0.12,
                      type: "spring",
                      stiffness: 150,
                      damping: 12
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      x: 15,
                      rotateY: 5,
                      boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-purple-900/30 hover:border-blue-500/60 transition-colors shadow-lg"
                  >
                    <span className="text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
