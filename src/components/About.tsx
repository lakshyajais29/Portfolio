import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";

const FloatingParticles = lazy(() => import("./FloatingParticles"));

const About = () => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0f1a] relative z-10 overflow-hidden">
      <Suspense fallback={null}>
        <FloatingParticles />
      </Suspense>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={slideUpVariants}
        className="max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-[#00f0b5]"></span>
          About Me
          <span className="w-12 h-[1px] bg-[#00f0b5]"></span>
        </h2>

        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#00f0b5] p-2 mb-8 neon-pulse">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00f0b5]"
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00f0b5]"
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
          />
          <div className="w-full h-full rounded-full bg-[#0f1623] overflow-hidden flex items-center justify-center border border-[#1a2535] relative z-10">
            <span className="text-5xl font-serif font-bold text-[#00f0b5]">LJ</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#0f1623] border border-[#00f0b5] p-2 rounded-full text-[#00f0b5] z-10">
            <MapPin size={20} />
          </div>
        </div>

        <h3 className="text-3xl font-serif font-bold text-white mb-2">Lakshya Jaiswal</h3>
        <p className="text-[#00f0b5] font-mono text-sm mb-8 flex items-center justify-center gap-2">
          <MapPin size={14} /> Ghaziabad, Uttar Pradesh
        </p>
        
        <p className="text-lg text-[#7a8ba0] mb-16 max-w-3xl leading-relaxed text-center">
          I'm a Computer Science student at KIET Group of Institutions focused on building reliable, user-centric Android and cross-platform apps. I enjoy taking ideas from rough concept to polished product — designing the flows, architecting the code, and iterating quickly based on real feedback. My goal is to write clean, scalable code that actually ships and makes a measurable impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group">
            <Mail className="text-[#00f0b5] mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="text-sm font-mono text-[#7a8ba0] mb-1">Email</h4>
            <p className="text-white text-sm">lakshyajaiswal2929@gmail.com</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group">
            <Phone className="text-[#00f0b5] mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="text-sm font-mono text-[#7a8ba0] mb-1">Phone</h4>
            <p className="text-white text-sm">+91-6392444217</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group">
            <GraduationCap className="text-[#00f0b5] mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h4 className="text-sm font-mono text-[#7a8ba0] mb-1">Education</h4>
            <p className="text-white text-sm">KIET Group of Institutions<br/><span className="text-[#00f0b5] font-mono mt-1 block">9.14 CGPA</span></p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-16">
          <h4 className="text-2xl font-serif font-bold text-white mb-10">Education Timeline</h4>
          <div className="relative border-l border-[#1a2535] ml-4 md:ml-0 md:w-full md:max-w-2xl text-left pl-8 md:pl-12 space-y-12">
            <div className="relative">
              <div className="absolute -left-[39px] md:-left-[55px] w-4 h-4 rounded-full bg-[#0f1623] border-2 border-[#00f0b5] shadow-[0_0_10px_rgba(0,240,181,0.5)] z-10" />
              <span className="font-mono text-[#00f0b5] text-sm font-bold">2024 - 2028</span>
              <h5 className="text-xl font-bold text-white mt-1">B.Tech Computer Science</h5>
              <p className="text-[#7a8ba0] mt-1">KIET Group of Institutions, Ghaziabad</p>
              <p className="text-[#00f0b5] font-mono text-sm mt-2">CGPA: 9.14</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[39px] md:-left-[55px] w-4 h-4 rounded-full bg-[#0f1623] border-2 border-[#1a2535] z-10" />
              <span className="font-mono text-[#7a8ba0] text-sm">2024</span>
              <h5 className="text-xl font-bold text-[#e0f2f1] mt-1">Class 12 (PCM) CBSE</h5>
              <p className="text-[#7a8ba0] mt-1">New Central Public Academy, Ballia</p>
              <p className="text-[#00f0b5] font-mono text-sm mt-2">85%</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-16">
          <h4 className="text-2xl font-serif font-bold text-white mb-6">Why hire me?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { title: "Product Thinking", desc: "I think in terms of user journeys, not just screens. I care about clear flows and polished end-to-end experiences." },
              { title: "Execution & Ownership", desc: "Used to owning features from idea to deployment — breaking work into shippable pieces and keeping quality high." },
              { title: "Learning Mindset", desc: "Comfortable picking up new tools quickly — from Flutter to AI APIs — and applying them in real projects." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl text-left flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#00f0b5] font-mono text-xs uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0b5]"></span>
                  {item.title}
                </div>
                <p className="text-sm text-[#e0f2f1] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          {["Android Dev", "Flutter", "Kotlin", "AI/ML", "Jetpack Compose", "Problem Solver"].map(tag => (
            <span key={tag} className="px-5 py-2 rounded-full border border-[#1a2535] bg-[#0f1623] text-[#e0f2f1] text-sm font-mono hover:border-[#00f0b5] hover:text-[#00f0b5] transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
