import { CheckCircle, AlertCircle, Clock, Plus, Settings, ExternalLink } from 'lucide-react'

/**
 * Integrations page component
 * Displays available integrations and their connection status
 */
export default function IntegrationsPage() {
  // Mock integration data
  const connectedIntegrations = [
    {
      id: 1,
      name: 'Zendesk',
      description: 'Customer support ticketing system',
      logo: '/api/placeholder/zendesk-logo',
      status: 'connected',
      lastSync: '2 minutes ago',
      category: 'Support'
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Team communication and notifications',
      logo: '/api/placeholder/slack-logo',
      status: 'connected',
      lastSync: '1 hour ago',
      category: 'Communication'
    },
    {
      id: 3,
      name: 'Salesforce',
      description: 'Customer relationship management',
      logo: '/api/placeholder/salesforce-logo',
      status: 'error',
      lastSync: '2 days ago',
      category: 'CRM'
    }
  ]

  const availableIntegrations = [
    {
      id: 4,
      name: 'Genesys',
      description: 'Cloud contact center platform',
      logo: '/api/placeholder/genesys-logo',
      category: 'Contact Center',
      popular: true
    },
    {
      id: 5,
      name: 'HubSpot',
      description: 'Marketing, sales, and service software',
      logo: '/api/placeholder/hubspot-logo',
      category: 'CRM'
    },
    {
      id: 6,
      name: 'Microsoft Teams',
      description: 'Business communication platform',
      logo: '/api/placeholder/teams-logo',
      category: 'Communication'
    },
    {
      id: 7,
      name: 'Jira',
      description: 'Issue and project tracking',
      logo: '/api/placeholder/jira-logo',
      category: 'Project Management'
    },
    {
      id: 8,
      name: 'Intercom',
      description: 'Customer messaging platform',
      logo: '/api/placeholder/intercom-logo',
      category: 'Support',
      popular: true
    },
    {
      id: 9,
      name: 'Twilio',
      description: 'Communication APIs for SMS, voice, and video',
      logo: '/api/placeholder/twilio-logo',
      category: 'Communication'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-50 border-green-200'
      case 'error': return 'text-red-600 bg-red-50 border-red-200'
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-4 w-4" />
      case 'error': return <AlertCircle className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const categories = ['All', 'Support', 'Communication', 'CRM', 'Contact Center', 'Project Management']

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
        <p className="text-gray-600 mt-2">Connect your favorite tools and services to Service Studio</p>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{connectedIntegrations.filter(i => i.status === 'connected').length}</div>
              <div className="text-sm text-gray-600">Connected</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{connectedIntegrations.filter(i => i.status === 'error').length}</div>
              <div className="text-sm text-gray-600">Need Attention</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <Plus className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">{availableIntegrations.length}</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center">
            <Settings className="h-5 w-5 text-purple-500 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Auto Sync</div>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Integrations */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Connected Integrations</h2>
        </div>

        <div className="p-6">
          <div className="grid gap-4">
            {connectedIntegrations.map((integration) => (
              <div key={integration.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{integration.name}</h3>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">Category: {integration.category}</span>
                      <span className="text-xs text-gray-500">Last sync: {integration.lastSync}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center px-3 py-1 border rounded-full text-sm font-medium ${getStatusColor(integration.status)}`}>
                    {getStatusIcon(integration.status)}
                    <span className="ml-2">{integration.status}</span>
                  </span>

                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Settings className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Integrations */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Available Integrations</h2>

            {/* Category Filter */}
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 text-sm rounded-full ${
                    category === 'All'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableIntegrations.map((integration) => (
              <div key={integration.id} className="relative border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                {integration.popular && (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    Popular
                  </span>
                )}

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-400 rounded"></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{integration.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{integration.description}</p>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {integration.category}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700">
                    Connect
                  </button>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Integration */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Need a Custom Integration?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Don't see the integration you need? We can build custom connections to your existing tools.
          </p>
          <div className="flex justify-center space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
              Request Integration
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
              View API Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}