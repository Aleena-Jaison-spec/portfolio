import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { useZoomNavigation } from '../hooks/useZoomNavigation';
import walletImg from 'figma:asset/c8f08f1c3467f43941c9b3da34f3724ecb22f6e2.png';
import calendarImg from 'figma:asset/e7c93771aa0c806a0e3d6e4bdc58281d9b0590f5.png';
import binocularsImg from 'figma:asset/2df6ee65e7fcc9100af7902b5f40ae07db616180.png';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const isZooming = useZoomNavigation('projects');

  const projects = [
    {
      title: 'OpenWallet',
      description: 'An easy-to-use expense tracker designed to help you monitor spending,stay organized,and build better money habits',
      image: walletImg,
      tags: ['HTML', 'CSS', 'Javascript','Typescript','firebase'],
      demoUrl: 'https://remix-of-sparkle-studio.vercel.app/',
      githubUrl: 'https://github.com/Aleena-Jaison-spec/Wallet',
    },
    {
      title: 'LetStart',
      description: 'A small,simple space for students to keep their susbjects,study links,exam dates.It helps to reduce confusion and makes studying feel more organised and less stressful',
      image: calendarImg,
      tags: ['HTML', 'CSS', 'Javascript','Firebase'],
      demoUrl: 'https://notime-omega.vercel.app/',
      githubUrl: 'https://github.com/Aleena-Jaison-spec/LetStart',
    },
    {
      title: 'Typo',
      description: 'A fun interactive word-guessing game designed to challenge the players vocabulary and logical thinking skills',
      image: binocularsImg,
      tags: ['HTML', 'CSS', 'Javascript'],
      demoUrl: 'https://hang-mann.vercel.app/',
      githubUrl: 'https://github.com/Aleena-Jaison-spec/HANG_MANN',
    },
  ];

  return (
    <motion.section 
      id="projects" 
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
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work showcasing my skills in design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-125 group-hover:scale-135 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/50"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-purple-500/50"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
