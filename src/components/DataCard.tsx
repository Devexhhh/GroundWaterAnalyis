interface DataCardProps {
  label: string
  value: string
  unit?: string
  note?: string
  accent?: 'water' | 'accent' | 'red' | 'green'
}

const accentColors = {
  water: 'border-water/30 bg-water-faint',
  accent: 'border-accent/30 bg-amber-50',
  red: 'border-red-300/40 bg-red-50',
  green: 'border-green-300/40 bg-green-50',
}

export default function DataCard({ label, value, unit, note, accent = 'water' }: DataCardProps) {
  return (
    <div className={`border rounded-sm p-5 selection:bg-blue-100 selection:text-blue-900 ${accentColors[accent]}`}>
      <p className="section-label mb-3">{label}</p>
      <p className="data-value">
        {value}
        {unit && <span className="text-sm font-mono text-ink/40 ml-1">{unit}</span>}
      </p>
      {note && <p className="font-sans text-xs text-ink/45 mt-2 leading-relaxed">{note}</p>}
    </div>
  )
}
