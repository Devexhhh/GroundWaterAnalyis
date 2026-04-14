export default function Footer() {
  return (
    // Reduced top margin on mobile (mt-16) to close awkward whitespace gaps
    <footer className="border-t border-ink/8 bg-white mt-16 sm:mt-24 selection:bg-blue-100 selection:text-blue-900">
      {/* Centered items on mobile (items-center), separating into a row on md+ screens */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Left Side: Project Info */}
        {/* Added text-center for mobile, returning to text-left on md */}
        <div className="w-full md:min-w-[200px] text-center md:text-left">
          <p className="font-serif text-sm text-ink font-medium">
            Assessment of Groundwater Status
          </p>
          <p className="font-sans text-[11px] sm:text-xs text-ink/40 mt-1 sm:mt-0.5">
            Ranchi District · Jharkhand · India
          </p>
        </div>

        {/* Center: Credits */}
        <div className="text-center group w-full md:w-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-ink/5 bg-ink/[0.02] transition-all duration-300 md:group-hover:bg-white md:group-hover:shadow-sm">
            {/* Added flex-wrap for ultra-narrow screens so the text doesn't overflow the pill */}
            <p className="font-sans text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.12em] text-ink/50 flex flex-wrap justify-center items-center gap-1 sm:gap-1.5 leading-snug">
              <span className="opacity-60">Authored by</span>
              
              <a 
                href="https://devex-bay.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative text-ink font-bold tracking-normal normal-case transition-colors duration-200 hover:text-blue-600"
              >
                <span className="font-mono text-[8px] sm:text-[9px] text-blue-600/40 mr-0.5">[</span>
                Kumar Sujal
                <span className="font-mono text-[8px] sm:text-[9px] text-blue-600/40 ml-0.5">]</span>
                
                {/* Animated Underline */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600/30 transition-all duration-300 md:group-hover:w-full" />
              </a>

              <span className="inline-block w-1 h-1 rounded-full bg-ink/20 mx-0.5 sm:mx-1" />
              
              <span className="italic font-serif lowercase tracking-normal opacity-70">
                with Research
              </span>
            </p>
          </div>
          
          {/* Sub-label for the Roll Number */}
          {/* TOUCH FIX: Opacity is 100 by default on mobile. Hover effect (opacity-0 to 100) is applied only on md: screens and above */}
          <p className="font-mono text-[10px] sm:text-[11px] text-ink/60 md:text-ink/95 mt-2 sm:mt-1.5 tracking-tighter transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            Roll ID: BTECH/10078/23
          </p>
        </div>

        {/* Right Side: Data Sources */}
        {/* Centered on mobile, right-aligned on medium screens and up */}
        <div className="w-full md:min-w-[200px] text-center md:text-right border-t border-ink/5 md:border-t-0 pt-4 md:pt-0">
          <p className="font-mono text-[10px] sm:text-xs text-ink/40 md:text-ink/30">Data: CGWB · IMD · India WRIS</p>
          <p className="font-mono text-[10px] sm:text-xs text-ink/35 md:text-ink/25 mt-1 sm:mt-0.5">Academic Project · 2026</p>
        </div>
      </div>
    </footer>
  )
}