import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-5"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
            <p className="mt-3 text-white/70">
              I’m a designer who codes and an educator who tells stories. My work blends product thinking, visual design,
              and interactive media to make technical topics approachable and memorable.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Design Systems',
                  body:
                    'I build scalable component libraries and accessible patterns with a focus on clarity and motion.'
                },
                {
                  title: 'Technical Education',
                  body:
                    'From video courses to live workshops, I teach modern web tooling through narrative and play.'
                },
                {
                  title: 'Storytelling',
                  body:
                    'I craft arcs that connect ideas to outcomes, turning tutorials into experiences that stick.'
                },
                {
                  title: 'Creative Tech',
                  body:
                    'Exploring WebGL, 3D, and interactive prototyping to spark curiosity and deepen understanding.'
                }
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-sm text-cyan-300">{card.title}</div>
                  <div className="mt-1 font-semibold">{card.body}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
