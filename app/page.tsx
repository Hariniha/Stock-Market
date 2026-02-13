import TopNavigation from '@/components/TopNavigation'
import MainContent from '@/components/MainContent'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-trade-main">
      {/* Top Navigation - Fixed 60px */}
      <TopNavigation />
      
      {/* Main Layout - Home Content */}
      <MainContent />
    </div>
  )
}
