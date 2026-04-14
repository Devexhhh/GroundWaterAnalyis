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
      className={`sticky top-0 z-50 transition-all duration-500 border-b 
      ${scrolled 
        ? 'bg-white/60 backdrop-blur-3xl border-ink/10 h-20 shadow-sm' 
        : 'bg-white/30 backdrop-blur-2xl border-ink/5 h-24'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-water/10 group-hover:border-water/40 transition-all duration-700" />
            <div className="absolute inset-1 rounded-full border-t border-water/60 animate-[spin_6s_linear_infinite]" />
            <div className="w-2 h-2 rounded-full bg-water shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm font-bold text-ink tracking-tight">
              Groundwater
            </span>
            <span className="font-mono text-[9px] text-ink/40 uppercase tracking-widest mt-0.5">
              Ranchi
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Added whitespace-nowrap and adjusted tracking */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                // whitespace-nowrap keeps "Study Area" on one line
                className={`relative px-3 py-2 text-[10px] xl:text-[11px] uppercase tracking-[0.12em] font-medium whitespace-nowrap transition-all duration-300
                  ${isActive ? 'text-blue-600' : 'text-ink/50 hover:text-ink hover:bg-ink/[0.03] rounded-lg'}
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border border-ink/5 bg-white/40 backdrop-blur-md"
          onClick={() => setOpen(!open)}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink/60">Index</span>
          <div className="w-4 h-3 flex flex-col justify-between">
            <span className={`h-px bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[5px] w-4' : 'w-4'}`} />
            <span className={`h-px bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px] w-4' : 'w-2.5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu remains the same */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-3xl border-b border-ink/10 animate-in fade-in zoom-in-95 duration-300">
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl transition-all
                  ${pathname === item.href 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-ink/[0.02] text-ink/60 hover:bg-ink/5'
                  }`}
              >
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold">{item.label}</span>
                <div className={`w-1 h-1 rounded-full ${pathname === item.href ? 'bg-white' : 'bg-ink/10'}`} />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}