export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white mt-24 selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Side: Project Info */}
        <div className="min-w-[200px]">
          <p className="font-serif text-sm text-ink font-medium">
            Assessment of Groundwater Status
          </p>
          <p className="font-sans text-xs text-ink/40 mt-0.5">
            Ranchi District · Jharkhand · India
          </p>
        </div>

        {/* Center: Credits */}
        <div className="text-left md:text-center group">
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink/5 bg-ink/[0.02] transition-all duration-300 group-hover:bg-white group-hover:shadow-sm">
    <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-ink/50 flex items-center gap-1.5">
      <span className="opacity-60">Authored by</span>
      
      <a 
        href="https://devex-bay.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative text-ink font-bold tracking-normal normal-case transition-colors duration-200 hover:text-blue-600"
      >
        <span className="font-mono text-[9px] text-blue-600/40 mr-0.5">[</span>
        Kumar Sujal
        <span className="font-mono text-[9px] text-blue-600/40 ml-0.5">]</span>
        
        {/* Animated Underline */}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600/30 transition-all duration-300 group-hover:w-full" />
      </a>

      <span className="inline-block w-1 h-1 rounded-full bg-ink/20 mx-1" />
      
      <span className="italic font-serif lowercase tracking-normal opacity-70">
        with Research
      </span>
    </p>
  </div>
  
  {/* Sub-label for the Roll Number */}
  <p className="font-mono text-[11px] text-ink/95 mt-1.5 tracking-tighter opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
    Roll ID: BTECH/10078/23
  </p>
</div>
        {/* Right Side: Data Sources */}
        <div className="text-left md:text-right min-w-[200px]">
          <p className="font-mono text-xs text-ink/30">Data: CGWB · IMD · India WRIS</p>
          <p className="font-mono text-xs text-ink/25 mt-0.5">Academic Project · 2026</p>
        </div>
      </div>
    </footer>
  )
}