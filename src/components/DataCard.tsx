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
    // Reduced padding on mobile (p-4) so the data has more room to breathe inside narrow grid columns
    <div className={`border rounded-sm p-4 sm:p-5 selection:bg-blue-100 selection:text-blue-900 ${accentColors[accent]}`}>
      {/* Tightened the bottom margin and ensured the label line-height stays compact */}
      <p className="section-label mb-2 sm:mb-3 leading-tight">{label}</p>
      
      {/* Added break-words so large numbers (e.g., "240,000") wrap instead of pushing out the box width */}
      <p className="data-value break-words">
        {value}
        {/* Added whitespace-nowrap so the unit never detaches and drops to a line by itself */}
        {unit && <span className="text-[10px] sm:text-sm font-mono text-ink/40 ml-1 whitespace-nowrap">{unit}</span>}
      </p>

      {/* Scaled down the note size slightly for mobile and tightened the top margin */}
      {note && <p className="font-sans text-[10px] sm:text-xs text-ink/45 mt-1.5 sm:mt-2 leading-relaxed">{note}</p>}
    </div>
  )
}