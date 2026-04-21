'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/study-area', label: 'Study Area' },
  { href: '/data-analysis', label: 'Analysis' },
  { href: '/rainfall', label: 'Rainfall' },
  { href: '/resource-status', label: 'Status' },
  { href: '/agriculture', label: 'Agriculture' },
  { href: '/discussion', label: 'Discussion' },
  { href: '/recommendations', label: 'Recommendations' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 
      ${scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-16 sm:h-20'
          : 'bg-transparent border-b border-transparent h-24'
        }`}
    >
      {/* Increased max-w to ensure the 8 nav items have enough room to sit comfortably in the middle */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-full flex items-center justify-between gap-4">

        {/* LEFT: Logo Section */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow duration-500">
            <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:border-blue-500/30 transition-all duration-700 scale-110 group-hover:scale-100" />
            <div className="absolute inset-1.5 rounded-full border-t-[1.5px] border-blue-600/80 animate-[spin_4s_linear_infinite]" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-[15px] font-bold text-slate-900 tracking-tight leading-tight">
              Groundwater
            </span>
            <span className="font-mono text-[9px] text-blue-600 uppercase tracking-[0.25em] font-semibold">
              Ranchi
            </span>
          </div>
        </Link>

        {/* CENTER: Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-1 p-1 bg-slate-50/50 backdrop-blur-sm border border-slate-200/50 rounded-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[10px] xl:text-[11px] uppercase tracking-[0.15em] font-semibold whitespace-nowrap transition-all duration-300 rounded-full overflow-hidden group
                ${isActive ? 'text-blue-700 bg-blue-50 shadow-sm border border-blue-100/50' : 'text-slate-500 hover:text-slate-900 border border-transparent'}
                `}
              >
                {/* Subtle hover background sweep */}
                {!isActive && (
                  <span className="absolute inset-0 bg-slate-100/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* RIGHT: Download Button & Mobile Toggle */}
        <div className="flex items-center justify-end gap-3 shrink-0">

          {/* Modern Desktop Download Button */}
          <a
            href="/downloads/GroundWater_Analysis_KUMAR_SUJAL.docx"
            download="Ranchi_Groundwater_Report_KUMAR_SUJAL.docx"
            className="hidden lg:flex relative items-center gap-2.5 px-6 py-2.5 bg-gradient-to-tr from-blue-600 to-indigo-500 text-white rounded-full shadow-[0_4px_14px_0_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
          >
            {/* Button Highlight Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="relative z-10 font-sans text-xs uppercase tracking-[0.15em] font-bold">Report</span>
          </a>

          {/* Modern Mobile Toggle */}
          <button
            className="lg:hidden shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm active:scale-95 transition-all duration-300 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="relative w-4 h-3.5 flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${open ? 'rotate-45 translate-y-[6px] w-5' : 'w-5'}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${open ? 'opacity-0 translate-x-2' : 'w-4'}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${open ? '-rotate-45 -translate-y-[6px] w-5' : 'w-3'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Modernized Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-4 sm:p-6 gap-1.5 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300
                  ${pathname === item.href
                    ? 'bg-blue-50/80 text-blue-700'
                    : 'bg-transparent text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <span className={`font-sans text-[13px] uppercase tracking-[0.2em] ${pathname === item.href ? 'font-bold' : 'font-semibold'}`}>
                  {item.label}
                </span>
                {pathname === item.href ? (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                ) : (
                  <svg className="w-4 h-4 opacity-30 -translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </Link>
            ))}

            {/* Modern Mobile Download Button */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href="/downloads/GroundWater_Analysis_KUMAR_SUJAL.docx"
                download="Ranchi_Groundwater_Report_KUMAR_SUJAL.docx"
                className="flex items-center justify-center gap-3 p-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-300"
              >
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="font-sans text-[13px] uppercase tracking-[0.2em] font-bold">Download Report</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}