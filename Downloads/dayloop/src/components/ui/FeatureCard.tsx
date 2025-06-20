import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, gradient }) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative p-8 rounded-xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-700 h-full"
    >
      {/* Enhanced glow effects */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 rounded-xl"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 rounded-xl"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-r ${gradient} shadow-xl transform transition-all duration-700 group-hover:shadow-glow`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <Icon className="w-8 h-8 text-white transform transition-transform duration-700 group-hover:scale-110" />
        </motion.div>
        
        <h3 className="text-2xl font-semibold text-white mb-4 transition-transform duration-700 group-hover:translate-x-1">{title}</h3>
        
        <p className="text-gray-400 transition-all duration-700 group-hover:text-gray-300">{description}</p>
      </div>
      
      {/* Enhanced bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    </motion.div>
  );
};

export default FeatureCard;