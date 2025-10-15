import Link from 'next/link'
import { MessageSquare, AlertTriangle, CheckCircle, Clock, User, Bot } from 'lucide-react'

/**
 * Conversations landing page component
 * Displays conversations needing agent attention and AI-handled conversations
 */
export default function ConversationsPage() {
  // Mock data for conversations needing attention
  const attentionConversations = [
    {
      id: 'conv001',
      customer: 'Sarah Johnson',
      subject: 'Payment method expired - urgent assistance needed',
      lastMessage: 'I need help updating my payment method immediately...',
      timestamp: '5 minutes ago',
      priority: 'urgent',
      status: 'escalated',
      agentAssigned: null,
      messageCount: 8
    },
    {
      id: 'conv002',
      customer: 'Michael Chen',
      subject: 'API integration not working properly',
      lastMessage: 'The webhook endpoints are returning 404 errors...',
      timestamp: '15 minutes ago',
      priority: 'high',
      status: 'pending_agent',
      agentAssigned: null,
      messageCount: 12
    },
    {
      id: 'conv003',
      customer: 'Emily Rodriguez',
      subject: 'Account access issues after password reset',
      lastMessage: 'I reset my password but still cannot log in...',
      timestamp: '32 minutes ago',
      priority: 'medium',
      status: 'in_progress',
      agentAssigned: 'Alex Turner',
      messageCount: 6
    }
  ]

  // Mock data for AI-handled conversations
  const aiHandledConversations = [
    {
      id: 'conv004',
      customer: 'David Thompson',
      subject: 'How to reset password',
      lastMessage: 'AI: I\'ve sent password reset instructions to your email.',
      timestamp: '1 hour ago',
      status: 'resolved',
      confidence: 95,
      messageCount: 3
    },
    {
      id: 'conv005',
      customer: 'Lisa Wang',
      subject: 'Billing cycle questions',
      lastMessage: 'AI: Your next billing date is March 15th, 2024.',
      timestamp: '2 hours ago',
      status: 'resolved',
      confidence: 92,
      messageCount: 5
    },
    {
      id: 'conv006',
      customer: 'Robert Kim',
      subject: 'Feature documentation request',
      lastMessage: 'AI: Here are the documentation links you requested.',
      timestamp: '3 hours ago',
      status: 'resolved',
      confidence: 88,
      messageCount: 4
    },
    {
      id: 'conv007',
      customer: 'Anna Schmidt',
      subject: 'Account upgrade process',
      lastMessage: 'AI: I\'ve provided the upgrade steps and pricing information.',
      timestamp: '4 hours ago',
      status: 'monitoring',
      confidence: 76,
      messageCount: 7
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200'
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'escalated': return 'text-red-600 bg-red-50'
      case 'pending_agent': return 'text-yellow-600 bg-yellow-50'
      case 'in_progress': return 'text-blue-600 bg-blue-50'
      case 'resolved': return 'text-green-600 bg-green-50'
      case 'monitoring': return 'text-purple-600 bg-purple-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600'
    if (confidence >= 75) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Conversations</h1>
        <p className="text-gray-600 mt-2">Monitor and manage customer conversations across all channels</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{attentionConversations.length}</div>
              <div className="text-sm text-gray-600">Need Attention</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <Bot className="h-5 w-5 text-green-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{aiHandledConversations.length}</div>
              <div className="text-sm text-gray-600">AI Handled</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Resolved Today</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-purple-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">2.3m</div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversations Needing Agent Attention */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Conversations Needing Agent Attention</h2>
            <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
              {attentionConversations.length} urgent
            </span>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {attentionConversations.map((conversation) => (
            <div key={conversation.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Link
                      href={`/conversations/${conversation.id}`}
                      className="text-lg font-medium text-gray-900 hover:text-purple-600"
                    >
                      {conversation.subject}
                    </Link>
                    <span className={`px-2 py-1 border rounded-full text-xs font-medium ${getPriorityColor(conversation.priority)}`}>
                      {conversation.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                      {conversation.status.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {conversation.customer}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {conversation.messageCount} messages
                    </div>
                    <div className="text-sm text-gray-500">{conversation.timestamp}</div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{conversation.lastMessage}</p>

                  {conversation.agentAssigned && (
                    <div className="mt-2">
                      <span className="text-sm text-blue-600">Assigned to: {conversation.agentAssigned}</span>
                    </div>
                  )}
                </div>

                <div className="ml-4 flex space-x-2">
                  <Link
                    href={`/conversations/${conversation.id}`}
                    className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700"
                  >
                    View Chat
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI-Handled Conversations */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">AI-Handled Conversations</h2>
            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              {aiHandledConversations.filter(c => c.status === 'resolved').length} resolved
            </span>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {aiHandledConversations.map((conversation) => (
            <div key={conversation.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Link
                      href={`/conversations/${conversation.id}`}
                      className="text-lg font-medium text-gray-900 hover:text-purple-600"
                    >
                      {conversation.subject}
                    </Link>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                      {conversation.status}
                    </span>
                    <span className={`text-xs font-medium ${getConfidenceColor(conversation.confidence)}`}>
                      {conversation.confidence}% confidence
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {conversation.customer}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {conversation.messageCount} messages
                    </div>
                    <div className="text-sm text-gray-500">{conversation.timestamp}</div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{conversation.lastMessage}</p>
                </div>

                <div className="ml-4 flex space-x-2">
                  <Link
                    href={`/conversations/${conversation.id}`}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50"
                  >
                    Review
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}