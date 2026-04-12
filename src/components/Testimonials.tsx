import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Founder',
    company: 'Luxe Fashion Co.',
    avatar: '👩',
    rating: 5,
    platform: 'Facebook Ads',
    result: '7.4x ROAS',
    text: "Ahmed completely transformed our Facebook advertising. In 4 months, we went from a struggling 1.8x ROAS to an incredible 7.4x. He's not just a media buyer — he's a true growth partner who understands business, not just ads. The ROI speaks for itself.",
    color: '#00f5ff',
  },
  {
    name: 'Mark D.',
    role: 'CEO',
    company: 'TechFlow SaaS',
    avatar: '👨‍💼',
    rating: 5,
    platform: 'Google Ads',
    result: '-68% Cost Per Lead',
    text: "We'd been burning budget on Google Ads for months with terrible lead quality. Ahmed restructured everything — our CPL dropped from $280 to $89 and the leads actually converted. He knew things about Google's algorithm I'd never heard from any other agency.",
    color: '#bf00ff',
  },
  {
    name: 'Layla M.',
    role: 'Co-Founder',
    company: 'FitPulse Supplements',
    avatar: '👩‍💻',
    rating: 5,
    platform: 'TikTok & Facebook Ads',
    result: '$85K in Month 3',
    text: "We launched our brand from zero with Ahmed's help. The TikTok + Facebook strategy was brilliant — we hit $85K in revenue in month 3 with a 6.2x ROAS. He has an incredible eye for what creatives will perform before they even go live. Highly recommend!",
    color: '#39ff14',
  },
  {
    name: 'Omar A.',
    role: 'Marketing Director',
    company: 'EduArabic Platform',
    avatar: '👨‍🎓',
    rating: 5,
    platform: 'Google & Facebook Ads',
    result: '+1,100% Enrollments',
    text: "Ahmed grew our course enrollments from 200 to 2,400 per month. What impressed me most was his understanding of the Arabic market nuances — something most marketers miss entirely. He's meticulous, data-driven, and genuinely invested in your success.",
    color: '#00f5ff',
  },
  {
    name: 'Nour R.',
    role: 'Real Estate Agent',
    company: 'Prime Properties Ismailia',
    avatar: '🏠',
    rating: 5,
    platform: 'Facebook Ads',
    result: '240+ Leads/Month',
    text: "Before working with Ahmed, we relied entirely on referrals. Now we get 240+ qualified leads every month at $8.50 per lead. The quiz funnel he built pre-qualifies everyone so our sales team only speaks to serious buyers. Absolutely game-changing.",
    color: '#bf00ff',
  },
  {
    name: 'Karim S.',
    role: 'Owner',
    company: 'Spice Route Restaurant Group',
    avatar: '🍽️',
    rating: 5,
    platform: 'Local Facebook & Google Ads',
    result: '+1,133% Online Orders',
    text: "I was skeptical that social media ads could really drive restaurant sales. Ahmed proved me completely wrong — we went from 150 online orders to 1,850 per month. The time-targeted, geo-specific campaigns were genius. Best investment we've made in marketing.",
    color: '#39ff14',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const animRef = useRef<number>(0);
  const speedRef = useRef(0.5);

  useEffect(() => {
    const animate = () => {
      if (!isPaused && trackRef.current) {
        setOffset(prev => {
          const cardWidth = 380 + 24; // card width + gap
          const total = testimonials.length * cardWidth;
          const next = prev + speedRef.current;
          return next >= total ? 0 : next;
        });
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current !== undefined) cancelAnimationFrame(animRef.current); };
  }, [isPaused]);

  const allTestimonials = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-[#080d18]">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#bf00ff]/5 to-transparent blur-3xl"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bf00ff]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#bf00ff]/30 bg-[#bf00ff]/5 text-sm text-[#bf00ff] font-mono mb-4">
            ⭐ Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] mb-4">
            What Clients <span className="neon-text-purple">Say About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't take my word for it — hear directly from the clients who've seen their businesses transform
            through strategic paid advertising.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%', label: 'Would Recommend' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="font-bold text-white">{badge.value}</span>
                <span className="text-slate-500 text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling testimonials */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#080d18] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#080d18] to-transparent pointer-events-none"></div>

          <div
            ref={trackRef}
            className="flex gap-6 py-4 px-8"
            style={{ transform: `translateX(-${offset}px)`, willChange: 'transform' }}
          >
            {allTestimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="flex-shrink-0 w-[360px] sm:w-[380px] rounded-2xl border p-6 space-y-4 transition-all duration-300 hover:scale-[1.02] cursor-default"
                style={{
                  borderColor: `${t.color}20`,
                  backgroundColor: 'rgba(13,17,23,0.9)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2"
                      style={{ borderColor: `${t.color}40`, backgroundColor: `${t.color}10` }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.name}</div>
                      <div className="text-slate-500 text-sm">{t.role}, {t.company}</div>
                    </div>
                  </div>
                  <div
                    className="px-2.5 py-1 rounded-lg text-xs font-bold"
                    style={{ backgroundColor: `${t.color}15`, color: t.color }}
                  >
                    {t.result}
                  </div>
                </div>

                <StarRating rating={t.rating} />

                <p className="text-slate-400 text-sm leading-relaxed">"{t.text}"</p>

                <div className="flex items-center gap-2 text-xs text-slate-600 border-t border-white/5 pt-3">
                  <span>📱</span>
                  <span>{t.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <p className="text-slate-400 mb-4">Ready to join the list of satisfied clients?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#bf00ff] to-[#00f5ff] text-[#050810] font-bold text-base hover:shadow-[0_0_30px_rgba(191,0,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Start Your Success Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
