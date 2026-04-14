import Link from 'next/link'

const sections = [
  { num: '01', href: '/study-area', label: 'Study Area', desc: 'Geographic location, coordinates, population and agro-climatic classification of Ranchi District.' },
  { num: '02', href: '/data-analysis', label: 'Groundwater Analysis', desc: 'Pre-monsoon and post-monsoon water level trends over 30 years (1995–2024) from CGWB monitoring wells.' },
  { num: '03', href: '/rainfall', label: 'Rainfall Relationship', desc: 'Historical IMD rainfall data correlated with observed groundwater levels, highlighting the post-2021 recharge disconnect.' },
  { num: '04', href: '/resource-status', label: 'Resource Status', desc: 'Groundwater development stage and sectoral draft classification per the CGWB Dynamic Assessment (March 2024).' },
  { num: '05', href: '/agriculture', label: 'Agricultural Influence', desc: 'Major crops, irrigated area, and the localized stress caused by Rabi/Summer cultivation in rural blocks.' },
  { num: '06', href: '/discussion', label: 'Discussion', desc: 'Causes of depletion — the "concrete mantle" effect, deep borewell mining, hard-rock geology, and climate variability.' },
  { num: '07', href: '/recommendations', label: 'Recommendations', desc: 'Sustainable management strategies including mandatory rooftop rainwater harvesting and strict urban borewell regulation.' },
]

export default function HomePage() {
  return (
    <div className={`font-sans min-h-screen relative selection:bg-blue-100 selection:text-blue-900`}>
      {/* Hero */}
      <section className="topo-bg bg-water-faint border-b border-ink/8 min-h-[90vh] flex flex-col justify-center">
        {/* Adjusted vertical padding for mobile (py-16) and larger screens (md:py-24) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <p className="section-label mb-4 sm:mb-6 text-sm sm:text-base">Hydrological Study · Ranchi · 2026</p>

          <h1 className="font-jakarta font-medium text-slate-900 leading-[1.1] tracking-tight text-4xl sm:text-6xl lg:text-[5.5rem] mb-6 sm:mb-8">
            Assessment of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Groundwater
            </span> Status.
          </h1>

          <p className="font-sans text-ink/55 text-base sm:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10">
            Ranchi District, Jharkhand, India — a comprehensive 30-year analysis examining the severe impact of rapid urbanization on aquifer recharge, seasonal water-level fluctuations, and resource sustainability.
          </p>

          {/* Changed buttons to stack on mobile and sit side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/study-area"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-water text-white font-sans text-sm font-medium px-5 py-3 sm:py-2.5 rounded-sm hover:bg-water-light transition-colors"
            >
              Begin Reading
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/data-analysis"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-ink/15 text-ink/70 font-sans text-sm font-medium px-5 py-3 sm:py-2.5 rounded-sm hover:border-water hover:text-water transition-colors"
            >
              Jump to Analysis
            </Link>
          </div>

          {/* Key stats strip: Updated to a 2x2 grid on mobile, and a 4-col row on large screens */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/8 border border-ink/8">
            {[
              { v: '30 yrs', l: 'Data Period' },
              { v: '5,097', l: 'Area (km²)' },
              { v: '8.27m', l: 'Avg. Depth' },
              { v: '31.4%', l: 'Extraction' },
            ].map((s) => (
              <div key={s.l} className="bg-white px-4 sm:px-5 py-4">
                <p className="font-mono text-lg sm:text-xl font-medium text-ink">{s.v}</p>
                <p className="font-sans text-[10px] sm:text-xs text-ink/40 mt-1 uppercase tracking-wide">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contents */}
      {/* Adjusted padding for the main content area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <p className="section-label text-sm sm:text-base">Table of Contents</p>
          <div className="h-px bg-ink/10 flex-1" />
        </div>

        <div className="space-y-px bg-ink/8 border border-ink/8">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              // Tightened gap and padding for mobile readability
              className="group flex items-start gap-4 sm:gap-6 bg-white px-4 py-4 sm:px-6 sm:py-5 hover:bg-water-faint transition-colors"
            >
              <span className="font-mono text-xs sm:text-sm text-water/50 mt-1 shrink-0 pt-0.5">{s.num}</span>
              <div className="flex-1">
                <p className="font-jakarta font-medium text-ink text-base sm:text-lg group-hover:text-water transition-colors">
                  {s.label}
                </p>
                <p className="font-sans text-xs sm:text-sm text-ink/45 mt-1 leading-relaxed">{s.desc}</p>
              </div>
              <svg className="w-4 h-4 text-ink/20 group-hover:text-water mt-1.5 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}