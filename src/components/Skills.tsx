import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import * as Si from 'react-icons/si';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  SiReact: Si.SiReact,
  SiTypescript: Si.SiTypescript,
  SiVuedotjs: Si.SiVuedotjs,
  SiNextdotjs: Si.SiNextdotjs,
  SiTailwindcss: Si.SiTailwindcss,
  SiSass: Si.SiSass,
  SiNodedotjs: Si.SiNodedotjs,
  SiPython: Si.SiPython,
  SiPostgresql: Si.SiPostgresql,
  SiMongodb: Si.SiMongodb,
  SiDocker: Si.SiDocker,
  SiGit: Si.SiGit,
  SiFigma: Si.SiFigma,
  SiVite: Si.SiVite,
  SiGraphql: Si.SiGraphql,
};

export default function Skills() {
  const { ref, isInView } = useScrollReveal();
  const categories = [...new Set(profile.skills.map((s) => s.category))];

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent-cyan text-sm tracking-[0.3em] uppercase mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">技术技能</h2>
        <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded" />
      </motion.div>

      {categories.map((category) => (
        <div key={category} className="mb-10 last:mb-0">
          <h3 className="text-sm text-dark-500 uppercase tracking-wider mb-4">{category}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {profile.skills
              .filter((s) => s.category === category)
              .map((skill, i) => {
                const Icon = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-dark-800/30 border border-white/5 hover:border-accent-cyan/30 hover:bg-dark-800/60 transition-all duration-300 cursor-default"
                  >
                    {Icon && (
                      <Icon
                        size={32}
                        className="text-dark-500 group-hover:text-accent-cyan transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]"
                      />
                    )}
                    <span className="text-xs text-dark-400 group-hover:text-dark-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
          </div>
        </div>
      ))}
    </section>
  );
}
