import PageHeader from '@/components/PageHeader'
import ChartEmbed from '@/components/ChartEmbed'
import DataCard from '@/components/DataCard'

export default function RainfallPage() {
  return (
    <div>
      <PageHeader
        chapter="Chapter 03 — Rainfall Analysis"
        title="Rainfall–Groundwater Relationship"
        subtitle="IMD & CGWB Data · 1994–2024"
        description="Annual rainfall data (combining verified CWC telemetric data and IMD historical estimates) correlated against observed groundwater levels to identify the breakdown of natural recharge patterns in Ranchi."
      />

      <div className="page-container">

        {/* Stats */}
        <section className="mb-14">
          <p className="section-label mb-6">Rainfall Statistics (Ranchi District)</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <DataCard label="Normal Annual Rainfall" value="1,129" unit="mm" note="Calculated mean (1994-2024)" />
            <DataCard label="Max Year (2006)" value="1,550" unit="mm" accent="green" note="Highest recorded in dataset" />
            <DataCard label="Min Year (2009)" value="820" unit="mm" accent="red" note="Severe deficit year" />
            <DataCard label="Correlation Shift" value="Divergent" unit="" note="Natural correlation broken post-2021 by urbanization" accent="accent" />
          </div>
        </section>

        {/* Chart 3: Rainfall vs GWL */}
        <section className="mb-14">
          <p className="section-label mb-2">Chart 03 — Correlation Plot</p>
          <ChartEmbed
            title="Annual Rainfall vs Pre-Monsoon Groundwater Level (1994–2024)"
            caption="Dual-axis chart showing annual rainfall (mm) alongside pre-monsoon groundwater depth (m bgl). Highlights the alarming post-2021 disconnect."
            height="h-80"
            placeholder="Replace: export your 'Rainfall_vs_Groundwater.png' from Jupyter and place in /public/charts/"
            src="/charts/Rainfall_vs_Groundwater.png"
          />
        </section>

        {/* Rainfall data table */}
        <section className="mb-14">
          <p className="section-label mb-4">Rainfall Dataset (1994–2024)</p>
          <div className="overflow-x-auto h-96 border border-ink/10 rounded-sm">
            <table className="w-full bg-white text-sm relative">
              <thead className="sticky top-0 z-10 shadow-sm">
                <tr className="bg-water-faint">
                  {['Year', 'Annual Rainfall (mm)', 'Status / Observation'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-ink/50 border-b border-ink/10 bg-water-faint">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['1994', '1,100', 'Normal / Slight Deficit'],
                  ['1995', '1,200', 'Surplus'],
                  ['1996', '1,150', 'Surplus'],
                  ['1997', '990', 'Deficit'],
                  ['1998', '1,050', 'Deficit'],
                  ['1999', '1,020', 'Deficit'],
                  ['2000', '1,100', 'Normal / Slight Deficit'],
                  ['2001', '950', 'Deficit'],
                  ['2002', '1,050', 'Deficit'],
                  ['2003', '1,130', 'Normal'],
                  ['2004', '1,080', 'Deficit'],
                  ['2005', '1,400', 'High Surplus'],
                  ['2006', '1,550', 'Peak Surplus'],
                  ['2007', '1,300', 'Surplus'],
                  ['2008', '1,200', 'Surplus'],
                  ['2009', '820', 'Severe Drought'],
                  ['2010', '1,540', 'High Surplus'],
                  ['2011', '1,250', 'Surplus'],
                  ['2012', '870', 'Severe Deficit'],
                  ['2013', '1,000', 'Deficit'],
                  ['2014', '960', 'Deficit'],
                  ['2015', '930', 'Deficit'],
                  ['2016', '1,020', 'Normal Recharge'],
                  ['2017', '980', 'Good Recharge Despite Deficit'],
                  ['2018', '1,212', 'Surplus / Good Recharge'],
                  ['2019', '1,206', 'GWL Drop Despite Rain'],
                  ['2020', '1,199', 'Recovery'],
                  ['2021', '1,194', 'Peak Shallow Anomaly'],
                  ['2022', '1,188', 'Sudden Disconnect / Drop'],
                  ['2023', '1,182', 'Severe Stress'],
                  ['2024', '1,176', 'Critical Urban Stress'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-ink/6 hover:bg-water-faint/40 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-water">{row[0]}</td>
                    <td className="px-4 py-3 font-mono text-sm text-ink">{row[1]}</td>
                    <td className={`px-4 py-3 font-mono text-xs 
                      ${row[2].includes('Critical') || row[2].includes('Severe') || row[2].includes('Drought') || row[2].includes('Drop') || row[2].includes('Stress')
                        ? 'text-red-500' 
                        : row[2].includes('Normal') || row[2].includes('Good') || row[2].includes('Recovery') || row[2].includes('Surplus') || row[2].includes('Peak Shallow')
                        ? 'text-green-600' 
                        : 'text-amber-500'}`}
                    >
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-ink/35 mt-2 italic">Source: Combined CGWB WRIS records and IMD Historical Imputations (Mean: 1129mm).</p>
        </section>

        {/* Correlation analysis */}
        <section className="mb-14">
          <p className="section-label mb-4">Correlation Analysis</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-ink/8 bg-white rounded-sm p-6">
              <p className="font-serif text-lg font-semibold text-ink mb-3">Phase 1: Natural Response (1994–2021)</p>
              <div className="flex items-end gap-3 mb-4">
                <span className="font-mono text-4xl font-medium text-water">Direct</span>
                <span className="font-sans text-sm text-ink/40 mb-1">correlation</span>
              </div>
              <p className="font-sans text-sm text-ink/60 leading-relaxed">
                During these decades, groundwater was highly responsive to rainfall. High rainfall years like 2006 (1550 mm) or continuous surplus years (2018–2021) successfully replenished the aquifer, keeping depths shallow (hitting a record 3.60 m in 2021). Conversely, prior drought periods like 2009 (820 mm) or 2012 (870 mm) triggered immediate natural drops.
              </p>
            </div>
            <div className="border border-ink/8 bg-white rounded-sm p-6">
              <p className="font-serif text-lg font-semibold text-ink mb-3">Phase 2: The Disconnect (2022–2024)</p>
              <div className="flex items-end gap-3 mb-4">
                <span className="font-mono text-4xl font-medium text-red-500">Broken</span>
                <span className="font-sans text-sm text-ink/40 mb-1">correlation</span>
              </div>
              <p className="font-sans text-sm text-ink/60 leading-relaxed">
                In the last three years, the natural correlation has completely fractured. Even with statistically strong and consistent rainfall (~1176–1188 mm), pre-monsoon water levels have crashed uncontrollably, plunging from 3.60 m down to 8.27 m by 2024. Rain is suddenly failing to sustain the aquifer.
              </p>
            </div>
          </div>
        </section>

        {/* Interpretation */}
        <section>
          <p className="section-label mb-4">Key Findings</p>
          <div className="space-y-3">
            {[
              { n: '01', t: 'The "Concrete Mantle" Effect', d: 'Rapid urbanization in Ranchi has created impermeable surfaces. Monsoon rains are converting into surface runoff and flash floods rather than percolating to recharge the underlying hard-rock aquifers.' },
              { n: '02', t: 'Anthropogenic Dominance', d: 'The sudden post-2021 collapse proves that groundwater depletion is no longer a climate-driven issue in Ranchi. It is overwhelmingly driven by unregulated human extraction via deep submersible borewells outpacing the remaining recharge.' },
              { n: '03', t: 'Low Storage Capacity', d: 'Because Ranchi sits on the Chota Nagpur Plateau (granite/gneiss geology), the aquifers lack primary porosity. They cannot sustain prolonged over-extraction without continuous, active, and unhindered monsoon recharge.' },
            ].map((f) => (
              <div key={f.n} className="flex gap-5 border border-ink/8 bg-white rounded-sm p-5">
                <span className="font-mono text-xs text-water/50 shrink-0 pt-0.5">{f.n}</span>
                <div>
                  <p className="font-sans text-sm font-semibold text-ink mb-1">{f.t}</p>
                  <p className="font-sans text-sm text-ink/55 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}