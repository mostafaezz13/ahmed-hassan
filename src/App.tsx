import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  // Initialize scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const initObserver = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach((el) => observer.observe(el));
    };

    // Run after a small delay to ensure DOM is ready
    const timer = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050810] text-slate-200 overflow-x-hidden">
      {/* Secret toggle for Dashboard (Clickable 'Ahmed Hassan' in footer or similar) */}
      <button 
        onClick={() => setShowDashboard(!showDashboard)}
        className="fixed bottom-4 left-4 z-[60] w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center text-[10px] text-primary/40 hover:text-primary transition-all opacity-0 hover:opacity-100"
        title="Admin Dashboard"
      >
        D
      </button>

      {showDashboard ? (
        <Dashboard />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />
            <Services />
            <Portfolio />
            {/* <CaseStudy /> */}
            {/* <Testimonials /> */}
            <Contact />
          </main>
          <Footer />
          <FloatingCTA />
        </>
      )}
    </div>
  );
}
