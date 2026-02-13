import TopNavigation from '@/components/TopNavigation'
import EmptyChatSidebar from '@/components/EmptyChatSidebar'

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-trade-main">
      {/* Top Navigation - Fixed 60px */}
      <TopNavigation />
      
      {/* Main Layout - Full Width Chat */}
      <div className="flex flex-1 overflow-hidden justify-center">
        {/* AI Chatbot - Centered */}
        <EmptyChatSidebar />
      </div>
    </div>
  )
}
