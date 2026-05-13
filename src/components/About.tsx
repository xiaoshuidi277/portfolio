import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent-cyan text-sm tracking-[0.3em] uppercase mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">关于我</h2>
        <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30 blur-xl" />
            <div className="relative w-full h-full rounded-2xl bg-dark-800 flex items-center justify-center text-6xl font-bold text-gradient border border-white/5 overflow-hidden">
              {profile.name.charAt(0)}
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1"
        >
          <p className="text-dark-200 text-lg leading-relaxed mb-8">
            {profile.bio}
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { label: '完成项目', value: profile.stats.projects, suffix: '+' },
              { label: '工作经验', value: profile.stats.experience, suffix: ' 年' },
              { label: '技术栈', value: profile.stats.skills, suffix: '+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-dark-800/50 border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-dark-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
