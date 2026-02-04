import React from 'react';
import { Navigation } from './components/Navigation';
import { WelcomeSection } from './components/WelcomeSection';
import { AboutSection } from './components/AboutSection';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { FloatingSparkles } from './components/FloatingSparkles';

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <FloatingSparkles />
      <div className="relative z-10">
        <Navigation />
        <WelcomeSection />
        <AboutSection />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
