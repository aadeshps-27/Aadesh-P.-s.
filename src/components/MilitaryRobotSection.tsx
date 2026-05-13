import { motion } from 'motion/react';
import { Shield, Target, Cpu, Video, Radio, Activity, Navigation, Battery, Cpu as Hardware, Layers } from 'lucide-react';
import { ReactNode } from 'react';

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="text-sm font-mono text-brand font-black tracking-widest">{number}</span>
    <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
    <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h2>
  </div>
);

const FeatureCard = ({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) => (
  <div className="p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 group">
    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-50">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function MilitaryRobotSection() {
  return (
    <section id="robot" className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title & Abstract */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-6">
              <Shield size={12} />
              Research Project
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.9] text-zinc-900 dark:text-zinc-50 mb-8">
              Military Spying <span className="text-stroke opacity-60">Robot</span>
            </h1>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-8 font-bold">Surveillance and Reconnaissance Applications</p>
            
            <div className="prose dark:prose-invert max-w-none">
              <h4 className="text-zinc-900 dark:text-zinc-50 font-bold mb-4 flex items-center gap-2">
                <Target className="text-brand" size={20} />
                Abstract
              </h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-4 border-brand pl-6">
                A Military Spying Robot is an unmanned ground vehicle (UGV) designed to perform surveillance, reconnaissance, and intelligence-gathering operations in hazardous environments. Equipped with cameras, wireless communication modules, sensors, and remote-control mechanisms, it monitors enemy movements and inaccessible areas without risking human lives.
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
              {/* Tactical Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute inset-x-0 h-[1px] bg-brand animate-[scan_3s_linear_infinite]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
              </div>

              <img 
                src="https://images.unsplash.com/photo-1555664424-778a1bc5e1b7?auto=format&fit=crop&q=80&w=1000" 
                alt="Tactical Robot"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />

              {/* Viewfinder elements */}
              <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-brand/50 z-20" />
              <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-brand/50 z-20" />
              <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-brand/50 z-20" />
              <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-brand/50 z-20" />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent flex flex-col justify-end p-8 z-30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">REC // SURVEILLANCE_MODE</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-bold font-mono">UGV-01</span>
                    <span className="text-white/40 text-[8px] uppercase font-black">Designation</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/20" />
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-bold font-mono">HD_NIGHT</span>
                    <span className="text-white/40 text-[8px] uppercase font-black">Vision</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand/10 blur-3xl rounded-full" />
          </motion.div>
        </div>

        {/* 1. Introduction */}
        <div className="mb-32">
          <SectionHeader number="01" title="Introduction" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              Modern warfare increasingly relies on robotic systems to reduce risk to soldiers and improve situational awareness. Military spying robots are compact mobile platforms that can enter dangerous areas such as border zones, tunnels, and hostile buildings to gather visual and environmental information.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Night Vision', icon: Video },
                { label: 'Comm Modules', icon: Radio },
                { label: 'Obstacle Detection', icon: Activity },
                { label: 'Navigation', icon: Navigation }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-3 text-center transition-transform hover:-translate-y-1">
                  <item.icon size={20} className="text-brand" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Objectives */}
        <div className="mb-32">
          <SectionHeader number="02" title="Objectives" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Remote surveillance",
              "Live video transmission",
              "Hazardous operations",
              "Reduce personnel risk",
              "Efficient reconnaissance"
            ].map((obj, i) => (
              <div key={i} className="p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-transparent hover:border-brand/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-mono text-[10px] font-black mb-4">
                  {i + 1}
                </div>
                <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. System Components */}
        <div className="mb-32">
          <SectionHeader number="03" title="System Components" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={Hardware} 
              title="Hardware Components" 
              items={[
                "Arduino / Raspberry Pi",
                "DC motors & L298N driver",
                "Wireless camera module",
                "Wi-Fi / RF modules",
                "Ultrasonic & IR sensors",
                "GPS module & Battery pack",
                "Rugged chassis & wheels"
              ]}
            />
            <FeatureCard 
              icon={Cpu} 
              title="Software Components" 
              items={[
                "Embedded C / Python",
                "Arduino IDE",
                "Image processing libraries",
                "Custom communication protocols",
                "Real-time data streaming"
              ]}
            />
          </div>
        </div>

        {/* 5 & 6 Block Diagram & Principle */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeader number="04" title="Block Diagram" />
            <div className="p-8 rounded-[40px] bg-zinc-900 text-zinc-400 font-mono text-xs leading-loose border-2 border-brand/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Layers size={80} />
              </div>
              <div className="relative z-10">
                <p className="text-zinc-100 font-bold mb-4">// System Architecture</p>
                <p className="text-brand">Remote Controller / Laptop</p>
                <p className="ml-8 border-l border-brand/30 pl-4 my-2">↓ Wireless Module</p>
                <p className="text-brand">Microcontroller / RPi</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                   <div className="flex flex-col items-center">
                     <span className="text-emerald-500">Motors</span>
                     <span className="text-[8px] opacity-50 italic">Output</span>
                   </div>
                   <div className="flex flex-col items-center">
                     <span className="text-blue-500">Camera</span>
                     <span className="text-[8px] opacity-50 italic">Capture</span>
                   </div>
                   <div className="flex flex-col items-center">
                     <span className="text-amber-500">Sensors</span>
                     <span className="text-[8px] opacity-50 italic">Input</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeader number="05" title="Working Principle" />
            <div className="space-y-4">
              {[
                "Operator sends commands from remote interface.",
                "Wireless module transmits to onboard controller.",
                "Controller drives motors via L298N driver.",
                "Camera captures and streams live video feed.",
                "Sensors relay environmental and obstacle data."
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 py-2 border-b border-zinc-100 dark:border-zinc-800 flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7, 8, 9, 10 Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand">Applications</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Border surveillance</li>
                <li>• Tunnel inspection</li>
                <li>• Disaster response</li>
                <li>• Search and rescue</li>
              </ul>
           </div>
           <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Advantages</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Reduced human risk</li>
                <li>• Real-time intel</li>
                <li>• Compact & portable</li>
                <li>• Cost-effective</li>
              </ul>
           </div>
           <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Limitations</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Battery life</li>
                <li>• Comm range</li>
                <li>• Payload capacity</li>
                <li>• Signal interference</li>
              </ul>
           </div>
           <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Future</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• AI Navigation</li>
                <li>• Swarm Robotics</li>
                <li>• Thermal Imaging</li>
                <li>• Robotic Arm</li>
              </ul>
           </div>
        </div>

        <div className="mt-24 p-12 rounded-[40px] bg-brand text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h3 className="text-2xl md:text-4xl font-display font-black uppercase mb-6 relative z-10">Conclusion</h3>
          <p className="max-w-3xl mx-auto text-white/80 leading-relaxed text-lg relative z-10">
            Military spying robots are valuable tools for surveillance and reconnaissance. By combining cameras, sensors, and wireless communication, they enable safe and efficient intelligence gathering in hazardous areas. Continued advances in AI, autonomy, and sensing will further expand their capabilities and effectiveness.
          </p>
        </div>
      </div>
    </section>
  );
}
