import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-4 w-[min(1100px,92%)] rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 backdrop-blur"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm font-semibold text-white">
            <span className="text-cyan-400">Δ</span> StoryTech
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
