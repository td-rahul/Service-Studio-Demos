import React from 'react';
import { Search } from 'lucide-react';
import CustomerProfileCard from '../components/CustomerProfileCard';

interface Customer {
  id: string;
  name: string;
  email: string;
  aiSignal: {
    text: string;
    type: 'green' | 'yellow' | 'red' | 'blue';
  };
  actionText: string;
}

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'a.johnson@web.com',
    aiSignal: {
      text: 'High Upsell Potential',
      type: 'green'
    },
    actionText: 'View Upsell'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'm.garcia@email.net',
    aiSignal: {
      text: 'Low Sentiment',
      type: 'yellow'
    },
    actionText: 'Improve Sentiment'
  },
  {
    id: '3',
    name: 'David Kim',
    email: 'dkim@mail.org',
    aiSignal: {
      text: 'At-Risk for Churn',
      type: 'red'
    },
    actionText: 'View Details'
  },
  {
    id: '4',
    name: 'Emily White',
    email: 'e.white@company.com',
    aiSignal: {
      text: 'Good for Promo',
      type: 'blue'
    },
    actionText: 'Send Promo'
  }
];

const CustomersPage: React.FC = () => {
  return (
    <div className="bg-white p-8 min-h-screen">
      <div className="flex flex-col max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customers</h1>
          <p className="text-gray-600">Manage customer relationships and proactive outreach</p>
        </div>

        {/* Customer Lookup Section */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              placeholder="Search customers by name, email, ID, or any attribute..."
            />
          </div>
        </div>

        {/* Proactive Customer List Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">AI-Recommended Customer Actions</h2>

          <div className="space-y-4">
            {mockCustomers.map((customer) => (
              <CustomerProfileCard
                key={customer.id}
                customer={customer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;