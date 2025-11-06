import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.21, 1, 0.21, 1] } }),
};

const IllustrationHero = ({ style }) => {
  const stars = useMemo(
    () => Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 1.2 + 0.4,
      o: Math.random() * 0.6 + 0.2,
    })),
    []
  );

  return (
    <motion.section
      style={style}
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-[#0b0b13] text-white"
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,#34204d_0%,#10101a_60%,#0b0b13_100%)]" />

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((st) => (
          <div
            key={st.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s, opacity: st.o }}
          />
        ))}
      </div>

      {/* Large stylized moon/planet (Spline) */}
      <div className="pointer-events-auto absolute right-[6%] top-[12%] h-[260px] w-[260px] rounded-full">
        <div className="absolute inset-0 rounded-full bg-purple-400/10 blur-3xl" />
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Parallax layers */}
      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-[min(1200px,92%)] text-center"
      >
        {/* Nav */}
        <motion.div
          variants={fadeUp}
          className="absolute left-1/2 top-6 z-20 w-full -translate-x-1/2"
        >
          <div className="mx-auto flex w-[min(1100px,94%)] items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
            <div className="hidden gap-6 text-white/80 sm:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#careers" className="hover:text-white">Careers</a>
            </div>
            <div className="font-semibold tracking-wide">Coreetz</div>
            <div className="hidden gap-6 text-white/80 sm:flex">
              <a href="#media" className="hover:text-white">Media</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </motion.div>

        {/* Title & tagline */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="mt-28 text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Coreetz
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="mx-auto mt-3 max-w-xl text-lg text-purple-100/80"
        >
          A School for Artists
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="mt-6">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-400 hover:to-fuchsia-400"
          >
            Join The Waitlist
          </a>
        </motion.div>

        {/* Layered mountains (SVG) */}
        <motion.div variants={fadeUp} custom={0.5} className="pointer-events-none relative mt-12">
          <svg viewBox="0 0 1440 520" className="h-[44vh] w-full">
            {/* Farthest mountains */}
            <g opacity="0.45">
              <path d="M0,320 L140,300 L260,330 L400,290 L520,310 L640,280 L780,300 L920,270 L1040,300 L1160,260 L1300,290 L1440,260 L1440,520 L0,520 Z" fill="#2b1f3e" />
            </g>
            {/* Mid mountains */}
            <g opacity="0.7">
              <path d="M0,350 L120,330 L240,360 L360,340 L500,360 L640,330 L760,360 L880,340 L1000,360 L1150,330 L1300,360 L1440,340 L1440,520 L0,520 Z" fill="#3a2754" />
            </g>
            {/* Closer ridge */}
            <g opacity="0.95">
              <path d="M0,390 L110,380 L240,410 L380,395 L520,420 L660,395 L800,425 L940,400 L1080,430 L1220,405 L1360,430 L1440,420 L1440,520 L0,520 Z" fill="#462d67" />
            </g>
            {/* Foreground ground */}
            <path d="M0,450 C200,430 420,480 720,460 C1020,440 1240,480 1440,460 L1440,520 L0,520 Z" fill="#5a3a86" />
          </svg>

          {/* Stylized trees */}
          <div className="absolute inset-x-0 bottom-10 mx-auto flex max-w-5xl justify-between px-10 opacity-90">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-6 w-1 rounded-full bg-purple-200/50" />
                <div className="-mt-1 h-10 w-8 rounded-t-[6px] bg-gradient-to-b from-purple-200/60 to-purple-300/10" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Soft clouds */}
      <div className="pointer-events-none absolute left-[-10%] top-[8%] h-40 w-72 rounded-full bg-white/6 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6%] top-[26%] h-32 w-60 rounded-full bg-white/5 blur-3xl" />
    </motion.section>
  );
};

export default IllustrationHero;
