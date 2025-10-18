import React from 'react';

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

interface CustomerProfileCardProps {
  customer: Customer;
}

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};

const getBadgeStyles = (type: string) => {
  switch (type) {
    case 'green':
      return 'bg-green-100 text-green-800';
    case 'yellow':
      return 'bg-yellow-100 text-yellow-800';
    case 'red':
      return 'bg-red-100 text-red-800';
    case 'blue':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const CustomerProfileCard: React.FC<CustomerProfileCardProps> = ({ customer }) => {
  const initials = getInitials(customer.name);
  const badgeStyles = getBadgeStyles(customer.aiSignal.type);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-4 flex justify-between items-center hover:shadow-lg transition-shadow duration-200">

      {/* Customer Info (Left) */}
      <div className="flex items-center space-x-4 flex-1">
        {/* Avatar */}
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {initials}
        </div>

        {/* Customer Details */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900">{customer.name}</h3>
          <p className="text-sm text-gray-600">{customer.email}</p>
        </div>
      </div>

      {/* AI Insight/Signal (Middle) */}
      <div className="flex-1 flex justify-center">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeStyles}`}>
          {customer.aiSignal.text}
        </span>
      </div>

      {/* Action Button (Right) */}
      <div className="flex-shrink-0">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {customer.actionText}
        </button>
      </div>
    </div>
  );
};

export default CustomerProfileCard;