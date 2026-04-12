import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050810]/95 backdrop-blur-xl border-b border-[#0f3559]/10 shadow-[0_4px_30px_rgba(15,53,89,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f3559] to-[#0f3559] p-[1px] group-hover:shadow-[0_0_20px_rgba(15,53,89,0.5)] transition-all duration-300">
                <div className="w-full h-full rounded-lg bg-[#050810] flex items-center justify-center">
                  <span className="text-[#0f3559] font-bold text-lg font-['Space_Grotesk']">A</span>
                </div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#0f3559] animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg font-['Space_Grotesk'] tracking-tight">
                Ahmed<span className="text-[#0f3559]">.</span>Hassan
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#0f3559]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute inset-0 rounded-lg bg-[#0f3559]/10 border border-[#0f3559]/20"></span>
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-neon px-5 py-2.5 rounded-lg bg-[#0f3559] text-white font-bold text-sm hover:bg-[#0f3559]/90 hover:shadow-[0_0_25px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105"
            >
              Work With Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#0f3559]/20 text-[#0f3559] hover:bg-[#0f3559]/10 transition-all duration-300"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0d1117] border-l border-[#0f3559]/10 flex flex-col transition-all duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#0f3559]/10">
            <span className="text-white font-bold font-['Space_Grotesk']">Ahmed<span className="text-[#0f3559]\">.</span>Hassan</span>
            <button onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-1 p-4 flex-1">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#0f3559] bg-[#0f3559]/10 border border-[#0f3559]/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-[#0f3559] opacity-60 text-sm font-mono">0{i + 1}.</span>
                {link.label}
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-[#0f3559]/10">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-neon w-full py-3 rounded-xl bg-[#0f3559] text-white font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_25px_rgba(15,53,89,0.6)] transition-all duration-300"
            >
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}