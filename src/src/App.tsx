import React from 'react';
import { Navigation } from '../components/Navigation';
import { WelcomeSection } from '../components/WelcomeSection';
import { AboutSection } from '../components/AboutSection';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <WelcomeSection />
      <AboutSection />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
