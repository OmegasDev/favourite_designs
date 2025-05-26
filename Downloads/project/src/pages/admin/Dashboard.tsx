import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Box, Users, DollarSign } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: 'Total Artworks',
      value: '24',
      icon: <Image size={24} />,
      color: 'bg-violet-500/10 text-violet-400',
      link: '/admin/portfolio'
    },
    {
      label: 'Categories',
      value: '8',
      icon: <Box size={24} />,
      color: 'bg-blue-500/10 text-blue-400',
      link: '/admin/categories'
    },
    {
      label: 'Active Users',
      value: '156',
      icon: <Users size={24} />,
      color: 'bg-green-500/10 text-green-400',
      link: '/admin/users'
    },
    {
      label: 'Total Sales',
      value: '$2,450',
      icon: <DollarSign size={24} />,
      color: 'bg-yellow-500/10 text-yellow-400',
      link: '/admin/sales'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <button
            key={index}
            onClick={() => navigate(stat.link)}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-lg font-medium text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Added new artwork', time: '2 hours ago' },
              { action: 'Updated portfolio', time: '4 hours ago' },
              { action: 'Deleted old artwork', time: '1 day ago' },
              { action: 'Modified categories', time: '2 days ago' }
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-300">{activity.action}</span>
                <span className="text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-lg font-medium text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Add Artwork', icon: <Image size={20} />, link: '/admin/portfolio' },
              { label: 'Manage Categories', icon: <Box size={20} />, link: '/admin/categories' },
              { label: 'View Analytics', icon: <Users size={20} />, link: '/admin/analytics' },
              { label: 'Settings', icon: <DollarSign size={20} />, link: '/admin/settings' }
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.link)}
                className="flex items-center space-x-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
              >
                {action.icon}
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;