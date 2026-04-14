import PageHeader from '@/components/PageHeader'
import ChartEmbed from '@/components/ChartEmbed'
import DataCard from '@/components/DataCard'
import SectionDivider from '@/components/SectionDivider'

export default function DataAnalysisPage() {
  return (
    <div>
      <PageHeader
        chapter="Chapter 02 — Data Analysis"
        title="Groundwater Level Analysis"
        subtitle="1995–2024 · CGWB Monitoring Data"
        description="Seasonal groundwater level observations from monitoring wells across Ranchi district, analyzed for pre-monsoon and post-monsoon fluctuations over a 30-year period to assess the impact of rapid urbanization."
      />

      {/* Standardized responsive wrapper */}
      <div className="page-container px-4 sm:px-6 mx-auto max-w-5xl py-8 sm:py-12">

        {/* Summary stats */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-4 sm:mb-6 text-sm sm:text-base">Statistical Summary (1995-2024)</p>
          {/* Maintained 2 columns on mobile, scaled gap slightly */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <DataCard label="Mean Pre-Monsoon" value="6.91" unit="m bgl" note="Historical depth before monsoon onset" />
            <DataCard label="Mean Fluctuation" value="3.40" unit="m" note="Average seasonal rise due to recharge" accent="accent" />
            <DataCard label="Shallowest Peak (2021)" value="3.60" unit="m bgl" note="Unusually high water table anomaly" accent="green" />
            <DataCard label="Recent Drop (21-24)" value="−4.67" unit="m" note="Sharp plunge in just three years" accent="red" />
          </div>
        </section>

        {/* Chart 1 */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-2 text-sm sm:text-base">Chart 01 — Average Groundwater Trend</p>

          <ChartEmbed
            title="Average Groundwater Level Trend (1995–2024)"
            caption="Average groundwater depth calculated as the mean of pre-monsoon and post-monsoon levels. The trend line highlights the long-term behavior of the aquifer, smoothing seasonal variations and revealing overall depletion or recovery patterns."
            height="h-105"
            src="/charts/avg_groundwater_trend.png"
          />

          {/* Code Accordion */}
          <details className="mt-3 sm:mt-4 border border-ink/10 rounded-sm p-3 sm:p-4 bg-gray-50">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm text-ink/60">
              View Python Code
            </summary>

            <pre className="mt-3 text-[10px] sm:text-xs overflow-x-auto">
{`import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_excel("final_dataset.xlsx")

df["Average Groundwater Level (m)"] = df[["Pre-Monsoon","Post-Monsoon"]].mean(axis=1)

x = df["Year"]
y = df["Average Groundwater Level (m)"]

coef = np.polyfit(x, y, 1)
trend = np.poly1d(coef)

plt.figure(figsize=(12,6))
plt.plot(x, y, marker='o', linewidth=2, label="Average Groundwater Level")
plt.plot(x, trend(x), linestyle='--', linewidth=2, label="Trend Line")

plt.xlabel("Year")
plt.ylabel("Average Groundwater Depth (m bgl)")
plt.title("Average Groundwater Level with Trend")

plt.legend()
plt.grid(True, linestyle='--', alpha=0.5)

plt.tight_layout()
plt.savefig("avg_groundwater_trend.png", dpi=300)
plt.show()`}
            </pre>
          </details>
        </section>

        {/* Chart 2 */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-2 text-sm sm:text-base">Chart 02 — Seasonal Trend Analysis</p>

          <ChartEmbed
            title="Pre-Monsoon vs Post-Monsoon Groundwater Levels with Trend"
            caption="Comparison of pre-monsoon and post-monsoon groundwater depths along with their trend lines. This illustrates seasonal recharge behavior and highlights whether groundwater conditions are improving or deteriorating over time."
            height="h-105"
            src="/charts/pre_post_trend.png"
          />

          {/* Code Accordion */}
          <details className="mt-3 sm:mt-4 border border-ink/10 rounded-sm p-3 sm:p-4 bg-gray-50">
            <summary className="cursor-pointer font-mono text-xs sm:text-sm text-ink/60">
              View Python Code
            </summary>

            <pre className="mt-3 text-[10px] sm:text-xs overflow-x-auto">
{`import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_excel("final_dataset.xlsx")

x = df["Year"]
pre = df["Pre-Monsoon"]
post = df["Post-Monsoon"]

pre_coef = np.polyfit(x, pre, 1)
post_coef = np.polyfit(x, post, 1)

pre_trend = np.poly1d(pre_coef)
post_trend = np.poly1d(post_coef)

plt.figure(figsize=(12,6))

plt.plot(x, pre, marker='o', linewidth=2, label="Pre-Monsoon")
plt.plot(x, post, marker='s', linewidth=2, label="Post-Monsoon")

plt.plot(x, pre_trend(x), linestyle='--', linewidth=2, label="Pre Trend Line")
plt.plot(x, post_trend(x), linestyle='--', linewidth=2, label="Post Trend Line")

plt.xlabel("Year")
plt.ylabel("Groundwater Depth (m bgl)")
plt.title("Pre vs Post Monsoon with Trend Lines")

plt.legend()
plt.grid(True, linestyle='--', alpha=0.5)

plt.tight_layout()
plt.savefig("pre_post_trend.png", dpi=300)
plt.show()`}
            </pre>
          </details>
        </section>

        <SectionDivider label="Trend Interpretation" />

        {/* Interpretation block */}
        <section className="mb-10 sm:mb-14">
          {/* Defaulting to 1 col on mobile, 3 on tablet/desktop to avoid squishing the text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/8 border border-ink/8">
            {[
              {
                period: '1995–2011',
                label: 'Historical Volatility',
                color: 'text-amber-700',
                bg: 'bg-amber-50',
                desc: 'A period of deeper pre-monsoon levels (averaging ~7.5m, hitting 8.71m in 2001) but paired with high seasonal fluctuations (>4m). This indicates an active, highly dynamic natural recharge cycle where the aquifer emptied and refilled efficiently.',
              },
              {
                period: '2012–2021',
                label: 'The Shallow Anomaly',
                color: 'text-green-700',
                bg: 'bg-green-50',
                desc: 'A decade of surprisingly stable and shallow pre-monsoon levels (averaging ~5.5m), culminating in a record peak of 3.60m in 2021. Fluctuations narrowed as the baseline water table remained relatively high year-round.',
              },
              {
                period: '2022–2024',
                label: 'The Sudden Crash',
                color: 'text-red-700',
                bg: 'bg-red-50',
                desc: 'A violent reversal. In just three years, pre-monsoon levels collapsed from 3.60m down to 8.27m. This rapid, continuous trajectory points to a systemic shock—where recent urban extraction has suddenly overwhelmed the aquifer\'s yield.',
              },
            ].map((p) => (
              <div key={p.period} className={`${p.bg} p-4 sm:p-6`}>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-ink/40 mb-1">{p.period}</p>
                <p className={`font-serif font-semibold text-base sm:text-lg mb-2 sm:mb-3 ${p.color}`}>{p.label}</p>
                <p className="font-sans text-xs sm:text-sm text-ink/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data table */}
        <section className="mb-10 sm:mb-14">
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Sample Data — Historical (1995–2024)</p>
          {/* Height adjusted for mobile, overflow-x-auto combined with min-w on table */}
          <div className="overflow-x-auto h-80 sm:h-96 border border-ink/10 rounded-sm shadow-sm">
            <table className="w-full min-w-[500px] bg-white text-sm relative">
              <thead className="sticky top-0 z-10 shadow-sm">
                <tr className="bg-water-faint">
                  {['Year', 'Pre-Monsoon (m bgl)', 'Post-Monsoon (m bgl)', 'Fluctuation (m)', 'Trend (Pre)'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-ink/50 border-b border-ink/10 bg-water-faint whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['1995', '7.66', '5.10', '2.56', '→'],
                  ['1996', '7.09', '3.55', '3.54', '↑'],
                  ['1997', '7.45', '4.61', '2.84', '↓'],
                  ['1998', '6.56', '3.47', '3.09', '↑'],
                  ['1999', '8.24', '2.79', '5.45', '↓'],
                  ['2000', '7.05', '3.46', '3.59', '↑'],
                  ['2001', '8.71', '2.46', '6.25', '↓'],
                  ['2002', '8.26', '3.54', '4.72', '↑'],
                  ['2003', '8.12', '4.46', '3.66', '↑'],
                  ['2004', '6.64', '2.65', '3.99', '↑'],
                  ['2005', '8.33', '3.38', '4.95', '↓'],
                  ['2006', '5.91', '2.70', '3.21', '↑'],
                  ['2007', '6.77', '3.00', '3.77', '↓'],
                  ['2008', '7.20', '2.62', '4.58', '↓'],
                  ['2009', '6.93', '3.83', '3.10', '↑'],
                  ['2010', '8.01', '5.89', '2.12', '↓'],
                  ['2011', '8.26', '2.86', '5.40', '↓'],
                  ['2012', '4.81', '2.30', '2.51', '↑'],
                  ['2013', '5.69', '1.74', '3.95', '↓'],
                  ['2014', '5.99', '3.86', '2.13', '↓'],
                  ['2015', '6.54', '4.19', '2.35', '↓'],
                  ['2016', '6.69', '4.64', '2.05', '↓'],
                  ['2017', '6.53', '3.13', '3.40', '↑'],
                  ['2018', '5.25', '3.06', '2.19', '↑'],
                  ['2019', '6.79', '2.75', '4.04', '↓'],
                  ['2020', '5.32', '2.81', '2.51', '↑'],
                  ['2021', '3.60', '3.23', '0.37', '↑'],
                  ['2022', '7.18', '3.54', '3.64', '↓'],
                  ['2023', '7.59', '4.84', '2.75', '↓'],
                  ['2024', '8.27', 'N/A', 'N/A', '↓'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-ink/6 hover:bg-water-faint/40 transition-colors last:border-0">
                    <td className="px-4 py-3 font-mono text-xs sm:text-sm text-water whitespace-nowrap">{row[0]}</td>
                    <td className="px-4 py-3 font-mono text-xs sm:text-sm text-ink whitespace-nowrap">{row[1]}</td>
                    <td className="px-4 py-3 font-mono text-xs sm:text-sm text-ink whitespace-nowrap">{row[2]}</td>
                    <td className="px-4 py-3 font-mono text-xs sm:text-sm text-ink/60 whitespace-nowrap">{row[3]}</td>
                    <td className={`px-4 py-3 font-mono text-sm sm:text-base whitespace-nowrap ${row[4] === '↓' ? 'text-red-500' : row[4] === '↑' ? 'text-green-500' : 'text-amber-500'}`}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-[10px] sm:text-xs text-ink/35 mt-3 sm:mt-2 italic">
            Source: Combined CGWB WRIS records. Post-monsoon data for 2024 was incomplete at the time of compilation.
          </p>
        </section>

        {/* Interpretation text */}
        <section>
          <p className="section-label mb-3 sm:mb-4 text-sm sm:text-base">Conclusion</p>
          {/* Shrunk padding and leading size for smaller devices */}
          <div className="ruled-lines bg-white border border-ink/8 rounded-sm p-4 sm:p-6">
            <p className="font-sans text-sm sm:text-base text-ink/70 leading-relaxed sm:leading-[28px]">
              Analyzing the full 30-year spectrum of Ranchi's groundwater data reveals a stark transformation in aquifer dynamics. In the late 1990s and 2000s, the system exhibited classic hard-rock behavior: deep pre-monsoon levels but massive post-monsoon recoveries, proving the natural percolation cycle was healthy. The 2010s then brought an era of unusual stability, keeping water levels deceptively shallow. However, the data from 2022 to 2024 shatters this equilibrium. Following a peak in 2021, pre-monsoon levels have plummeted continuously, returning to depths not seen since 2005. Unlike the historical variations, this modern crash is extremely steep and lacks the corresponding massive recharge fluctuations of the past. This divergence strongly indicates that rapid, recent expansions of the urban "concrete mantle" are choking off surface recharge, while unregulated deep-bore submersible pumps are stripping the localized aquifers faster than they can refill.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}