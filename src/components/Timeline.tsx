import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="timeline" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent-cyan text-sm tracking-[0.3em] uppercase mb-3">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">工作 & 教育经历</h2>
        <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded" />
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/30 via-accent-purple/20 to-transparent" />

        {profile.timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          const Icon = item.type === 'work' ? FiBriefcase : FiBookOpen;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className={`relative flex items-start mb-10 md:mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Dot on line */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-accent-cyan/40 shadow-[0_0_12px_rgba(0,229,255,0.2)] z-10" />

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-1.5rem)] ${
                  isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="p-5 rounded-xl bg-dark-800/30 border border-white/5 hover:border-accent-cyan/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className="text-accent-cyan" />
                    <span className="text-xs text-accent-cyan/70 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-dark-400 text-sm mb-2">{item.org}</p>
                  <p className="text-dark-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
