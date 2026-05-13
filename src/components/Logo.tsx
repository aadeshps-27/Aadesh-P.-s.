import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-1 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center">
        <span className="font-display font-black text-3xl md:text-2xl uppercase tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors">
          aadesh
        </span>
        <div className="w-3 h-3 md:w-2.5 md:h-2.5 rounded-full bg-[#F27D26] ml-1 mt-1" />
      </div>
    </motion.div>
  );
}

