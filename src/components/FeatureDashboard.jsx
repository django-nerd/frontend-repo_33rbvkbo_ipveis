import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, TrendingUp, Link as LinkIcon } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md ${className}`}>
    {children}
  </div>
);

const Glow = () => (
  <>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#00ff8855_0%,transparent_60%)] opacity-20" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_30%,#00ff8899_0%,transparent_60%)] opacity-10" />
  </>
);

const Circuit = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" fill="none">
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00ff99" stopOpacity="0.0" />
        <stop offset="50%" stopColor="#00ff99" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#00ff99" stopOpacity="0.0" />
      </linearGradient>
    </defs>
    <path d="M100 200 H500 V260 H900" stroke="url(#grad)" strokeWidth="2" />
    <path d="M250 520 H700 V460 H1050" stroke="url(#grad)" strokeWidth="2" />
    <path d="M120 360 C280 340, 420 420, 600 400" stroke="url(#grad)" strokeWidth="2" />
  </svg>
);

const LineChart = () => (
  <div className="relative">
    <svg viewBox="0 0 600 220" className="h-40 w-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M0 170 C 80 120, 120 140, 180 100 S 300 140, 360 110 S 480 120, 600 70" stroke="#00ff99" strokeWidth="3" fill="none" filter="url(#glow)" />
      <g fill="#00ff99">
        {[0, 120, 240, 360, 480, 600].map((x, i) => (
          <circle key={i} cx={x} cy={170 - (i % 2 === 0 ? 10 : 60)} r="3" className="opacity-80" />
        ))}
      </g>
    </svg>
    <div className="absolute right-2 top-2 rounded-md bg-[#00ff9915] px-2 py-1 text-xs text-[#b4ffdf] ring-1 ring-[#00ff9960]">
      +18% this week
    </div>
  </div>
);

const FeatureDashboard = ({ compact = false, style }) => {
  return (
    <section style={style} className="relative w-full bg-[#050607] py-16 text-white">
      <div className="absolute inset-0">
        <Glow />
        <Circuit />
      </div>

      <div className="relative mx-auto w-[min(1200px,92%)]">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-sm text-[#9eeecb]">Smart Workspace</div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <Settings className="h-3.5 w-3.5 text-[#00ff99]" /> System Healthy
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className={`grid gap-5 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}
        >
          {/* Main tilted dashboard */}
          <motion.div
            whileHover={{ rotateX: 1, rotateY: -1, y: -2 }}
            className="md:col-span-2"
          >
            <Card className="relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,#0a0c0d,transparent_40%)]" />
              <div className="border-b border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/70">Personal Performance</div>
                  <TrendingUp className="h-4 w-4 text-[#00ff99]" />
                </div>
              </div>
              <div className="p-4">
                <LineChart />
              </div>
            </Card>
          </motion.div>

          {/* Team widget */}
          <Card>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#00ff99]" />
                <div className="text-sm">Create a team</div>
              </div>
              <button className="rounded-md bg-[#00ff991a] px-2 py-1 text-xs text-[#abffdf] ring-1 ring-[#00ff9960]">New</button>
            </div>
            <div className="mt-2 flex -space-x-3">
              {["#9EEECB", "#B5FFE1", "#7AF2C7", "#E0FFF2"].map((c, i) => (
                <div key={i} className="h-9 w-9 rounded-full ring-2 ring-black" style={{ background: `radial-gradient(circle at 30% 30%, ${c}, #0f1714)` }} />
              ))}
            </div>
            <div className="mt-4 text-xs text-white/60">Invite teammates and start tracking goals together.</div>
          </Card>

          {/* Links / Integrations */}
          <Card>
            <div className="mb-2 flex items-center gap-2 text-sm">
              <LinkIcon className="h-4 w-4 text-[#00ff99]" /> Integrations
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-white/70">
              {['GitHub', 'Linear', 'Slack', 'Notion', 'Figma', 'Drive'].map((s) => (
                <div key={s} className="rounded-md bg-white/5 px-2 py-2 text-center ring-1 ring-white/10">{s}</div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDashboard;
