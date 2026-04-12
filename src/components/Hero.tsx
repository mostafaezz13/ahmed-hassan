import { useEffect, useRef, useState } from 'react';
import { BarChart3, Rocket, DollarSign, TrendingUp, Users, CheckCircle } from 'lucide-react';


const typingWords = ['Profit', 'Revenue', 'Growth', 'Results'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation
  useEffect(() => {
    const word = typingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; opacity: number; life: number;
    }

    const particles: Particle[] = [];
    const colors = ['#0f3559', '#0f3559', '#0f3559', '#ffffff'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.1,
        life: Math.random() * 100,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.5;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.save();
        ctx.globalAlpha = p.opacity * (0.5 + 0.5 * Math.sin(p.life * 0.02));
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050810]">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid z-0"></div>

      {/* Radial glows - use only #0f3559 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0f3559]/5 blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#0f3559]/5 blur-[120px] z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0f3559]/3 blur-[200px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left column */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0f3559] animate-pulse"></span>
              Available for new projects
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <div className="text-slate-400 text-lg font-medium tracking-wider uppercase font-mono">
                Media Buyer & Digital Marketer
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white font-['Space_Grotesk']">
                I Turn Ads Into{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">
                    {displayText}
                    <span className="animate-blink text-[#0f3559]">|</span>
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl">
              Helping brands scale their revenue through data-driven paid advertising strategies.
              From <span className="text-white font-medium">Facebook Ads</span> to{' '}
              <span className="text-white font-medium">Google Ads</span> — I deliver measurable,
              profitable results every campaign.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('contact')}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0f3559] text-white font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_40px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105"
              >
                Work With Me
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll('portfolio')}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-[#0f3559]/30 text-white font-semibold text-base hover:bg-[#0f3559]/10 hover:border-[#0f3559]/60 transition-all duration-300"
              >
                View My Work
                <svg className="w-5 h-5 text-[#0f3559] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '$2M+', label: 'Ad Spend Managed' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-[#0f3559] font-['Space_Grotesk']">{item.value}</div>
                  <div className="text-slate-500 text-sm leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative animate-slide-in-right flex items-center justify-center">
            {/* Rotating ring */}
            <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full border border-[#0f3559]/20 animate-spin-slow"></div>
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-[#0f3559]/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

            {/* Central card */}
            <div className="relative z-10 w-72 h-72 lg:w-80 lg:h-80">
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0f3559]/20 to-[#0f3559]/20 blur-xl"></div>
              <div className="relative h-full rounded-2xl bg-[#0d1117]/90 border border-[#0f3559]/20 p-6 flex flex-col justify-between backdrop-blur-xl overflow-hidden animate-float">
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0f3559]/10 flex items-center justify-center">
                      <BarChart3 className="text-[#0f3559] w-5 h-5" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">Campaign Results</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#0f3559] text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f3559] animate-pulse"></span>
                    LIVE
                  </div>
                </div>

                {/* ROAS big number */}
                <div className="text-center space-y-1">
                  <div className="text-slate-500 text-xs uppercase tracking-widest">Return on Ad Spend</div>
                  <div className="text-6xl font-black text-[#0f3559] font-['Space_Grotesk']">8.4x</div>
                  <div className="text-[#0f3559] text-sm font-medium">↑ ROAS</div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Revenue', value: '$124K', color: '#0f3559' },
                    { label: 'Ad Spend', value: '$14.7K', color: '#0f3559' },
                    { label: 'Conversions', value: '2,841', color: '#0f3559' },
                    { label: 'CTR', value: '4.7%', color: '#0f3559' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-slate-500">{stat.label}</div>
                      <div className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Subtle corner decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#0f3559]/10 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#0f3559]/10 blur-xl"></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 sm:top-4 sm:right-0 lg:-right-8 glass-card px-3 py-2 rounded-xl border border-[#0f3559]/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Rocket className="text-[#0f3559] w-5 h-5" />
                <div>
                  <div className="text-[#0f3559] text-sm font-bold">+312% ROI</div>
                  <div className="text-slate-500 text-xs">E-commerce Client</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-0 lg:-left-10 glass-card px-3 py-2 rounded-xl border border-[#0f3559]/30 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <DollarSign className="text-[#0f3559] w-5 h-5" />
                <div>
                  <div className="text-[#0f3559] text-sm font-bold">$2M+ Managed</div>
                  <div className="text-slate-500 text-xs">Total Ad Spend</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 lg:mt-4">
          <button
            onClick={() => handleScroll('stats')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-[#0f3559] transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-mono">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <div className="w-1.5 h-2 rounded-full bg-current animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}