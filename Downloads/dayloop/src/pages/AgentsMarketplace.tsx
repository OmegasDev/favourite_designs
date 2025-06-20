import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Lock, Zap, Bot, Database } from 'lucide-react';

const agents = [
  {
    name: 'Docs AI',
    description: 'Simplifies complex documentation with clear explanations and practical examples. Perfect for technical writers and developers.',
    icon: FileText,
    price: 'Free',
    gradient: 'from-purple-500 to-blue-500',
    features: [
      'Natural language processing',
      'Code example generation',
      'Interactive tutorials',
      'Multi-format support'
    ]
  },
  {
    name: 'SecureBot',
    description: 'Advanced security monitoring and threat detection for your applications and infrastructure.',
    icon: Lock,
    price: '$49/mo',
    gradient: 'from-blue-500 to-teal-500',
    features: [
      'Real-time monitoring',
      'Threat detection',
      'Automated responses',
      'Security reports'
    ]
  },
  {
    name: 'DataSense AI',
    description: 'Intelligent data analysis and visualization tool that transforms complex data into actionable insights.',
    icon: Database,
    price: '$99/mo',
    gradient: 'from-teal-500 to-purple-500',
    features: [
      'Automated analysis',
      'Custom dashboards',
      'Predictive analytics',
      'Data visualization'
    ]
  },
  {
    name: 'WorkflowPro',
    description: 'Automates repetitive tasks and streamlines business processes with intelligent workflow optimization.',
    icon: Zap,
    price: '$79/mo',
    gradient: 'from-pink-500 to-purple-500',
    features: [
      'Process automation',
      'Task scheduling',
      'Performance tracking',
      'Integration support'
    ]
  },
  {
    name: 'AssistAI',
    description: 'Your personal AI assistant for scheduling, email management, and daily task organization.',
    icon: Bot,
    price: '$29/mo',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'Email management',
      'Calendar optimization',
      'Task prioritization',
      'Meeting summaries'
    ]
  },
  {
    name: 'BrainBoost',
    description: 'Advanced learning assistant that adapts to your style and helps master new skills efficiently.',
    icon: Brain,
    price: '$39/mo',
    gradient: 'from-green-500 to-teal-500',
    features: [
      'Personalized learning',
      'Progress tracking',
      'Interactive exercises',
      'Knowledge assessment'
    ]
  }
];

const AgentsMarketplace: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              AI Agents Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our collection of intelligent AI agents designed to enhance your productivity and streamline your workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.gradient} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
                        <p className="text-purple-400">{agent.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{agent.description}</p>
                    
                    <div className="space-y-3">
                      {agent.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.gradient}`}></div>
                          <p className="text-gray-400">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgentsMarketplace;