'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-ink/8">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full border-2 border-water flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-water group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-serif text-sm font-semibold text-ink hidden sm:block">
            Groundwater Study
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'text-water font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-ink/60" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-ink/8 px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`nav-link text-base ${pathname === item.href ? 'text-water font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
