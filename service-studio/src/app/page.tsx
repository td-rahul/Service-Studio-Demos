import { Search, BarChart3, Lightbulb, Zap, Heart } from 'lucide-react'

/**
 * Home page component with AI-powered chatbox and performance dashboard
 * Features command bar for customer queries and four key metrics widgets
 */
export default function Home() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Service Studio</h1>
        <p className="text-gray-600 mt-2">AI-powered customer service management dashboard</p>
      </div>

      {/* AI Command Chatbox */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Ask about customers, issues, conversations..."
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            "Show me high-risk customers"
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            "What issues need attention?"
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            "Customer satisfaction trends"
          </span>
        </div>
      </div>

      {/* AI Performance Dashboard */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Performance Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Performance */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">AI Performance</h3>
              <BarChart3 className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Resolution Rate</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <span className="text-sm font-medium">2.3s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Accuracy Score</span>
                <span className="text-sm font-medium">94%</span>
              </div>
            </div>
          </div>

          {/* AI Insights & Recommendations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">AI Insights & Recommendations</h3>
              <Lightbulb className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">3 customers show churn risk</p>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-800">Peak hours: 2-4 PM daily</p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-green-800">FAQ accuracy improved 15%</p>
              </div>
            </div>
          </div>

          {/* AI Automations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">AI Automations</h3>
              <Zap className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Auto-Responses</span>
                <span className="text-sm font-medium">156 today</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Escalations Prevented</span>
                <span className="text-sm font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tickets Resolved</span>
                <span className="text-sm font-medium">89</span>
              </div>
            </div>
          </div>

          {/* Customer Sentiment */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Customer Sentiment</h3>
              <Heart className="h-5 w-5 text-red-500" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Positive</span>
                <span className="text-sm font-medium text-green-600">68%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Neutral</span>
                <span className="text-sm font-medium text-gray-600">24%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Negative</span>
                <span className="text-sm font-medium text-red-600">8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
