import { Link } from 'react-router-dom';
import { BRAND, FOOTER_LINKS } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-emerald-950 w-full rounded-t-[40px] mt-20 border-t border-emerald-50 dark:border-emerald-900 shadow-[0_-4px_20px_rgba(47,82,73,0.05)]">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link
          to="/"
          className="text-xl font-bold text-emerald-900 dark:text-emerald-50 opacity-80 hover:opacity-100 transition-opacity"
        >
          {BRAND.name}
        </Link>
        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => {
            const isInternal = link.href.startsWith('/');
            const isExternal = link.href === '#';
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (isExternal) e.preventDefault();
                }}
                className="font-sans text-sm text-emerald-800/60 dark:text-emerald-200/60 hover:text-emerald-500 dark:hover:text-emerald-400 underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className="font-sans text-sm text-emerald-900 dark:text-emerald-50 opacity-80 hover:opacity-100 transition-opacity">
          © 2024 {BRAND.name}. {BRAND.tagline}.
        </div>
      </div>
    </footer>
  );
}