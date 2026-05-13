import { motion } from 'motion/react';
import { MapPin, Radio, Signal, Target, Lightbulb, AlertTriangle, Layers, BookOpen, Settings, Zap, History, Gauge, Box } from 'lucide-react';
import { ReactNode } from 'react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="text-sm font-mono text-brand font-black tracking-widest">{number}</span>
    <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
    <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h2>
  </div>
);

const InfoCard = ({ icon: Icon, title, items, color = "brand" }: { icon: any; title: string; items: string[], color?: string }) => (
  <div className="p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 group">
    <div className={`w-12 h-12 rounded-2xl bg-${color}/10 flex items-center justify-center text-${color} mb-6 group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-50">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
          <div className={`w-1 h-1 rounded-full bg-${color} mt-2 shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function GeoLocationSection() {
  return (
    <section id="geolocation" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title & Abstract */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <MapPin size={12} />
              Navigation Research
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.9] text-zinc-900 dark:text-zinc-50 mb-8">
              Geo-Location <span className="text-stroke opacity-60">Guidance System</span>
            </h1>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-8 font-bold">RF-Based Positioning in GPS-Denied Environments</p>
            
            <div className="prose dark:prose-invert max-w-none">
              <h4 className="text-zinc-900 dark:text-zinc-50 font-bold mb-4 flex items-center gap-2">
                <Target className="text-brand" size={20} />
                Abstract
              </h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                This research presents an innovative geo-location guidance system that uses Radio Frequency (RF) technology to provide accurate positioning and navigation in environments where GPS signals are unavailable, such as underground mines, dense forests, and indoor industrial facilities.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden bg-zinc-200 dark:bg-zinc-800 relative z-10 shadow-2xl border-4 border-white dark:border-zinc-900">
               {/* Pulse Animation overlay */}
               <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-blue-500/30"
                    />
                    <motion.div 
                      animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-blue-500/20"
                    />
                  </div>
               </div>

              <img 
                src="https://images.unsplash.com/photo-1526733153344-2453e997d66e?auto=format&fit=crop&q=80&w=1000" 
                alt="Navigation System"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent flex flex-col justify-end p-8 z-30">
                <div className="flex items-center gap-2 mb-4">
                  <Signal className="text-blue-400 animate-pulse" size={16} />
                  <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">RF_SCANNING :: SYSTEM_READY</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-bold font-mono">SX1278</span>
                    <span className="text-white/40 text-[8px] uppercase font-black">Transceiver</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-bold font-mono">RSSI_PATH</span>
                    <span className="text-white/40 text-[8px] uppercase font-black">Algorithm</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand/10 blur-3xl rounded-full" />
          </motion.div>
        </div>

        {/* 1 & 2 Intro & Problem */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <SectionHeader number="01" title="Introduction" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Conventional satellite-based systems (GPS) perform well outdoors but fail in GPS-denied environments due to signal blockage, interference, or jamming. This project utilizes RF beacons and signal analysis (RSSI) to estimate position without satellites.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <SectionHeader number="02" title="Problem Statement" />
            <div className="grid grid-cols-1 gap-4">
               {[
                 "GPS weakness indoors & underground",
                 "Vulnerability to satellite jamming",
                 "Optical system visibility requirements",
                 "Inertial drift accumulation",
                 "High-precision cost barriers"
               ].map((p, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                    <AlertTriangle className="text-amber-500" size={16} />
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{p}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* 3 & 4 Objectives & Review */}
        <div className="mb-32">
          <SectionHeader number="03" title="Core Research" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
               <InfoCard 
                 icon={Lightbulb} 
                 title="Objectives" 
                 items={[
                   "RF Positioning accuracy",
                   "Real-time location tracking",
                   "Independent of GPS infra",
                   "Low power optimization",
                   "Deployable in robotics"
                 ]}
                 color="blue"
               />
               <InfoCard 
                 icon={BookOpen} 
                 title="Methodologies" 
                 items={[
                   "Trilateration / Triangulation",
                   "RSSI Signal Analysis",
                   "Kalman Filter smoothing",
                   "Ultra-Wideband (UWB)",
                   "LoRa long-range protocols"
                 ]}
                 color="emerald"
               />
             </div>
             <div className="p-8 rounded-[40px] bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 opacity-10">
                   <Settings size={120} className="animate-spin-slow" />
                </div>
                <h4 className="text-zinc-100 font-bold mb-6 flex items-center gap-2">
                  <Settings className="text-brand" size={18} />
                  Working Principle
                </h4>
                <div className="space-y-4 font-mono text-[11px] text-zinc-500">
                  <div className="flex gap-4">
                    <span className="text-brand">01.</span>
                    <p>Anchor nodes pulse RF signals</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand">02.</span>
                    <p>Mobile unit captures RSSI values</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand">03.</span>
                    <p>Path-loss models calculate distance</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand">04.</span>
                    <p>Trilateration triangulates coords</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand">05.</span>
                    <p>Trajectory smoothed via Kalman_Filter</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* 6. Mathematical Model */}
        <div className="mb-32 bg-zinc-50 dark:bg-zinc-800/30 rounded-[48px] p-12 border border-zinc-100 dark:border-zinc-800">
           <SectionHeader number="04" title="Mathematical Model" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">Logarithmic Path-Loss</h4>
                 <p className="text-zinc-500 mb-8">Base formula for estimating distance from signal strength degradation.</p>
                 <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-inner border border-zinc-200 dark:border-zinc-700 font-mono text-xl text-center">
                    RSSI = RSSI<sub className="text-xs">0</sub> - 10n log<sub className="text-xs">10</sub>(d)
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'RSSI₀', desc: 'Reference at 1m' },
                   { label: 'n', desc: 'Path-loss exponent' },
                   { label: 'd', desc: 'Calculated Distance' },
                   { label: 'Kalman', desc: 'Noise Smoothing' }
                 ].map((item, i) => (
                   <div key={i} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                      <p className="text-brand font-black mb-1">{item.label}</p>
                      <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 7 & 8 Hardware & Tools */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 overflow-x-auto">
               <SectionHeader number="05" title="Hardware Stack" />
               <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800">
                      <th className="py-4 text-xs uppercase font-black text-zinc-400">Component</th>
                      <th className="py-4 text-xs uppercase font-black text-zinc-400">Model</th>
                      <th className="py-4 text-xs uppercase font-black text-zinc-400">Core Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { c: 'Controller', m: 'ESP32', p: 'Main processing & WiFi/BT' },
                      { c: 'RF Transceiver', m: 'SX1278 LoRa', p: 'Long-range signal exchange' },
                      { c: 'Motion Unit', m: 'MPU6050', p: 'Gyr/Acc motion sensing' },
                      { c: 'Compass', m: 'HMC5883L', p: 'Magnetic heading' },
                      { c: 'Interface', m: 'OLED 0.96"', p: 'User data display' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="py-4 font-bold text-zinc-900 dark:text-zinc-100">{row.c}</td>
                        <td className="py-4 font-mono text-brand">{row.m}</td>
                        <td className="py-4 text-zinc-500">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
            <div className="lg:col-span-4">
              <SectionHeader number="06" title="Software Tools" />
              <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Arduino IDE', icon: Layers },
                    { name: 'MATLAB', icon: History },
                    { name: 'Python', icon: Zap },
                    { name: 'Proteus', icon: Gauge }
                  ].map((tool, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-zinc-900 text-white border border-zinc-800 flex flex-col items-center gap-3 text-center">
                       <tool.icon className="text-blue-400" size={24} />
                       <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{tool.name}</span>
                    </div>
                  ))}
              </div>
            </div>
        </div>

        {/* Final sections Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-10 rounded-[40px] bg-blue-500 text-white shadow-xl shadow-blue-500/20"
           >
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-white/60">Applications</h4>
              <ul className="space-y-4 font-bold">
                 <li className="flex items-center gap-3"><Target size={16} /> Military Surveillance</li>
                 <li className="flex items-center gap-3"><Target size={16} /> Underground Mining</li>
                 <li className="flex items-center gap-3"><Target size={16} /> Search & Rescue</li>
                 <li className="flex items-center gap-3"><Target size={16} /> Warehouse Automation</li>
              </ul>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="p-10 rounded-[40px] bg-zinc-900 text-zinc-400 border border-zinc-800"
           >
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-brand">Advantages</h4>
              <ul className="space-y-4 text-sm">
                 <li className="flex items-start gap-3"><Zap className="text-brand shrink-0" size={16} /> No GPS or Internet required</li>
                 <li className="flex items-start gap-3"><Zap className="text-brand shrink-0" size={16} /> Jam-resistant RF architecture</li>
                 <li className="flex items-start gap-3"><Zap className="text-brand shrink-0" size={16} /> Extreme low deployment cost</li>
                 <li className="flex items-start gap-3"><Zap className="text-brand shrink-0" size={16} /> Highly scalable & energy efficient</li>
              </ul>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-1 p-10 rounded-[40px] bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm"
           >
              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-zinc-400">Future Roadmap</h4>
              <div className="space-y-6">
                 {[
                   { t: 'AI Calibration', desc: 'Predictive model tuning' },
                   { t: 'UWB Integration', desc: 'CM-level accuracy depth' },
                   { t: '3D Positioning', desc: 'Full altitude tracking' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 font-black italic">
                         {i + 1}
                      </div>
                      <div>
                         <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.t}</p>
                         <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>

        {/* Conclusion */}
        <div className="mt-24 p-12 rounded-[48px] bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-2xl md:text-4xl font-display font-black uppercase mb-8 text-zinc-900 dark:text-zinc-50 tracking-tight">Conclusion</h3>
            <p className="max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg font-medium italic">
              "This RF-based geo-location guidance system offers a practical and innovative alternative to GPS in off-grid environments. By combining RSSI-based distance estimation, trilateration, and filtering algorithms, the system enables reliable navigation for robotics, military, and emergency applications."
            </p>
            <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm">
               <Box size={18} />
               Scalable. Affordable. Reliable.
            </div>
        </div>
      </div>
    </section>
  );
}
