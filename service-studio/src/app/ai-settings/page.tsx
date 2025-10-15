import { Save, Upload, Download, Database, AlertTriangle, CheckCircle, Settings, Brain } from 'lucide-react'

/**
 * AI Agent Settings page component
 * Provides configuration for knowledge base management and intervention rules
 */
export default function AISettingsPage() {
  // Mock knowledge base data
  const knowledgeBaseSources = [
    {
      id: 1,
      name: 'Product Documentation',
      type: 'Documentation',
      status: 'active',
      lastUpdated: '2 hours ago',
      articles: 156,
      accuracy: 94
    },
    {
      id: 2,
      name: 'FAQ Database',
      type: 'FAQ',
      status: 'active',
      lastUpdated: '1 day ago',
      articles: 89,
      accuracy: 97
    },
    {
      id: 3,
      name: 'Support Ticket History',
      type: 'Historical Data',
      status: 'syncing',
      lastUpdated: '5 minutes ago',
      articles: 2340,
      accuracy: 89
    },
    {
      id: 4,
      name: 'Policy Documents',
      type: 'Policies',
      status: 'needs_update',
      lastUpdated: '1 week ago',
      articles: 23,
      accuracy: 91
    }
  ]

  // Mock intervention rules
  const interventionRules = [
    {
      id: 1,
      name: 'High-Value Customer Escalation',
      description: 'Automatically escalate to human agent for Premium and Enterprise customers',
      condition: 'customer.tier IN ["Premium", "Enterprise"] AND confidence < 85%',
      action: 'escalate_to_human',
      isActive: true,
      triggeredCount: 23
    },
    {
      id: 2,
      name: 'Payment Issue Detection',
      description: 'Flag conversations mentioning payment, billing, or refund issues',
      condition: 'message.content CONTAINS ["payment", "billing", "refund", "charge"]',
      action: 'flag_for_review',
      isActive: true,
      triggeredCount: 67
    },
    {
      id: 3,
      name: 'Low Confidence Threshold',
      description: 'Hand off to human when AI confidence drops below 70%',
      condition: 'ai.confidence < 70%',
      action: 'escalate_to_human',
      isActive: true,
      triggeredCount: 145
    },
    {
      id: 4,
      name: 'Sentiment Analysis Alert',
      description: 'Alert supervisors when customer sentiment is very negative',
      condition: 'sentiment.score < 2.0 AND sentiment.confidence > 80%',
      action: 'notify_supervisor',
      isActive: false,
      triggeredCount: 12
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50 border-green-200'
      case 'syncing': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'needs_update': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'error': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />
      case 'syncing': return <Settings className="h-4 w-4 animate-spin" />
      case 'needs_update': return <AlertTriangle className="h-4 w-4" />
      default: return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Agent Settings</h1>
        <p className="text-gray-600 mt-2">Configure knowledge base and intervention management rules</p>
      </div>

      {/* Knowledge Base Management */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Database className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-900">Knowledge Base Management</h2>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Knowledge Base Sources */}
        <div className="p-6">
          <div className="grid gap-4">
            {knowledgeBaseSources.map((source) => (
              <div key={source.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{source.name}</h3>
                      <span className={`inline-flex items-center px-2 py-1 border rounded-full text-xs font-medium ${getStatusColor(source.status)}`}>
                        {getStatusIcon(source.status)}
                        <span className="ml-1">{source.status.replace('_', ' ')}</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{source.type}</p>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Articles:</span>
                        <span className="ml-2 font-medium">{source.articles.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Accuracy:</span>
                        <span className="ml-2 font-medium">{source.accuracy}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Last Updated:</span>
                        <span className="ml-2 font-medium">{source.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                      Configure
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                      Sync Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Source */}
          <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
            <Database className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">Add a new knowledge base source</p>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              Add Knowledge Source
            </button>
          </div>
        </div>
      </div>

      {/* Intervention Management Rules */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-900">Intervention Management Rules</h2>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Test Rules
              </button>
              <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Add New Rule
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {interventionRules.map((rule) => (
              <div key={rule.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{rule.name}</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={rule.isActive}
                          readOnly
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{rule.description}</p>

                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-700">Condition:</span>
                      <code className="ml-2 px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded font-mono">
                        {rule.condition}
                      </code>
                    </div>

                    <div className="flex items-center space-x-4 text-sm">
                      <div>
                        <span className="text-gray-500">Action:</span>
                        <span className="ml-2 font-medium">{rule.action.replace('_', ' ')}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Triggered:</span>
                        <span className="ml-2 font-medium">{rule.triggeredCount} times</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Performance Metrics</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">94%</div>
            <div className="text-sm text-gray-600">Average Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">87%</div>
            <div className="text-sm text-gray-600">Resolution Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">2.3s</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">145</div>
            <div className="text-sm text-gray-600">Human Handoffs Today</div>
          </div>
        </div>
      </div>
    </div>
  )
}