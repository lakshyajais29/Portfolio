import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SOCIALS } from "../data/content";
import TiltCard from "./TiltCard";

const FloatingParticles = lazy(() => import("./FloatingParticles"));
const DataStream = lazy(() => import("./DataStream"));

const Contact = () => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0f1a] relative z-10 border-t border-[#1a2535] overflow-hidden">
      <Suspense fallback={null}>
        <FloatingParticles />
        <DataStream />
      </Suspense>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUpVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Got a project in mind?
        </motion.h2>
        <p className="text-[#7a8ba0] text-lg mb-12">Let's collaborate. Drop a message or find me on socials.</p>

        <TiltCard>
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl mx-auto text-left relative overflow-hidden">
            <div className="scan-line" />
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-sm text-[#7a8ba0] mb-2">Name</label>
                  <input type="text" className="w-full bg-[#0a0f1a] border border-[#1a2535] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0b5] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block font-mono text-sm text-[#7a8ba0] mb-2">Email</label>
                  <input type="email" className="w-full bg-[#0a0f1a] border border-[#1a2535] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0b5] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block font-mono text-sm text-[#7a8ba0] mb-2">Message</label>
                <textarea rows={5} className="w-full bg-[#0a0f1a] border border-[#1a2535] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f0b5] transition-colors resize-none" placeholder="Hello..." />
              </div>
              <motion.button 
                type="button"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 181, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-lg bg-[#00f0b5] text-[#0a0f1a] font-bold hover:bg-[#00b386] transition-all flex items-center justify-center gap-2"
              >
                Send Message <ExternalLink size={18} />
              </motion.button>
            </form>
          </div>
        </TiltCard>

        <div className="flex justify-center gap-6 mt-16">
          {SOCIALS.map((social, idx) => (
            <motion.a 
              key={idx} 
              href={social.link} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -10, borderColor: "#00f0b5" }}
              className="w-14 h-14 rounded-full bg-[#0f1623] border border-[#1a2535] flex items-center justify-center text-[#7a8ba0] hover:text-[#00f0b5] transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
