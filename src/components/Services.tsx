import { Globe, Search, Video, Target, Layers, PieChart, Wrench } from 'lucide-react';

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
    shortTitle: 'Meta Ads',
    description:
      'Full-funnel Facebook and Instagram advertising campaigns engineered for maximum ROAS. From audience research and creative strategy to A/B testing and continuous optimization — I handle everything.',
    features: ['Audience Research & Targeting', 'Creative Strategy & Copy', 'A/B Testing & Optimization', 'Retargeting Campaigns', 'Lookalike Audiences', 'Performance Reporting'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: true,
  },
  {
    icon: 'google',
    title: 'Google Ads Management',
    shortTitle: 'Google Ads',
    description:
      'Precision-targeted Google Search, Display, Shopping, and YouTube campaigns that capture high-intent customers exactly when they\'re ready to buy — maximizing every dollar of your budget.',
    features: ['Search Campaign Strategy', 'Shopping Ads Management', 'YouTube Video Ads', 'Display & Remarketing', 'Keyword Research & Bidding', 'Quality Score Optimization'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'tiktok',
    title: 'TikTok Ads Campaigns',
    shortTitle: 'TikTok Ads',
    description:
      'Tap into TikTok\'s explosive growth with native-style video ad campaigns designed to stop the scroll and drive action. Perfect for e-commerce brands targeting younger, high-spending audiences.',
    features: ['In-Feed Video Ads', 'TopView & Brand Takeover', 'Spark Ads Strategy', 'Creator Collaboration', 'Pixel Integration', 'TikTok Shop Campaigns'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'cro',
    title: 'Conversion Rate Optimization',
    shortTitle: 'CRO',
    description:
      'Maximize the value of your existing traffic by systematically testing and optimizing your landing pages, checkout flows, and sales funnels to dramatically increase conversion rates.',
    features: ['Landing Page Audits', 'A/B & Multivariate Testing', 'Heatmap Analysis', 'UX & Copy Optimization', 'Checkout Funnel Optimization', 'Post-Purchase Flows'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'funnel',
    title: 'Funnel Strategy & Build',
    shortTitle: 'Sales Funnels',
    description:
      'Design and build complete marketing funnels that take cold prospects from awareness to raving customers — including lead magnets, tripwires, core offers, upsells, and retention sequences.',
    features: ['Funnel Architecture Design', 'Lead Magnet Strategy', 'Email Sequence Integration', 'Upsell & Cross-sell Flows', 'Webinar Funnel Setup', 'ROI Forecasting'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
  {
    icon: 'analytics',
    title: 'Analytics & Reporting',
    shortTitle: 'Analytics',
    description:
      'Set up bulletproof tracking, build custom dashboards, and deliver clear, actionable reports that show you exactly where your money is going and how much it\'s making — no more guesswork.',
    features: ['GA4 Setup & Configuration', 'Custom Dashboard Build', 'Pixel & Tag Management', 'Attribution Modeling', 'Weekly Performance Reports', 'Data-Driven Insights'],
    color: '#0f3559',
    bgColor: 'rgba(15, 53, 89, 0.05)',
    borderColor: 'rgba(15, 53, 89, 0.15)',
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-[#080d18]">
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
            <Wrench className="w-4 h-4" /> What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] mb-4">
            Services That <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Drive Revenue
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From campaign setup to full-funnel strategy — I deliver comprehensive digital marketing solutions
            that consistently outperform industry benchmarks.
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
                  Most Popular
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
                    <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
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
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-slate-400 mb-6 text-lg">
            Not sure which service is right for you?{' '}
            <span className="text-white font-semibold">Let's talk for free.</span>
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0f3559] to-[#0f3559] text-white font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_40px_rgba(15,53,89,0.6)] transition-all duration-300 hover:scale-105"
          >
            Book a Free Strategy Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}