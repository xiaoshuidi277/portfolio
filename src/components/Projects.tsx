import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent-cyan text-sm tracking-[0.3em] uppercase mb-3">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">项目作品</h2>
        <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            className="group rounded-2xl bg-dark-800/30 border border-white/5 hover:border-accent-cyan/20 overflow-hidden transition-all duration-500 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/20 transition-colors" />
              {/* Links overlay */}
              <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-900/80 text-white hover:text-accent-cyan hover:bg-dark-900 transition-all"
                >
                  <FiGithub size={16} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-900/80 text-white hover:text-accent-cyan hover:bg-dark-900 transition-all"
                >
                  <FiExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent-cyan/5 border border-accent-cyan/15 text-accent-cyan/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
