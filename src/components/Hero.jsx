import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Github, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Subtle glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-20 md:flex-row md:items-stretch md:gap-10 md:pt-28">
        {/* Copy */}
        <div className="z-10 flex max-w-2xl flex-col gap-6 py-10 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <Rocket className="h-3.5 w-3.5 text-cyan-400" />
            Full‑stack Designer • Content Creator • Tech Educator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Innovative storytelling at the intersection of design and code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="max-w-xl text-base text-white/70 sm:text-lg"
          >
            I craft playful, interactive experiences that teach complex concepts through narrative, visuals, and hands‑on demos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              Explore Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Play className="h-4 w-4" /> Watch Intro
            </a>
            <div className="ml-1 inline-flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Highlight badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md"
          >
            {[
              { k: 'YouTube', v: '200k+ learners' },
              { k: 'Workshops', v: '60+ sessions' },
              { k: 'Products', v: '10+ launches' },
              { k: 'Newsletter', v: '25k subscribers' },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 backdrop-blur">
                <div className="text-xs text-white/60">{item.k}</div>
                <div className="font-semibold text-white">{item.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Spline scene */}
        <div className="relative mt-8 h-[420px] w-full md:mt-0 md:h-[640px] md:w-1/2">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-black/20 backdrop-blur">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          {/* Gradient edges to blend */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
