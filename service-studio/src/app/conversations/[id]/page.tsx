import Link from 'next/link'
import { ArrowLeft, Send, User, Bot, Phone, Mail, AlertTriangle, ThumbsUp, ThumbsDown } from 'lucide-react'

/**
 * Individual conversation detail page component
 * Displays chat window with customer info and AI thought process panels
 */
export default function ConversationDetailPage({ params }: { params: { id: string } }) {
  // Mock conversation data
  const conversation = {
    id: params.id,
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@techcorp.com',
      company: 'TechCorp Inc.',
      tier: 'Premium',
      status: 'Active'
    },
    subject: 'Payment method expired - urgent assistance needed',
    status: 'escalated',
    priority: 'urgent',
    assignedAgent: null,
    createdAt: '2024-01-15 09:30 AM'
  }

  // Mock chat messages
  const messages = [
    {
      id: 1,
      sender: 'customer',
      content: 'Hi, I\'m having trouble with my payment method. It says it\'s expired but I just updated it yesterday.',
      timestamp: '09:30 AM',
      type: 'text'
    },
    {
      id: 2,
      sender: 'ai',
      content: 'I understand your concern about the payment method issue. Let me check your account details to help resolve this quickly.',
      timestamp: '09:31 AM',
      type: 'text',
      confidence: 92
    },
    {
      id: 3,
      sender: 'customer',
      content: 'Thank you. I need this resolved ASAP as my team can\'t access the service right now.',
      timestamp: '09:32 AM',
      type: 'text'
    },
    {
      id: 4,
      sender: 'ai',
      content: 'I can see that your payment method was updated yesterday, but there might be a verification delay. I\'ve escalated this to our payment processing team for immediate review.',
      timestamp: '09:33 AM',
      type: 'text',
      confidence: 85
    },
    {
      id: 5,
      sender: 'customer',
      content: 'How long will this take? This is really urgent for our business operations.',
      timestamp: '09:35 AM',
      type: 'text'
    },
    {
      id: 6,
      sender: 'ai',
      content: 'I understand the urgency. Based on the complexity of this payment verification issue, I\'m connecting you with a human agent who can expedite this process. They should be with you shortly.',
      timestamp: '09:36 AM',
      type: 'escalation',
      confidence: 78
    }
  ]

  // Mock AI thought process
  const aiThoughts = [
    {
      timestamp: '09:31 AM',
      thought: 'Customer reporting payment method issue. Checking account status...',
      action: 'Account lookup',
      confidence: 'High'
    },
    {
      timestamp: '09:32 AM',
      thought: 'Detected urgency in customer tone. Payment method updated yesterday but showing as expired.',
      action: 'Sentiment analysis',
      confidence: 'High'
    },
    {
      timestamp: '09:33 AM',
      thought: 'Payment verification delay identified. Customer is Premium tier - requires priority handling.',
      action: 'Escalation trigger',
      confidence: 'Medium'
    },
    {
      timestamp: '09:36 AM',
      thought: 'Multiple urgency indicators detected. Confidence dropping below threshold for automated resolution.',
      action: 'Human handoff',
      confidence: 'Low'
    }
  ]

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-4">
          <Link
            href="/conversations"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Conversations
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{conversation.subject}</h1>
            <p className="text-sm text-gray-600">
              {conversation.customer.name} • {conversation.createdAt}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
            {conversation.priority}
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
            {conversation.status}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Window (2/3 width) */}
        <div className="flex-1 flex flex-col bg-white border-r border-gray-200" style={{ flex: '2' }}>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-2xl ${message.sender === 'customer' ? 'order-2' : 'order-1'}`}>
                  {/* Message Header */}
                  <div className={`flex items-center space-x-2 mb-1 ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-center space-x-1 ${message.sender === 'customer' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {message.sender === 'customer' ? (
                        <User className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Bot className="h-4 w-4 text-purple-500" />
                      )}
                      <span className="text-sm font-medium text-gray-900">
                        {message.sender === 'customer' ? conversation.customer.name : 'AI Assistant'}
                      </span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                      {message.confidence && (
                        <span className="text-xs text-gray-400">({message.confidence}% confidence)</span>
                      )}
                    </div>
                  </div>

                  {/* Message Content */}
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'customer'
                        ? 'bg-blue-600 text-white'
                        : message.type === 'escalation'
                        ? 'bg-yellow-100 text-yellow-900 border border-yellow-300'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.type === 'escalation' && (
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Escalated to Human Agent</span>
                      </div>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>

                  {/* AI Message Actions */}
                  {message.sender === 'ai' && (
                    <div className="flex items-center space-x-2 mt-2">
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <ThumbsUp className="h-3 w-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <ThumbsDown className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar (1/3 width) */}
        <div className="w-1/3 bg-gray-50 flex flex-col">
          {/* Customer Info (1/3 height) */}
          <div className="p-4 bg-white border-b border-gray-200" style={{ flex: '1' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Info</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Name</label>
                <p className="text-gray-900">{conversation.customer.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-900 text-sm">{conversation.customer.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Company</label>
                <p className="text-gray-900">{conversation.customer.company}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Tier</label>
                <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  {conversation.customer.tier}
                </span>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </button>
                <button className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </button>
              </div>
            </div>
          </div>

          {/* AI Thought Process (2/3 height) */}
          <div className="flex-1 p-4" style={{ flex: '2' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Thought Process</h3>
            <div className="space-y-4">
              {aiThoughts.map((thought, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{thought.timestamp}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      thought.confidence === 'High' ? 'bg-green-100 text-green-800' :
                      thought.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {thought.confidence}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{thought.thought}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-purple-600">{thought.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}