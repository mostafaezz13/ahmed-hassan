import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.portfolio', href: '#portfolio' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const { toggleLanguage, t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('app_theme');
    return savedTheme === 'light' || document.documentElement.classList.contains('light');
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem('app_theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('app_theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-bg-base/95 backdrop-blur-xl border-b border-[#0f3559]/10 shadow-[0_4px_30px_rgba(15,53,89,0.05)]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f3559] to-[#0f3559] p-[1px] group-hover:shadow-[0_0_20px_rgba(15,53,89,0.5)] transition-all duration-300">
                <div className="w-full h-full rounded-lg bg-bg-base flex items-center justify-center overflow-hidden">
                  <img src="badge1.jpeg" alt="Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#0f3559] animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-text-base font-bold text-lg font-['Space_Grotesk'] tracking-tight">
                Ahmed<span className="text-[#0f3559]">.</span>Hassan
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative cursor-pointer px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${activeSection === link.href.replace('#', '')
                  ? 'text-[#0f3559]'
                  : 'text-text-muted hover:text-text-base'
                  }`}
              >
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute inset-0 rounded-lg bg-[#0f3559]/10 border border-[#0f3559]/20"></span>
                )}
                <span className="relative">{t(link.key)}</span>
              </button>
            ))}
          </div>

          {/* Actions & Mobile Menu */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
            <button
               onClick={toggleTheme}
               className="p-2 text-text-muted hover:text-text-base hover:bg-border-subtle transition-all rounded-lg"
               title={isLightMode ? 'Dark Mode' : 'Light Mode'}
            >
              {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
               onClick={toggleLanguage}
               className="flex items-center gap-1 sm:gap-2 p-2 text-sm font-medium rounded-lg text-text-muted hover:text-text-base hover:bg-border-subtle transition-all outline-none"
               title={t('navbar.language')}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              <span className="hidden sm:inline">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden lg:flex btn-neon px-5 py-2.5 rounded-lg bg-[#0f3559] text-text-base font-bold text-sm hover:bg-[#0f3559]/90 hover:shadow-[0_0_25px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {t('nav.work_with_me')}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 ml-1 flex items-center justify-center rounded-lg border border-[#0f3559]/20 text-[#0f3559] hover:bg-[#0f3559]/10 transition-all duration-300"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-bg-base border-l border-[#0f3559]/10 flex flex-col transition-all duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#0f3559]/10">
            <span className="text-text-base font-bold font-['Space_Grotesk']">Ahmed<span className="text-[#0f3559]\">.</span>Hassan</span>
            <button onClick={() => setMenuOpen(false)} className="text-text-muted hover:text-text-base transition-colors">
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
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-base font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                    ? 'text-[#0f3559] bg-[#0f3559]/10 border border-[#0f3559]/20'
                    : 'text-text-muted hover:text-text-base hover:bg-border-subtle'
                  }`}
              >
                <span className="text-[#0f3559] opacity-60 text-sm font-mono">0{i + 1}.</span>
                {t(link.key)}
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-[#0f3559]/10 space-y-4">

            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-neon w-full py-3 rounded-xl bg-[#0f3559] text-text-base font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_25px_rgba(15,53,89,0.6)] transition-all duration-300"
            >
              {t('nav.work_with_me')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}