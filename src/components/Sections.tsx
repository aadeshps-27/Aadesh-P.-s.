import { motion } from 'motion/react';
import { ExternalLink, Briefcase, GraduationCap, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ReactNode, useState } from 'react';

const Card = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm ${className}`}>
    {children}
  </div>
);

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 dark:bg-zinc-950/50 -z-10 translate-x-1/2 rotate-12" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand/10 dark:bg-brand/5 blur-[100px] rounded-full animate-pulse" />
              <div className="flex flex-col gap-10 relative z-10">
                <span className="text-xs font-mono uppercase tracking-[0.4em] text-brand font-black">Origins & Ethos</span>
                <h2 className="font-display text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
                  Crafting Digital <br />
                  <span className="text-stroke opacity-60">Experiences</span>
                </h2>
                <div className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                  <p>
                    I am Aadesh PS, a creative developer and designer based in Kerala, India. My journey is defined by a relentless curiosity for how digital artifacts interact with human perception.
                  </p>
                  <p className="border-l-4 border-brand pl-8 italic text-zinc-900 dark:text-zinc-100 font-bold">
                    "I don't just build interfaces; I construct digital architectures that prioritize human intuition over technical complexity."
                  </p>
                  <p>
                    With expertise spanning from robotics to high-end UI/UX, I bring a multidisciplinary perspective to every project.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-6 p-4 bg-zinc-100 dark:bg-zinc-900 rounded-[4rem] rotate-2 hover:rotate-0 transition-transform duration-700">
                {[
                  { label: 'Strategy', bg: 'bg-brand' },
                  { label: 'Design', bg: 'bg-zinc-800' },
                  { label: 'Code', bg: 'bg-zinc-800' },
                  { label: 'Launch', bg: 'bg-zinc-800' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-[2.5rem] ${item.bg} flex flex-col justify-between p-8 text-white group`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{i+1}</span>
                    <h4 className="font-display text-xl font-black uppercase tracking-tighter">{item.label}</h4>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Peoples Urban Development Group & Dashami Finance",
      role: "Digital Marketing Associate",
      period: "Current",
      desc: "Managing digital presence and marketing strategies to drive engagement and growth."
    },
    {
      company: "Luminar Technolab Kochi",
      role: "Full-Stack Developer Intern",
      period: "2023",
      desc: "Developed responsive web applications and collaborated on various full-stack projects."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-brand sticky top-24">02. Journey</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover:border-brand/40 transition-all group">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-brand" />
                        <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-100">{exp.role}</h4>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider h-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {exp.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const projects = [
    {
      title: "Digital Art & Vector Mastery",
      id: "creative",
      category: "Visual Arts / Design",
      desc: "Exploring the boundaries of digital illustration and vector manipulation, creating minimal yet expressive visual stories.",
      tags: ["Illustrator", "Affinity", "Vector Art", "Digital Illustration"],
      color: "bg-orange-500/10"
    },
    {
      title: "Military Spying Robot",
      id: "robot",
      category: "Robotics / IoT",
      desc: "Advanced military spying and bomb disposal robot equipped with specialized sensors and remote controls.",
      tags: ["Electronics", "IoT", "RF Technology"],
      color: "bg-blue-500/10"
    },
    {
      title: "Geo Location Guide",
      id: "geolocation",
      category: "Communications",
      desc: "Innovative geo-location guidance system utilizing RF technology for precise positioning in off-grid environments.",
      tags: ["RF", "Hardware", "Applied Electronics"],
      color: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-brand sticky top-24">03. Creations</h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className={`aspect-[16/9] mb-8 rounded-[40px] overflow-hidden ${project.color} flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-[1.02]`}>
                   <div className="text-center">
                      <p className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400 dark:text-zinc-500 mb-2">{project.category}</p>
                      <h4 className="font-display text-4xl md:text-5xl font-black uppercase text-zinc-900 dark:text-zinc-100">{project.title}</h4>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 px-4">
                  <div className="flex-1">
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-sm uppercase tracking-wider italic">#{tag}</span>
                       ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                     <button 
                       onClick={() => {
                         onSelectProject(project.id);
                         setTimeout(() => {
                           document.getElementById(project.id)?.scrollIntoView({ behavior: 'smooth' });
                         }, 100);
                       }}
                       className="px-6 h-12 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-bold flex items-center gap-2 group-hover:bg-brand transition-all"
                     >
                        View Project
                        <ExternalLink size={18} />
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);

    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 overflow-hidden relative">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 text-[20vw] font-black opacity-5 pointer-events-none translate-x-1/2 -translate-y-1/2 uppercase font-display">
        Contact
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] opacity-40 mb-8">04. Connection</h2>
            <h3 className="font-display text-5xl md:text-7xl font-black leading-[0.9] uppercase mb-8">
              Let&apos;s build <br /> <span className="text-stroke opacity-70">something</span> <br /> great together.
            </h3>
            <p className="max-w-md text-lg opacity-60 mb-12 text-balance leading-relaxed">
              Have a project in mind? Or just want to say hi? My inbox is always open. Let&apos;s collaborate and create something meaningful.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-700 dark:border-zinc-300 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all">
                   <ExternalLink size={20} />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Email me</p>
                   <p className="font-bold">aadeshps2015@gmail.com</p>
                </div>
              </div>
              <a href="https://wa.me/918893809997" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-zinc-700 dark:border-zinc-300 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all">
                   <MessageSquare size={20} />
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">WhatsApp Me</p>
                   <p className="font-bold">+91 88938 09997</p>
                </div>
              </a>
            </div>
          </div>

          <Card className="!bg-zinc-800 dark:!bg-zinc-200 border-none p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-zinc-900/40 dark:bg-zinc-100/40 border ${errors.name ? 'border-red-500' : 'border-zinc-700 dark:border-zinc-300'} rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full bg-zinc-900/40 dark:bg-zinc-100/40 border ${errors.email ? 'border-red-500' : 'border-zinc-700 dark:border-zinc-300'} rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className={`w-full bg-zinc-900/40 dark:bg-zinc-100/40 border ${errors.message ? 'border-red-500' : 'border-zinc-700 dark:border-zinc-300'} rounded-xl px-4 py-3 focus:border-brand outline-none transition-colors`}
                ></textarea>
                {errors.message && (
                  <p className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full py-5 bg-brand text-white rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand/20 disabled:opacity-50 disabled:grayscale disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center gap-3 justify-center"
                >
                  <CheckCircle2 size={18} />
                  <span className="text-sm font-bold tracking-tight">Message sent successfully!</span>
                </motion.div>
              )}
            </form>
          </Card>
        </div>
        
        <div className="mt-32 w-full pt-12 border-t border-zinc-800 dark:border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] uppercase tracking-[0.3em] font-bold">
           <p>© 2026 Aadesh PS. Crafted with precision.</p>
           <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/aadeshps27/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors underline decoration-brand/30 underline-offset-4">LinkedIn</a>
              <a href="https://www.instagram.com/_aadeshps/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors underline decoration-brand/30 underline-offset-4">Instagram</a>
           </div>
        </div>
      </div>
    </section>
  );
}
