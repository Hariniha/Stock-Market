'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { marketNews, portfolioHoldings, trendingStocks, sectorPerformance, topGainers, topLosers } from '@/lib/mockData'

gsap.registerPlugin(ScrollTrigger)

export default function MainContent() {
  const heroRef = useRef(null)
  const portfolioRef = useRef(null)
  const moversRef = useRef(null)
  const newsRef = useRef(null)
  const sectorsRef = useRef(null)
  const trendingRef = useRef(null)
  const featuresRef = useRef(null)
  const statsRef = useRef(null)
  const howItWorksRef = useRef(null)
  const ctaRef = useRef(null)

  const totalPortfolioValue = portfolioHoldings.reduce((sum, holding) => {
    return sum + parseFloat(holding.totalValue.replace(/[₹,]/g, ''))
  }, 0)

  const totalProfit = portfolioHoldings.reduce((sum, holding) => {
    return sum + parseFloat(holding.profit.replace(/[₹,+]/g, ''))
  }, 0)

  useEffect(() => {
    // Create context for ScrollTrigger
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })

      // Portfolio Section Animation
      gsap.from(portfolioRef.current, {
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })

      // Market Movers Animation
      gsap.from(moversRef.current, {
        scrollTrigger: {
          trigger: moversRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.8
      })

      // News Section Animation
      gsap.from(newsRef.current, {
        scrollTrigger: {
          trigger: newsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8
      })

      // Sectors Animation
      gsap.from(sectorsRef.current, {
        scrollTrigger: {
          trigger: sectorsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })

      // Trending Animation
      gsap.from(trendingRef.current, {
        scrollTrigger: {
          trigger: trendingRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8
      })

      // Features Animation
      gsap.from(featuresRef.current, {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })

      // Stats Animation
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      })

      // How It Works Animation
      gsap.from(howItWorksRef.current, {
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8
      })

      // CTA Animation
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.8
      })
    })

    // Cleanup
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="w-full bg-trade-main">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-trade-info/10 border border-trade-info/20 rounded-full">
            <div className="w-2 h-2 bg-trade-info rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-trade-info">Powered by Advanced AI Models</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-trade-text-primary leading-tight">
            Stock Market
            <br />
            <span className="bg-gradient-to-r from-trade-info to-blue-600 bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h1>
          
          <p className="text-xl text-trade-text-secondary max-w-2xl mx-auto leading-relaxed">
            Your intelligent companion for stock market analysis, predictions, and insights. 
            Get AI-powered recommendations to make informed investment decisions.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/chat" className="px-8 py-3 bg-trade-info hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Chat
            </Link>
            <Link href="/dashboard" className="px-8 py-3 bg-trade-secondary hover:bg-trade-hover border border-trade-border-medium text-trade-text-primary font-medium rounded-lg transition-all transform hover:scale-105">
              View Dashboard
            </Link>
          </div>

          <div className="pt-12 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto text-trade-text-tertiary">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* Portfolio Overview Section */}
      <section ref={portfolioRef} className="min-h-screen flex items-center p-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-gradient-to-br from-trade-secondary to-trade-tertiary border border-trade-border-medium rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-trade-text-primary">Portfolio Overview</h2>
              <span className="text-sm text-trade-text-tertiary">Demo Account</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-trade-main rounded-lg transform hover:scale-105 transition-transform">
                <p className="text-sm text-trade-text-tertiary mb-2">Total Value</p>
                <p className="text-4xl font-bold text-trade-text-primary">₹{totalPortfolioValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
              </div>
              <div className="p-6 bg-trade-main rounded-lg transform hover:scale-105 transition-transform">
                <p className="text-sm text-trade-text-tertiary mb-2">Total Profit</p>
                <p className="text-4xl font-bold text-trade-up">+₹{totalProfit.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
              </div>
              <div className="p-6 bg-trade-main rounded-lg transform hover:scale-105 transition-transform">
                <p className="text-sm text-trade-text-tertiary mb-2">Return</p>
                <p className="text-4xl font-bold text-trade-up">+{((totalProfit / (totalPortfolioValue - totalProfit)) * 100).toFixed(2)}%</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-trade-text-primary mb-4">Holdings</h3>
              {portfolioHoldings.map((holding, index) => (
                <div 
                  key={holding.symbol} 
                  className="flex items-center justify-between p-4 bg-trade-main rounded-lg hover:bg-trade-hover transition-all transform hover:translate-x-2"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex-1">
                    <p className="text-base font-semibold text-trade-text-primary">{holding.symbol}</p>
                    <p className="text-sm text-trade-text-tertiary">{holding.quantity} shares @ ₹{holding.avgPrice}</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="text-base font-mono font-semibold text-trade-text-primary">{holding.totalValue}</p>
                    <p className={`text-sm font-mono ${holding.isPositive ? 'text-trade-up' : 'text-trade-down'}`}>
                      {holding.profitPercent}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded ${holding.isPositive ? 'bg-trade-up/10 text-trade-up' : 'bg-trade-down/10 text-trade-down'}`}>
                    <p className="text-sm font-mono font-semibold">{holding.profit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Movers Section */}
      <section ref={moversRef} className="min-h-screen flex items-center p-8">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-trade-text-primary text-center mb-8">Market Movers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Top Gainers */}
            <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-up">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <h3 className="text-2xl font-bold text-trade-text-primary">Top Gainers</h3>
              </div>
              <div className="space-y-4">
                {topGainers.slice(0, 5).map((stock, index) => (
                  <div 
                    key={stock.symbol} 
                    className="flex items-center justify-between p-4 bg-trade-main rounded-lg hover:bg-trade-hover transition-all"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div>
                      <p className="text-base font-semibold text-trade-text-primary">{stock.symbol}</p>
                      <p className="text-sm text-trade-text-tertiary">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-mono font-semibold text-trade-text-primary">₹{stock.price}</p>
                      <p className="text-sm font-mono text-trade-up font-bold">{stock.changePercent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Losers */}
            <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-down">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
                <h3 className="text-2xl font-bold text-trade-text-primary">Top Losers</h3>
              </div>
              <div className="space-y-4">
                {topLosers.slice(0, 5).map((stock, index) => (
                  <div 
                    key={stock.symbol} 
                    className="flex items-center justify-between p-4 bg-trade-main rounded-lg hover:bg-trade-hover transition-all"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div>
                      <p className="text-base font-semibold text-trade-text-primary">{stock.symbol}</p>
                      <p className="text-sm text-trade-text-tertiary">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-mono font-semibold text-trade-text-primary">₹{stock.price}</p>
                      <p className="text-sm font-mono text-trade-down font-bold">{stock.changePercent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market News Section */}
      <section ref={newsRef} className="min-h-screen flex items-center p-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-info">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                <h2 className="text-3xl font-bold text-trade-text-primary">Market News</h2>
              </div>
              <span className="text-sm text-trade-text-tertiary">Live Updates</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketNews.slice(0, 6).map((news, index) => (
                <div 
                  key={news.id} 
                  className="p-5 bg-trade-main rounded-lg hover:bg-trade-hover transition-all cursor-pointer border border-trade-border-light hover:border-trade-info/30 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs px-3 py-1 rounded ${
                      news.sentiment === 'positive' ? 'bg-trade-up/10 text-trade-up' :
                      news.sentiment === 'negative' ? 'bg-trade-down/10 text-trade-down' :
                      'bg-trade-text-tertiary/10 text-trade-text-tertiary'
                    }`}>
                      {news.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-trade-text-tertiary">{news.time}</span>
                  </div>
                  <h4 className="text-base font-medium text-trade-text-primary mb-3 leading-snug">{news.title}</h4>
                  <p className="text-sm text-trade-text-tertiary">{news.source}</p>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 border border-trade-border-medium rounded-lg text-base text-trade-text-secondary hover:bg-trade-hover transition-all transform hover:scale-105">
              View All News →
            </button>
          </div>
        </div>
      </section>

      {/* Sector Performance & Trending Section */}
      <section ref={sectorsRef} className="min-h-screen flex items-center p-8">
        <div className="max-w-6xl mx-auto w-full space-y-8">
          {/* Sector Performance */}
          <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-info">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              <h3 className="text-3xl font-bold text-trade-text-primary">Sector Performance</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {sectorPerformance.map((sector, index) => (
                <div 
                  key={sector.name} 
                  className="p-6 bg-trade-main rounded-lg text-center hover:bg-trade-hover transition-all transform hover:scale-110"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <p className="text-sm text-trade-text-tertiary mb-3">{sector.name}</p>
                  <p className={`text-2xl font-mono font-bold ${sector.isPositive ? 'text-trade-up' : 'text-trade-down'}`}>
                    {sector.change}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Stocks */}
          <div ref={trendingRef} className="bg-gradient-to-br from-trade-info/5 to-purple-500/5 border border-trade-info/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              <h3 className="text-3xl font-bold text-trade-text-primary">Trending on Social Media</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {trendingStocks.map((stock, index) => (
                <div 
                  key={stock.symbol} 
                  className="p-5 bg-trade-main rounded-lg hover:bg-trade-hover transition-all text-center border border-trade-border-light transform hover:scale-110"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <p className="text-base font-bold text-trade-text-primary mb-2">{stock.symbol}</p>
                  <p className="text-sm text-trade-text-tertiary mb-3">{stock.name}</p>
                  <p className={`text-sm font-mono font-bold ${stock.change.startsWith('+') ? 'text-trade-up' : 'text-trade-down'}`}>
                    {stock.change}
                  </p>
                  <p className="text-xs text-trade-text-tertiary mt-2">{stock.mentions} mentions</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} id="features" className="min-h-screen flex items-center p-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-trade-text-primary text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-trade-secondary border border-trade-border-medium rounded-xl hover:border-trade-info/50 transition-all group transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-trade-info to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trade-text-primary mb-3">AI-Powered Analysis</h3>
              <p className="text-base text-trade-text-secondary">
                Advanced machine learning models analyze market trends and patterns to provide accurate predictions.
              </p>
            </div>

            <div className="p-8 bg-trade-secondary border border-trade-border-medium rounded-xl hover:border-trade-info/50 transition-all group transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trade-text-primary mb-3">Real-Time Insights</h3>
              <p className="text-base text-trade-text-secondary">
                Get instant market updates, stock movements, and breaking news that affects your portfolio.
              </p>
            </div>

            <div className="p-8 bg-trade-secondary border border-trade-border-medium rounded-xl hover:border-trade-info/50 transition-all group transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trade-text-primary mb-3">Smart Recommendations</h3>
              <p className="text-base text-trade-text-secondary">
                Receive personalized stock recommendations based on your investment goals and risk profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="min-h-screen flex items-center p-8">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-trade-text-primary text-center mb-12">Trusted by Traders Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 bg-gradient-to-br from-trade-secondary to-trade-tertiary border border-trade-border-medium rounded-xl text-center transform hover:scale-110 transition-transform">
              <div className="text-5xl font-bold text-trade-info mb-3">99.9%</div>
              <div className="text-lg text-trade-text-secondary">Uptime</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-trade-secondary to-trade-tertiary border border-trade-border-medium rounded-xl text-center transform hover:scale-110 transition-transform">
              <div className="text-5xl font-bold text-trade-up mb-3">87%</div>
              <div className="text-lg text-trade-text-secondary">Accuracy</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-trade-secondary to-trade-tertiary border border-trade-border-medium rounded-xl text-center transform hover:scale-110 transition-transform">
              <div className="text-5xl font-bold text-purple-500 mb-3">5000+</div>
              <div className="text-lg text-trade-text-secondary">Stocks Tracked</div>
            </div>
            <div className="p-8 bg-gradient-to-br from-trade-secondary to-trade-tertiary border border-trade-border-medium rounded-xl text-center transform hover:scale-110 transition-transform">
              <div className="text-5xl font-bold text-blue-500 mb-3">24/7</div>
              <div className="text-lg text-trade-text-secondary">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} id="how-it-works" className="min-h-screen flex items-center p-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto w-full space-y-8">
          <h2 className="text-4xl font-bold text-trade-text-primary text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            <div className="text-center space-y-4 transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-trade-info/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-trade-info">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-trade-text-primary">Ask Questions</h3>
              <p className="text-base text-trade-text-secondary px-4">
                Chat with our AI assistant about stocks, market trends, or investment strategies.
              </p>
            </div>
            <div className="text-center space-y-4 transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-purple-500">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-trade-text-primary">Get AI Insights</h3>
              <p className="text-base text-trade-text-secondary px-4">
                Receive detailed analysis powered by multiple machine learning models.
              </p>
            </div>
            <div className="text-center space-y-4 transform hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-trade-up/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-trade-up">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-trade-text-primary">Make Decisions</h3>
              <p className="text-base text-trade-text-secondary px-4">
                Use AI-powered insights to make informed investment decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="min-h-screen flex items-center p-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-gradient-to-r from-trade-info/10 to-blue-600/10 border border-trade-info/20 rounded-2xl p-16 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-trade-text-primary">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-trade-text-secondary max-w-2xl mx-auto">
              Start chatting with our AI assistant now and discover smarter ways to invest in the stock market.
            </p>
            <Link href="/chat" className="px-10 py-4 bg-trade-info hover:bg-blue-600 text-white text-lg font-medium rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3 transform hover:scale-110">
              <span>Start Chatting</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
