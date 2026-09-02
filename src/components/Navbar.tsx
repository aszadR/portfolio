import { useEffect, useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { navSections, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navSections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-500/40 bg-accent-500/10">
            <Cpu className="h-4 w-4 text-accent-400" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-wider text-white">
            {profile.name.toUpperCase()}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navSections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleNavClick(section.id)}
                className={`nav-link ${active === section.id ? 'nav-link-active' : ''}`}
              >
                {section.label}
                {active === section.id && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="text-slate-300 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-ink-700/60 bg-ink-950/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`w-full py-3 text-left text-sm transition-colors ${
                    active === section.id ? 'text-accent-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
