import { useEffect, useRef, useState } from 'react';
import {
  Globe, Search, Video, BarChart3, SearchCode, Tag, Flame, Palette,
  TrendingUp, Mail, ShoppingCart, Layers, Target, FlaskConical, Lightbulb, Smartphone, User, MapPin
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, any> = {
  'meta': Globe,
  'google': Search,
  'tiktok': Video,
  'analytics': BarChart3,
  'pixel': SearchCode,
  'tag': Tag,
  'hotjar': Flame,
  'creative': Palette,
  'research': TrendingUp,
  'email': Mail,
  'ecommerce': ShoppingCart,
  'funnels': Layers,
  'performance': Target,
  'test': FlaskConical,
  'strategic': Lightbulb,
  'mobile': Smartphone
};

const skills = [
  { name: 'Facebook & Instagram Ads', nameAr: 'إعلانات فيسبوك وانستجرام', level: 95, color: '#0f3559' },
  { name: 'Google Ads (Search & Display)', nameAr: 'إعلانات جوجل (بحث وشبكة إعلانية)', level: 90, color: '#0f3559' },
  { name: 'TikTok Ads', nameAr: 'إعلانات تيك توك', level: 85, color: '#0f3559' },
  { name: 'Conversion Rate Optimization', nameAr: 'تحسين نسبة التحويل (CRO)', level: 88, color: '#0f3559' },
  { name: 'Analytics & Data Analysis', nameAr: 'تحليل البيانات (Analytics)', level: 92, color: '#0f3559' },
  { name: 'Funnel Strategy & Design', nameAr: 'استراتيجية وبناء مسارات البيع (Funnels)', level: 87, color: '#0f3559' },
];

const tools = [
  { name: 'Meta Ads Manager', nameAr: 'مدير إعلانات ميتا', icon: 'meta', category: 'Advertising', categoryAr: 'تسويق' },
  { name: 'Google Ads', nameAr: 'إعلانات جوجل', icon: 'google', category: 'Advertising', categoryAr: 'تسويق' },
  { name: 'TikTok Ads Manager', nameAr: 'إعلانات تيك توك', icon: 'tiktok', category: 'Advertising', categoryAr: 'تسويق' },
  { name: 'Google Analytics 4', nameAr: 'إحصاءات جوجل', icon: 'analytics', category: 'Analytics', categoryAr: 'تحليلات' },
  { name: 'Meta Pixel', nameAr: 'بيكسل ميتا', icon: 'pixel', category: 'Tracking', categoryAr: 'تتبع' },
  { name: 'Google Tag Manager', nameAr: 'مربط علامات جوجل', icon: 'tag', category: 'Tracking', categoryAr: 'تتبع' },
  { name: 'Hotjar', nameAr: 'هوتجار', icon: 'hotjar', category: 'Analytics', categoryAr: 'تحليلات' },
  { name: 'Canva & Figma', nameAr: 'كانفا وفيجما', icon: 'creative', category: 'Creative', categoryAr: 'تصميم' },
  { name: 'Semrush', nameAr: 'سمرش', icon: 'research', category: 'Research', categoryAr: 'بحث' },
  { name: 'Klaviyo', nameAr: 'كلافيو', icon: 'email', category: 'Email', categoryAr: 'إيميل' },
  { name: 'Shopify', nameAr: 'شوبيفاي', icon: 'ecommerce', category: 'E-commerce', categoryAr: 'متاجر إلكترونية' },
  { name: 'ClickFunnels', nameAr: 'كليك فانلز', icon: 'funnels', category: 'Funnels', categoryAr: 'مسار بيع' },
];

const highlights = [
  { icon: 'performance', title: 'Performance-First', titleAr: 'الأداء والنتائج أولاً', desc: 'Every decision is backed by data and ROI focused', descAr: 'كل قراراتي مبنية على الأرقام بهدف تحقيق أقصى عائد واستثمار (ROI).' },
  { icon: 'test', title: 'Test & Scale', titleAr: 'اختبر وتوسع باستمرار', desc: 'Continuous A/B testing to find winning creatives and audiences', descAr: 'تطبيق اختبارات A/B مستمرة لاكتشاف أفضل الإعلانات والجمهور المثالي للوصول.' },
  { icon: 'strategic', title: 'Strategic Thinking', titleAr: 'تفكير استراتيجي شامل', desc: 'Full-funnel strategy from awareness to conversion', descAr: 'استراتيجية مسار تحويل كاملة من مرحلة الوعي والانتباه إلى تحويل العميل لمشتري.' },
  { icon: 'mobile', title: 'Multi-Platform', titleAr: 'خبير بمنصات متعددة', desc: 'Expert across all major paid advertising platforms', descAr: 'بحتفظ بمستوى عالي من الاحترافية على جميع وأهم منصات الإعلانات المدفوعة.' },
];

export default function About() {
  const { language } = useLanguage();
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSkillsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-bg-base">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0f3559]/3 to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <User className="w-4 h-4" /> {language === 'ar' ? 'من أنا' : 'About Me'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-base font-['Space_Grotesk'] mb-4">
            {language === 'ar' ? 'العقل المخطط وراء ' : 'The Strategist Behind '}
            <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {language === 'ar' ? 'نمو أعمالك' : 'Your Growth'}
            </span>
          </h2>
        </div>

        {/* Bio + Highlights */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Bio */}
          <div className="space-y-6 reveal-left">
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0f3559] to-[#0f3559] p-0.5">
                  <div className="w-full h-full rounded-2xl bg-bg-base flex items-center justify-center text-3xl">
                    <User className="text-[#0f3559] w-10 h-10" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0f3559] border-2 border-bg-base animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-base font-['Space_Grotesk']">Ahmed Hassan</h3>
                <p className="text-[#0f3559] font-medium">{language === 'ar' ? 'أخصائي ومشتري إعلانات وتسويق رقمي' : 'Media Buyer & Digital Marketing Specialist'}</p>
                <div className="flex items-center gap-1 mt-1 text-text-muted text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#0f3559]" /> {language === 'ar' ? 'الإسماعيلية، مصر — متاح للعمل السحابي عالمياً' : 'Ismailia, Egypt — Available Worldwide'}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-text-muted leading-relaxed">
              {language === 'ar' ? (
                <>
                  <p>أنا متخصص ومشتري إعلانات أركز بشدة على تحقيق النتائج، ولدي خبرة تتجاوز العام في التخطيط وإطلاق الحملات الإعلانية وتحسينها عبر عدة منصات. أتخصص بشكل أساسي في بناء وتصميم استراتيجيات مبنية على بيانات دقيقة تضاعف العوائد (ROI) بأقل تكلفة ممكنة للاستحواذ.</p>
                  <p>عملت في مجالات ومتاجر إلكترونية مختلفة، وتمكنت من إدارة الميزانيات بكفاءة مع استمرار اختبار وتجربة كل أنواع التصميمات والجمهور المستهدف ومسارات التحويل (Funnels) بمهارة عالية. خبرتي تتفرع لتشمل قراءة الحملات بعمق، اختيار الجمهور الأمثل، وتطبيق اختبارات A/B واحترافية تحسين الأداء العام.</p>
                  <p>شغفي دائمًا هو تحويل البيانات والأرقام الميتة إلى استراتيجيات وخطوات حية وعملية تساعد الشركات والعلامات التجارية على التطور وتكبير أرباحها بشكل ملحوظ.</p>
                </>
              ) : (
                <>
                  <p>I’m a results-driven Media Buyer with over 1 year of hands-on experience in planning, launching, and optimizing paid advertising campaigns across multiple platforms. I specialize in creating data-driven strategies that maximize ROI, reduce cost per acquisition, and scale profitable campaigns.</p>
                  <p>I’ve worked on different niches, managing budgets efficiently while continuously testing creatives, audiences, and funnels to achieve the best performance. My expertise includes campaign analysis, audience targeting, A/B testing, and performance optimization.</p>
                  <p>I’m passionate about turning data into actionable insights and helping brands grow through smart, strategic advertising.</p>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              {(language === 'ar' 
                ? ['إدارة الإعلانات', 'إعلانات السوشيال', 'PPC', 'تحليل البيانات', 'CRO', 'هندسة الـ Funnels']
                : ['Media Buying', 'Paid Social', 'PPC', 'Data Analytics', 'CRO', 'Funnel Building']
              ).map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#0f3559]/20 text-[#0f3559] bg-[#0f3559]/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-right">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="card-hover-cyan glass-card rounded-2xl p-6 border border-[#0f3559]/10 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4">
                  {(() => {
                    const IconComp = iconMap[item.icon];
                    return IconComp ? <IconComp className="w-8 h-8 text-[#0f3559]" /> : null;
                  })()}
                </div>
                <h4 className="text-text-base font-bold mb-2 font-['Space_Grotesk']">{language === 'ar' ? item.titleAr : item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{language === 'ar' ? item.descAr : item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="mb-24">
          <div className="text-center mb-12 reveal">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-base font-['Space_Grotesk'] mb-2">
              {language === 'ar' ? 'مجالات ' : 'Core '}
              <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {language === 'ar' ? 'الخبرة السطوة' : 'Expertise'}
              </span>
            </h3>
            <p className="text-text-muted">{language === 'ar' ? 'احترافية واثقة في المنصات بُنيت على آلاف الساعات من تشغيل ومتابعة الحملات الفعلية' : 'Platform mastery built through thousands of hours of real campaign management'}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={skill.name} className="reveal space-y-2" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <span className="text-text-base font-medium">{language === 'ar' ? skill.nameAr : skill.name}</span>
                  <span className="font-bold text-sm" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill ${skillsVisible ? 'animate' : ''}`}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                      width: `${skill.level}%`,
                      boxShadow: `0 0 8px ${skill.color}60`,
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="reveal">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-base font-['Space_Grotesk'] mb-2">
              {language === 'ar' ? 'أفضل وأهم ' : 'Tools & '}
              <span className="neon-text-cyan">{language === 'ar' ? 'المنصات' : 'Platforms'}</span>
            </h3>
            <p className="text-text-muted">{language === 'ar' ? 'برامجي وأدواتي التي أعتمد عليها في إطلاق ومتابعة الحملات وتحليل النتائج' : 'My tech stack for campaign management, analytics, and optimization'}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="card-hover-cyan glass-card rounded-xl p-4 border border-[#0f3559]/10 text-center group cursor-default"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {(() => {
                    const IconComp = iconMap[tool.icon];
                    return IconComp ? <IconComp className="w-6 h-6 text-[#0f3559]" /> : null;
                  })()}
                </div>
                <div className="text-text-base text-xs font-medium leading-tight mb-1">{language === 'ar' ? tool.nameAr || tool.name : tool.name}</div>
                <div className="text-[#0f3559] text-xs opacity-60">{language === 'ar' ? tool.categoryAr || tool.category : tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}