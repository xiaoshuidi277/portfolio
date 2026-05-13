import { profile } from '../data/profile';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-dark-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-dark-500 hover:text-accent-cyan transition-colors text-sm"
        >
          <FiArrowUp size={14} />
          回到顶部
        </button>
      </div>
    </footer>
  );
}
