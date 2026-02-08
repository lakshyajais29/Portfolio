import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SKILLS } from "../data/content";
import TiltCard from "./TiltCard";
import OrbitingSkills from "./OrbitingSkills";

const DataStream = lazy(() => import("./DataStream"));
const FloatingParticles = lazy(() => import("./FloatingParticles"));

const Skills = () => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="skills" className="py-32 px-6 relative border-y border-[#1a2535] bg-[#0f1623]/30 overflow-hidden">
      <Suspense fallback={null}>
        <DataStream />
        <FloatingParticles />
      </Suspense>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-glow">Skills</h2>
          <p className="text-[#00f0b5] font-mono tracking-widest uppercase text-sm">Technologies I work with</p>
        </motion.div>

        <OrbitingSkills skills={["React", "Node.js", "Python", "Kotlin", "Flutter", "AWS"]} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <TiltCard key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="scan-line" />
                <div className="flex flex-col items-center text-center relative z-10">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-white mb-6 font-serif">{skillGroup.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.items.map(item => (
                       <motion.span 
                         key={item} 
                         className="px-3 py-1.5 rounded-md bg-[#1a2535]/50 border border-[#1a2535] text-[#e0f2f1] text-sm font-mono hover:border-[#00f0b5]/50 transition-colors"
                         whileHover={{ scale: 1.1, borderColor: "#00f0b5" }}
                       >
                         {item}
                       </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#00f0b5] bg-[#00f0b5]/5 shadow-[0_0_20px_rgba(0,240,181,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0b5]/10 to-transparent animate-pulse" />
            <Sparkles className="text-[#00f0b5]" size={20} />
            <span className="text-[#e0f2f1] font-mono text-sm">Currently Learning:</span>
            <span className="text-[#00f0b5] font-bold tracking-wide">Agentic AI</span>
            <span className="relative flex h-3 w-3 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0b5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f0b5]"></span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
