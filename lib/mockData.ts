// Mock Data for Stock Market AI Assistant Application

export interface StockData {
  symbol: string
  name: string
  price: string
  change: string
  changePercent: string
  isPositive: boolean
  sparklineData: number[]
  sector: string
  marketCap: string
  pe: string
  volume: string
  high: string
  low: string
  open: string
  previousClose: string
}

export interface MarketIndex {
  name: string
  symbol: string
  value: string
  change: string
  changePercent: string
  isPositive: boolean
}

export interface NewsItem {
  id: number
  title: string
  source: string
  time: string
  category: 'market' | 'company' | 'economic' | 'global'
  sentiment: 'positive' | 'negative' | 'neutral'
}

export interface PortfolioHolding {
  symbol: string
  name: string
  quantity: number
  avgPrice: string
  currentPrice: string
  totalValue: string
  profit: string
  profitPercent: string
  isPositive: boolean
}

export interface ChatMessage {
  id: number
  type: 'user' | 'ai'
  content: string
  timestamp: string
}

// Comprehensive Stock Watchlist
export const watchlistStocks: StockData[] = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: '2,450.30',
    change: '+15.20',
    changePercent: '+0.62%',
    isPositive: true,
    sparklineData: [2420, 2425, 2418, 2432, 2428, 2435, 2440, 2438, 2445, 2450],
    sector: 'Energy',
    marketCap: '₹16.58T',
    pe: '28.45',
    volume: '8.2M',
    high: '2,455.80',
    low: '2,415.20',
    open: '2,420.50',
    previousClose: '2,435.10'
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    price: '3,820.50',
    change: '-22.10',
    changePercent: '-0.57%',
    isPositive: false,
    sparklineData: [3850, 3845, 3840, 3835, 3830, 3828, 3825, 3822, 3820, 3820],
    sector: 'IT Services',
    marketCap: '₹13.95T',
    pe: '31.20',
    volume: '3.5M',
    high: '3,850.00',
    low: '3,815.30',
    open: '3,842.60',
    previousClose: '3,842.60'
  },
  {
    symbol: 'INFY',
    name: 'Infosys Limited',
    price: '1,567.80',
    change: '+8.90',
    changePercent: '+0.57%',
    isPositive: true,
    sparklineData: [1555, 1558, 1560, 1562, 1565, 1563, 1566, 1568, 1567, 1568],
    sector: 'IT Services',
    marketCap: '₹6.48T',
    pe: '27.85',
    volume: '5.8M',
    high: '1,572.40',
    low: '1,558.90',
    open: '1,560.00',
    previousClose: '1,558.90'
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Limited',
    price: '1,645.20',
    change: '-8.50',
    changePercent: '-0.51%',
    isPositive: false,
    sparklineData: [1655, 1652, 1650, 1648, 1646, 1645, 1644, 1645, 1646, 1645],
    sector: 'Banking',
    marketCap: '₹12.45T',
    pe: '19.80',
    volume: '7.2M',
    high: '1,658.70',
    low: '1,640.50',
    open: '1,653.70',
    previousClose: '1,653.70'
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank Limited',
    price: '985.45',
    change: '+5.75',
    changePercent: '+0.59%',
    isPositive: true,
    sparklineData: [975, 978, 980, 982, 983, 984, 985, 986, 985, 985],
    sector: 'Banking',
    marketCap: '₹6.92T',
    pe: '18.95',
    volume: '9.4M',
    high: '988.90',
    low: '976.30',
    open: '978.20',
    previousClose: '979.70'
  },
  {
    symbol: 'BHARTIARTL',
    name: 'Bharti Airtel Limited',
    price: '1,234.60',
    change: '+12.40',
    changePercent: '+1.01%',
    isPositive: true,
    sparklineData: [1210, 1215, 1220, 1222, 1225, 1228, 1230, 1232, 1234, 1235],
    sector: 'Telecom',
    marketCap: '₹7.18T',
    pe: '42.30',
    volume: '4.8M',
    high: '1,238.50',
    low: '1,215.20',
    open: '1,222.30',
    previousClose: '1,222.20'
  },
  {
    symbol: 'TATAMOTORS',
    name: 'Tata Motors Limited',
    price: '785.30',
    change: '+18.75',
    changePercent: '+2.45%',
    isPositive: true,
    sparklineData: [755, 760, 765, 770, 775, 772, 778, 782, 784, 785],
    sector: 'Automobile',
    marketCap: '₹3.12T',
    pe: '15.40',
    volume: '12.5M',
    high: '790.80',
    low: '765.40',
    open: '766.55',
    previousClose: '766.55'
  },
  {
    symbol: 'WIPRO',
    name: 'Wipro Limited',
    price: '445.80',
    change: '-3.20',
    changePercent: '-0.71%',
    isPositive: false,
    sparklineData: [452, 450, 448, 447, 446, 445, 444, 445, 446, 446],
    sector: 'IT Services',
    marketCap: '₹2.45T',
    pe: '24.50',
    volume: '6.7M',
    high: '451.20',
    low: '443.50',
    open: '449.00',
    previousClose: '449.00'
  },
  {
    symbol: 'MARUTI',
    name: 'Maruti Suzuki India',
    price: '11,845.65',
    change: '+125.40',
    changePercent: '+1.07%',
    isPositive: true,
    sparklineData: [11700, 11720, 11750, 11780, 11795, 11810, 11820, 11830, 11840, 11846],
    sector: 'Automobile',
    marketCap: '₹3.58T',
    pe: '28.75',
    volume: '0.8M',
    high: '11,868.30',
    low: '11,715.80',
    open: '11,720.25',
    previousClose: '11,720.25'
  },
  {
    symbol: 'SBIN',
    name: 'State Bank of India',
    price: '628.40',
    change: '+8.90',
    changePercent: '+1.44%',
    isPositive: true,
    sparklineData: [615, 618, 620, 622, 624, 625, 626, 627, 628, 628],
    sector: 'Banking',
    marketCap: '₹5.61T',
    pe: '12.85',
    volume: '15.2M',
    high: '631.70',
    low: '617.30',
    open: '619.50',
    previousClose: '619.50'
  },
  {
    symbol: 'ASIANPAINT',
    name: 'Asian Paints Limited',
    price: '2,985.50',
    change: '-15.80',
    changePercent: '-0.53%',
    isPositive: false,
    sparklineData: [3005, 3000, 2998, 2995, 2992, 2990, 2988, 2986, 2985, 2986],
    sector: 'Paints',
    marketCap: '₹2.86T',
    pe: '58.40',
    volume: '1.2M',
    high: '3,008.90',
    low: '2,978.40',
    open: '3,001.30',
    previousClose: '3,001.30'
  },
  {
    symbol: 'KOTAKBANK',
    name: 'Kotak Mahindra Bank',
    price: '1,756.90',
    change: '+22.30',
    changePercent: '+1.29%',
    isPositive: true,
    sparklineData: [1725, 1730, 1735, 1740, 1745, 1748, 1752, 1754, 1756, 1757],
    sector: 'Banking',
    marketCap: '₹3.49T',
    pe: '16.75',
    volume: '3.8M',
    high: '1,762.40',
    low: '1,730.80',
    open: '1,734.60',
    previousClose: '1,734.60'
  },
  {
    symbol: 'LT',
    name: 'Larsen & Toubro',
    price: '3,445.80',
    change: '+42.60',
    changePercent: '+1.25%',
    isPositive: true,
    sparklineData: [3390, 3400, 3410, 3420, 3425, 3430, 3435, 3440, 3445, 3446],
    sector: 'Construction',
    marketCap: '₹4.82T',
    pe: '32.90',
    volume: '2.1M',
    high: '3,455.90',
    low: '3,398.20',
    open: '3,403.20',
    previousClose: '3,403.20'
  },
  {
    symbol: 'AXISBANK',
    name: 'Axis Bank Limited',
    price: '1,089.75',
    change: '-6.25',
    changePercent: '-0.57%',
    isPositive: false,
    sparklineData: [1100, 1098, 1095, 1093, 1092, 1091, 1090, 1089, 1089, 1090],
    sector: 'Banking',
    marketCap: '₹3.37T',
    pe: '13.45',
    volume: '8.9M',
    high: '1,102.50',
    low: '1,085.30',
    open: '1,096.00',
    previousClose: '1,096.00'
  },
  {
    symbol: 'SUNPHARMA',
    name: 'Sun Pharmaceutical',
    price: '1,532.60',
    change: '+18.40',
    changePercent: '+1.22%',
    isPositive: true,
    sparklineData: [1505, 1510, 1515, 1520, 1522, 1525, 1528, 1530, 1532, 1533],
    sector: 'Pharma',
    marketCap: '₹3.68T',
    pe: '41.20',
    volume: '2.9M',
    high: '1,538.70',
    low: '1,512.30',
    open: '1,514.20',
    previousClose: '1,514.20'
  }
]

// Market Indices
export const marketIndices: MarketIndex[] = [
  {
    name: 'NIFTY 50',
    symbol: 'NSEI',
    value: '21,453.95',
    change: '+124.35',
    changePercent: '+0.58%',
    isPositive: true
  },
  {
    name: 'SENSEX',
    symbol: 'BSE',
    value: '71,752.30',
    change: '+412.80',
    changePercent: '+0.58%',
    isPositive: true
  },
  {
    name: 'NIFTY BANK',
    symbol: 'NSEBANK',
    value: '45,892.75',
    change: '+234.50',
    changePercent: '+0.51%',
    isPositive: true
  },
  {
    name: 'NIFTY IT',
    symbol: 'NSEIT',
    value: '32,145.60',
    change: '-85.20',
    changePercent: '-0.26%',
    isPositive: false
  }
]

// Market News
export const marketNews: NewsItem[] = [
  {
    id: 1,
    title: 'Reliance Industries announces Q4 results, beats street estimates by 15%',
    source: 'Economic Times',
    time: '2 hours ago',
    category: 'company',
    sentiment: 'positive'
  },
  {
    id: 2,
    title: 'RBI keeps repo rate unchanged at 6.5%, maintains growth forecast',
    source: 'Reuters India',
    time: '4 hours ago',
    category: 'economic',
    sentiment: 'neutral'
  },
  {
    id: 3,
    title: 'IT stocks under pressure as rupee strengthens against dollar',
    source: 'Moneycontrol',
    time: '5 hours ago',
    category: 'market',
    sentiment: 'negative'
  },
  {
    id: 4,
    title: 'Foreign investors pour $2.5 billion into Indian equities this month',
    source: 'Bloomberg Quint',
    time: '6 hours ago',
    category: 'market',
    sentiment: 'positive'
  },
  {
    id: 5,
    title: 'Tata Motors electric vehicle sales surge 85% year-on-year',
    source: 'Business Standard',
    time: '8 hours ago',
    category: 'company',
    sentiment: 'positive'
  },
  {
    id: 6,
    title: 'India\'s GDP growth expected to reach 6.8% in current fiscal year',
    source: 'The Hindu Business',
    time: '10 hours ago',
    category: 'economic',
    sentiment: 'positive'
  },
  {
    id: 7,
    title: 'HDFC Bank reports strong Q4 with loan growth of 18%',
    source: 'Mint',
    time: '12 hours ago',
    category: 'company',
    sentiment: 'positive'
  },
  {
    id: 8,
    title: 'Crude oil prices drop 3% as global demand concerns persist',
    source: 'CNBC TV18',
    time: '14 hours ago',
    category: 'global',
    sentiment: 'negative'
  },
  {
    id: 9,
    title: 'Tech sector sees massive hiring spree with 50,000 new jobs',
    source: 'Economic Times',
    time: '1 day ago',
    category: 'market',
    sentiment: 'positive'
  },
  {
    id: 10,
    title: 'Inflation rate eases to 4.2%, within RBI\'s comfort zone',
    source: 'The Times of India',
    time: '1 day ago',
    category: 'economic',
    sentiment: 'positive'
  }
]

// Portfolio Holdings
export const portfolioHoldings: PortfolioHolding[] = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    quantity: 25,
    avgPrice: '2,320.00',
    currentPrice: '2,450.30',
    totalValue: '₹61,257.50',
    profit: '+₹3,257.50',
    profitPercent: '+5.62%',
    isPositive: true
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy',
    quantity: 15,
    avgPrice: '3,650.00',
    currentPrice: '3,820.50',
    totalValue: '₹57,307.50',
    profit: '+₹2,557.50',
    profitPercent: '+4.67%',
    isPositive: true
  },
  {
    symbol: 'INFY',
    name: 'Infosys Limited',
    quantity: 40,
    avgPrice: '1,480.00',
    currentPrice: '1,567.80',
    totalValue: '₹62,712.00',
    profit: '+₹3,512.00',
    profitPercent: '+5.93%',
    isPositive: true
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank',
    quantity: 50,
    avgPrice: '920.00',
    currentPrice: '985.45',
    totalValue: '₹49,272.50',
    profit: '+₹3,272.50',
    profitPercent: '+7.11%',
    isPositive: true
  },
  {
    symbol: 'TATAMOTORS',
    name: 'Tata Motors',
    quantity: 30,
    avgPrice: '705.00',
    currentPrice: '785.30',
    totalValue: '₹23,559.00',
    profit: '+₹2,409.00',
    profitPercent: '+11.39%',
    isPositive: true
  }
]

// AI Chat Conversations
export const sampleChatMessages: ChatMessage[] = [
  {
    id: 1,
    type: 'ai',
    content: 'Hello! I\'m your AI stock market assistant powered by advanced machine learning models. I can help you with stock analysis, market predictions, portfolio suggestions, and investment strategies. What would you like to know today?',
    timestamp: '9:00 AM'
  },
  {
    id: 2,
    type: 'user',
    content: 'What\'s your analysis on Reliance Industries for the next quarter?',
    timestamp: '9:05 AM'
  },
  {
    id: 3,
    type: 'ai',
    content: 'Based on my analysis of Reliance Industries (RELIANCE):\n\n📊 Current Price: ₹2,450.30 (+0.62%)\n\n✅ Positive Factors:\n• Strong Q4 earnings beat estimates by 15%\n• Diversified revenue streams (Oil, Retail, Telecom)\n• Jio platforms showing robust growth\n• Retail expansion continues aggressively\n\n⚠️ Considerations:\n• Global oil price volatility\n• High debt levels despite improvements\n• Competition in telecom sector\n\n🎯 Prediction: Technical indicators suggest potential upside to ₹2,600-2,650 range in next quarter if momentum continues. Support at ₹2,380.\n\nWould you like more detailed technical analysis or sector comparison?',
    timestamp: '9:06 AM'
  },
  {
    id: 4,
    type: 'user',
    content: 'What about IT sector stocks? Should I invest now?',
    timestamp: '9:10 AM'
  },
  {
    id: 5,
    type: 'ai',
    content: 'IT Sector Analysis (TCS, Infosys, Wipro):\n\n💼 Current Outlook: Mixed\n\nTop Picks:\n1. TCS (₹3,820.50) - Market leader, stable growth\n2. Infosys (₹1,567.80) - Strong digital transformation portfolio\n3. Wipro (₹445.80) - Value play, underperforming but potential turnaround\n\n📈 Growth Drivers:\n• Digital transformation demand remains high\n• Cloud migration accelerating\n• AI/ML services gaining traction\n• Strong order books\n\n⚠️ Headwinds:\n• Rupee appreciation impacts margins\n• US economic slowdown concerns\n• Increased competition\n• Client budget scrutiny\n\n💡 Recommendation: Good for long-term investors. Consider accumulating TCS and Infosys on dips. Entry point: TCS below ₹3,750, Infosys below ₹1,550.\n\nWant sector-specific recommendations?',
    timestamp: '9:12 AM'
  },
  {
    id: 6,
    type: 'user',
    content: 'Which banking stocks are good for short-term trading?',
    timestamp: '9:15 AM'
  },
  {
    id: 7,
    type: 'ai',
    content: '🏦 Banking Stocks - Short-term Trading Opportunities:\n\nTop 3 Picks:\n\n1. ICICI Bank (₹985.45, +0.59%)\n   • Strong momentum\n   • Breaking resistance at ₹980\n   • Target: ₹1,020-1,050\n   • Stop Loss: ₹965\n   • Risk/Reward: 1:2.5\n\n2. Kotak Mahindra (₹1,756.90, +1.29%)\n   • Technical breakout pattern\n   • Volume surge indicates interest\n   • Target: ₹1,820-1,850\n   • Stop Loss: ₹1,720\n\n3. State Bank of India (₹628.40, +1.44%)\n   • High volatility = trading opportunities\n   • Support at ₹615\n   • Target: ₹650-665\n   • Stop Loss: ₹610\n\n⏱️ Time Horizon: 2-4 weeks\n📊 Risk Level: Moderate\n\n⚠️ Important: Use proper position sizing and stick to stop losses. Banking sector sensitive to interest rate changes and economic data.\n\nWould you like detailed entry/exit strategies?',
    timestamp: '9:17 AM'
  },
  {
    id: 8,
    type: 'user',
    content: 'How do you predict stock movements? What models do you use?',
    timestamp: '9:20 AM'
  },
  {
    id: 9,
    type: 'ai',
    content: '🤖 My AI Prediction Framework:\n\nI use a multi-model ensemble approach:\n\n1. Technical Analysis Models:\n   • LSTM networks for price pattern recognition\n   • RSI, MACD, Bollinger Bands analysis\n   • Support/Resistance identification\n   • Volume-price correlation\n\n2. Fundamental Analysis:\n   • Financial statement analysis\n   • PE ratios and valuations\n   • Sector comparison metrics\n   • Earnings growth patterns\n\n3. Sentiment Analysis:\n   • News sentiment scoring\n   • Social media trends\n   • Market mood indicators\n   • Insider trading patterns\n\n4. Market Context:\n   • Global market correlations\n   • Currency movements\n   • Commodity prices\n   • Economic indicators\n\n🎯 Accuracy: 87% for short-term predictions (1-4 weeks)\n📊 Confidence Scoring: Each prediction includes confidence level\n\n⚠️ Disclaimer: No model is 100% accurate. Always do your own research and manage risk appropriately.\n\nWant to see how I analyze a specific stock?',
    timestamp: '9:22 AM'
  },
  {
    id: 10,
    type: 'user',
    content: 'Yes! Analyze HDFC Bank for me',
    timestamp: '9:25 AM'
  },
  {
    id: 11,
    type: 'ai',
    content: '🏦 Deep Dive: HDFC Bank Analysis\n\n📊 Current Status:\nPrice: ₹1,645.20 (-0.51%)\nMarket Cap: ₹12.45T\nPE Ratio: 19.80\n52-Week Range: ₹1,420 - ₹1,725\n\n📈 Technical Analysis:\n• Trend: Sideways consolidation\n• Support Levels: ₹1,620, ₹1,590, ₹1,550\n• Resistance: ₹1,680, ₹1,720\n• RSI: 52 (Neutral zone)\n• MACD: Slightly bearish crossover\n\n💰 Fundamental Strength:\n✅ Loan growth: 18% YoY\n✅ CASA ratio: 43% (Excellent)\n✅ Asset quality improving\n✅ ROE: 17.5%\n✅ Diversified loan book\n\n🎯 AI Prediction (Next 30 days):\n• Probability of upside: 65%\n• Target Range: ₹1,690-1,730\n• Risk: Moderate (β = 0.92)\n• Confidence Score: 78%\n\n💡 Strategy:\n• Long-term: BUY (Hold for 1+ year)\n• Short-term: HOLD (Wait for breakout above ₹1,680)\n• Entry Point: Accumulate below ₹1,620\n\n📰 Recent News Impact: Positive Q4 results priced in\n\nQuestions about other stocks?',
    timestamp: '9:27 AM'
  }
]

// Trending Stocks
export const trendingStocks = [
  { symbol: 'TATAMOTORS', name: 'Tata Motors', change: '+2.45%', mentions: '15.2K' },
  { symbol: 'RELIANCE', name: 'Reliance Ind.', change: '+0.62%', mentions: '12.8K' },
  { symbol: 'LT', name: 'L&T', change: '+1.25%', mentions: '8.5K' },
  { symbol: 'SBIN', name: 'SBI', change: '+1.44%', mentions: '7.9K' },
  { symbol: 'MARUTI', name: 'Maruti Suzuki', change: '+1.07%', mentions: '6.4K' }
]

// Top Gainers
export const topGainers = watchlistStocks
  .filter(stock => stock.isPositive)
  .sort((a, b) => parseFloat(b.changePercent) - parseFloat(a.changePercent))
  .slice(0, 5)

// Top Losers
export const topLosers = watchlistStocks
  .filter(stock => !stock.isPositive)
  .sort((a, b) => parseFloat(a.changePercent) - parseFloat(b.changePercent))
  .slice(0, 5)

// Sector Performance
export const sectorPerformance = [
  { name: 'Automobile', change: '+1.85%', isPositive: true },
  { name: 'Banking', change: '+0.95%', isPositive: true },
  { name: 'IT Services', change: '-0.35%', isPositive: false },
  { name: 'Pharma', change: '+1.15%', isPositive: true },
  { name: 'Energy', change: '+0.48%', isPositive: true }
]
