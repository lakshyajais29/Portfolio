import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import TiltCard from "./TiltCard";

const DataStream = lazy(() => import("./DataStream"));

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % PROJECTS.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden">
      <Suspense fallback={null}>
        <DataStream />
      </Suspense>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-glow">Projects</h2>
          <p className="text-[#00f0b5] font-mono tracking-widest uppercase text-sm">Things I've built</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="relative"
        >
          {/* Carousel Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject} 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#00f0b5] hover:border-[#00f0b5] transition-all"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject} 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#00f0b5] hover:border-[#00f0b5] transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <TiltCard key={currentProject}>
                <motion.div
                  initial={{ opacity: 0, x: 50, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -50, rotateY: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="glass-card rounded-3xl p-6 md:p-10 border border-[#1a2535] relative overflow-hidden"
                >
                  <div className="scan-line" />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    
                    {/* Left: Mockup Frame */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-[#00f0b5]/20 to-transparent rounded-3xl blur-3xl"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {PROJECTS[currentProject].mockupType === "phone" ? (
                        <motion.div className="relative w-64 h-[500px] bg-[#0a0f1a] rounded-[3rem] border-8 border-[#1a2535] flex flex-col shadow-2xl overflow-hidden z-10">
                          <div className="absolute top-0 w-full h-6 flex justify-center z-20">
                            <div className="w-32 h-6 bg-[#1a2535] rounded-b-2xl"></div>
                          </div>
                          <div className="flex-1 bg-gradient-to-b from-[#0f1623] to-[#0a0f1a] p-6 flex flex-col items-center justify-center border-t border-[#1a2535] relative overflow-hidden">
                            <span className="text-[#00f0b5] font-serif text-2xl font-bold opacity-70 relative z-10">{PROJECTS[currentProject].title}</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div className="relative w-full max-w-lg h-80 bg-[#0a0f1a] rounded-xl border border-[#1a2535] flex flex-col shadow-2xl overflow-hidden z-10">
                          <div className="h-10 bg-[#0f1623] border-b border-[#1a2535] flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <div className="flex-1 bg-gradient-to-br from-[#0f1623] to-[#0a0f1a] p-6 flex flex-col items-center justify-center relative overflow-hidden">
                            <span className="text-[#00f0b5] font-serif text-3xl font-bold opacity-70 relative z-10">{PROJECTS[currentProject].title}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right: Details */}
                    <div className="order-1 lg:order-2 space-y-6 text-left">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/30 text-[#00f0b5] font-mono text-xs font-bold tracking-wide">
                        {PROJECTS[currentProject].badge}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                        {PROJECTS[currentProject].title}
                      </h3>
                      <p className="text-xl text-[#7a8ba0] font-medium">{PROJECTS[currentProject].subtitle}</p>
                      <ul className="space-y-3 text-[#e0f2f1]">
                        {PROJECTS[currentProject].features.map((feature, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-[#00f0b5] mt-1">▹</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 flex flex-wrap gap-2">
                        {PROJECTS[currentProject].tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-[#1a2535]/50 border border-[#1a2535] rounded-md text-[#7a8ba0] font-mono text-sm">{t}</span>
                        ))}
                      </div>
                      <div className="pt-6 flex gap-4">
                        {PROJECTS[currentProject].link && (
                          <a href={PROJECTS[currentProject].link} className="px-6 py-3 rounded-lg bg-[#00f0b5] text-[#0a0f1a] font-bold hover:bg-[#00b386] transition-colors flex items-center gap-2">
                            View Project <ArrowUpRight size={18} />
                          </a>
                        )}
                        <a href={PROJECTS[currentProject].github} className="px-6 py-3 rounded-lg border border-[#1a2535] text-white transition-colors flex items-center gap-2 bg-[#0f1623]">
                          <Github size={18} /> Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentProject === idx ? 'w-8 bg-[#00f0b5]' : 'w-2 bg-[#1a2535] hover:bg-[#7a8ba0]'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
