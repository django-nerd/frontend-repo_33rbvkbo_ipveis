import React from 'react';
import IllustrationHero from './components/IllustrationHero';
import FeatureDashboard from './components/FeatureDashboard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Above the fold: handcrafted illustration */}
      <IllustrationHero />

      {/* Seamless scroll transition into smart dashboard */}
      <FeatureDashboard />

      <section className="bg-[#050607] py-16 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Coreetz. Crafted with care.
      </section>
    </div>
  );
}

export default App;
