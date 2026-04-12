import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Globe, Search, Video, BarChart3, SearchCode, Tag, Flame, Palette, TrendingUp, Mail, ShoppingCart, Layers, Target, FlaskConical, Lightbulb, Smartphone, Briefcase, AlertTriangle, Home, Users, GraduationCap, Utensils, Calendar, Star, Activity, DollarSign
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'facebook': Globe,
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
  'mobile': Smartphone,
  'cro': Target,
  'activity': Activity,
  'alert': AlertTriangle,
  'bulb': Lightbulb,
  'home': Home,
  'users': Users,
  'graduation': GraduationCap,
  'utensils': Utensils,
  'calendar': Calendar,
  'star': Star,
  'briefcase': Briefcase,
  'dollar': DollarSign
};

export interface Project {
  id: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  platform: string;
  platformIcon: string;
  industry: string;
  industryAr?: string;
  budget: string;
  budgetAr?: string;
  duration: string;
  durationAr?: string;
  color: string;
  borderColor: string;
  description: string;
  descriptionAr?: string;
  challenge: string;
  challengeAr?: string;
  solution: string;
  solutionAr?: string;
  results: { label: string; labelAr?: string; before: string; after: string; change: string; positive: boolean }[];
  tags: string[];
  tagsAr?: string[];
  highlights: { icon: string; value: string; label: string; labelAr?: string; }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Fashion Brand Scale-Up',
    titleAr: 'توسيع نطاق براند أزياء وتجارة إلكترونية',
    category: 'E-Commerce', categoryAr: 'المتاجر الإلكترونية',
    platform: 'Facebook & Instagram Ads',
    platformIcon: 'facebook',
    industry: 'Fashion & Apparel', industryAr: 'أزياء وملابس',
    budget: '$18,500 / month', budgetAr: '$18,500 / للمتجر',
    duration: '4 Months', durationAr: '4 شهور',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Scaled a mid-sized fashion brand from barely breaking even on ads to achieving consistent 7x+ ROAS through aggressive audience testing and creative iteration.',
    descriptionAr: 'وسعت نطاق متجر أزياء كان بالكاد يحصل على تكاليفه في الإعلانات، لوصوله لعائد يفوق الـ 7 أضعاف (7x ROAS) من خلال اختيار الجمهور الدقيق وتغيير التصميمات.',
    challenge: 'The brand was spending $5K/mo with a 1.8x ROAS — burning money with no clear path to profitability.',
    challengeAr: 'المتجر كان بيصرف حوالي $5,000 شهريًا بمعدل 1.8x عائد، مما يعني حرق أموال بدون خطة للربحية الحقيقية.',
    solution: 'Rebuilt the campaign structure, implemented a full-funnel strategy (TOF/MOF/BOF), tested 40+ creative variations, and launched dynamic product retargeting.',
    solutionAr: 'أعدت هيكلة الحملات بالكامل ونفذت استراتيجية بيع كاملة من التوعية للشراء. اختبرت أكتر من 40 تصميم، وأطلقت حملات إعادة استهداف ديناميكية.',
    results: [
      { label: 'ROAS', labelAr: 'العائد الإعلاني ROAS', before: '1.8x', after: '7.4x', change: '+311%', positive: true },
      { label: 'Monthly Revenue', labelAr: 'الربح الشهري', before: '$9K', after: '$136K', change: '+1,411%', positive: true },
      { label: 'Cost Per Purchase', labelAr: 'تكلفة الشراء', before: '$42', after: '$11', change: '-74%', positive: true },
      { label: 'CTR', labelAr: 'نسبة النقر للظهور', before: '0.9%', after: '3.8%', change: '+322%', positive: true },
    ],
    tags: ['Facebook Ads', 'Instagram', 'Retargeting', 'DPA', 'Creative Testing'],
    highlights: [
      { icon: 'performance', value: '2.2x', label: 'ROAS', labelAr: 'عائد إعلاني' },
      { icon: 'analytics', value: '$4.5K', label: 'Monthly Revenue', labelAr: 'أرباح شهرية' },
      { icon: 'performance', value: '-30%', label: 'CPA Drop', labelAr: 'نزول في التكلفة' },
    ],
  },
  {
    id: '2',
    title: 'SaaS Lead Generation Machine',
    titleAr: 'ماكينة حصد الـ Leads لشركة برمجيات SaaS',
    category: 'Lead Generation', categoryAr: 'Lead Generation',
    platform: 'Google Ads',
    platformIcon: 'google',
    industry: 'B2B SaaS', industryAr: 'B2B برمجيات أعمال',
    budget: '$12,000 / month', budgetAr: '$12,000 / حملة',
    duration: '6 Months', durationAr: '6 شهور',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Built a Google Ads lead generation system for a B2B SaaS tool that reduced cost per qualified lead by 68% while tripling monthly demo bookings.',
    descriptionAr: 'قمت بإنشاء نظام لجمع العملاء المهتمين والمؤهلين (Qualified Leads) لشركة SAAS من خلال إعلانات جوجل مما خفض التكلفة بنسبة 68% لليد.',
    challenge: 'High CPL of $280 with low quality leads that rarely converted to paying customers. Sales team was overwhelmed with bad-fit prospects.',
    challengeAr: 'التكلفة القديمة كانت غالية $280 لليد الواحد، وكانت جودتهم رديئة ومش بيكملوا شراء، وفريق المبيعات كان بيضيع وقته.',
    solution: 'Rebuilt keyword strategy with tight match types, implemented lead scoring integration, created dedicated landing pages per audience segment, and used Smart Bidding with offline conversion data.',
    solutionAr: 'أعدت بناء استراتيجية كلمات البحث وضيقتها بدقة، استعنت بنظم تنقيط العملاء المحتملين وصممت صفحات هبوط لكل شريحة لتطبيق Smart Bidding بدقة.',
    results: [
      { label: 'Cost Per Lead', labelAr: 'تكلفة العميل (CPL)', before: '$280', after: '$89', change: '-68%', positive: true },
      { label: 'Monthly Demo Bookings', labelAr: 'حجوزات ديمو بالشركة', before: '18', after: '$67', change: '+272%', positive: true },
      { label: 'Lead-to-Customer Rate', labelAr: 'نسبة تحويل المتابعين لعملاء', before: '4%', after: '18%', change: '+350%', positive: true },
    ],
    tags: ['Google Search', 'Smart Bidding', 'B2B', 'Lead Gen', 'Landing Pages'],
    highlights: [
      { icon: 'performance', value: '-30%', label: 'Cost Per Lead', labelAr: 'تكلفة العميل' },
      { icon: 'calendar', value: '12', label: 'Monthly Demos', labelAr: 'ديمو شهريا' },
    ],
  },
];

const filtersEn = ['All', 'E-Commerce', 'Lead Generation', 'Education', 'Local Business'];
const filtersAr = ['الكل', 'المتجر الإلكتروني', 'تجميع الـ Leads', 'التعليم', 'الأعمال المحلية'];

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeFilterEn, setActiveFilterEn] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dbProjects, setDbProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const fetchedProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        setDbProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects from Firebase: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const allProjects = [...projects, ...dbProjects];
  const filtered = activeFilterEn === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilterEn);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <Briefcase className="w-4 h-4" /> {language === 'ar' ? 'دراسات الحالة' : 'Case Studies'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-base font-['Space_Grotesk'] mb-4">
            {language === 'ar' ? 'حملات قوية، ' : 'Real Campaigns. '}
            <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {language === 'ar' ? 'ونتائج أقوى.' : 'Real Results.'}
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {language === 'ar'
              ? 'استكشف الحملات التي أدرتها والنتائج اللي حصدناها للعملاء. كل رقم وراءه قصة من التخطيط، والتحليل المستمر.'
              : "Explore the campaigns I've built and the measurable results they generated. Every number tells a story of strategy, testing, and continuous optimization."}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {filtersEn.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilterEn(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeFilterEn === filter
                  ? 'bg-[#0f3559] text-text-base border-[#0f3559] shadow-[0_0_20px_rgba(15,53,89,0.4)]'
                  : 'border-[#0f3559]/20 text-text-muted hover:border-[#0f3559]/50 hover:text-text-base'
                }`}
            >
              {language === 'ar' ? filtersAr[index] : filter}
            </button>
          ))}
        </div>

        {isLoading && dbProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-[#0f3559]/30 border-t-[#0f3559] rounded-full animate-spin mb-4"></div>
            <p className="text-text-muted">{language === 'ar' ? 'جاري تحميل المشاريع الحية...' : 'Loading live projects...'}</p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal group cursor-pointer rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{ borderColor: project.borderColor, backgroundColor: 'var(--card-bg)', transitionDelay: `${i * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}></div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {(() => {
                        const IconComp = iconMap[project.platformIcon];
                        return IconComp ? <IconComp className="w-5 h-5" style={{ color: project.color }} /> : null;
                      })()}
                      <span className="text-xs font-mono uppercase tracking-wider" style={{ color: project.color }}>
                        {project.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-base font-['Space_Grotesk'] leading-tight group-hover:text-[#0f3559] transition-colors">
                      {language === 'ar' ? project.titleAr || project.title : project.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 px-2 py-1 rounded-lg text-xs font-medium" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
                    {language === 'ar' ? project.industryAr || project.industry : project.industry}
                  </div>
                </div>

                <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                  {language === 'ar' ? project.descriptionAr || project.description : project.description}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="text-center rounded-lg p-2" style={{ backgroundColor: `${project.color}08` }}>
                      <div className="text-xs mb-0.5 flex justify-center">
                        {(() => {
                          const IconComp = iconMap[h.icon];
                          return IconComp ? <IconComp className="w-4 h-4 text-text-muted" /> : null;
                        })()}
                      </div>
                      <div className="font-bold text-sm" style={{ color: project.color }}>{h.value}</div>
                      <div className="text-text-muted text-xs leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{language === 'ar' ? h.labelAr || h.label : h.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-text-muted pt-3 border-t border-white/5">
                  <span>{language === 'ar' ? 'الميزانية:' : 'Budget:'} <span className="text-text-muted">{language === 'ar' ? project.budgetAr || project.budget : project.budget}</span></span>
                  <span>{language === 'ar' ? 'المده:' : 'Duration:'} <span className="text-text-muted">{language === 'ar' ? project.durationAr || project.duration : project.duration}</span></span>
                </div>

                <button className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 mt-4" style={{ color: project.color }}>
                  {language === 'ar' ? 'عرض تفاصيل الحالة' : 'View Full Case Study'}
                  <svg className={`w-4 h-4 ${language === 'ar' && 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-bg-base/80 backdrop-blur-md"></div>
          <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border bg-bg-base" style={{ borderColor: selectedProject.borderColor }} onClick={(e) => e.stopPropagation()}>
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${selectedProject.color}, #0f3559)` }}></div>
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {(() => {
                      const IconComp = iconMap[selectedProject.platformIcon];
                      return IconComp ? <IconComp className="w-5 h-5" style={{ color: selectedProject.color }} /> : null;
                    })()}
                    <span className="text-sm font-mono" style={{ color: selectedProject.color }}>
                      {selectedProject.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-text-base font-['Space_Grotesk']">{language === 'ar' ? selectedProject.titleAr || selectedProject.title : selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-base hover:bg-white/10 transition-colors">✕</button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 border border-red-500/20 bg-red-500/5">
                  <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> {language === 'ar' ? 'التحدي والمشكلة' : 'The Challenge'}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{language === 'ar' ? selectedProject.challengeAr || selectedProject.challenge : selectedProject.challenge}</p>
                </div>
                <div className="rounded-xl p-4 border border-[#39ff14]/20 bg-[#39ff14]/5">
                  <div className="text-[#39ff14] font-bold text-sm mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> {language === 'ar' ? 'الحل الذي قدمته' : 'My Solution'}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{language === 'ar' ? selectedProject.solutionAr || selectedProject.solution : selectedProject.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-text-base font-bold font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#0f3559]" /> {language === 'ar' ? 'النتائج، قبل وبعد تدخلاتي' : 'Before vs. After Results'}
                </h4>
                <div className="space-y-3">
                  {selectedProject.results.map((result) => (
                    <div key={result.label} className="grid grid-cols-4 gap-3 items-center rounded-xl p-3 bg-border-subtle">
                      <div className="text-text-muted text-sm font-medium">{language === 'ar' ? result.labelAr || result.label : result.label}</div>
                      <div className="text-center">
                        <div className="text-xs text-text-muted mb-0.5">{language === 'ar' ? 'قبل' : 'Before'}</div>
                        <div className="text-sm text-red-400 font-semibold">{result.before}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-text-muted mb-0.5">{language === 'ar' ? 'بعد' : 'After'}</div>
                        <div className="text-sm font-semibold" style={{ color: selectedProject.color }}>{result.after}</div>
                      </div>
                      <div className="text-center">
                        <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: `${selectedProject.color}20`, color: selectedProject.color }} dir="ltr">
                          {result.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setSelectedProject(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-neon w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0f3559] to-[#0f3559] text-text-base font-bold text-base hover:shadow-[0_0_30px_rgba(15,53,89,0.6)] transition-all duration-300"
              >
                {language === 'ar' ? 'نفسك توصل لنتايج مشابهة؟ تواصل معي ←' : 'Want Results Like This? Let\'s Talk →'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}