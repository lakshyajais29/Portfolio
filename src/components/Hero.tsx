import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

const MatrixRain = lazy(() => import("./MatrixRain"));
const DataStream = lazy(() => import("./DataStream"));

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center pt-20 overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-[#0a0f1a]" />}>
        <MatrixRain />
        <DataStream />
      </Suspense>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,37,53,0.5)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 space-y-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-mono text-[#00f0b5] tracking-widest uppercase text-sm mb-4 block hologram">
            Welcome to my universe
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-serif font-bold tracking-tight leading-tight relative"
        >
          <span className="text-white">Lakshya </span>
          <motion.span
            className="holographic-text"
            animate={{
              textShadow: [
                "0 0 20px rgba(0, 240, 181, 0.5)",
                "0 0 40px rgba(0, 240, 181, 0.8)",
                "0 0 20px rgba(0, 240, 181, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Jaiswal
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-[#7a8ba0] max-w-2xl mx-auto font-light mt-6"
        >
          Android Developer <span className="text-[#00f0b5] mx-2">•</span>
          AI/ML Enthusiast <span className="text-[#00f0b5] mx-2">•</span>
          <span className="typing-cursor">Problem Solver</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a href="#projects" className="px-8 py-4 rounded-lg bg-[#00f0b5] text-[#0a0f1a] font-bold hover:bg-[#00b386] transition-all flex items-center gap-2 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(0,240,181,0.3)]">
            View Projects <ExternalLink size={18} />
          </a>
          <a href="/Lakshya_Jaiswal_Resume.pdf" download="Lakshya_Jaiswal_Resume.pdf" className="px-8 py-4 rounded-lg border border-[#00f0b5] text-[#00f0b5] font-bold hover:bg-[rgba(0,240,181,0.1)] transition-all flex items-center gap-2 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center hover:shadow-[0_0_15px_rgba(0,240,181,0.2)]">
            Download Resume <Download size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7a8ba0]"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
