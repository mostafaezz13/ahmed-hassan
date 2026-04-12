import { Globe, Search, Video, Target, Layers, PieChart, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, any> = {
  'meta': Globe,
  'google': Search,
  'tiktok': Video,
  'cro': Target,
  'funnel': Layers,
  'analytics': PieChart
};

const services = [
  {
    icon: 'meta',
    title: 'Facebook & Instagram Ads',
    titleAr: 'إعلانات فيسبوك وانستجرام',
    shortTitle: 'Meta Ads',
    description: 'Full-funnel Facebook and Instagram advertising campaigns engineered for maximum ROAS. From audience research and creative strategy to A/B testing and continuous optimization — I handle everything.',
    descriptionAr: 'حملات إعلانية متكاملة مصممة خصيصًا لفيسبوك وانستجرام لتحقيق أقصى عائد (ROAS). بداية من دراسة الجمهور، واختبار الإعلانات، وحتي التحسين المستمر — باختصار هتكفل بجميع التفاصيل.',
    features: ['Audience Research & Targeting', 'Creative Strategy & Copy', 'A/B Testing & Optimization', 'Retargeting Campaigns', 'Lookalike Audiences', 'Performance Reporting'],
    featuresAr: ['أبحاث واستهداف الجمهور', 'استراتيجية ونسخ الإعلانات', 'اختبارات A/B وتحسين', 'حملات إعادة استهداف', 'الجماهير المشابهة (Lookalike)', 'تقارير أداء واضحة'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: true,
  },
  {
    icon: 'google',
    title: 'Google Ads Management',
    titleAr: 'إعلانات جوجل الشاملة',
    shortTitle: 'Google Ads',
    description: 'Precision-targeted Google Search, Display, Shopping, and YouTube campaigns that capture high-intent customers exactly when they\'re ready to buy — maximizing every dollar of your budget.',
    descriptionAr: 'حملات بحث، عرض، وتسوّق عبر جوجل مدعومة ويوتيوب، لضمان استهداف الأشخاص الذين يبحثون بنية الشراء العالية — لنزيد من فاعلية كل دولار تُنفقه.',
    features: ['Search Campaign Strategy', 'Shopping Ads Management', 'YouTube Video Ads', 'Display & Remarketing', 'Keyword Research & Bidding', 'Quality Score Optimization'],
    featuresAr: ['استراتيجيات بحث (Search)', 'حملات تسوق (Shopping)', 'إعلانات فيديو يوتيوب', 'إعلانات العرض (Display)', 'كلمات مفتاحية وعروض أسعار', 'تحسين نقاط الجودة (QS)'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'tiktok',
    title: 'TikTok Ads Campaigns',
    titleAr: 'إعلانات تيك توك',
    shortTitle: 'TikTok Ads',
    description: 'Tap into TikTok\'s explosive growth with native-style video ad campaigns designed to stop the scroll and drive action. Perfect for e-commerce brands targeting younger, high-spending audiences.',
    descriptionAr: 'استفد من تفاعل ونمو تيك توك بحملات فيديو تفاعلية صُممت لتلفت انتباه المستخدم وتدفعه للشراء الفوري. مثالية لمتاجر التجارة الإلكترونية ولاستهداف جمهور متفاعل بشدة.',
    features: ['In-Feed Video Ads', 'TopView & Brand Takeover', 'Spark Ads Strategy', 'Creator Collaboration', 'Pixel Integration', 'TikTok Shop Campaigns'],
    featuresAr: ['إعلانات فيديو داخل الفيد', 'TopView & Takeover', 'Spark Ads', 'تعاون مع صناع محتوى', 'ربط البيكسل المتقدم', 'إعلانات TikTok Shop'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'cro',
    title: 'Conversion Rate Optimization',
    titleAr: 'تحسين نسبة التحويل (CRO)',
    shortTitle: 'CRO',
    description: 'Maximize the value of your existing traffic by systematically testing and optimizing your landing pages, checkout flows, and sales funnels to dramatically increase conversion rates.',
    descriptionAr: 'ضاعف من مبيعاتك وأرباحك من خلال نفس الترافيك بفضل مراجعة الصفحات واختبار أولوية الأزرار وتجربة المستخدم لتحفيزه على الشراء وإكمال الكارت بشكل أسهل.',
    features: ['Landing Page Audits', 'A/B & Multivariate Testing', 'Heatmap Analysis', 'UX & Copy Optimization', 'Checkout Funnel Optimization', 'Post-Purchase Flows'],
    featuresAr: ['مراجعة الصفحات المقصودة', 'اختبارات A/B دورية', 'تحليل خريطة تفاعل المستخدم', 'تعديل وتهيئة تجربة المستخدم', 'تحسين الـ Checkout', 'نظام بعد إتمام الشراء'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'funnel',
    title: 'Funnel Strategy & Build',
    titleAr: 'استراتيجيات مسارات البيع (Funnels)',
    shortTitle: 'Sales Funnels',
    description: 'Design and build complete marketing funnels that take cold prospects from awareness to raving customers — including lead magnets, tripwires, core offers, upsells, and retention sequences.',
    descriptionAr: 'تصميم وبناء نظام مسار مبيعات كامل لفرز المهتمين وتحويلهم إلى عملاء أوفياء — بدايةً من تقديم عرض مجاني إلي تطوير المبيعات والمنتجات الأساسية وUpsells.',
    features: ['Funnel Architecture Design', 'Lead Magnet Strategy', 'Email Sequence Integration', 'Upsell & Cross-sell Flows', 'Webinar Funnel Setup', 'ROI Forecasting'],
    featuresAr: ['تصميم هيكل وأسس المسار', 'استراتيجيات مغناطيس العملاء', 'سلسلة إيميلات مربوطة', 'أنظمة المبيعات Upsell / Cross', 'استراتيجية Webinars', 'التنبؤ بالعوائد'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'analytics',
    title: 'Analytics & Reporting',
    titleAr: 'التحليل المتقدم وتقارير الأداء',
    shortTitle: 'Analytics',
    description: 'Set up bulletproof tracking, build custom dashboards, and deliver clear, actionable reports that show you exactly where your money is going and how much it\'s making — no more guesswork.',
    descriptionAr: 'إنشاء لوحات معلومات وإعداد تقارير شاملة وواضحة لتتمكن من تتبع كل خطوة، ومعرفة أين يتم صرف كل دولار بشفافية وما هو المردود الذي تجنيه بدقة وكيف ترفع مبيعاتك.',
    features: ['GA4 Setup & Configuration', 'Custom Dashboard Build', 'Pixel & Tag Management', 'Attribution Modeling', 'Weekly Performance Reports', 'Data-Driven Insights'],
    featuresAr: ['ضبط إعدادات Google Analytics', 'لوحة تحكم إحصائية حقيقية', 'ربط الـ Pixel وتطوير المتابعة', 'طراز دقيق لمعرفة مصدر البيع', 'تقارير أداء مسجلة ودورية', 'نظرات ورؤى بيعية واضحة'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
];

export default function Services() {
  const { language } = useLanguage();

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-bg-base">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#0f3559]/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#0f3559]/5 to-transparent blur-3xl"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <Wrench className="w-4 h-4" /> {language === 'ar' ? 'ما أقدمه' : 'What I Offer'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-base font-['Space_Grotesk'] mb-4">
            {language === 'ar' ? 'خدمات تضاعف ' : 'Services That '}
            <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {language === 'ar' ? 'أرباحك ومبيعاتك' : 'Drive Revenue'}
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'من تخطيط الحملات وبنائها حتى مسارات البيع المتقدمة والتحليل، أطرح لك كل خبراتي وما حققته بشفافية لا مثيل لها.'
              : 'From campaign setup to full-funnel strategy — I deliver comprehensive digital marketing solutions that consistently outperform industry benchmarks.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal relative rounded-2xl border p-6 sm:p-7 group cursor-default overflow-hidden transition-all duration-500"
              style={{
                backgroundColor: service.bgColor,
                borderColor: service.borderColor,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold bg-[#0f3559]/20 text-[#0f3559] border border-[#0f3559]/30">
                  {language === 'ar' ? 'الأكثر طلبًا' : 'Most Popular'}
                </div>
              )}

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)` }}
              ></div>

              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              ></div>

              <div className="relative z-10 space-y-5">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    {(() => {
                      const IconComp = iconMap[service.icon];
                      return IconComp ? <IconComp className="w-7 h-7 text-[#0f3559]" /> : null;
                    })()}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-mono mb-0.5" style={{ color: service.color }}>
                      {service.shortTitle}
                    </div>
                    <h3 className="text-lg font-bold text-text-base font-['Space_Grotesk'] leading-tight">
                      {language === 'ar' ? service.titleAr : service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {language === 'ar' ? service.descriptionAr : service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {(language === 'ar' ? service.featuresAr : service.features).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                  <svg className={`w-4 h-4 ${language === 'ar' && 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-text-muted mb-6 text-lg">
            {language === 'ar' ? 'محتار ومش عارف أي خدمة مناسبة لشغلك أكثر؟ ' : 'Not sure which service is right for you? '}
            <span className="text-text-base font-semibold">{language === 'ar' ? 'خلينا نتكلم ونقيم الوضع مجانًا.' : 'Let\'s talk for free.'}</span>
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0f3559] to-[#0f3559] text-text-base font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_40px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105"
          >
            {language === 'ar' ? 'احجز مكالمة استشارية مجانية' : 'Book a Free Strategy Call'}
            <svg className={`w-5 h-5 ${language === 'ar' && 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}