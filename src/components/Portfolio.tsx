import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
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
  Briefcase,
  AlertTriangle,
  Home,
  Users,
  GraduationCap,
  Utensils,
  Calendar,
  Star,
  Activity,
  Box,
  Clock,
  DollarSign
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

interface Project {
  id: string;
  title: string;
  category: string;
  platform: string;
  platformIcon: string;
  industry: string;
  budget: string;
  duration: string;
  color: string;
  borderColor: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; before: string; after: string; change: string; positive: boolean }[];
  tags: string[];
  highlights: { icon: string; value: string; label: string }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Fashion Brand Scale-Up',
    category: 'E-Commerce',
    platform: 'Facebook & Instagram Ads',
    platformIcon: 'facebook',
    industry: 'Fashion & Apparel',
    budget: '$18,500 / month',
    duration: '4 Months',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Scaled a mid-sized fashion brand from barely breaking even on ads to achieving consistent 7x+ ROAS through aggressive audience testing and creative iteration.',
    challenge: 'The brand was spending $5K/mo with a 1.8x ROAS — burning money with no clear path to profitability.',
    solution: 'Rebuilt the campaign structure, implemented a full-funnel strategy (TOF/MOF/BOF), tested 40+ creative variations, and launched dynamic product retargeting.',
    results: [
      { label: 'ROAS', before: '1.8x', after: '7.4x', change: '+311%', positive: true },
      { label: 'Monthly Revenue', before: '$9K', after: '$136K', change: '+1,411%', positive: true },
      { label: 'Cost Per Purchase', before: '$42', after: '$11', change: '-74%', positive: true },
      { label: 'CTR', before: '0.9%', after: '3.8%', change: '+322%', positive: true },
    ],
    tags: ['Facebook Ads', 'Instagram', 'Retargeting', 'DPA', 'Creative Testing'],
    highlights: [
      { icon: 'performance', value: '7.4x', label: 'ROAS' },
      { icon: 'analytics', value: '$136K', label: 'Monthly Revenue' },
      { icon: 'performance', value: '-74%', label: 'CPA Drop' },
    ],
  },
  {
    id: '2',
    title: 'SaaS Lead Generation Machine',
    category: 'Lead Generation',
    platform: 'Google Ads',
    platformIcon: 'google',
    industry: 'B2B SaaS',
    budget: '$12,000 / month',
    duration: '6 Months',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Built a Google Ads lead generation system for a B2B SaaS tool that reduced cost per qualified lead by 68% while tripling monthly demo bookings.',
    challenge: 'High CPL of $280 with low quality leads that rarely converted to paying customers. Sales team was overwhelmed with bad-fit prospects.',
    solution: 'Rebuilt keyword strategy with tight match types, implemented lead scoring integration, created dedicated landing pages per audience segment, and used Smart Bidding with offline conversion data.',
    results: [
      { label: 'Cost Per Lead', before: '$280', after: '$89', change: '-68%', positive: true },
      { label: 'Monthly Demo Bookings', before: '18', after: '$67', change: '+272%', positive: true },
      { label: 'Lead-to-Customer Rate', before: '4%', after: '18%', change: '+350%', positive: true },
      { label: 'Quality Score Avg', before: '4.2', after: '8.7', change: '+107%', positive: true },
    ],
    tags: ['Google Search', 'Smart Bidding', 'B2B', 'Lead Gen', 'Landing Pages'],
    highlights: [
      { icon: 'performance', value: '-68%', label: 'Cost Per Lead' },
      { icon: 'calendar', value: '67', label: 'Monthly Demos' },
      { icon: 'star', value: '18%', label: 'Close Rate' },
    ],
  },
  {
    id: '3',
    title: 'Fitness Supplement Brand Launch',
    category: 'E-Commerce',
    platform: 'TikTok & Facebook Ads',
    platformIcon: 'tiktok',
    industry: 'Health & Fitness',
    budget: '$8,000 / month',
    duration: '3 Months',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Launched a brand-new fitness supplement brand from zero to $85K in monthly sales in just 3 months using an aggressive TikTok-first strategy combined with Facebook retargeting.',
    challenge: 'Zero brand awareness, no existing audience, and a competitive niche with established players dominating ad space.',
    solution: 'Leveraged TikTok\'s organic-feeling ad formats with UGC-style creatives for top-of-funnel awareness, then used Facebook/Instagram retargeting to close the sale.',
    results: [
      { label: 'Monthly Revenue', before: '$0', after: '$85K', change: '∞', positive: true },
      { label: 'ROAS (Combined)', before: '0x', after: '6.2x', change: '+620%', positive: true },
      { label: 'TikTok CTR', before: '0%', after: '5.4%', change: '—', positive: true },
      { label: 'Customer Acquisition Cost', before: 'N/A', after: '$18', change: '—', positive: true },
    ],
    tags: ['TikTok Ads', 'Facebook Ads', 'UGC Creatives', 'Brand Launch', 'Multi-Platform'],
    highlights: [
      { icon: 'activity', value: '$85K', label: 'Month 3 Revenue' },
      { icon: 'performance', value: '6.2x', label: 'ROAS' },
      { icon: 'mobile', value: '5.4%', label: 'TikTok CTR' },
    ],
  },
  {
    id: '4',
    title: 'Real Estate Lead Funnel',
    category: 'Lead Generation',
    platform: 'Facebook Ads',
    platformIcon: '📘',
    industry: 'Real Estate',
    budget: '$6,500 / month',
    duration: '5 Months',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Generated 1,200+ qualified buyer and seller leads for a real estate agency in Cairo through a highly targeted Facebook Ads funnel with automated follow-up sequences.',
    challenge: 'The agency relied 100% on referrals with no digital presence. They needed a predictable, scalable lead source to grow their listing portfolio.',
    solution: 'Built a quiz-based lead funnel that pre-qualified prospects based on budget and property type, feeding only hot leads to the sales team via CRM integration.',
    results: [
      { label: 'Monthly Leads', before: '0', after: '240+', change: '—', positive: true },
      { label: 'Cost Per Lead', before: 'N/A', after: '$8.50', change: '—', positive: true },
      { label: 'Lead-to-Meeting Rate', before: '0%', after: '28%', change: '—', positive: true },
      { label: 'Properties Sold (Attribution)', before: '3/mo', after: '11/mo', change: '+267%', positive: true },
    ],
    tags: ['Facebook Ads', 'Lead Funnels', 'Real Estate', 'CRM Integration', 'Quiz Funnel'],
    highlights: [
      { icon: '🏠', value: '240+', label: 'Leads/Month' },
      { icon: '💵', value: '$8.50', label: 'Cost Per Lead' },
      { icon: '🤝', value: '28%', label: 'Meeting Rate' },
    ],
  },
  {
    id: '5',
    title: 'Online Education Platform Growth',
    category: 'Education',
    platform: 'Google & Facebook Ads',
    platformIcon: '🔵',
    industry: 'Online Education',
    budget: '$22,000 / month',
    duration: '8 Months',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Scaled an Arabic online education platform from 200 to 2,400 monthly course enrollments through a combined Google Search + Facebook Ads strategy targeting Egypt and KSA.',
    challenge: 'High competition in EdTech with CAC at $120+ and most paid campaigns barely breaking even. Retention was low with students not completing courses.',
    solution: 'Segmented campaigns by course category, created dedicated landing pages with video testimonials, and implemented post-enrollment email sequences to boost completion and referrals.',
    results: [
      { label: 'Monthly Enrollments', before: '200', after: '2,400', change: '+1,100%', positive: true },
      { label: 'Customer Acquisition Cost', before: '$120', after: '$28', change: '-77%', positive: true },
      { label: 'Monthly Revenue', before: '$28K', after: '$312K', change: '+1,014%', positive: true },
      { label: 'Course Completion Rate', before: '22%', after: '58%', change: '+164%', positive: true },
    ],
    tags: ['Google Ads', 'Facebook Ads', 'EdTech', 'Arabic Market', 'Scale'],
    highlights: [
      { icon: '🎓', value: '2,400', label: 'Enrollments/Mo' },
      { icon: '📊', value: '$312K', label: 'Monthly Revenue' },
      { icon: '🏆', value: '-77%', label: 'CAC Reduction' },
    ],
  },
  {
    id: '6',
    title: 'Restaurant Chain Local Ads',
    category: 'Local Business',
    platform: 'Facebook & Google Ads',
    platformIcon: '📘',
    industry: 'Food & Beverage',
    budget: '$4,000 / month',
    duration: '6 Months',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: 'Drove consistent foot traffic and online orders for a 5-location restaurant chain in Cairo using hyper-local Facebook Ads and Google Maps promotion strategies.',
    challenge: 'Post-pandemic recovery with empty seats during off-peak hours. Digital ordering represented only 8% of total sales.',
    solution: 'Ran time-based offer campaigns targeting people within 3km of each location, combined with Google Maps ads and a digital-ordering incentive strategy.',
    results: [
      { label: 'Online Orders', before: '150/mo', after: '1,850/mo', change: '+1,133%', positive: true },
      { label: 'Average Order Value', before: '$12', after: '$19', change: '+58%', positive: true },
      { label: 'Cost Per Order', before: 'N/A', after: '$1.40', change: '—', positive: true },
      { label: 'Revenue Lift (Digital)', before: '$1.8K', after: '$35K', change: '+1,844%', positive: true },
    ],
    tags: ['Local Ads', 'Facebook Ads', 'Google Maps', 'F&B', 'Geo-Targeting'],
    highlights: [
      { icon: '🍔', value: '1,850', label: 'Orders/Month' },
      { icon: '💰', value: '$1.40', label: 'Cost Per Order' },
      { icon: '📈', value: '+58%', label: 'AOV Increase' },
    ],
  },
];

const filters = ['All', 'E-Commerce', 'Lead Generation', 'Education', 'Local Business'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
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

        // Combine static projects with DB projects (optional - or just use life data)
        setDbProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects from Firebase: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Use both static and database projects
  const allProjects = [...projects, ...dbProjects];

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden bg-[#050810]">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f3559]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0f3559]/30 bg-[#0f3559]/5 text-sm text-[#0f3559] font-mono mb-4">
            <Briefcase className="w-4 h-4" /> Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] mb-4">
            Real Campaigns. <span className="text-gradient" style={{ background: `linear-gradient(90deg, #0f3559, #0f3559)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Real Results.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore the campaigns I've built and the measurable results they generated.
            Every number tells a story of strategy, testing, and relentless optimization.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeFilter === filter
                  ? 'bg-[#0f3559] text-white border-[#0f3559] shadow-[0_0_20px_rgba(15,53,89,0.4)]'
                  : 'border-[#0f3559]/20 text-slate-400 hover:border-[#0f3559]/50 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && dbProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-[#0f3559]/30 border-t-[#0f3559] rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400">Loading live projects...</p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal group cursor-pointer rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                borderColor: project.borderColor,
                backgroundColor: 'rgba(13,17,23,0.8)',
                transitionDelay: `${i * 0.1}s`,
                boxShadow: `0 0 0 transparent`,
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.color}20`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 transparent';
              }}
            >
              {/* Card Top Banner */}
              <div
                className="h-2 w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              ></div>

              <div className="p-6 space-y-4">
                {/* Header */}
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
                    <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] leading-tight group-hover:text-[#0f3559] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className="flex-shrink-0 px-2 py-1 rounded-lg text-xs font-medium"
                    style={{ backgroundColor: `${project.color}15`, color: project.color }}
                  >
                    {project.industry}
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                {/* Key Highlights */}
                <div className="grid grid-cols-3 gap-2">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="text-center rounded-lg p-2" style={{ backgroundColor: `${project.color}08` }}>
                      <div className="text-xs mb-0.5 flex justify-center">
                        {(() => {
                          const IconComp = iconMap[h.icon];
                          return IconComp ? <IconComp className="w-4 h-4 text-slate-400" /> : null;
                        })()}
                      </div>
                      <div className="font-bold text-sm" style={{ color: project.color }}>{h.value}</div>
                      <div className="text-slate-500 text-xs leading-tight">{h.label}</div>
                    </div>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-white/5">
                  <span>Budget: <span className="text-slate-300">{project.budget}</span></span>
                  <span>Duration: <span className="text-slate-300">{project.duration}</span></span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs border border-white/5 text-slate-400">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-xs text-slate-500">+{project.tags.length - 3} more</span>
                  )}
                </div>

                {/* View Details */}
                <button
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: project.color }}
                >
                  View Full Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          <div
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border bg-[#0d1117]"
            style={{ borderColor: selectedProject.borderColor }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="h-1 w-full"
              style={{ background: `linear-gradient(90deg, ${selectedProject.color}, #0f3559)` }}
            ></div>
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
                  <h3 className="text-2xl font-black text-white font-['Space_Grotesk']">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><Box className="w-3.5 h-3.5" /> {selectedProject.industry}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {selectedProject.budget}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedProject.duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* The Challenge & Solution */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 border border-red-500/20 bg-red-500/5">
                  <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> The Challenge
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="rounded-xl p-4 border border-[#39ff14]/20 bg-[#39ff14]/5">
                  <div className="text-[#39ff14] font-bold text-sm mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> My Solution
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Results - Before/After */}
              <div>
                <h4 className="text-white font-bold font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#0f3559]" /> Before vs. After Results
                </h4>
                <div className="space-y-3">
                  {selectedProject.results.map((result) => (
                    <div key={result.label} className="grid grid-cols-4 gap-3 items-center rounded-xl p-3 bg-white/5">
                      <div className="text-slate-300 text-sm font-medium">{result.label}</div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-0.5">Before</div>
                        <div className="text-sm text-red-400 font-semibold">{result.before}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-0.5">After</div>
                        <div className="text-sm font-semibold" style={{ color: selectedProject.color }}>{result.after}</div>
                      </div>
                      <div className="text-center">
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{ backgroundColor: `${selectedProject.color}20`, color: selectedProject.color }}
                        >
                          {result.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Tools & Strategies</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-neon w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0f3559] to-[#0f3559] text-white font-bold text-base hover:bg-[#0f3559]/90 hover:shadow-[0_0_30px_rgba(15,53,89,0.6)] transition-all duration-300"
              >
                Want Results Like This? Let's Talk →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}