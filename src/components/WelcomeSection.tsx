import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useZoomNavigation } from '../hooks/useZoomNavigation';

export function WelcomeSection() {
  const isZooming = useZoomNavigation('welcome');
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="welcome"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      animate={isZooming ? { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] } : { scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white mb-4">
            Hi,
          </h1>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-16">
            Myself Aleena Jaison
          </h2>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(96, 165, 250, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-2xl px-16 py-6 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all"
        >
          Know me
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-sm">Scroll down to explore</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </motion.section>
  );
}
