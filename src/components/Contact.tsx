import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isInView } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.social.email}?subject=来自 ${form.name} 的联系&body=${encodeURIComponent(
      `${form.message}\n\n---\n发件人: ${form.name}\n邮箱: ${form.email}`
    )}`;
    window.open(mailto, '_blank');
    setSent(true);
  };

  const socialLinks = [
    { icon: FiGithub, href: profile.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${profile.social.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent-cyan text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">联系我</h2>
        <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded" />
        <p className="mt-4 text-dark-400 max-w-md mx-auto">
          如果你对我的作品感兴趣，或者想聊聊合作机会，欢迎联系我。
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex-1 space-y-5"
        >
          <div>
            <label className="block text-sm text-dark-400 mb-1.5">姓名</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-accent-cyan/40 transition-colors"
              placeholder="你的名字"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1.5">邮箱</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-accent-cyan/40 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1.5">留言</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-accent-cyan/40 transition-colors resize-none"
              placeholder="想说点什么..."
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg text-accent-cyan hover:bg-accent-cyan/20 transition-all"
          >
            <FiSend size={16} />
            {sent ? '已发送' : '发送消息'}
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:w-56 flex flex-row lg:flex-col gap-4 items-center lg:items-start justify-center"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-dark-800/30 border border-white/5 text-dark-300 hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-dark-800/60 transition-all duration-300 group"
            >
              <link.icon size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] transition-all" />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
