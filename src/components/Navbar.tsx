import { motion, useScroll } from "framer-motion";

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0f1a]/80 backdrop-blur-md border-b border-[#1a2535]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-serif tracking-tight text-white group">
          Lakshya<span className="text-[#00f0b5] group-hover:animate-pulse">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium font-mono">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[#7a8ba0] hover:text-[#00f0b5] transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0b5] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
      <motion.div 
        className="h-[2px] bg-[#00f0b5] progress-bar" 
        style={{ scaleX: scrollYProgress }} 
      />
    </nav>
  );
};

export default Navbar;
