import PageHeader from '@/components/PageHeader'
import SectionDivider from '@/components/SectionDivider'
import Link from 'next/link'

const recommendations = [
  {
    num: '01',
    category: 'Urban Recharge Augmentation',
    color: 'border-water bg-water-faint',
    labelColor: 'text-water',
    items: [
      {
        title: 'Mandatory Rooftop Rainwater Harvesting (RWH)',
        priority: 'Immediate',
        priorityColor: 'bg-red-100 text-red-700',
        desc: 'Strictly enforce RWH structures for all high-rise residential complexes, commercial buildings, and institutions within the Ranchi Municipal Corporation. Bypassing the "concrete mantle" to artificially inject monsoon runoff directly into the fractured aquifer is the only way to reverse the current localized >30m urban depletion.',
        impact: 'Directly combats the post-2021 recharge disconnect',
      },
      {
        title: 'Rejuvenation of Urban Water Bodies',
        priority: 'Short-term',
        priorityColor: 'bg-amber-100 text-amber-700',
        desc: 'Undertake massive desilting, encroachment removal, and restoration of historical surface water bodies like Ranchi Lake (Bada Talab), Line Tank, and the Kanke Dam catchment area. These act as vital, continuous natural recharge zones for shallow unconfined aquifers.',
        impact: 'Restores natural urban percolation zones',
      },
    ],
  },
  {
    num: '02',
    category: 'Regulatory & Governance',
    color: 'border-amber-300 bg-amber-50',
    labelColor: 'text-amber-700',
    items: [
      {
        title: 'Deep Borewell Regulation & Licensing',
        priority: 'Immediate',
        priorityColor: 'bg-red-100 text-red-700',
        desc: 'Implement a strict licensing and metering system for drilling submersible borewells deeper than 50 meters in categorized "Over-Exploited" and "Critical" urban wards. Unregulated deep "mining" by apartment complexes and industrial pockets (e.g., Khelari) must be capped.',
        impact: 'Halts the rapid lowering of the static water table',
      },
      {
        title: 'Expansion of Municipal Piped Supply',
        priority: 'Medium-term',
        priorityColor: 'bg-blue-100 text-blue-700',
        desc: 'Accelerate the expansion of treated surface-water municipal supply to newly developed peri-urban areas (like Namkum and Kanke) to permanently reduce the domestic reliance on private groundwater extraction.',
        impact: 'Structurally lowers urban aquifer demand',
      },
    ],
  },
  {
    num: '03',
    category: 'Agricultural Water Management',
    color: 'border-green-300 bg-green-50',
    labelColor: 'text-green-700',
    items: [
      {
        title: 'Micro-Irrigation for Rabi & Summer Crops',
        priority: 'Immediate',
        priorityColor: 'bg-red-100 text-red-700',
        desc: 'Subsidize and aggressively promote drip and sprinkler irrigation for Rabi wheat and summer vegetable farming in heavily drafted rural blocks (like Silli). This will significantly reduce the agricultural stress on the aquifer during the critical Pre-Monsoon months.',
        impact: 'Est. 30–40% reduction in seasonal agricultural draft',
      },
      {
        title: 'Traditional Dug Well Restoration',
        priority: 'Short-term',
        priorityColor: 'bg-amber-100 text-amber-700',
        desc: 'Incentivize the maintenance of large-diameter traditional dug wells in rural areas instead of abandoning them for deep borewells. Dug wells tap into the renewable shallow aquifer and are naturally replenished by the monsoon.',
        impact: 'Preserves rural hydrogeological equilibrium',
      },
    ],
  },
  {
    num: '04',
    category: 'Watershed & Ecosystem',
    color: 'border-emerald-300 bg-emerald-50',
    labelColor: 'text-emerald-700',
    items: [
      {
        title: 'Permeable Urban Infrastructure',
        priority: 'Medium-term',
        priorityColor: 'bg-blue-100 text-blue-700',
        desc: 'Develop guidelines to replace solid concrete with permeable pavements in parking lots, footpaths, and public squares across Ranchi to allow rainwater to infiltrate the soil naturally.',
        impact: 'Mitigates the "concrete mantle" effect',
      },
      {
        title: 'Check Dams in Plateau Catchments',
        priority: 'Medium-term',
        priorityColor: 'bg-blue-100 text-blue-700',
        desc: 'Construct a series of check dams and contour trenches across the undulating plateau topography in rural blocks (like Jonha and Angara) to slow down surface runoff and increase the retention time for groundwater recharge.',
        impact: 'Enhances regional hard-rock aquifer storage',
      },
    ],
  },
]

export default function RecommendationsPage() {
  return (
    <div>
      <PageHeader
        chapter="Chapter 07 — Recommendations"
        title="Sustainable Groundwater Management"
        subtitle="Intervention Framework for Ranchi"
        description="Evidence-based recommendations for reversing the severe urban groundwater depletion trends in Ranchi district, organized by intervention category and implementation priority."
      />

      <div className="page-container">

        {/* Priority matrix */}
        <section className="mb-14">
          <p className="section-label mb-6">Implementation Priority Matrix</p>
          <div className="grid grid-cols-3 gap-px bg-ink/8 border border-ink/8">
            {[
              { label: 'Immediate', sub: '0–2 years', color: 'bg-red-50', count: '3 measures' },
              { label: 'Short-term', sub: '2–5 years', color: 'bg-amber-50', count: '2 measures' },
              { label: 'Medium-term', sub: '5–10 years', color: 'bg-blue-50', count: '3 measures' },
            ].map(p => (
              <div key={p.label} className={`${p.color} p-5`}>
                <p className="font-serif font-semibold text-ink text-base mb-1">{p.label}</p>
                <p className="font-mono text-xs text-ink/40 mb-3">{p.sub}</p>
                <p className="font-sans text-sm text-ink/60">{p.count} recommended</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-14 space-y-8">
          {recommendations.map((group) => (
            <div key={group.num} className={`border-2 rounded-sm overflow-hidden ${group.color}`}>
              <div className="px-6 py-4 border-b border-ink/8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink/30">{group.num}</span>
                  <h2 className={`font-serif font-semibold text-lg ${group.labelColor}`}>{group.category}</h2>
                </div>
              </div>
              <div className="divide-y divide-ink/6">
                {group.items.map((item, i) => (
                  <div key={i} className="bg-white px-6 py-5">
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <h3 className="font-sans font-semibold text-ink text-sm flex-1">{item.title}</h3>
                      <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${item.priorityColor}`}>
                        {item.priority}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-ink/60 leading-relaxed mb-3">{item.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-ink/3 rounded-sm px-3 py-1.5">
                      <span className="font-mono text-[10px] text-ink/40 uppercase tracking-wider">Expected Impact:</span>
                      <span className="font-mono text-xs text-water">{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <SectionDivider label="Conclusion" />

        {/* Conclusion */}
        <section className="mb-14">
          <p className="section-label mb-4">Conclusion</p>
          <div className="ruled-lines bg-white border border-ink/8 rounded-sm p-6 mb-6">
            <p className="font-sans text-sm text-ink/70 leading-[28px]">
              The groundwater situation in Jharkhand presents a stark urban-rural divide. While the state overall is statistically classified as "Safe" (31.42% extraction stage) due to its vast rural and hilly areas, our 30-year analysis (1995–2024) of CGWB monitoring data reveals a catastrophic, localized crash in urban and industrial centers like Ranchi. Pre-monsoon water tables have plunged from a record shallow 3.60 m bgl in 2021 to a district average of 8.27 m bgl by 2024, with high-density urban hotspots plunging well beyond 30 m bgl.
            </p>
            <p className="font-sans text-sm text-ink/70 leading-[28px] mt-4">
              Crucially, our correlation analysis proves that this severe recent depletion is no longer climate-driven. Post-2021 data shows an alarming disconnect: despite statistically steady rainfall (~1,180 mm annually), groundwater levels continue to crash. This confirms that rapid urbanization has created an impermeable "concrete mantle," preventing monsoon rains from percolating into the hard-rock aquifers, while unregulated deep borewells simultaneously drain the remaining storage.
            </p>
            <p className="font-sans text-sm text-ink/70 leading-[28px] mt-4">
              Without urgent, structured intervention, Ranchi’s urban core faces an imminent water crisis. The recommended framework — centered on mandatory rooftop rainwater harvesting, strict borewell regulation, urban lake rejuvenation, and rural micro-irrigation — offers an evidence-based pathway to restore the fractured recharge cycle. Implementation must be aggressively coordinated between the Ranchi Municipal Corporation, the CGWB, and the Jharkhand State Groundwater Directorate.
            </p>
          </div>

          {/* Data sources cited */}
          <div className="border border-ink/8 bg-white rounded-sm p-5">
            <p className="section-label mb-3">Data Sources & References</p>
            <div className="space-y-1.5">
              {[
                'Central Ground Water Board. Dynamic Ground Water Resources of Jharkhand (March 2024). Ministry of Jal Shakti, GoI.',
                'Central Ground Water Board. Ground Water Yearbook Jharkhand (2024-2025). SUO Ranchi.',
                'India Water Resources Information System (India WRIS). Groundwater Level Data Portal. (Extracted 1995–2024). https://indiawris.gov.in',
                'India Meteorological Department. District Rainfall Historical Imputations (1994–2024).',
                'District Agriculture Estimates, Ranchi. (Step 7 Data Analysis).',
                'Python Data Analysis (Pandas/Matplotlib) utilizing Mean Imputation for historical sensor failure correction.',
              ].map((ref, i) => (
                <div key={i} className="flex gap-3 py-1.5 border-b border-ink/5 last:border-0">
                  <span className="font-mono text-[10px] text-water/50 shrink-0 mt-0.5">[{i + 1}]</span>
                  <p className="font-sans text-xs text-ink/50 leading-relaxed">{ref}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation back */}
        <div className="flex justify-between items-center pt-6 border-t border-ink/8">
          <Link href="/discussion" className="flex items-center gap-2 text-sm font-sans text-ink/50 hover:text-water transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Discussion
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-sans text-ink/50 hover:text-water transition-colors">
            Back to Overview
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  )
}