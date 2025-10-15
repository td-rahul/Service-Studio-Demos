import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Calendar, TrendingDown, AlertCircle, CheckCircle, Clock } from 'lucide-react'

/**
 * Customer profile detail page component
 * Displays comprehensive customer information including profile, activities, AI insights, and actions
 */
export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  // Mock customer data - in real app this would come from API
  const customer = {
    id: params.id,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    accountValue: '$24,500',
    joinDate: 'March 2023',
    status: 'Active',
    tier: 'Premium',
    location: 'San Francisco, CA'
  }

  const activities = [
    {
      id: 1,
      type: 'support_ticket',
      title: 'Payment method expired - needs update',
      timestamp: '2 hours ago',
      status: 'open',
      severity: 'high'
    },
    {
      id: 2,
      type: 'login',
      title: 'Logged into dashboard',
      timestamp: '1 day ago',
      status: 'completed',
      severity: 'low'
    },
    {
      id: 3,
      type: 'feature_request',
      title: 'Requested API rate limit increase',
      timestamp: '3 days ago',
      status: 'in_progress',
      severity: 'medium'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Monthly subscription payment failed',
      timestamp: '3 days ago',
      status: 'failed',
      severity: 'high'
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'support_ticket': return <AlertCircle className="h-4 w-4" />
      case 'login': return <CheckCircle className="h-4 w-4" />
      case 'feature_request': return <Clock className="h-4 w-4" />
      case 'payment': return <TrendingDown className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-600 bg-red-50'
      case 'completed': return 'text-green-600 bg-green-50'
      case 'in_progress': return 'text-yellow-600 bg-yellow-50'
      case 'failed': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center space-x-4">
        <Link
          href="/customers"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Customers
        </Link>
      </div>

      {/* Customer Header */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{customer.name}</h1>
            <p className="text-lg text-gray-600">{customer.company}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                {customer.status}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                {customer.tier}
              </span>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </button>
          </div>
        </div>
      </div>

      {/* Four Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="text-gray-900">{customer.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Phone</label>
              <p className="text-gray-900">{customer.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Location</label>
              <p className="text-gray-900">{customer.location}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Account Value</label>
              <p className="text-gray-900 font-semibold">{customer.accountValue}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Customer Since</label>
              <p className="text-gray-900">{customer.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 border border-gray-100 rounded-lg">
                <div className={`p-1 rounded ${getStatusColor(activity.status)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                  {activity.status.replace('_', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Insights</h2>
          <div className="space-y-4">
            {/* Customer Sentiment */}
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-medium text-red-900">Customer Sentiment</h3>
              <p className="text-sm text-red-700 mt-1">Negative - Recent payment issues causing frustration</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm">
                  <span>Sentiment Score</span>
                  <span className="font-medium">2.1/5.0</span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2 mt-1">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            {/* Churn Risk */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-medium text-yellow-900">Churn Risk</h3>
              <p className="text-sm text-yellow-700 mt-1">High risk due to payment failures and support tickets</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm">
                  <span>Risk Level</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="w-full bg-yellow-200 rounded-full h-2 mt-1">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            {/* Engagement Score */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-900">Engagement Score</h3>
              <p className="text-sm text-blue-700 mt-1">Below average engagement in past 30 days</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm">
                  <span>Engagement</span>
                  <span className="font-medium">6.2/10</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Actions Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Recommended Actions</h2>
          <div className="space-y-3">
            <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-purple-900">Priority: Resolve Payment Issue</h3>
                  <p className="text-sm text-purple-700 mt-1">Send payment update reminder with assistance offer</p>
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                  Execute
                </button>
              </div>
            </div>

            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-blue-900">Schedule Check-in Call</h3>
                  <p className="text-sm text-blue-700 mt-1">Proactive outreach to address concerns and gather feedback</p>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                  Schedule
                </button>
              </div>
            </div>

            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-green-900">Offer Premium Support</h3>
                  <p className="text-sm text-green-700 mt-1">Upgrade to dedicated support to prevent churn</p>
                </div>
                <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                  Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}