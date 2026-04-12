import { useState } from 'react';
import { MessageCircle, Globe, Camera, Mail, Link, HelpCircle, Trophy, Lock } from 'lucide-react';

const iconMap: Record<string, any> = {
  'whatsapp': MessageCircle,
  'facebook': Globe,
  'instagram': Camera
};


const contactMethods = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: '+20 155 996 9297',
    action: 'https://wa.me/201559969297?text=Hi%20Ahmed!%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20together.',
    description: 'Fastest response — usually within 2 hours',
    cta: 'Message on WhatsApp',
    color: '#25D366',
    bgColor: 'rgba(37,211,102,0.08)',
    borderColor: 'rgba(37,211,102,0.25)',
  },
  {
    icon: 'facebook',
    label: 'Facebook',
    value: 'Ahmed Hassan',
    action: 'https://www.facebook.com/M.OO0.D.Y.71',
    description: 'Connect and send a message on Facebook',
    cta: 'Visit Facebook Profile',
    color: '#1877F2',
    bgColor: 'rgba(24,119,242,0.08)',
    borderColor: 'rgba(24,119,242,0.25)',
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: '@ahmedhassan',
    action: 'https://www.instagram.com/mody11_04',
    description: 'Follow for marketing tips and case studies',
    cta: 'Visit Instagram',
    color: '#E1306C',
    bgColor: 'rgba(225,48,108,0.08)',
    borderColor: 'rgba(225,48,108,0.25)',
  },
];

const faqItems = [
  {
    q: 'How long until I see results?',
    a: 'Most clients see measurable improvement in their campaigns within the first 2-4 weeks. Significant scale and ROAS improvement typically happens in months 2-3 as we identify winning creatives and audiences.',
  },
  {
    q: 'What is the minimum ad budget you work with?',
    a: "I typically work with clients spending a minimum of $2,000/month in ad spend. This ensures there's enough data to optimize effectively and achieve meaningful results.",
  },
  {
    q: 'Do you offer performance-based pricing?',
    a: 'Yes! For select clients, I offer hybrid pricing models that include a performance component tied to ROAS targets. Let\'s discuss what works best for your situation.',
  },
  {
    q: 'What platforms do you specialize in?',
    a: 'I specialize in Facebook Ads, Instagram Ads, Google Ads (Search, Shopping, Display), and TikTok Ads. I can manage single-platform or multi-platform strategies depending on your goals.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', budget: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#050810]">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#00f5ff]/5 via-[#bf00ff]/5 to-[#00f5ff]/5 blur-3xl rounded-full"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 text-sm text-[#00f5ff] font-mono mb-4">
            <Mail className="w-4 h-4" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] mb-4">
            Ready to <span className="gradient-text">Scale Your Business?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to explore what's possible —
            reach out. The first consultation is always free.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Methods + FAQ */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="reveal-left">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                <Link className="w-5 h-5 text-[#00f5ff]" /> Reach Me Directly
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 group block"
                    style={{
                      backgroundColor: method.bgColor,
                      borderColor: method.borderColor,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 10px 40px ${method.color}20, 0 0 20px ${method.color}10`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${method.color}20` }}
                    >
                      {(() => {
                        const IconComp = iconMap[method.icon];
                        return IconComp ? <IconComp className="w-7 h-7" style={{ color: method.color }} /> : null;
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white font-semibold">{method.label}</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: `${method.color}20`, color: method.color }}
                        >
                          {method.cta}
                        </span>
                      </div>
                      <div className="text-slate-300 text-sm font-medium">{method.value}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{method.description}</div>
                    </div>
                    <svg
                      className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: method.color }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="reveal-left">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-4">
                My Onboarding Process
              </h3>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Free Discovery Call', desc: 'We discuss your business, goals, and current ad performance (30 mins)' },
                  { step: '02', title: 'Account Audit', desc: 'I review your existing campaigns and identify exact issues and opportunities' },
                  { step: '03', title: 'Strategy Proposal', desc: 'I deliver a custom strategy with projected ROAS and timeline' },
                  { step: '04', title: 'Campaign Launch', desc: 'We begin implementation with full transparency and weekly reporting' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f5ff]/20 to-[#bf00ff]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00f5ff] text-sm font-mono font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="reveal-left">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#00f5ff]" /> Common Questions
              </h3>
              <div className="space-y-3">
                {faqItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 overflow-hidden"
                    style={{ backgroundColor: 'rgba(13,17,23,0.6)' }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left"
                    >
                      <span className="text-white text-sm font-medium">{item.q}</span>
                      <span
                        className="text-[#00f5ff] text-lg flex-shrink-0 transition-transform duration-300"
                        style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="reveal-right">
            <div className="glass-card rounded-2xl border border-[#00f5ff]/15 p-6 sm:p-8 relative overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00f5ff]/5 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#bf00ff]/5 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-2">Send Me a Message</h3>
                <p className="text-slate-400 text-sm mb-6">Fill out the form and I'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <Trophy className="w-16 h-16 text-[#00f5ff] animate-bounce" />
                    <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">Message Sent!</h4>
                    <p className="text-slate-400">Thanks for reaching out! I'll reply within 24 hours.</p>
                    <div className="flex items-center gap-2 text-[#39ff14] text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
                      Expect a response soon
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 text-sm font-medium mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ahmed ali"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ahmed@gmail.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Monthly Ad Budget</label>
                      <input
                        type="text"
                        required
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="2,000 – 5,000 EGP / month"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Tell Me About Your Goals *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="I'm looking to scale my business with Facebook Ads. Currently spending 3000 EGP/month with a 2x ROAS and want to hit 5x while scaling to 10000 EGP/month..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00f5ff]/50 focus:bg-[#00f5ff]/5 transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-neon w-full py-4 rounded-xl bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] text-[#050810] font-bold text-base hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
                    >
                      Send Message & Get Free Audit →
                    </button>

                    <p className="text-slate-600 text-xs text-center flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> Your information is 100% private. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201559969297?text=Hi%20Ahmed!%20I%27d%20like%20to%20discuss%20my%20marketing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] font-bold text-base hover:bg-[#25D366]/20 hover:border-[#25D366]/70 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp — Quick Response Guaranteed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
