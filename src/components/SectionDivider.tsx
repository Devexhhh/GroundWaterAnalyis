export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-10 selection:bg-blue-100 selection:text-blue-900">
      <div className="h-px bg-ink/10 flex-1" />
      <span className="section-label">{label}</span>
      <div className="h-px bg-ink/10 flex-1" />
    </div>
  )
}
