import { useEffect, useRef, useState } from 'react';
import { Wallet, TrendingUp, Rocket, Star, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  labelAr: string;
  description: string;
  descriptionAr: string;
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
    value: 50,
    suffix: 'K+',
    prefix: '',
    label: 'Impressions Delivered',
    labelAr: 'عدد مرات الظهور',
    description: 'Total impressions generated across all advertising platforms',
    descriptionAr: 'إجمالي عدد مرات ظهور الإعلانات عبر جميع المنصات',
    icon: 'wallet',
    color: '#0f3559',
  },
  {
    value: 120,
    suffix: '%',
    prefix: '+',
    label: 'Average ROAS Achieved',
    labelAr: 'متوسط العائد (ROAS)',
    description: 'Return on ad spend delivered to clients consistently',
    descriptionAr: 'العائد الإعلاني الذي أُحققّه باستمرار',
    icon: 'trending',
    color: '#0f3559',
  },
  {
    value: 5,
    suffix: '+',
    prefix: '',
    label: 'Campaigns Launched',
    labelAr: 'حملات تم إطلاقها',
    description: 'High-performing campaigns across Facebook, Google & TikTok',
    descriptionAr: 'حملات عالية الجودة على فيسبوك وجوجل وتيك توك',
    icon: 'rocket',
    color: '#0f3559',
  },
  {
    value: 100,
    suffix: '%',
    prefix: '',
    label: 'Client Retention Rate',
    labelAr: 'نسبة الاحتفاظ بالعملاء',
    description: 'Clients who return for continued marketing partnerships',
    descriptionAr: 'العملاء المستمرون في الشراكة طويلة المدى',
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
  const { language } = useLanguage();
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
    <section id="stats" ref={sectionRef} className="relative py-20 overflow-hidden bg-bg-base">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-bg-alt to-bg-base"></div>
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <BarChart3 className="w-4 h-4" /> {language === 'ar' ? 'مؤشرات الأداء' : 'Performance Metrics'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-base font-['Space_Grotesk'] mb-4">
            {language === 'ar' ? 'أرقام ' : 'Numbers That '}
            <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {language === 'ar' ? 'تتحدث' : 'Speak Louder'}
            </span>
            {language === 'ar' ? ' أكثر من الكلمات' : ' Than Words'}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {language === 'ar'
              ? 'كل حملة مبنية على إحصائيات حقيقية، أُحسّنها باستمرار لضمان مضاعفة أرباح عملك وعائد استثمارك.'
              : 'Every campaign is backed by data, optimized for performance, and engineered to maximize your return on investment.'}
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${stat.color}10, transparent 70%)` }}>
              </div>

              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${stat.color}15` }}>
                  {(() => {
                    const IconComp = iconMap[stat.icon];
                    return IconComp ? <IconComp className="w-6 h-6 text-[#0f3559]" /> : null;
                  })()}
                </div>

                <div className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] flex" dir="ltr">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    color={stat.color}
                    inView={inView}
                  />
                </div>

                <div>
                  <div className="text-text-base font-semibold text-base mb-1">{language === 'ar' ? stat.labelAr : stat.label}</div>
                  <div className="text-text-muted text-sm leading-relaxed">{language === 'ar' ? stat.descriptionAr : stat.description}</div>
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
                <h3 className="text-xl sm:text-2xl font-bold text-text-base font-['Space_Grotesk'] mb-2">
                  {language === 'ar' 
                    ? 'هل أنت مستعد لتحقيق نتائج مشابهة لشركتك؟' 
                    : 'Ready to see these results for your business?'}
                </h3>
                <p className="text-text-muted">
                  {language === 'ar' 
                    ? 'خلينا نبدأ بتطوير خطة إعلانات مخصصة ومتوافقة مع أهدافك.' 
                    : "Let's build a campaign strategy tailored to your goals."}
                </p>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-shrink-0 px-8 py-4 rounded-xl bg-[#0f3559] text-text-base font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_30px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                {language === 'ar' ? 'اطلب فحص ومراجعة مجانية' : 'Get a Free Audit'} 
                <span className={language === 'ar' ? 'inline-block mr-2 rotate-180' : 'inline-block ml-2'}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
