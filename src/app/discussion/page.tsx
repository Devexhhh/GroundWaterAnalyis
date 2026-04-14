import PageHeader from '@/components/PageHeader'
import SectionDivider from '@/components/SectionDivider'

const causes = [
  {
    num: '01',
    title: 'Rapid Urbanisation & "Concrete Mantle"',
    severity: 'Primary Driver',
    severityColor: 'text-red-700 bg-red-50 border-red-200',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    body: `The transformation of Ranchi from a plateau town to a sprawling state capital has led to massive concretization. Paved roads, residential complexes, and commercial zones act as an impermeable "mantle," blocking monsoon rainfall from percolating into the soil. This has completely fractured the natural rainfall-recharge correlation post-2021, turning potential groundwater into surface runoff.`,
    evidence: 'Continuous pre-monsoon drop despite steady ~1180mm rain (2022-2024)',
  },
  {
    num: '02',
    title: 'Unregulated Deep Borewell Extraction',
    severity: 'Primary Driver',
    severityColor: 'text-red-700 bg-red-50 border-red-200',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    body: `To compensate for municipal water supply gaps, high-density residential apartments rely entirely on high-capacity submersible pumps. These borewells tap into the deeper, secondary fracture zones of the aquifer, extracting water continuously throughout the year. This aggressive "mining" creates severe localized cones of depression that the natural monsoon can no longer refill.`,
    evidence: 'District average plunged from 3.60m (2021) to 8.27m (2024)',
  },
  {
    num: '03',
    title: 'Agricultural & Industrial Shifts',
    severity: 'Significant',
    severityColor: 'text-orange-700 bg-orange-50 border-orange-200',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    body: `While traditional Kharif paddy relies on the monsoon, there is an increasing agricultural shift toward commercial dry-season cultivation in specific rural blocks (like Silli). Additionally, industrial and mining activities in blocks like Khelari place highly concentrated, year-round stress on localized aquifers, exacerbating the regional extraction rate.`,
    evidence: 'CGWB 2024 report specifically flags Silli and Khelari blocks',
  },
  {
    num: '04',
    title: 'Hard-Rock Hydrogeology',
    severity: 'Contributing',
    severityColor: 'text-amber-700 bg-amber-50 border-amber-200',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    body: `Ranchi sits on the Chota Nagpur Plateau, characterized by Archean granite and gneiss formations (CGGC suit). This hard-rock geology lacks primary porosity (unlike the vast alluvial plains of northern India). The limited storage capacity of the weathered mantle means the aquifer cannot sustain prolonged over-extraction and requires consistent, unhindered annual recharge to survive.`,
    evidence: 'Inherent geological limitation limiting storage buffer',
  },
  {
    num: '05',
    title: 'Climate Variability',
    severity: 'Contributing',
    severityColor: 'text-blue-700 bg-blue-50 border-blue-200',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    body: `Rainfall records indicate vulnerability to erratic monsoon behaviors. During historic deficit years, the groundwater system experienced acute shock. Because of the hard-rock geology's low storage capacity, severe drought years cause an immediate and sharp plunge in the water table, leaving almost no buffer for the subsequent summer.`,
    evidence: '2009 drought (820mm) and 2012 deficit (870mm) caused sharp drops',
  },
]

export default function DiscussionPage() {
  return (
    <div>
      <PageHeader
        chapter="Chapter 06 — Discussion"
        title="Causes of Groundwater Depletion"
        subtitle="Multi-factor Analysis for Ranchi"
        description="A structured examination of the anthropogenic and climatic drivers responsible for the severe post-2021 decline in groundwater levels across the Ranchi district."
      />

      <div className="page-container">

        {/* Cause severity overview */}
        <section className="mb-14">
          <p className="section-label mb-6">Driver Severity Overview (Urban Context)</p>
          <div className="border border-ink/10 bg-white rounded-sm overflow-hidden">
            {[
              { label: 'Urbanisation (Concrete Mantle)', weight: 45, color: 'bg-red-500' },
              { label: 'Deep Borewell Extraction', weight: 35, color: 'bg-red-400' },
              { label: 'Agricultural & Industrial Draft', weight: 12, color: 'bg-orange-400' },
              { label: 'Hard-Rock Geology Limits', weight: 5, color: 'bg-amber-400' },
              { label: 'Climate Variability', weight: 3, color: 'bg-blue-300' },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-4 px-5 py-3.5 border-b border-ink/6 last:border-0">
                <span className="font-sans text-sm text-ink/60 w-56 shrink-0">{d.label}</span>
                <div className="flex-1 h-3 bg-ink/5 rounded-full overflow-hidden">
                  <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.weight}%` }} />
                </div>
                <span className="font-mono text-xs text-ink/50 w-8 text-right">{d.weight}%</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-ink/35 mt-2 italic">Estimated relative contribution to the recent rapid groundwater depletion rate in urban Ranchi.</p>
        </section>

        {/* Detailed cause cards */}
        <section className="mb-14">
          <p className="section-label mb-6">Detailed Analysis</p>
          <div className="space-y-4">
            {causes.map((c) => (
              <div key={c.num} className="border border-ink/8 bg-white rounded-sm overflow-hidden">
                <div className="flex items-start gap-5 p-6">
                  <span className="font-mono text-xs text-water/50 shrink-0 mt-0.5">{c.num}</span>
                  <div className="text-water/60 shrink-0 mt-0.5">{c.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-serif font-semibold text-ink text-lg">{c.title}</h3>
                      <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${c.severityColor}`}>
                        {c.severity}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-ink/60 leading-relaxed mb-4">{c.body}</p>
                    <div className="inline-flex items-center gap-2 bg-ink/3 rounded-sm px-3 py-1.5">
                      <span className="font-mono text-[10px] text-ink/40 uppercase tracking-wider">Evidence:</span>
                      <span className="font-mono text-xs text-water">{c.evidence}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider label="Systemic Assessment" />

        {/* Synthesis */}
        <section className="mb-14">
          <p className="section-label mb-4">Synthesis</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="ruled-lines bg-white border border-ink/8 rounded-sm p-6">
              <p className="font-serif text-base font-semibold text-ink mb-3">The "Disconnect" Imbalance</p>
              <p className="font-sans text-sm text-ink/60 leading-[28px]">
                The fundamental cause of recent depletion in Ranchi is a structural disconnect between rainfall and recharge. While historic data (1995-2021) proved rainfall dictated water levels, rapid urban concretization has severed this link. Rain falls heavily, but it cannot enter the aquifer, causing severe pre-monsoon crashes even in statistically normal or surplus years.
              </p>
            </div>
            <div className="ruled-lines bg-white border border-ink/8 rounded-sm p-6">
              <p className="font-serif text-base font-semibold text-ink mb-3">Geology vs. Extraction</p>
              <p className="font-sans text-sm text-ink/60 leading-[28px]">
                The hard-rock granite plateau provides very little natural water storage (low primary porosity). By combining this fragile storage system with industrial-scale submersible pumps in modern multi-story apartments (and heavy industrial drafts in localized blocks), the aquifer is being actively "mined" rather than sustainably tapped.
              </p>
            </div>
          </div>
        </section>

        {/* Hotspot zones */}
        <section>
          <p className="section-label mb-4">Critical Hotspot Areas</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-ink/10 bg-white text-sm">
              <thead>
                <tr className="border-b border-ink/10 bg-water-faint">
                  {['Sub-division / Block', 'Primary Stress Factor', 'GWL Trend', 'Priority Level'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-ink/50">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ranchi Urban', 'Concretization + Deep Borewells', '↓↓ Severe', 'Over-Exploited'],
                  ['Khelari', 'Industrialisation & Mining', '↓↓ Severe', 'Critical'],
                  ['Silli', 'Agricultural Activities (Rabi/Zaid)', '↓ Moderate', 'High'],
                  ['Namkum / Kanke', 'Peri-urban expansion + Institutions', '↓ Moderate', 'High'],
                  ['Rural Blocks (Karra/Angara)', 'Traditional Rainfed Agri + Domestic', '→ Stable', 'Safe'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-ink/6 hover:bg-water-faint/40 transition-colors">
                    <td className="px-4 py-3 font-sans text-sm font-medium text-ink">{row[0]}</td>
                    <td className="px-4 py-3 font-sans text-xs text-ink/60">{row[1]}</td>
                    <td className={`px-4 py-3 font-mono text-xs ${row[2].includes('Severe') ? 'text-red-600' : row[2].includes('Moderate') ? 'text-orange-500' : row[2].includes('Stable') ? 'text-green-600' : 'text-amber-500'}`}>{row[2]}</td>
                    <td className={`px-4 py-3 font-mono text-xs font-medium ${row[3] === 'Over-Exploited' || row[3] === 'Critical' ? 'text-red-600' : row[3] === 'High' ? 'text-orange-600' : row[3] === 'Moderate' ? 'text-amber-600' : 'text-green-600'}`}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-ink/35 mt-2 italic">Categorization aligned with CGWB Dynamic Assessment (March 2024).</p>
        </section>

      </div>
    </div>
  )
}