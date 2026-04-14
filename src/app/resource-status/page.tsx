import PageHeader from '@/components/PageHeader'
import DataCard from '@/components/DataCard'

const categories = [
  { label: 'Safe', range: '< 70%', color: 'bg-green-100 border-green-300', text: 'text-green-800', active: true },
  { label: 'Semi-Critical', range: '70 – 90%', color: 'bg-amber-100 border-amber-400', text: 'text-amber-800', active: false },
  { label: 'Critical', range: '90 – 100%', color: 'bg-orange-100 border-orange-400', text: 'text-orange-800', active: false },
  { label: 'Over-Exploited', range: '> 100%', color: 'bg-red-100 border-red-400', text: 'text-red-800', active: false },
]

export default function ResourceStatusPage() {
  return (
    <div>
      <PageHeader
        chapter="Chapter 04 — Resource Status"
        title="Groundwater Resource Assessment"
        subtitle="CGWB Dynamic Assessment Data (March 2024)"
        description="Classification of the region's groundwater development stage based on the Central Ground Water Board's (GEC 2015) methodology, comparing annual extraction against net availability."
      />

      {/* Added responsive wrapper classes consistent with other pages */}
      <div className="page-container px-4 sm:px-6 mx-auto max-w-5xl py-8 sm:py-12">

        {/* Current status */}
        <section className="mb-10 sm:mb-14 selection:bg-blue-100 selection:text-blue-900">
          <p className="section-label mb-4 sm:mb-6 text-sm sm:text-base">Current Classification (State Aggregate)</p>
          {/* Changed to 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/8 border border-ink/8">
            {categories.map((c) => (
              <div key={c.label} className={`p-4 sm:p-6 border-2 ${c.color} ${c.active ? 'ring-2 ring-offset-1 ring-green-400' : 'border-transparent'}`}>
                <p className={`font-serif font-semibold text-base sm:text-xl mb-1 ${c.text}`}>{c.label}</p>
                <p className="font-mono text-[10px] sm:text-xs text-ink/40 mb-2 sm:mb-3">{c.range}</p>
                {c.active && (
                  <span className="inline-block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider bg-green-400 text-green-900 px-2 py-0.5 rounded-full">
                    Jharkhand Average
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resource balance */}
        <section className="mb-10 sm:mb-14 selection:bg-blue-100 selection:text-blue-900">
          <p className="section-label mb-4 sm:mb-6 text-sm sm:text-base">Resource Balance Sheet</p>
          {/* Scaled from 1 col on ultra-narrow, to 2 on tablet, to 4 on desktop */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <DataCard label="Net Annual Availability" value="5.76" unit="BCM" note="Extractable resources (post-natural discharge)" />
            <DataCard label="Annual Extraction" value="1.81" unit="BCM" accent="accent" note="Draft for all uses" />
            <DataCard label="Stage of Development" value="31.42" unit="%" note="Classified as Safe (< 70%)" accent="green" />
            <DataCard label="Future Availability" value="3.96" unit="BCM" note="Net GW available for future use" />
          </div>
        </section>

        {/* Stage gauge */}
        <section className="mb-10 sm:mb-14 selection:bg-blue-100 selection:text-blue-900">
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Development Stage Gauge</p>
          <div className="border border-ink/8 bg-white rounded-sm p-4 sm:p-6">
            <div className="flex justify-between items-center font-mono text-[10px] sm:text-xs text-ink/40 mb-2">
              <span>0%</span>
              <span>70%</span>
              <span>90%</span>
              <span>100%</span>
            </div>
            <div className="relative h-4 sm:h-5 bg-ink/5 rounded-full overflow-hidden">
              {/* Color segments */}
              <div className="absolute inset-0 flex">
                <div className="bg-green-200" style={{ width: '70%' }} />
                <div className="bg-amber-200" style={{ width: '20%' }} />
                <div className="bg-orange-200" style={{ width: '10%' }} />
              </div>
              {/* Fill indicator */}
              <div
                className="absolute top-0 left-0 h-full bg-green-500/70 rounded-full transition-all"
                style={{ width: '31.42%' }}
              />
              {/* Marker */}
              <div
                className="absolute top-0 h-full w-[1.5px] sm:w-0.5 bg-ink"
                style={{ left: '31.42%' }}
              />
            </div>
            {/* Added tracking-tight for very small screens to prevent label overflow */}
            <div className="flex justify-between font-mono text-[9px] sm:text-[10px] tracking-tighter sm:tracking-normal text-ink/40 mt-2">
              <span className="text-green-700">Safe</span>
              <span className="text-amber-700">Semi-critical</span>
              <span className="text-orange-700">Critical</span>
              <span className="text-red-700">Over-expl.</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink/60 mt-4 sm:mt-5 leading-relaxed">
              Current macro extraction stage: <strong className="text-green-700">31.42% (Safe)</strong> — mathematically secure at a state-wide aggregate level due to vast rural areas offsetting demand. However, localized urban centres like <strong>Ranchi Urban, Dhanbad Urban, and Jamshedpur Urban</strong> are experiencing dangerously high stages of development due to rapid urbanization.
            </p>
          </div>
        </section>

        {/* Sector-wise use */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Sector-wise Groundwater Extraction (1.81 BCM Total)</p>
          <div className="space-y-3">
            {[
              { sector: 'Agriculture (Irrigation Draft: 0.94 BCM)', pct: 52, color: 'bg-green-400' },
              { sector: 'Domestic & Municipal (Draft: 0.65 BCM)', pct: 36, color: 'bg-water' },
              { sector: 'Industrial & Mining (Draft: 0.22 BCM)', pct: 12, color: 'bg-amber-400' },
            ].map((s) => (
              <div key={s.sector} className="border border-ink/8 bg-white rounded-sm p-4">
                {/* Changed layout to stack on mobile, align on desktop */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3 gap-1 sm:gap-0">
                  <span className="font-sans text-xs sm:text-sm text-ink/70 leading-snug">{s.sector}</span>
                  <span className="font-mono text-sm sm:text-base font-medium text-ink">{s.pct}%</span>
                </div>
                <div className="h-2 bg-ink/5 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CGWB note */}
        <section>
          <div className="border-l-2 border-water bg-water-faint rounded-r-sm p-4 sm:p-5 selection:bg-blue-100 selection:text-blue-900">
            <p className="section-label mb-2 text-sm sm:text-base">Assessment Unit Categorization & Urban Caveat</p>
            <p className="font-sans text-xs sm:text-sm text-ink/60 leading-relaxed mb-3">
              As per the March 2024 Dynamic Ground Water Resource Assessment, the overall state falls safely under the <strong>Safe (31.42%)</strong> category, an increase from 31.38% in 2023. Out of 263 assessment units (259 blocks and 4 urban centres), <strong>240 units (91.25%) remain Safe</strong>. 
            </p>
            <p className="font-sans text-xs sm:text-sm text-ink/60 leading-relaxed">
              However, it is crucial to note the stark urban-rural divide. <strong>5 units are Over-Exploited</strong>, 6 are Critical, and 12 are Semi-Critical. High extraction stages are heavily concentrated in industrialized zones (Bermo, Baliapur, Topchanchi, Khelari) and major urbanizations like <strong>Ranchi Urban</strong> and Jamshedpur Urban. These stressed pockets require immediate micro-watershed interventions.
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] text-ink/40 mt-3 sm:mt-4">Source: CGWB Re-estimation of Ground Water Resources of Jharkhand (March 2024).</p>
          </div>
        </section>

      </div>
    </div>
  )
}