import { useEffect, useRef, useState } from 'react';
import {
  Globe,
  Search,
  Video,
  BarChart3,
  SearchCode,
  Tag,
  Flame,
  Palette,
  TrendingUp,
  Mail,
  ShoppingCart,
  Layers,
  Target,
  FlaskConical,
  Lightbulb,
  Smartphone,
  User,
  MapPin
} from 'lucide-react';

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
  { name: 'Facebook & Instagram Ads', level: 95, color: '#0f3559' },
  { name: 'Google Ads (Search & Display)', level: 90, color: '#0f3559' },
  { name: 'TikTok Ads', level: 85, color: '#0f3559' },
  { name: 'Conversion Rate Optimization', level: 88, color: '#0f3559' },
  { name: 'Analytics & Data Analysis', level: 92, color: '#0f3559' },
  { name: 'Funnel Strategy & Design', level: 87, color: '#0f3559' },
];

const tools = [
  { name: 'Meta Ads Manager', icon: 'facebook', category: 'Advertising' },
  { name: 'Google Ads', icon: 'google', category: 'Advertising' },
  { name: 'TikTok Ads Manager', icon: 'tiktok', category: 'Advertising' },
  { name: 'Google Analytics 4', icon: 'analytics', category: 'Analytics' },
  { name: 'Meta Pixel', icon: 'pixel', category: 'Tracking' },
  { name: 'Google Tag Manager', icon: 'tag', category: 'Tracking' },
  { name: 'Hotjar', icon: 'hotjar', category: 'Analytics' },
  { name: 'Canva & Figma', icon: 'creative', category: 'Creative' },
  { name: 'Semrush', icon: 'research', category: 'Research' },
  { name: 'Klaviyo', icon: 'email', category: 'Email' },
  { name: 'Shopify', icon: 'ecommerce', category: 'E-commerce' },
  { name: 'ClickFunnels', icon: 'funnels', category: 'Funnels' },
];

const highlights = [
  { icon: 'performance', title: 'Performance-First', desc: 'Every decision is backed by data and ROI focused' },
  { icon: 'test', title: 'Test & Scale', desc: 'Continuous A/B testing to find winning creatives and audiences' },
  { icon: 'strategic', title: 'Strategic Thinking', desc: 'Full-funnel strategy from awareness to conversion' },
  { icon: 'mobile', title: 'Multi-Platform', desc: 'Expert across all major paid advertising platforms' },
];

export default function About() {
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
    <section id="about" className="relative py-24 overflow-hidden bg-[#050810]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0f3559]/3 to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <User className="w-4 h-4" /> About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] mb-4">
            The Strategist Behind{' '}
            <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Your Growth
            </span>
          </h2>
        </div>

        {/* Bio + Highlights */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Bio */}
          <div className="space-y-6 reveal-left">
            <div className="flex items-start gap-4">
              {/* Avatar placeholder */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0f3559] to-[#0f3559] p-0.5">
                  <div className="w-full h-full rounded-2xl bg-[#0d1117] flex items-center justify-center text-3xl">
                    <User className="text-[#0f3559] w-10 h-10" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0f3559] border-2 border-[#050810] animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Ahmed Hassan</h3>
                <p className="text-[#0f3559] font-medium">Media Buyer & Digital Marketing Specialist</p>
                <div className="flex items-center gap-1 mt-1 text-slate-500 text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#0f3559]" /> Ismailia, Egypt — Available Worldwide
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I’m a results-driven Media Buyer with 2 years of hands-on experience in planning, launching, and optimizing paid advertising campaigns across multiple platforms. I specialize in creating data-driven strategies that maximize ROI, reduce cost per acquisition, and scale profitable campaigns.
              </p>
              <p>
                I’ve worked on different niches, managing budgets efficiently while continuously testing creatives, audiences, and funnels to achieve the best performance. My expertise includes campaign analysis, audience targeting, A/B testing, and performance optimization.
              </p>
              <p>
                I’m passionate about turning data into actionable insights and helping brands grow through smart, strategic advertising.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Media Buying', 'Paid Social', 'PPC', 'Data Analytics', 'CRO', 'Funnel Building'].map((tag) => (
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
                <h4 className="text-white font-bold mb-2 font-['Space_Grotesk']">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="mb-24">
          <div className="text-center mb-12 reveal">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] mb-2">
              Core <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Expertise
              </span>
            </h3>
            <p className="text-slate-400">Platform mastery built through thousands of hours of real campaign management</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={skill.name} className="reveal space-y-2" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] mb-2">
              Tools & <span className="neon-text-cyan">Platforms</span>
            </h3>
            <p className="text-slate-400">My tech stack for campaign management, analytics, and optimization</p>
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
                <div className="text-white text-xs font-medium leading-tight mb-1">{tool.name}</div>
                <div className="text-[#0f3559] text-xs opacity-60">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}