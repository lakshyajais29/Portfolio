import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const OrbitingSkills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="relative w-64 h-64 mx-auto my-8 perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-[#00f0b5]/20 border border-[#00f0b5] flex items-center justify-center neon-pulse">
          <Terminal className="text-[#00f0b5]" size={24} />
        </div>
      </div>
      {skills.map((skill, idx) => {
        const angle = (360 / skills.length) * idx;
        const radius = 100;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={skill}
            className="absolute px-3 py-1 bg-[#0f1623] border border-[#1a2535] rounded-full text-xs font-mono text-[#e0f2f1]"
            style={{
              left: `calc(50% + ${x}px - 20px)`,
              top: `calc(50% + ${y}px - 10px)`
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 20 + idx * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {skill}
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitingSkills;
