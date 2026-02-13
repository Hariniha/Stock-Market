'use client'

import { useState } from 'react'

interface ChatMessage {
  id: number
  type: 'user' | 'ai'
  content: string
  timestamp: string
}

export default function EmptyChatSidebar() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newUserMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newUserMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response with variety based on keywords
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()
    
    if (lowerQuery.includes('predict') || lowerQuery.includes('forecast')) {
      return '🔮 For predictions, I analyze multiple factors:\n\n• Historical price patterns\n• Volume trends\n• Market sentiment\n• Technical indicators\n• Fundamental metrics\n\nWhich specific stock would you like me to analyze? I can provide detailed short-term and long-term forecasts with confidence scores.'
    }
    
    if (lowerQuery.includes('buy') || lowerQuery.includes('invest')) {
      return '💰 Investment Recommendations:\n\nBefore suggesting stocks, I need to understand:\n1. Your investment horizon (short/medium/long term)\n2. Risk tolerance (conservative/moderate/aggressive)\n3. Preferred sectors\n4. Investment amount\n\nBased on current market conditions, Banking and IT sectors show strong fundamentals. Would you like specific stock recommendations in these sectors?'
    }
    
    if (lowerQuery.includes('sell') || lowerQuery.includes('exit')) {
      return '📊 Exit Strategy Analysis:\n\nTo help with selling decisions, I consider:\n• Current profit/loss position\n• Technical resistance levels\n• Fundamental changes\n• Market sentiment shifts\n\nWhich stock are you considering selling? I can analyze if it\'s the right time or if you should hold longer.'
    }
    
    if (lowerQuery.includes('risk')) {
      return '⚠️ Risk Management Tips:\n\n1. Diversification: Don\'t put all eggs in one basket\n2. Position Sizing: Risk only 1-2% per trade\n3. Stop Loss: Always set protective stops\n4. Portfolio Balance: Mix of growth and stable stocks\n5. Regular Review: Rebalance quarterly\n\nWould you like me to analyze the risk profile of your portfolio?'
    }
    
    if (lowerQuery.includes('tech') || lowerQuery.includes('it')) {
      return '💻 IT Sector Overview:\n\n📈 Top Picks: TCS, Infosys, HCL Tech\n\nStrengths:\n✅ Strong digital transformation demand\n✅ Healthy order books\n✅ Improving margins\n\nConcerns:\n⚠️ Rupee appreciation impact\n⚠️ Global slowdown risks\n\nCurrent Recommendation: ACCUMULATE on dips\n\nWant detailed analysis on specific IT stocks?'
    }

    return 'I\'m analyzing your query with advanced AI models. Based on current market data and patterns, I can provide insights on:\n\n• Stock price predictions\n• Technical analysis\n• Fundamental analysis\n• Market trends\n• Investment strategies\n\nCould you please specify which aspect you\'d like me to focus on? Or mention a specific stock symbol for detailed analysis.'
  }

  return (
    <aside className="w-full max-w-4xl bg-trade-main border border-trade-border-medium rounded-xl flex flex-col h-full flex-shrink-0 m-4 shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-trade-border-medium bg-gradient-to-br from-trade-secondary to-trade-main">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-trade-info to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-base font-bold text-trade-text-primary">AI Assistant</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trade-up rounded-full animate-pulse"></div>
              <p className="text-xs text-trade-text-tertiary">Online • Ready to Help</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-trade-text-secondary leading-relaxed">
          Ask me anything about stock market predictions, analysis, or investment strategies.
        </p>
      </div>

      {/* Chat Messages - Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gradient-to-b from-trade-main to-trade-secondary/20">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <div className="w-20 h-20 bg-gradient-to-br from-trade-info to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-trade-text-primary mb-3">Welcome to AI Stock Assistant</h3>
            <p className="text-sm text-trade-text-secondary mb-6 max-w-md">
              I'm here to help you with stock market analysis, predictions, and investment strategies. 
              Ask me anything to get started!
            </p>
            <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
              <button
                onClick={() => setInputMessage('Analyze RELIANCE stock')}
                className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg hover:bg-trade-hover hover:border-trade-info/30 transition-all text-left group"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-info mb-2">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
                <p className="text-sm font-semibold text-trade-text-primary">Analyze a Stock</p>
                <p className="text-xs text-trade-text-tertiary mt-1">Get detailed stock analysis</p>
              </button>
              <button
                onClick={() => setInputMessage('Top gainers today')}
                className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg hover:bg-trade-hover hover:border-trade-info/30 transition-all text-left group"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trade-up mb-2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <p className="text-sm font-semibold text-trade-text-primary">Market Movers</p>
                <p className="text-xs text-trade-text-tertiary mt-1">See top gainers & losers</p>
              </button>
              <button
                onClick={() => setInputMessage('Best IT stocks to invest')}
                className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg hover:bg-trade-hover hover:border-trade-info/30 transition-all text-left group"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mb-2">
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
                <p className="text-sm font-semibold text-trade-text-primary">Investment Ideas</p>
                <p className="text-xs text-trade-text-tertiary mt-1">Get stock recommendations</p>
              </button>
              <button
                onClick={() => setInputMessage('Explain risk management')}
                className="p-4 bg-trade-secondary border border-trade-border-medium rounded-lg hover:bg-trade-hover hover:border-trade-info/30 transition-all text-left group"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 mb-2">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <p className="text-sm font-semibold text-trade-text-primary">Risk Management</p>
                <p className="text-xs text-trade-text-tertiary mt-1">Learn to manage risks</p>
              </button>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-trade-info to-blue-600 rounded-md flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                      </div>
                      <span className="text-[10px] font-medium text-trade-text-tertiary">AI Assistant</span>
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-4 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-trade-info to-blue-600 text-white shadow-lg'
                        : 'bg-trade-secondary border border-trade-border-medium text-trade-text-primary shadow-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                  <p className={`text-[10px] text-trade-text-tertiary mt-1 px-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-trade-info to-blue-600 rounded-md flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <span className="text-[10px] font-medium text-trade-text-tertiary">AI Assistant</span>
                  </div>
                  <div className="rounded-lg p-4 bg-trade-secondary border border-trade-border-medium">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-trade-info rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-trade-info rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-trade-info rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-trade-border-medium bg-trade-secondary">
        <div className="mb-2">
          <p className="text-[10px] text-trade-text-tertiary mb-1">Quick questions:</p>
          <div className="flex gap-2 flex-wrap">
            {[
              'Analyze RELIANCE stock',
              'Top gainers today',
              'Banking sector outlook',
              'Best IT stocks',
              'Market predictions',
              'Risk management tips'
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInputMessage(suggestion)}
                className="px-2 py-1 bg-trade-tertiary hover:bg-trade-hover text-[10px] text-trade-text-secondary hover:text-trade-text-primary rounded transition-all border border-trade-border-light hover:border-trade-info/30"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your question here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-trade-tertiary border border-trade-border-light text-trade-text-primary text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-trade-info focus:ring-2 focus:ring-trade-info/20 transition-all"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="px-4 py-3 bg-gradient-to-br from-trade-info to-blue-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-trade-text-tertiary mt-2 text-center">
          Powered by Advanced Machine Learning Models
        </p>
      </div>
    </aside>
  )
}
