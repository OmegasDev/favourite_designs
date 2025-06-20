import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, icon: Icon, gradient }) => {
  return (
    <div className="group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300 h-full">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur-sm transition-all duration-300 rounded-xl"></div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${gradient} text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      
      <p className="text-gray-400">{description}</p>
      
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default AgentCard;