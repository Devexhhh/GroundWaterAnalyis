export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white mt-16 md:mt-24 selection:bg-blue-100 selection:text-blue-900">
      {/* MOBILE: Flex column, centered items, vertical gaps (py-8)
        DESKTOP: Flex row, spaced between, original padding (md:py-10) 
      */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        
        {/* Left Side: Project Info */}
        <div className="w-full md:w-auto md:min-w-[200px] text-center md:text-left">
          <p className="font-serif text-sm text-ink font-medium">
            Assessment of Groundwater Status
          </p>
          <p className="font-sans text-[11px] md:text-xs text-ink/40 mt-1 md:mt-0.5">
            Ranchi District · Jharkhand · India
          </p>
        </div>

        {/* Center: Credits */}
        <div className="text-center group w-full md:w-auto">
          {/* Pill Container */}
          <div className="inline-flex items-center gap-2 px-4 md:px-3 py-2 md:py-1.5 rounded-full border border-ink/5 bg-ink/[0.02] transition-all duration-300 md:group-hover:bg-white md:group-hover:shadow-sm">
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.12em] text-ink/50 flex flex-wrap justify-center items-center gap-1.5 leading-snug">
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
                
                {/* Animated Underline (Desktop Hover Only) */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600/30 transition-all duration-300 md:group-hover:w-full" />
              </a>

              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-ink/20 mx-0.5 md:mx-1" />
              
              <span className="italic font-serif lowercase tracking-normal opacity-70">
                with Research
              </span>
            </p>
          </div>
          
          {/* ROLL NUMBER DISPLAY LOGIC:
            MOBILE: Visible by default (opacity-100, translate-y-0)
            DESKTOP: Hidden by default (md:opacity-0, md:translate-y-1), revealed on hover (md:group-hover:opacity-100)
          */}
          <p className="font-mono text-[11px] text-ink/60 md:text-ink/95 mt-2 md:mt-1.5 tracking-tighter transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            Roll ID: BTECH/10078/23
          </p>
        </div>

        {/* Right Side: Data Sources */}
        <div className="w-full md:w-auto md:min-w-[200px] text-center md:text-right border-t border-ink/5 md:border-t-0 pt-5 md:pt-0">
          <p className="font-mono text-[10px] md:text-xs text-ink/40 md:text-ink/30">Data: CGWB · IMD · India WRIS</p>
          <p className="font-mono text-[10px] md:text-xs text-ink/35 md:text-ink/25 mt-1 md:mt-0.5">Academic Project · 2026</p>
        </div>

      </div>
    </footer>
  )
}