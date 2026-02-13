'use client'

import { useState } from 'react'
import { watchlistStocks, marketIndices, trendingStocks, topGainers, topLosers, type StockData } from '@/lib/mockData'

// Mini Sparkline Component
function MiniSparkline({ data, isPositive }: { data: number[], isPositive: boolean }) {
  const width = 80
  const height = 24
  const padding = 2

  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)
  const range = maxValue - minValue || 1

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * (width - padding * 2) + padding
    const y = height - padding - ((value - minValue) / range) * (height - padding * 2)
    return `${x},${y}`
  }).join(' ')

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="opacity-80">
      <polyline
        points={points}
        fill="none"
        stroke={isPositive ? '#00C896' : '#FF3B69'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Stock Card Component
function StockCard({ stock, isActive, onClick }: { stock: StockData, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-3 border-b border-trade-border-light hover:bg-trade-hover transition-all text-left group ${
        isActive ? 'bg-trade-tertiary border-l-2 border-l-trade-info' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-1">
        <div>
          <h3 className="text-sm font-semibold text-trade-text-primary">{stock.symbol}</h3>
          <p className="text-[10px] text-trade-text-tertiary truncate">{stock.name}</p>
        </div>
        <MiniSparkline data={stock.sparklineData} isPositive={stock.isPositive} />
      </div>
      
      <div className="flex items-end justify-between mt-2">
        <div>
          <p className="text-base font-mono font-bold text-trade-text-primary">₹{stock.price}</p>
        </div>
        <div className="text-right">
          <p className={`text-xs font-mono ${stock.isPositive ? 'text-trade-up' : 'text-trade-down'}`}>
            {stock.changePercent}
          </p>
          <p className={`text-[10px] font-mono ${stock.isPositive ? 'text-trade-up' : 'text-trade-down'}`}>
            {stock.change}
          </p>
        </div>
      </div>
    </button>
  )
}

export default function LeftSidebar() {
  const [activeStock, setActiveStock] = useState(0)
  const [activeTab, setActiveTab] = useState<'all' | 'gainers' | 'losers' | 'trending'>('all')
  const [showAddStock, setShowAddStock] = useState(false)

  const getDisplayStocks = () => {
    switch (activeTab) {
      case 'gainers':
        return topGainers
      case 'losers':
        return topLosers
      case 'trending':
        return watchlistStocks.filter(s => 
          trendingStocks.some(t => t.symbol === s.symbol)
        ).slice(0, 5)
      default:
        return watchlistStocks
    }
  }

  const displayStocks = getDisplayStocks()

  return (
    <aside className="w-[320px] bg-trade-main border-r border-trade-border-medium flex flex-col h-full">
      {/* Market Indices Section */}
      <div className="p-4 border-b border-trade-border-medium bg-gradient-to-br from-trade-secondary to-trade-main">
        <h3 className="text-[10px] font-bold text-trade-text-tertiary tracking-wider mb-3">MARKET OVERVIEW</h3>
        <div className="grid grid-cols-2 gap-2">
          {marketIndices.map((index) => (
            <div 
              key={index.symbol}
              className="p-2 bg-trade-tertiary border border-trade-border-light rounded hover:border-trade-info/30 transition-all"
            >
              <p className="text-[9px] text-trade-text-tertiary mb-0.5">{index.name}</p>
              <p className="text-xs font-mono font-bold text-trade-text-primary">{index.value}</p>
              <p className={`text-[9px] font-mono ${index.isPositive ? 'text-trade-up' : 'text-trade-down'}`}>
                {index.changePercent}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="p-4 border-b border-trade-border-medium bg-trade-secondary">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-trade-text-primary tracking-wide">STOCKS</h2>
          <button 
            onClick={() => setShowAddStock(!showAddStock)}
            className="p-1.5 hover:bg-trade-hover rounded transition-all group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-text-secondary group-hover:text-trade-info transition-colors">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
        
        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-2 py-1.5 text-xs font-medium rounded shadow-sm transition-all ${
              activeTab === 'all'
                ? 'bg-trade-info text-white'
                : 'text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary border border-trade-border-light'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab('trending')}
            className={`px-2 py-1.5 text-xs font-medium rounded shadow-sm transition-all flex items-center gap-1 justify-center ${
              activeTab === 'trending'
                ? 'bg-trade-info text-white'
                : 'text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary border border-trade-border-light'
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
            <span>Trending</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => setActiveTab('gainers')}
            className={`px-2 py-1.5 text-xs font-medium rounded shadow-sm transition-all flex items-center gap-1 justify-center ${
              activeTab === 'gainers'
                ? 'bg-trade-up text-white'
                : 'text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary border border-trade-border-light'
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span>Gainers</span>
          </button>
          <button 
            onClick={() => setActiveTab('losers')}
            className={`px-2 py-1.5 text-xs font-medium rounded shadow-sm transition-all flex items-center gap-1 justify-center ${
              activeTab === 'losers'
                ? 'bg-trade-down text-white'
                : 'text-trade-text-secondary hover:bg-trade-hover hover:text-trade-text-primary border border-trade-border-light'
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
              <polyline points="17 18 23 18 23 12"></polyline>
            </svg>
            <span>Losers</span>
          </button>
        </div>

        {/* Add Stock Modal */}
        {showAddStock && (
          <div className="mt-3 p-3 bg-trade-tertiary border border-trade-border-light rounded">
            <input
              type="text"
              placeholder="Enter stock symbol..."
              className="w-full bg-trade-main border border-trade-border-light text-trade-text-primary text-xs px-2 py-1.5 rounded focus:outline-none focus:border-trade-info mb-2"
            />
            <div className="flex gap-2">
              <button className="flex-1 px-2 py-1 text-xs bg-trade-info text-white rounded hover:brightness-110 transition-all">
                Add
              </button>
              <button 
                onClick={() => setShowAddStock(false)}
                className="flex-1 px-2 py-1 text-xs bg-trade-hover text-trade-text-secondary rounded hover:bg-trade-border-light transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stock List - Scrollable */}
      <div className="flex-1 overflow-y-auto scroll-smooth pb-4">
        {displayStocks.map((stock, index) => (
          <StockCard
            key={stock.symbol}
            stock={stock}
            isActive={activeStock === index}
            onClick={() => setActiveStock(index)}
          />
        ))}
        
        {/* Additional Info for Trending Tab */}
        {activeTab === 'trending' && (
          <div className="p-4 bg-trade-secondary/50">
            <div className="flex items-center gap-2 mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-text-tertiary">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
              <p className="text-[10px] text-trade-text-tertiary">Social mentions in last 24h:</p>
            </div>
            {trendingStocks.map((stock) => (
              <div key={stock.symbol} className="flex justify-between items-center py-1.5 border-b border-trade-border-light last:border-0">
                <span className="text-xs font-medium text-trade-text-primary">{stock.symbol}</span>
                <span className="text-xs text-trade-text-secondary">{stock.mentions} posts</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-trade-border-light bg-trade-secondary">
        <div className="grid grid-cols-3 gap-3 text-center mb-3">
          <div>
            <p className="text-[10px] text-trade-text-tertiary mb-1">GAINERS</p>
            <p className="text-sm font-mono font-semibold text-trade-up">{topGainers.length}</p>
          </div>
          <div>
            <p className="text-[10px] text-trade-text-tertiary mb-1">LOSERS</p>
            <p className="text-sm font-mono font-semibold text-trade-down">{topLosers.length}</p>
          </div>
          <div>
            <p className="text-[10px] text-trade-text-tertiary mb-1">TOTAL</p>
            <p className="text-sm font-mono font-semibold text-trade-text-secondary">{watchlistStocks.length}</p>
          </div>
        </div>
        <div className="text-center pt-2 border-t border-trade-border-light">
          <p className="text-[9px] text-trade-text-tertiary">Last updated: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </aside>
  )
}
