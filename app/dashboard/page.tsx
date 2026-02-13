'use client'

import { useState } from 'react'
import TopNavigation from '@/components/TopNavigation'
import LeftSidebar from '@/components/LeftSidebar'

// Market Line Chart Component
function MarketLineChart({ period }: { period: '1D' | '1W' | '1M' | '1Y' }) {
  // Generate realistic market data based on period
  const generateData = () => {
    const dataPoints: { [key: string]: number[] } = {
      '1D': [21340, 21355, 21348, 21362, 21358, 21375, 21382, 21390, 21385, 21395, 21402, 21410, 21405, 21418, 21425, 21430, 21428, 21435, 21442, 21450, 21454],
      '1W': [21120, 21180, 21150, 21220, 21250, 21195, 21240, 21280, 21310, 21290, 21335, 21365, 21390, 21410, 21385, 21420, 21435, 21454],
      '1M': [20850, 20920, 20880, 20950, 21020, 20980, 21050, 21110, 21080, 21140, 21185, 21220, 21190, 21250, 21295, 21270, 21320, 21365, 21340, 21390, 21425, 21454],
      '1Y': [19200, 19450, 19580, 19720, 19850, 20010, 20150, 20280, 20420, 20350, 20480, 20620, 20750, 20680, 20820, 20950, 21080, 21150, 21220, 21300, 21380, 21454]
    }
    return dataPoints[period]
  }

  const data = generateData()
  const width = 1000
  const height = 280
  const padding = { top: 20, right: 20, bottom: 40, left: 60 }
  
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom
  
  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)
  const valueRange = maxValue - minValue
  
  // Calculate points for the line
  const points = data.map((value, index) => {
    const x = padding.left + (index / (data.length - 1)) * chartWidth
    const y = padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight
    return { x, y, value }
  })
  
  // Create path string for the line
  const linePath = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ')
  
  // Create path for the gradient fill area
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`
  
  // Generate Y-axis labels
  const yAxisSteps = 5
  const yLabels = Array.from({ length: yAxisSteps + 1 }, (_, i) => {
    const value = minValue + (valueRange / yAxisSteps) * i
    return Math.round(value)
  }).reverse()
  
  // Generate X-axis labels based on period
  const getXLabels = () => {
    switch(period) {
      case '1D': return ['9:30', '11:00', '12:30', '14:00', '15:30']
      case '1W': return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      case '1M': return ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      case '1Y': return ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov']
      default: return []
    }
  }
  const xLabels = getXLabels()
  
  const change = data[data.length - 1] - data[0]
  const changePercent = ((change / data[0]) * 100).toFixed(2)
  const isPositive = change >= 0

  return (
    <div className="w-full h-full p-4">
      {/* Chart Info */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-trade-text-primary">21,453.95</span>
          <span className={`text-sm font-mono ${isPositive ? 'text-trade-up' : 'text-trade-down'}`}>
            {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent}%)
          </span>
        </div>
        <p className="text-xs text-trade-text-tertiary mt-1">NIFTY 50 • {period}</p>
      </div>
      
      {/* SVG Chart */}
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full"
        style={{ maxHeight: '240px' }}
      >
        {/* Define gradient for fill */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: isPositive ? '#10b981' : '#ef4444', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: isPositive ? '#10b981' : '#ef4444', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {yLabels.map((_, index) => {
          const y = padding.top + (chartHeight / yAxisSteps) * index
          return (
            <line
              key={`grid-${index}`}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-trade-border-light"
              strokeDasharray="4 4"
            />
          )
        })}
        
        {/* Y-axis labels */}
        {yLabels.map((label, index) => {
          const y = padding.top + (chartHeight / yAxisSteps) * index
          return (
            <text
              key={`y-label-${index}`}
              x={padding.left - 10}
              y={y + 4}
              textAnchor="end"
              className="text-trade-text-tertiary"
              style={{ fontSize: '11px' }}
            >
              {label}
            </text>
          )
        })}
        
        {/* X-axis labels */}
        {xLabels.map((label, index) => {
          const x = padding.left + (chartWidth / (xLabels.length - 1)) * index
          return (
            <text
              key={`x-label-${index}`}
              x={x}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              className="text-trade-text-tertiary"
              style={{ fontSize: '11px' }}
            >
              {label}
            </text>
          )
        })}
        
        {/* Area fill */}
        <path
          d={areaPath}
          fill="url(#lineGradient)"
        />
        
        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={isPositive ? '#10b981' : '#ef4444'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={`point-${index}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill={isPositive ? '#10b981' : '#ef4444'}
            className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <title>{point.value.toFixed(2)}</title>
          </circle>
        ))}
      </svg>
    </div>
  )
}

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'1D' | '1W' | '1M' | '1Y'>('1D')

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-trade-main">
      {/* Top Navigation - Fixed 60px */}
      <TopNavigation />
      
      {/* Main Layout - Full Dashboard */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Watchlist */}
        <LeftSidebar />
        
        {/* Main Dashboard Content - Full Width */}
        <main className="flex-1 overflow-y-auto bg-trade-main p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-trade-info/10 to-purple-500/10 border border-trade-info/20 rounded-xl p-6">
              <h1 className="text-2xl font-bold text-trade-text-primary mb-2">Welcome to Your Trading Dashboard</h1>
              <p className="text-sm text-trade-text-secondary">
                Monitor your portfolio, track market trends, and get AI-powered insights all in one place.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg">
                <p className="text-xs text-trade-text-tertiary mb-1">NIFTY 50</p>
                <p className="text-xl font-bold text-trade-text-primary">21,453.95</p>
                <p className="text-xs font-mono text-trade-up">+0.58%</p>
              </div>
              <div className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg">
                <p className="text-xs text-trade-text-tertiary mb-1">SENSEX</p>
                <p className="text-xl font-bold text-trade-text-primary">71,752.30</p>
                <p className="text-xs font-mono text-trade-up">+0.58%</p>
              </div>
              <div className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg">
                <p className="text-xs text-trade-text-tertiary mb-1">Portfolio Value</p>
                <p className="text-xl font-bold text-trade-text-primary">₹2.54L</p>
                <p className="text-xs font-mono text-trade-up">+5.87%</p>
              </div>
              <div className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg">
                <p className="text-xs text-trade-text-tertiary mb-1">Today's P&L</p>
                <p className="text-xl font-bold text-trade-up">+₹4,258</p>
                <p className="text-xs font-mono text-trade-up">+1.68%</p>
              </div>
            </div>

            {/* Market Overview Chart Placeholder */}
            <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-trade-text-primary">Market Overview</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedPeriod('1D')}
                    className={`px-3 py-1 text-xs rounded transition-all ${
                      selectedPeriod === '1D' 
                        ? 'bg-trade-info text-white' 
                        : 'bg-trade-hover text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary'
                    }`}
                  >
                    1D
                  </button>
                  <button 
                    onClick={() => setSelectedPeriod('1W')}
                    className={`px-3 py-1 text-xs rounded transition-all ${
                      selectedPeriod === '1W' 
                        ? 'bg-trade-info text-white' 
                        : 'bg-trade-hover text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary'
                    }`}
                  >
                    1W
                  </button>
                  <button 
                    onClick={() => setSelectedPeriod('1M')}
                    className={`px-3 py-1 text-xs rounded transition-all ${
                      selectedPeriod === '1M' 
                        ? 'bg-trade-info text-white' 
                        : 'bg-trade-hover text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary'
                    }`}
                  >
                    1M
                  </button>
                  <button 
                    onClick={() => setSelectedPeriod('1Y')}
                    className={`px-3 py-1 text-xs rounded transition-all ${
                      selectedPeriod === '1Y' 
                        ? 'bg-trade-info text-white' 
                        : 'bg-trade-hover text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary'
                    }`}
                  >
                    1Y
                  </button>
                </div>
              </div>
              
              {/* Market Line Chart */}
              <div className="h-80 bg-trade-main rounded-lg border border-trade-border-light relative">
                <MarketLineChart period={selectedPeriod} />
              </div>
            </div>

            {/* Watchlist Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-6">
                <h3 className="text-lg font-bold text-trade-text-primary mb-4">Portfolio Distribution</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-trade-text-secondary">Banking</span>
                      <span className="text-trade-text-primary font-mono">42%</span>
                    </div>
                    <div className="h-2 bg-trade-main rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-trade-text-secondary">IT Services</span>
                      <span className="text-trade-text-primary font-mono">35%</span>
                    </div>
                    <div className="h-2 bg-trade-main rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-trade-text-secondary">Automobile</span>
                      <span className="text-trade-text-primary font-mono">15%</span>
                    </div>
                    <div className="h-2 bg-trade-main rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-trade-text-secondary">Energy</span>
                      <span className="text-trade-text-primary font-mono">8%</span>
                    </div>
                    <div className="h-2 bg-trade-main rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-trade-secondary border border-trade-border-medium rounded-xl p-6">
                <h3 className="text-lg font-bold text-trade-text-primary mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-2 bg-trade-main rounded">
                    <div className="w-8 h-8 rounded-full bg-trade-up/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-trade-up">BUY</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-trade-text-primary">TATAMOTORS</p>
                      <p className="text-xs text-trade-text-tertiary">30 shares @ ₹705.00</p>
                    </div>
                    <p className="text-xs text-trade-text-tertiary">2h ago</p>
                  </div>
                  <div className="flex items-start gap-3 p-2 bg-trade-main rounded">
                    <div className="w-8 h-8 rounded-full bg-trade-up/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-trade-up">BUY</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-trade-text-primary">ICICIBANK</p>
                      <p className="text-xs text-trade-text-tertiary">50 shares @ ₹920.00</p>
                    </div>
                    <p className="text-xs text-trade-text-tertiary">1d ago</p>
                  </div>
                  <div className="flex items-start gap-3 p-2 bg-trade-main rounded">
                    <div className="w-8 h-8 rounded-full bg-trade-down/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-trade-down">SELL</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-trade-text-primary">WIPRO</p>
                      <p className="text-xs text-trade-text-tertiary">25 shares @ ₹455.00</p>
                    </div>
                    <p className="text-xs text-trade-text-tertiary">2d ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights Section */}
            <div className="bg-gradient-to-br from-trade-info/10 to-blue-600/10 border border-trade-info/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-trade-info to-blue-600 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-trade-text-primary">AI Insights & Recommendations</h3>
                  <p className="text-xs text-trade-text-tertiary">Powered by advanced machine learning models</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-trade-main rounded-lg border border-trade-border-light">
                  <div className="flex items-start gap-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 flex-shrink-0">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <div>
                      <h4 className="text-sm font-semibold text-trade-text-primary mb-1">Portfolio Rebalancing Suggestion</h4>
                      <p className="text-xs text-trade-text-secondary leading-relaxed">
                        Your IT sector exposure is high. Consider diversifying into Pharma or FMCG sectors for better risk management.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-trade-main rounded-lg border border-trade-border-light">
                  <div className="flex items-start gap-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-info flex-shrink-0">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                    <div>
                      <h4 className="text-sm font-semibold text-trade-text-primary mb-1">Market Opportunity</h4>
                      <p className="text-xs text-trade-text-secondary leading-relaxed">
                        Banking stocks showing strong momentum. ICICIBANK and KOTAKBANK have high probability of 5-8% upside in next 4 weeks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-trade-main rounded-lg border border-trade-border-light">
                  <div className="flex items-start gap-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 flex-shrink-0">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <div>
                      <h4 className="text-sm font-semibold text-trade-text-primary mb-1">Risk Alert</h4>
                      <p className="text-xs text-trade-text-secondary leading-relaxed">
                        Global markets showing volatility. Consider setting stop-losses at 5% below current levels for protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
