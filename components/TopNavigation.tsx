'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopNavigation() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 h-[60px] bg-trade-main border-b border-trade-border-medium flex items-center justify-between px-6 flex-shrink-0">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 bg-gradient-to-br from-trade-info to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-trade-text-primary">AI <span className="text-trade-info">Assistant</span></h1>
          <p className="text-[10px] text-trade-text-tertiary uppercase tracking-wider">Stock Market Intelligence</p>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-trade-text-primary hover:text-trade-info transition-colors">
          Home
        </Link>
        <Link href="/dashboard" className="px-4 py-2 text-sm font-medium text-trade-text-secondary hover:text-trade-info transition-colors">
          Dashboard
        </Link>
        {isHomePage ? (
          <>
            <a 
              href="#features" 
              onClick={(e) => handleScroll(e, 'features')}
              className="px-4 py-2 text-sm font-medium text-trade-text-secondary hover:text-trade-info transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleScroll(e, 'how-it-works')}
              className="px-4 py-2 text-sm font-medium text-trade-text-secondary hover:text-trade-info transition-colors"
            >
              How It Works
            </a>
          </>
        ) : (
          <>
            <Link href="/#features" className="px-4 py-2 text-sm font-medium text-trade-text-secondary hover:text-trade-info transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="px-4 py-2 text-sm font-medium text-trade-text-secondary hover:text-trade-info transition-colors">
              How It Works
            </Link>
          </>
        )}
        <Link href="/chat" className="px-4 py-2 text-sm font-medium text-trade-text-secondary hover:text-trade-info transition-colors">
          AI Chat
        </Link>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 px-4 py-2 bg-trade-secondary hover:bg-trade-hover border border-trade-border-light rounded-lg transition-all cursor-pointer">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-trade-info to-blue-600 flex items-center justify-center shadow-md">
          <span className="text-sm font-bold text-white">AI</span>
        </div>
        <div className="text-left">
          <p className="text-sm font-medium text-trade-text-primary">Guest User</p>
          <p className="text-[10px] text-trade-text-tertiary">Market Explorer</p>
        </div>
      </div>
    </nav>
  )
}
