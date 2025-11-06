import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Systems Course',
    desc:
      'A narrative-driven course that teaches front-end architecture through interactive chapters and challenges.',
    tags: ['React', 'Design Systems', 'Education'],
    link: '#'
  },
  {
    title: 'Story-First Docs',
    desc:
      'Documentation theme that layers guided stories, live sandboxes, and progressive disclosure patterns.',
    tags: ['MDX', 'Framer Motion', 'DX'],
    link: '#'
  },
  {
    title: '3D Learning Toys',
    desc:
      'Playable mini-apps that explain computer science concepts using 3D scenes and tactile metaphors.',
    tags: ['Spline', 'WebGL', 'Pedagogy'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">View all</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{p.title}</div>
                  <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-white/60 transition group-hover:text-white" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
