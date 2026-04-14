export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-serif text-sm text-ink font-medium">
            Assessment of Groundwater Status
          </p>
          <p className="font-sans text-xs text-ink/40 mt-0.5">
            Ranchi District · Jharkhand · India
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-ink/30">Data: CGWB · IMD · India WRIS</p>
          <p className="font-mono text-xs text-ink/25 mt-0.5">Academic Project · 2026</p>
        </div>
      </div>
    </footer>
  )
}
