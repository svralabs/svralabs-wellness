import { Link, useLocation } from 'react-router-dom';
import { BRAND, NAV_LINKS } from '../data/site.js';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-[#F9FAF7]/80 dark:bg-emerald-950/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-emerald-100/20 dark:border-emerald-800/20 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link to="/" className="text-2xl font-black text-emerald-900 dark:text-emerald-50 tracking-tight">
          {BRAND.name}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans font-medium transition-all scale-102 active:scale-98 duration-200 ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-emerald-800/70 dark:text-emerald-200/70 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <button className="font-button-text text-button-text text-primary hover:text-primary/80 transition-colors hidden md:block">
            Login
          </button>
          <button className="bg-primary-container text-on-primary-container font-button-text text-button-text px-6 py-3 rounded-full hover:bg-primary-container/90 transition-transform hover:scale-[1.02] active:scale-95 border-2 border-primary">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}