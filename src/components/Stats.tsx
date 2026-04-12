import { useEffect, useRef, useState } from 'react';
import { Wallet, TrendingUp, Rocket, Star, BarChart3 } from 'lucide-react';


interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: string; // Keep as string but map it to Lucide component
  color: string;
}

const iconMap: Record<string, any> = {
  'wallet': Wallet,
  'trending': TrendingUp,
  'rocket': Rocket,
  'star': Star
};

const stats: StatItem[] = [
  {
    value: 2,
    suffix: 'M+',
    prefix: '$',
    label: 'Ad Spend Managed',
    description: 'Total paid media budget managed across all platforms',
    icon: 'wallet',
    color: '#0f3559',
  },
  {
    value: 850,
    suffix: '%',
    prefix: '+',
    label: 'Average ROAS Achieved',
    description: 'Return on ad spend delivered to clients consistently',
    icon: 'trending',
    color: '#0f3559',
  },
  {
    value: 50,
    suffix: '+',
    prefix: '',
    label: 'Campaigns Launched',
    description: 'High-performing campaigns across Facebook, Google & TikTok',
    icon: 'rocket',
    color: '#0f3559',
  },
  {
    value: 98,
    suffix: '%',
    prefix: '',
    label: 'Client Retention Rate',
    description: 'Clients who return for continued marketing partnerships',
    icon: 'star',
    color: '#0f3559',
  },
];

function AnimatedCounter({ value, suffix, prefix = '', color, inView }: {
  value: number; suffix: string; prefix?: string; color: string; inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [inView, value]);

  return (
    <span style={{ color }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="relative py-20 overflow-hidden bg-[#050810]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#080d18] to-[#050810]"></div>
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <BarChart3 className="w-4 h-4" /> Performance Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] mb-4">
            Numbers That{' '}
            <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Speak Louder
            </span>
            {' '}Than Words
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every campaign is backed by data, optimized for performance, and engineered to maximize your return on investment.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal card-hover-cyan glass-card rounded-2xl p-6 border border-[#0f3559]/10 relative overflow-hidden group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${stat.color}10, transparent 70%)` }}>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}>
              </div>

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${stat.color}15` }}>
                  {(() => {
                    const IconComp = iconMap[stat.icon];
                    return IconComp ? <IconComp className="w-6 h-6 text-[#0f3559]" /> : null;
                  })()}
                </div>

                {/* Counter */}
                <div className="text-4xl sm:text-5xl font-black font-['Space_Grotesk']">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    color={stat.color}
                    inView={inView}
                  />
                </div>

                {/* Label */}
                <div>
                  <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 reveal">
          <div className="relative rounded-2xl border border-[#0f3559]/20 bg-gradient-to-r from-[#0f3559]/5 to-[#0f3559]/5 p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#0f3559]/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#0f3559]/5 blur-3xl"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
                  Ready to see these results for your business?
                </h3>
                <p className="text-slate-400">Let's build a campaign strategy tailored to your goals.</p>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-shrink-0 px-8 py-4 rounded-xl bg-[#0f3559] text-white font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_30px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Get a Free Audit →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}