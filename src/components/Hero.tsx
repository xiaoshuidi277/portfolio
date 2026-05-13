import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FiArrowDown, FiBriefcase, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles background */}
      {ready && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            background: { color: 'transparent' },
            fpsLimit: 60,
            particles: {
              number: { value: 60, density: { enable: true } },
              color: { value: ['#00e5ff', '#651fff', '#2979ff'] },
              opacity: { value: { min: 0.1, max: 0.4 } },
              size: { value: { min: 1, max: 3 } },
              links: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.08,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.2,
                direction: 'none' as const,
                random: true,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' as const },
              },
              modes: {
                grab: { distance: 180, links: { opacity: 0.2 } },
              },
            },
          }}
        />
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent-cyan text-sm tracking-[0.3em] uppercase mb-4">
            Hello, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-dark-300 mb-8 font-light"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-lg mx-auto text-dark-500 mb-10 leading-relaxed"
        >
          {profile.bio.slice(0, 80)}...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-accent-cyan/40 transition-all group"
          >
            <FiBriefcase className="group-hover:text-accent-cyan transition-colors" />
            查看作品
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-8 py-3 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan hover:bg-accent-cyan/20 transition-all"
          >
            <FiMail />
            联系我
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500 hover:text-accent-cyan transition-colors"
      >
        <FiArrowDown size={24} />
      </motion.button>
    </section>
  );
}
