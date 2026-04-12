import { useState } from 'react';
import { MessageCircle, Globe, Camera, Mail, Link, HelpCircle, Trophy, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, any> = {
  'whatsapp': MessageCircle,
  'facebook': Globe,
  'instagram': Camera
};


const contactMethods = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp', labelAr: 'واتساب',
    value: '+20 155 996 9297',
    action: 'https://wa.me/201559969297?text=Hi%20Ahmed!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20together.',
    description: 'Fastest response — usually within 2 hours', descriptionAr: 'أسرع طريقة للاستجابة — أرد خلال ساعتين غالبًا',
    cta: 'Message on WhatsApp', ctaAr: 'أرسل رسالة واتساب',
    color: '#25D366',
    bgColor: 'rgba(37,211,102,0.08)',
    borderColor: 'rgba(37,211,102,0.25)',
  },
  {
    icon: 'facebook',
    label: 'Facebook', labelAr: 'فيسبوك',
    value: 'Ahmed Hassan',
    action: 'https://www.facebook.com/M.OO0.D.Y.71',
    description: 'Connect and send a message on Facebook', descriptionAr: 'تواصل وأرسل رسالة على فيسبوك',
    cta: 'Visit Facebook Profile', ctaAr: 'زيارة الملف الشخصي',
    color: '#1877F2',
    bgColor: 'rgba(24,119,242,0.08)',
    borderColor: 'rgba(24,119,242,0.25)',
  },
  {
    icon: 'instagram',
    label: 'Instagram', labelAr: 'انستجرام',
    value: '@ahmedhassan',
    action: 'https://www.instagram.com/mody11_04',
    description: 'Follow for marketing tips and case studies', descriptionAr: 'تابعني للحصول على طرق وتجارب تسويق واقعية',
    cta: 'Visit Instagram', ctaAr: 'زيارة الانستجرام',
    color: '#E1306C',
    bgColor: 'rgba(225,48,108,0.08)',
    borderColor: 'rgba(225,48,108,0.25)',
  },
];

const faqItems = [
  {
    q: 'How long until I see results?',
    qAr: 'متى يمكنني توقع رؤية نتائج فعلية؟',
    a: 'Most clients see measurable improvement in their campaigns within the first 2-4 weeks. Significant scale and ROAS improvement typically happens in months 2-3 as we identify winning creatives and audiences.',
    aAr: 'يلاحظ معظم العملاء تحسنًا سريعًا وملموسًا في حملاتهم خلال أول أسبوعين إلى 4 أسابيع. التوسع الحقيقي والتحسن الكبير في معدل العائد (ROAS) يحدث عادةً في الشهرين الثاني والثالث بعد تطوير أفضل الإعلانات وتحديد الجمهور المثالي.',
  },
  {
    q: 'What is the minimum ad budget you work with?',
    qAr: 'ما هي أقل ميزانية إعلانية تتطلبها للعمل؟',
    a: "I typically work with clients spending a minimum of $2,000/month in ad spend. This ensures there's enough data to optimize effectively and achieve meaningful results.",
    aAr: 'أعمل دائمًا مع العملاء الذين يصرفون ما لا يقل عن 2000 دولار شهريًا كحد أدني. هذا يضمن إعطاء المنصات بيانات كافية لاكتشاف أفضل جمهور وتحسين وتطوير النتائج.',
  },
  {
    q: 'Do you offer performance-based pricing?',
    qAr: 'هل تدعم خطط تسعير بنسبة من الأرباح أو الأداء؟',
    a: 'Yes! For select clients, I offer hybrid pricing models that include a performance component tied to ROAS targets. Let\'s discuss what works best for your situation.',
    aAr: 'نعم! أوفر نماذج الدفع المشترك (نسبة من المبيعات مع أتعاب إدارة مناسبة) للعملاء الذين لديهم إمكانيات قوية، ويكون الدفع مرتبطًا بأهداف الـ ROAS. يمكننا الاتفاق على النموذج الأنسب لعملك.',
  },
  {
    q: 'What platforms do you specialize in?',
    qAr: 'في أي منصات تتخصص تحديدًا؟',
    a: 'I specialize in Facebook Ads, Instagram Ads, Google Ads (Search, Shopping, Display), and TikTok Ads. I can manage single-platform or multi-platform strategies depending on your goals.',
    aAr: 'أتخصص وباحترافية كاملة في إعلانات فيسبوك وانستجرام، جوجل (البحث، التسوق، والشبكة الإعلانية)، إعلانات تيك توك. وأستطيع إدارة الخطط المدمجة بين كافة المنصات لتحصين أعمالك.',
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const textPrefix = language === 'ar' ? 'مرحباً أحمد! طلب تواصل جديد من موقعك:' : 'Hi Ahmed! New contact request from your portfolio:';
    const messageText = `${textPrefix}
- ${language === 'ar' ? 'الاسم' : 'Name'}: ${formData.name}
- ${language === 'ar' ? 'البريد' : 'Email'}: ${formData.email}
- ${language === 'ar' ? 'الميزانية' : 'Budget'}: ${formData.budget}
- ${language === 'ar' ? 'التفاصيل' : 'Details'}: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/201559969297?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', budget: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#00f5ff]/5 via-[#bf00ff]/5 to-[#00f5ff]/5 blur-3xl rounded-full"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 text-sm text-[#00f5ff] font-mono mb-4">
            <Mail className="w-4 h-4" /> {language === 'ar' ? 'تواصل معي مباشرة' : 'Get In Touch'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-base font-['Space_Grotesk'] mb-4">
            {language === 'ar' ? 'مستعد لـ ' : 'Ready to '}<span className="gradient-text">{language === 'ar' ? 'مضاعفة أرباح عملك؟' : 'Scale Your Business?'}</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'سواء كان لديك مشروع محدد أو ترغب فقط في استكشاف الفرص المتاحة للتطور وتكبير الأرباح — تواصل معي الآن. الاستشارة والمراجعة الأولى مجانية دائمًا.'
              : 'Whether you have a specific project in mind or just want to explore what\'s possible — reach out. The first consultation is always free.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="reveal-left">
              <h3 className="text-lg font-bold text-text-base font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                <Link className="w-5 h-5 text-[#00f5ff]" /> {language === 'ar' ? 'كيفية التواصل' : 'Reach Me Directly'}
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 group block"
                    style={{ backgroundColor: method.bgColor, borderColor: method.borderColor }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${method.color}20` }}>
                      {(() => {
                        const IconComp = iconMap[method.icon];
                        return IconComp ? <IconComp className="w-7 h-7" style={{ color: method.color }} /> : null;
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-text-base font-semibold">{language === 'ar' ? method.labelAr : method.label}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${method.color}20`, color: method.color }}>
                          {language === 'ar' ? method.ctaAr : method.cta}
                        </span>
                      </div>
                      <div className="text-text-muted text-sm font-medium pr-2" dir="ltr">{method.value}</div>
                      <div className="text-text-muted text-xs mt-0.5">{language === 'ar' ? method.descriptionAr : method.description}</div>
                    </div>
                    <svg className={`w-5 h-5 flex-shrink-0 transition-transform ${language === 'ar' && 'rotate-180'} ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} style={{ color: method.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal-left">
              <h3 className="text-lg font-bold text-text-base font-['Space_Grotesk'] mb-4">
                {language === 'ar' ? 'آلية العمل والخطوات معي' : 'My Onboarding Process'}
              </h3>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Free Discovery Call', titleAr: 'مكالمة استكشافية مجانية', desc: 'We discuss your business, goals, and current ad performance (30 mins)', descAr: 'نتكلم بدقة حول عملك، وأهدافك، والأداء الحالي لحملاتك الإعلانية (٣٠ دقيقة)' },
                  { step: '02', title: 'Account Audit', titleAr: 'فحص الحساب الإعلاني (Audit)', desc: 'I review your existing campaigns and identify exact issues and opportunities', descAr: 'أراجع حملاتك الإعلانية الحالية لمعرفة المشاكل واقتناص الفرص المخفية' },
                  { step: '03', title: 'Strategy Proposal', titleAr: 'استراتيجية وتقديم الخطة', desc: 'I deliver a custom strategy with projected ROAS and timeline', descAr: 'أقدم لك استراتيجية مفصلة مع توقعات العوائد (ROAS) والوقت المقدر' },
                  { step: '04', title: 'Campaign Launch', titleAr: 'إطلاق الحملات', desc: 'We begin implementation with full transparency and weekly reporting', descAr: 'نبدأ رحلة التنفيذ بأعلى درجات المصداقية والشفافية وتزويدك بالتقارير الأسبوعية' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f5ff]/20 to-[#bf00ff]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00f5ff] text-sm font-mono font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="text-text-base font-semibold text-sm">{language === 'ar' ? item.titleAr : item.title}</div>
                      <div className="text-text-muted text-xs mt-0.5 leading-relaxed">{language === 'ar' ? item.descAr : item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-left">
              <h3 className="text-lg font-bold text-text-base font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#00f5ff]" /> {language === 'ar' ? 'الأسئلة الأكثر شيوعًا' : 'Common Questions'}
              </h3>
              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/5 overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-4 text-left cursor-pointer outline-none">
                      <span className="text-text-base text-sm font-medium font-['Space_Grotesk']">{language === 'ar' ? item.qAr : item.q}</span>
                      <span className="text-[#00f5ff] text-lg flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-text-muted text-sm leading-relaxed border-t border-white/5 pt-3">
                        {language === 'ar' ? item.aAr : item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="glass-card rounded-2xl border border-[#00f5ff]/15 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00f5ff]/5 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#bf00ff]/5 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-text-base font-['Space_Grotesk'] mb-2">{language === 'ar' ? 'أرسل لي رسالتك الآن' : 'Send Me a Message'}</h3>
                <p className="text-text-muted text-sm mb-6">{language === 'ar' ? 'الرجاء ملء الاستمارة وسأقوم بالرد عليك خلال ساعات قليلة.' : 'Fill out the form and I\'ll get back to you within 24 hours.'}</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <Trophy className="w-16 h-16 text-[#00f5ff] animate-bounce" />
                    <h4 className="text-xl font-bold text-text-base font-['Space_Grotesk']">{language === 'ar' ? 'تم استلام طلبك!' : 'Message Sent!'}</h4>
                    <p className="text-text-muted">{language === 'ar' ? 'شكرًا لك.. سأتواصل معك في أقرب وقت.' : 'Thanks for reaching out! I\'ll reply within 24 hours.'}</p>
                    <div className="flex items-center gap-2 text-[#39ff14] text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
                      {language === 'ar' ? 'توقع رد قريب جداً' : 'Expect a response soon'}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-text-muted text-sm font-medium mb-2">{language === 'ar' ? 'الاسم' : 'Your Name'} *</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder={language === 'ar' ? "أحمد علي" : "Ahmed ali"} className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-text-base placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300" />
                      </div>
                      <div>
                        <label className="block text-text-muted text-sm font-medium mb-2">{language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *</label>
                        <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="ahmed@gmail.com" className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-text-base placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-text-muted text-sm font-medium mb-2">{language === 'ar' ? 'ميزانية الإعلانات الشهرية (Budget)' : 'Monthly Ad Budget'}</label>
                      <input type="text" required value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })} placeholder={language === 'ar' ? "2,000 – 5,000 جنيه شهريًا" : "2,000 – 5,000 EGP / month"} className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-text-base placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300" />
                    </div>

                    <div>
                      <label className="block text-text-muted text-sm font-medium mb-2">{language === 'ar' ? 'تفاصيل مشروعك وأهدافك المطلوبة' : 'Tell Me About Your Goals'} *</label>
                      <textarea required rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder={language === 'ar' ? "أبحث عن تنمية أرباح المشروع بنسبة 200% من خلال إعلانات وتطوير مسار البيع..." : "I'm looking to scale my business with Facebook Ads..."} className="w-full bg-border-subtle border border-border-subtle rounded-xl px-4 py-3 text-text-base placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300 resize-none"></textarea>
                    </div>

                    <button type="submit" className="flex items-center justify-center gap-2 btn-neon w-full py-4 rounded-xl bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] text-[#050810] font-bold text-base hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                      {language === 'ar' ? 'أرسل الرسالة' : 'Send Message'}
                      <svg className={`w-5 h-5 ${language === 'ar' && 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>

                    <p className="text-text-muted text-xs text-center flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> {language === 'ar' ? 'بياناتك محمية و 100% خاصة.' : 'Your information is 100% private. No spam, ever.'}
                    </p>
                  </form>
                )}
              </div>
            </div>

            <a href="https://wa.me/201559969297?text=Hi%20Ahmed!%20I%27d%20like%20to%20discuss%20my%20marketing%20project." target="_blank" rel="noopener noreferrer" className="btn-neon mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] font-bold text-base hover:bg-[#25D366]/20 hover:border-[#25D366]/70 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {language === 'ar' ? 'تحدث معي على واتساب — سرعة استجابة مضمونة' : 'Chat on WhatsApp — Quick Response Guaranteed'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
