import { useState } from 'react';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import Logo from './components/Logo';
import Chatbot from './components/Chatbot';
import { About, Experience, Projects, Contact } from './components/Sections';
import MilitaryRobotSection from './components/MilitaryRobotSection';
import GeoLocationSection from './components/GeoLocationSection';
import CreativeProfileSection from './components/CreativeProfileSection';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen selection:bg-brand selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[60] origin-left"
        style={{ scaleX }}
      />

      <ThemeToggle />
      <Chatbot />
      
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
           <Logo />
        </div>
        <div className="hidden md:flex gap-4 pointer-events-auto bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl px-2 py-2 rounded-full border border-white/20 dark:border-zinc-800/20 shadow-lg">
           {['About', 'Experience', 'Projects', 'Contact'].map(item => (
             <a 
               key={item} 
               href={`#${item.toLowerCase()}`}
               className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
             >
               {item}
             </a>
           ))}
        </div>
        {/* Spacer for toggle */}
        <div className="w-12 h-12" />
      </nav>

      <Hero />
      <About />
      <Experience />
      <Projects onSelectProject={(id: string) => setActiveProject(id)} />
      
      {activeProject === 'creative' && (
        <motion.div 
          id="creative"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-y border-zinc-200 dark:border-zinc-800"
        >
          <CreativeProfileSection />
          <div className="py-12 bg-white dark:bg-zinc-900 flex justify-center">
            <button 
              onClick={() => setActiveProject(null)}
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all"
            >
              Back to Overview
            </button>
          </div>
        </motion.div>
      )}

      {activeProject === 'robot' && (
        <motion.div 
          id="robot"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-y border-zinc-200 dark:border-zinc-800"
        >
          <MilitaryRobotSection />
          <div className="py-12 bg-zinc-50 dark:bg-zinc-950 flex justify-center">
            <button 
              onClick={() => setActiveProject(null)}
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all"
            >
              Close Technical Details
            </button>
          </div>
        </motion.div>
      )}

      {activeProject === 'geolocation' && (
        <motion.div 
          id="geolocation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-y border-zinc-200 dark:border-zinc-800"
        >
          <GeoLocationSection />
          <div className="py-12 bg-white dark:bg-zinc-900 flex justify-center">
            <button 
              onClick={() => setActiveProject(null)}
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all"
            >
              Close Research Details
            </button>
          </div>
        </motion.div>
      )}

      <Contact />
    </main>
  );
}
