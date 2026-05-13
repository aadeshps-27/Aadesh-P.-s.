import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
             <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Available for projects</span>
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          
          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50">
            <span className="block">Aadesh</span>
            <span className="block text-stroke opacity-70">P S.</span>
          </h1>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-serif text-3xl md:text-5xl italic text-zinc-800 dark:text-zinc-200 leading-tight text-balance">
              Expertly creative, <br /> 
              <span className="text-brand">Endlessly curious.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 items-start md:items-end text-zinc-600 dark:text-zinc-400"
          >
            <p className="max-w-xs text-sm md:text-base md:text-right font-medium">
              <span className="text-brand">Graphics Design</span> • Vector Art • Web Developer. 
              Based in Kerala, India. Crafting digital experiences with precision and passion.
            </p>
            <a href="#projects" className="group relative px-10 py-5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-full font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 group-hover:text-white transition-colors">Explore Work</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div 
          animate={{ height: [20, 48, 20] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px bg-zinc-400 dark:bg-zinc-600" 
        />
      </div>

      {/* Creative Background Ornaments */}
      <div className="absolute top-0 right-0 p-12 hidden lg:block opacity-5 select-none pointer-events-none">
         <div className="flex flex-col gap-4 font-display font-black text-[12vw] leading-none uppercase">
            <span className="text-stroke">Craft</span>
            <span className="text-stroke">Build</span>
            <span className="text-stroke">Repeat</span>
         </div>
      </div>
    </section>
  );
}
