import PageHeader from '@/components/PageHeader'
import DataCard from '@/components/DataCard'
import SectionDivider from '@/components/SectionDivider'

const cropData = [
  { crop: 'Paddy (Kharif)', area: '~180,000', source: 'Rainfed / Dug Wells', req: 'High (900–1,500 mm)', season: 'Jun–Nov' },
  { crop: 'Vegetables (Rabi/Zaid)', area: '~25,000', source: 'Groundwater (Bore/Dug Wells)', req: 'Medium (400–600 mm)', season: 'Year-round' },
  { crop: 'Maize', area: '~15,000', source: 'Rainfed', req: 'Medium (500–800 mm)', season: 'Jun–Sep' },
  { crop: 'Wheat (Rabi)', area: '~8,000', source: 'Tubewells / Surface', req: 'Medium (450–650 mm)', season: 'Nov–Mar' },
  { crop: 'Pulses & Oilseeds', area: '~12,000', source: 'Rainfed / Residual Moisture', req: 'Low (300–450 mm)', season: 'Oct–Mar' },
]

export default function AgriculturePage() {
  return (
    <div>
      <PageHeader
        chapter="Chapter 05 — Agricultural Influence"
        title="Agricultural Water Use"
        subtitle="District Crop Statistics · Ranchi"
        description="Analysis of major crops cultivated in Ranchi district, their irrigated area, primary water sources, and the shifting trend toward groundwater-dependent Rabi cultivation that exacerbates pre-monsoon aquifer stress in rural blocks."
      />

      {/* Added standardized responsive container constraints */}
      <div className="page-container px-4 sm:px-6 mx-auto max-w-5xl py-8 sm:py-12">

        {/* Summary cards */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-4 sm:mb-6 text-sm sm:text-base">Agricultural Overview</p>
          {/* Shifted to 2 columns on mobile, 4 on medium screens and up */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <DataCard label="Net Sown Area" value="240,000" unit="ha" note="Approximate district total" />
            <DataCard label="Net Irrigated Area" value="38,000" unit="ha" note="Only ~15% of net sown area" />
            <DataCard label="GW-Irrigated Share" value="82" unit="%" note="High reliance on wells/borewells" accent="accent" />
            <DataCard label="Dominant Crop" value="Paddy" unit="" note="Mostly rainfed Kharif mono-crop" accent="green" />
          </div>
        </section>

        {/* Crop table */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Crop-wise Area, Source & Water Requirement</p>
          {/* Added min-w and border styling to contain horizontal scrolling smoothly */}
          <div className="overflow-x-auto border border-ink/10 rounded-sm shadow-sm">
            <table className="w-full min-w-[600px] bg-white text-sm">
              <thead>
                <tr className="border-b border-ink/10 bg-water-faint">
                  {['Crop', 'Area (ha)', 'Irrigation Source', 'Water Requirement', 'Season'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-ink/50 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cropData.map((row, i) => (
                  <tr key={i} className="border-b border-ink/6 hover:bg-water-faint/40 transition-colors last:border-0">
                    <td className="px-4 py-3.5 font-sans text-xs sm:text-sm font-medium text-ink whitespace-nowrap">{row.crop}</td>
                    <td className="px-4 py-3.5 font-mono text-xs sm:text-sm text-ink/70 whitespace-nowrap">{row.area}</td>
                    <td className="px-4 py-3.5 font-sans text-[11px] sm:text-xs text-ink/60 whitespace-nowrap">{row.source}</td>
                    <td className={`px-4 py-3.5 font-sans text-[11px] sm:text-xs whitespace-nowrap ${row.req.startsWith('High') ? 'text-water-600' : row.req.startsWith('Medium') ? 'text-amber-600' : 'text-green-700'}`}>
                      {row.req}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-[10px] sm:text-xs text-ink/40 whitespace-nowrap">{row.season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-[10px] sm:text-xs text-ink/35 mt-3 sm:mt-2 italic">
            Source: District Agriculture Estimates & CGWB Field Assessments.
          </p>
        </section>

        <SectionDivider label="Irrigation Infrastructure" />

        {/* Irrigation sources breakdown */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Irrigation Source Distribution</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border border-ink/8 bg-white rounded-sm p-4 sm:p-6">
              <p className="font-serif text-base sm:text-lg font-semibold text-ink mb-4 sm:mb-5">Source-wise Share of Irrigated Area</p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { src: 'Dug Wells (Traditional)', pct: 45, color: 'bg-water-light' },
                  { src: 'Tubewells / Borewells', pct: 37, color: 'bg-water' },
                  { src: 'Canal / Check Dams', pct: 12, color: 'bg-amber-300' },
                  { src: 'Other Sources (Ponds)', pct: 6, color: 'bg-ink/15' },
                ].map(s => (
                  <div key={s.src}>
                    <div className="flex justify-between text-[11px] sm:text-xs mb-1.5">
                      <span className="font-sans text-ink/70 sm:text-ink/60">{s.src}</span>
                      <span className="font-mono text-ink/70 font-medium sm:font-normal">{s.pct}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-ink/5 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-ink/8 bg-white rounded-sm p-4 sm:p-6">
              <p className="font-serif text-base sm:text-lg font-semibold text-ink mb-4 sm:mb-5">Irrigation Infrastructure Character</p>
              <div className="space-y-1 sm:space-y-2">
                {[
                  { k: 'Primary Rural Source', v: 'Large-diameter Dug Wells' },
                  { k: 'Emerging Trend', v: 'Deep Submersible Pumps' },
                  { k: 'Topography', v: 'Plateau / Undulating' },
                  { k: 'Surface Water Storage', v: 'Check Dams & Ahars' },
                  { k: 'Aquifer Type', v: 'Weathered Granite/Gneiss' },
                  { k: 'Micro-Irrigation Adoption', v: 'Very Low (< 5%)' },
                ].map(r => (
                  <div key={r.k} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-1.5 border-b border-ink/6 last:border-0 gap-1 sm:gap-0">
                    <span className="font-sans text-[11px] sm:text-xs text-ink/55">{r.k}</span>
                    <span className="font-mono text-xs text-ink font-medium">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal water demand */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Seasonal Groundwater Demand Pressure</p>
          {/* Using lg:grid-cols-3 instead of sm:grid-cols-3 to prevent extreme column crushing on tablets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8">
            {[
              {
                season: 'Kharif (Jun–Nov)',
                pressure: 'Low (Rainfed)',
                color: 'text-green-700',
                bg: 'bg-green-50',
                desc: 'Ranchi agriculture is dominated by Kharif Paddy. Monsoon rainfall meets almost all crop water needs. Groundwater use is minimal, allowing the rural aquifer to naturally recharge.',
              },
              {
                season: 'Rabi (Nov–Mar)',
                pressure: 'Moderate to High',
                color: 'text-amber-700',
                bg: 'bg-amber-50',
                desc: 'A growing shift towards commercial vegetable and wheat cultivation. Since surface water dries up quickly on the plateau, this season relies heavily on extracting groundwater via borewells.',
              },
              {
                season: 'Summer (Apr–Jun)',
                pressure: 'Severe Stress',
                color: 'text-red-800',
                bg: 'bg-red-100',
                desc: 'The pre-monsoon period. The water table reaches its annual minimum. Agricultural draft for summer vegetables heavily competes with rural domestic drinking water needs, frequently causing shallower dug wells to run dry.',
              },
            ].map(s => (
              <div key={s.season} className={`${s.bg} p-4 sm:p-6`}>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-ink/40 mb-1.5 sm:mb-1">{s.season}</p>
                <p className={`font-serif font-semibold text-base sm:text-lg mb-2 sm:mb-3 ${s.color}`}>{s.pressure}</p>
                <p className="font-sans text-xs sm:text-sm text-ink/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Analysis text */}
        <section>
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Agricultural Water Use Analysis</p>
          <div className="ruled-lines bg-white border border-ink/8 rounded-sm p-4 sm:p-6">
            <p className="font-sans text-sm sm:text-base text-ink/70 leading-relaxed sm:leading-[28px] mb-4">
              Unlike states with massive canal networks, agriculture in Ranchi is predominantly mono-cropped (Kharif Paddy) and heavily dependent on the monsoon, resulting in a relatively low overall percentage of irrigated land (~15%). Across the state of Jharkhand, agricultural irrigation accounts for roughly 52% of total groundwater draft (0.94 BCM out of 1.81 BCM). However, within the Ranchi district, there is a sharp dichotomy in how this extraction plays out.
            </p>
            <p className="font-sans text-sm sm:text-base text-ink/70 leading-relaxed sm:leading-[28px]">
              Agriculture is <strong>not</strong> the primary cause of the catastrophic aquifer crashes seen in Ranchi's urban core. Instead, as explicitly highlighted in the CGWB March 2024 Assessment, localized agricultural stress occurs specifically in high-yield rural pockets like the <strong>Silli block</strong>. In these areas, an increasing shift toward non-monsoon (Rabi and Summer) commercial vegetable cultivation relies almost entirely on deep borewells. This seasonal draft creates intense, localized aquifer stress that competes directly with rural drinking water supplies during the pre-monsoon months. Promoting micro-irrigation (drip/sprinkler) and transitioning to less water-intensive Rabi crops are key recommendations to secure rural water resilience.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}