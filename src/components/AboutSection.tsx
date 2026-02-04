import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowDown } from 'lucide-react';
import { useZoomNavigation } from '../hooks/useZoomNavigation';
import portraitImage from 'figma:asset/ef50f515d89d8e09b85933137fce81fdc3480530.png';

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isZooming = useZoomNavigation('about');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen py-20 flex items-center relative overflow-hidden"
      animate={isZooming ? { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] } : { scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl">
              <img
                src={portraitImage}
                alt="Professional Portrait"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Introducing Myself
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                A first-year Computer Science and Engineering student at Cochin University of Science and Technology. I’m passionate about exploring technology, understanding how systems work, and building a strong foundation through continuous learning, hands-on projects, and upskilling programs. I’m eager to grow, learn, and contribute to meaningful tech-driven solutions.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-3 mt-8"
            >
              View My Work
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
