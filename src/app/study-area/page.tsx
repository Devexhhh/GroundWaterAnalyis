import PageHeader from '@/components/PageHeader'
import DataCard from '@/components/DataCard'
import SectionDivider from '@/components/SectionDivider'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

// Modern, ultra-minimal typography pairing
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta',
  display: 'swap',
});

const coordData = [
  { label: 'Latitude', value: '22°52′–23°43′N' },
  { label: 'Longitude', value: '85°00′–85°54′E' },
  { label: 'Elevation (avg)', value: '~650 m AMSL' },
  { label: 'District Area', value: '5,097 km²' },
]

const facts = [
  { label: 'State', value: 'Jharkhand', unit: '' },
  { label: 'Population (2011)', value: '29.14', unit: 'lakh' },
  { label: 'Population Density', value: '572', unit: 'per km²' },
  { label: 'Literacy Rate', value: '76.06', unit: '%' },
]

export default function StudyAreaPage() {
  return (
    <div className={`${inter.variable} ${jakarta.variable} font-sans min-h-screen relative selection:bg-blue-100 selection:text-blue-900`}>
      <PageHeader
        chapter="Chapter 01 — Study Area"
        title="Ranchi District"
        subtitle="Jharkhand · India"
        description="Located on the Chota Nagpur Plateau, Ranchi is the capital of Jharkhand. The district is experiencing rapid urbanization, which, combined with its inherently fragile hard-rock geology, places severe stress on local groundwater resources and natural recharge rates."
      />

      <div className="page-container">

        {/* Geographic Overview */}
        <section className="mb-14">
          <p className="section-label mb-6">Geographic Overview</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {facts.map((f) => (
              <DataCard key={f.label} label={f.label} value={f.value} unit={f.unit} />
            ))}
          </div>
        </section>

        {/* Coordinates */}
        <section className="mb-14">
          <p className="section-label mb-6">Coordinates & Elevation</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {coordData.map((c) => (
              <div key={c.label} className="border border-ink/8 bg-white p-4 rounded-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-2">{c.label}</p>
                <p className="font-mono text-sm text-ink font-medium">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map placeholder */}
        <section className="mb-14">
          <p className="section-label mb-4">Location Map</p>
          <div className="border border-ink/10 bg-white rounded-sm h-80 flex flex-col items-center justify-center gap-3 topo-bg">
            <svg className="w-10 h-10 text-water/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <p className="font-mono text-xs text-water/45">Insert district location map here</p>
            <p className="font-sans text-xs text-ink/30">Export from QGIS / Google Earth and place in /public/maps/</p>
          </div>
        </section>

        <SectionDivider label="Agro-Climatic Profile" />

        {/* Agro-climatic zone */}
        <section className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-ink/8 bg-white rounded-sm p-6">
              <p className="section-label mb-4">Agro-Climatic Zone</p>
              <p className="font-serif text-2xl font-semibold text-ink mb-2">Zone VII</p>
              <p className="font-sans text-sm text-ink/60">Eastern Plateau & Hills Region</p>
              <p className="font-sans text-sm text-ink/50 mt-3 leading-relaxed">
                Characterised by a sub-humid climate and moderate-to-high rainfall. Agriculture is largely rainfed mono-cropping (Kharif paddy), though there is a growing, groundwater-dependent shift toward Rabi/Summer vegetable cultivation in rural blocks like Silli.
              </p>
            </div>
            <div className="border border-ink/8 bg-white rounded-sm p-6">
              <p className="section-label mb-4">Climate Summary</p>
              <div className="space-y-2">
                {[
                  { k: 'Normal Annual Rainfall', v: '1,129 mm (1994–2024 avg)' },
                  { k: 'Monsoon Season', v: 'June – September' },
                  { k: 'Max Temperature', v: '40–42 °C (May)' },
                  { k: 'Min Temperature', v: '5–8 °C (January)' },
                  { k: 'Humidity (Monsoon)', v: '80–90%' },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between items-center py-1.5 border-b border-ink/6 last:border-0">
                    <span className="font-sans text-xs text-ink/50">{r.k}</span>
                    <span className="font-mono text-xs text-ink font-medium">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Geology */}
        <section className="mb-14">
          <p className="section-label mb-4">Geology & Hydrogeology</p>
          <div className="ruled-lines bg-white border border-ink/8 rounded-sm p-6">
            <p className="font-sans text-sm text-ink/70 leading-[28px]">
              As per the CGWB assessments, over 78% of the region is underlain by Archean era crystalline rocks belonging to the <strong>Chotanagpur Granitic Gneissic Complex (CGGC)</strong>. Due to this hard-rock geology, primary porosity is practically non-existent. Groundwater occurrence is strictly confined to the upper weathered mantle (saprolite zone) and the underlying secondary fracture zones. Historically, the district maintained a pre-monsoon water table between 5.5 to 7.5 m bgl. However, due to the limited storage capacity of the weathered mantle, the aquifer is highly sensitive to extraction. Recent data (2024) indicates a rapid plunge to an average of 8.27 m bgl, with over-exploited urban centers exceeding 30 m bgl where the "concrete mantle" obstructs natural recharge.
            </p>
          </div>
        </section>

        {/* Monitoring Wells */}
        <section>
          <p className="section-label mb-4">Sample CGWB Monitoring Well Network</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-ink/10 bg-white text-sm">
              <thead>
                <tr className="border-b border-ink/10 bg-water-faint">
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-ink/50">Well ID</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-ink/50">Location</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-ink/50">Type</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-widest text-ink/50">Depth (m)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CGWB1JHRRAN005', 'Lalpur (BIT Ext)', 'Bore Well (Telemetric)', '160.5'],
                  ['230930085352001', 'Bundu', 'Dug Well (Manual)', '10.0'],
                  ['230332085114701', 'Amjora', 'Dug Well (Manual)', '9.25'],
                  ['231355085115001', 'Lodma', 'Dug Well (Manual)', '8.1'],
                  ['232210085371801', 'Jonha', 'Dug Well (Manual)', '6.7'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-ink/6 hover:bg-water-faint/40 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-mono text-water text-xs' : 'font-sans text-ink/70 text-sm'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-ink/35 mt-2 italic">
            Source: India WRIS / CGWB Groundwater Level Observations (Ranchi).
          </p>
        </section>

      </div>
    </div>
  )
}