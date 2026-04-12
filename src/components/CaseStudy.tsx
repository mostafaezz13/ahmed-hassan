export default function CaseStudy() {
  const milestones = [
    { month: 'Month 1', action: 'Account audit, pixel setup, campaign restructure, 20 creative tests launched', revenue: '$12K', roas: '2.1x', color: '#00f5ff' },
    { month: 'Month 2', action: 'Found 3 winning ad sets, scaled budget 3x, launched dynamic retargeting', revenue: '$47K', roas: '4.8x', color: '#bf00ff' },
    { month: 'Month 3', action: 'Launched Lookalike audiences, expanded to Instagram Stories & Reels', revenue: '$89K', roas: '6.3x', color: '#39ff14' },
    { month: 'Month 4', action: 'Full budget scale to $18.5K/mo, launched Google Shopping to capture intent', revenue: '$136K', roas: '7.4x', color: '#00f5ff' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-bg-base">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00f5ff]/5 via-[#bf00ff]/5 to-[#00f5ff]/5 blur-3xl rounded-full"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bf00ff]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 text-sm text-[#00f5ff] font-mono mb-4">
            🔬 Featured Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-base font-['Space_Grotesk'] mb-4">
            From $9K to <span className="gradient-text">$136K/Month</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            How I scaled a fashion e-commerce brand to 7.4x ROAS in just 4 months
            with a systematic creative testing and funnel strategy.
          </p>
        </div>

        {/* Problem → Result overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <div className="reveal lg:col-span-1 glass-card rounded-2xl p-6 border border-red-500/20 bg-red-500/5">
            <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              The Problem
            </div>
            <ul className="space-y-3 text-text-muted text-sm">
              {[
                'Burning $5,000/month with only 1.8x ROAS',
                'No consistent creative testing process',
                'Targeting was too broad — wasted spend',
                'No retargeting campaigns in place',
                'Zero data on what was actually driving sales',
                'Ad fatigue causing CPM to spike monthly',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-1 glass-card rounded-2xl p-6 border border-[#00f5ff]/20">
            <div className="text-[#00f5ff] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f5ff]"></span>
              My Strategy
            </div>
            <ul className="space-y-3 text-text-muted text-sm">
              {[
                'Complete account audit and pixel verification',
                'Rebuilt campaign structure (TOF / MOF / BOF)',
                'Launched 40+ creative variations in 30 days',
                'Dynamic Product Ads (DPA) for retargeting',
                'Lookalike audiences from top 1% buyers',
                'Weekly creative refresh to prevent fatigue',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#00f5ff] mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-1 glass-card rounded-2xl p-6 border border-[#39ff14]/20 bg-[#39ff14]/5">
            <div className="text-[#39ff14] font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
              Final Results
            </div>
            <div className="space-y-4">
              {[
                { label: 'ROAS', value: '7.4x', prev: 'was 1.8x' },
                { label: 'Revenue', value: '$136K/mo', prev: 'was $9K/mo' },
                { label: 'CPA', value: '$11', prev: 'was $42' },
                { label: 'CTR', value: '3.8%', prev: 'was 0.9%' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">{stat.label}</span>
                  <div className="text-right">
                    <div className="text-[#39ff14] font-bold text-base">{stat.value}</div>
                    <div className="text-text-muted text-xs">{stat.prev}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-text-base font-['Space_Grotesk'] text-center mb-10">
            Month-by-Month <span className="neon-text-cyan">Growth Timeline</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00f5ff] via-[#bf00ff] to-[#00f5ff] hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-6">
              {milestones.map((m, i) => (
                <div key={m.month} className="relative flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                  {/* Node */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 font-bold text-xs font-mono"
                    style={{ borderColor: m.color, backgroundColor: `${m.color}15`, color: m.color }}
                  >
                    <div>
                      <div>{i + 1}</div>
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: m.color }}></div>
                  </div>

                  <div className="font-bold text-text-base font-['Space_Grotesk'] mb-1">{m.month}</div>
                  <div className="text-2xl font-black mb-0.5" style={{ color: m.color }}>{m.revenue}</div>
                  <div className="text-xs text-text-muted mb-3">{m.roas} ROAS</div>
                  <p className="text-text-muted text-xs leading-relaxed">{m.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="reveal">
          <div className="relative rounded-2xl border border-[#00f5ff]/20 bg-gradient-to-br from-[#00f5ff]/5 to-[#bf00ff]/5 p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-4 left-8 text-6xl text-[#00f5ff]/20 font-serif leading-none">"</div>
            <div className="absolute bottom-0 right-8 text-6xl text-[#bf00ff]/20 font-serif leading-none rotate-180">"</div>
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl text-text-base font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
                Within 4 months, Ahmed completely transformed our paid advertising. We went from losing money on ads to
                generating our best revenue month ever. The process was transparent, data-driven, and the results speak for themselves.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#bf00ff] flex items-center justify-center text-lg">
                  👤
                </div>
                <div className="text-left">
                  <div className="text-text-base font-semibold">Sarah K.</div>
                  <div className="text-text-muted text-sm">Founder, Luxe Fashion Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
