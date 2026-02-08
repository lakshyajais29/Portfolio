const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-[#1a2535] bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#7a8ba0] font-mono text-sm">
          Designed & Built by <span className="text-[#e0f2f1] font-semibold">Lakshya Jaiswal</span> © 2025
        </p>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-[#e0f2f1] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0b5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0b5]"></span>
            </span>
            Available for Projects
          </div>
          <a href="#home" className="text-[#7a8ba0] hover:text-[#00f0b5] transition-colors font-mono">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
