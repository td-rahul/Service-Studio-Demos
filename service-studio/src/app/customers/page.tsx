import Link from 'next/link'
import { Search, AlertTriangle, Calendar, Users, Mail } from 'lucide-react'

/**
 * Customers landing page component with search functionality and proactive outreach list
 * Provides customer lookup and displays customers needing attention
 */
export default function CustomersPage() {
  // Mock data for proactive customer outreach
  const proactiveCustomers = [
    {
      id: 'c001',
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      riskLevel: 'high',
      lastContact: '3 days ago',
      issue: 'Payment method expired',
      priority: 'urgent'
    },
    {
      id: 'c002',
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      riskLevel: 'medium',
      lastContact: '1 week ago',
      issue: 'Feature request pending',
      priority: 'medium'
    },
    {
      id: 'c003',
      name: 'Emily Rodriguez',
      company: 'Global Logistics Ltd.',
      riskLevel: 'high',
      lastContact: '5 days ago',
      issue: 'Multiple failed integrations',
      priority: 'urgent'
    },
    {
      id: 'c004',
      name: 'David Thompson',
      company: 'StartupXYZ',
      riskLevel: 'low',
      lastContact: '2 weeks ago',
      issue: 'Onboarding incomplete',
      priority: 'low'
    }
  ]

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getPriorityIcon = (priority: string) => {
    if (priority === 'urgent') return <AlertTriangle className="h-4 w-4 text-red-500" />
    return <Calendar className="h-4 w-4 text-gray-400" />
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-600 mt-2">Manage customer relationships and proactive outreach</p>
      </div>

      {/* Customer Lookup Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Lookup</h2>
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by name, email, company, or customer ID..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200">
            Recent searches
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200">
            High-value customers
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200">
            At-risk customers
          </span>
        </div>
      </div>

      {/* Proactive Customer Outreach */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Proactive Customer Outreach</h2>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">{proactiveCustomers.length} customers need attention</span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {proactiveCustomers.map((customer) => (
            <div key={customer.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getPriorityIcon(customer.priority)}
                  </div>

                  <div>
                    <div className="flex items-center space-x-3">
                      <Link
                        href={`/customers/${customer.id}`}
                        className="text-lg font-medium text-gray-900 hover:text-purple-600"
                      >
                        {customer.name}
                      </Link>
                      <span
                        className={`px-2 py-1 border rounded-full text-xs font-medium ${getRiskBadgeColor(customer.riskLevel)}`}
                      >
                        {customer.riskLevel} risk
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{customer.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{customer.issue}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Last contact</p>
                    <p className="text-sm font-medium text-gray-900">{customer.lastContact}</p>
                  </div>

                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                      <Mail className="h-4 w-4" />
                    </button>
                    <Link
                      href={`/customers/${customer.id}`}
                      className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-900">247</div>
          <div className="text-sm text-gray-600">Total Customers</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-red-600">12</div>
          <div className="text-sm text-gray-600">High Risk</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">28</div>
          <div className="text-sm text-gray-600">Medium Risk</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-green-600">207</div>
          <div className="text-sm text-gray-600">Healthy</div>
        </div>
      </div>
    </div>
  )
}