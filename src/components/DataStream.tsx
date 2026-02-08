import { motion } from "framer-motion";

const DataStream = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-[#00f0b5] to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${50 + Math.random() * 100}px`
          }}
          animate={{
            y: [-100, 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default DataStream;
