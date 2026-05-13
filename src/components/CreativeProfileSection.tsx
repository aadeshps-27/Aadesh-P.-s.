import { motion } from 'motion/react';
import { Palette, Layers, Code, Zap, Heart, Sparkles, PenTool, MousePointer2, Type } from 'lucide-react';

export default function CreativeProfileSection() {
  const skills = [
    {
      title: "Graphics Design",
      icon: <Palette className="text-orange-500" />,
      desc: "Creating visual concepts that inspire and captivate audiences.",
      bg: "bg-orange-500/5",
      border: "border-orange-500/20"
    },
    {
      title: "Vector Art",
      icon: <Layers className="text-brand" />,
      desc: "Precision-crafted digital illustrations with bold character.",
      bg: "bg-brand/5",
      border: "border-brand/20"
    },
    {
      title: "Web Developer",
      icon: <Code className="text-blue-500" />,
      desc: "Building modern, immersive and responsive digital experiences.",
      bg: "bg-blue-500/5",
      border: "border-blue-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
         <motion.div 
            animate={{ 
               scale: [1, 1.2, 1],
               rotate: [0, 90, 0],
               x: [0, 100, 0],
               y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-brand/30 rounded-full blur-[100px]" 
         />
         <motion.div 
            animate={{ 
               scale: [1, 1.5, 1],
               rotate: [0, -45, 0],
               x: [0, -150, 0],
               y: [0, 100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" 
         />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
             <div className="flex flex-col gap-6">
               <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-xs font-mono uppercase tracking-[0.4em] text-brand font-black"
               >
                  Creative Methodology
               </motion.span>
               <h2 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
                  Art Meets <br /> 
                  <span className="text-stroke opacity-60">Precision</span>
               </h2>
             </div>
             <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-md ml-auto text-right">
                Merging the analytical approach of engineering with the expressive freedom of visual design.
             </p>
          </div>

          {/* Specialization Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[3rem] ${skill.bg} border ${skill.border} flex flex-col gap-8 transition-all duration-500 group relative overflow-hidden`}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-inherit rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-zinc-900 border border-inherit flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black mb-4 uppercase tracking-tighter">{skill.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                    {skill.desc}
                  </p>
                </div>
                
                <div className="mt-4 flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-inherit brightness-50" />
                   <div className="w-6 h-2 rounded-full bg-inherit brightness-75" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Creative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* The Heart Card */}
            <div className="md:col-span-7 p-12 rounded-[3.5rem] bg-zinc-950 text-white flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/30 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
               
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                     <div className="p-3 bg-brand/20 rounded-xl backdrop-blur-md">
                        <Heart className="text-brand" fill="currentColor" size={24} />
                     </div>
                     <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">Core Philosophy</span>
                  </div>
                  <h3 className="font-display text-5xl md:text-7xl font-black uppercase mb-8 leading-[0.8] tracking-tighter">
                     Soulful <br /> Creations
                  </h3>
                  <p className="max-w-md text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                    I believe that every digital product deserves a soul. My work focuses on finding that unique heartbeat.
                  </p>
               </div>

               <div className="relative z-10 flex flex-wrap gap-4 mt-12">
                  {['Intention', 'Empathy', 'Excellence'].map(tag => (
                     <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-colors cursor-default">
                        {tag}
                     </span>
                  ))}
               </div>
            </div>

            {/* Toolbox Grid */}
            <div className="md:col-span-5 grid grid-cols-2 gap-6">
               <div className="col-span-2 p-10 rounded-[3.5rem] bg-orange-500 text-white flex flex-col justify-between group hover:rotate-1 transition-transform">
                  <div className="flex justify-between items-start">
                     <PenTool size={32} strokeWidth={3} />
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Toolkit 01</div>
                  </div>
                  <h4 className="font-display text-3xl font-black uppercase leading-none">Illustrator <br />& Affinity</h4>
               </div>
               
               <div className="p-10 rounded-[3.5rem] bg-zinc-200 dark:bg-zinc-800 flex flex-col items-center justify-center gap-4 group">
                  <motion.div
                     animate={{ rotate: [0, 10, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                  >
                     <MousePointer2 size={40} className="text-brand" />
                  </motion.div>
                  <span className="font-display text-sm font-black uppercase tracking-widest">UX Logic</span>
               </div>

               <div className="p-10 rounded-[3.5rem] bg-brand text-white flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform">
                  <Type size={40} />
                  <span className="font-display text-sm font-black uppercase tracking-widest">Typography</span>
               </div>
            </div>
          </div>

          {/* CTA Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] flex items-center gap-6 group hover:border-brand/50 transition-colors pl-8 md:pl-12"
          >
             <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand mb-1">Collaboration</span>
                <p className="font-bold text-lg">Have a vision for something unique?</p>
             </div>
             <a 
               href="#contact" 
               className="ml-auto flex items-center gap-4 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-black py-4 px-8 md:px-12 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-brand hover:text-white transition-all overflow-hidden relative"
             >
                <span className="relative z-10 transition-transform group-hover:-translate-x-2">Let&apos;s Build It</span>
                <Zap size={16} fill="currentColor" className="relative z-10 group-hover:translate-x-2 transition-transform" />
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
