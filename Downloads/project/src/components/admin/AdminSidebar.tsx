import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Image, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../ui/Logo';

const AdminSidebar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <div className="w-64 bg-black border-r border-gray-800 p-6">
      <div className="mb-8">
        <Logo />
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive ? 'bg-violet-600 text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink
          to="/admin/portfolio"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive ? 'bg-violet-600 text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <Image size={20} />
          <span>Portfolio</span>
        </NavLink>
        
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive ? 'bg-violet-600 text-white' : 'text-gray-400 hover:bg-gray-800'
            }`
          }
        >
          <UserCircle size={20} />
          <span>Profile</span>
        </NavLink>
        
        <button
          onClick={signOut}
          className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-red-400 hover:bg-gray-800 transition-colors"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;