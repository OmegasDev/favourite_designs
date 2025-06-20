import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Workflow, Shield, BarChart as ChartBar } from 'lucide-react';

const useCases = [
  {
    title: 'Intelligent Process Automation',
    description: 'Automate complex business processes with AI agents that learn and adapt to your specific needs.',
    icon: Brain,
    examples: [
      'Document processing and analysis',
      'Customer support automation',
      'Data entry and validation'
    ]
  },
  {
    title: 'Workflow Optimization',
    description: 'Streamline operations with smart agents that identify bottlenecks and suggest improvements.',
    icon: Workflow,
    examples: [
      'Resource allocation',
      'Schedule optimization',
      'Task prioritization'
    ]
  },
  {
    title: 'Security & Compliance',
    description: 'Enhance security with AI-powered monitoring and automated compliance checks.',
    icon: Shield,
    examples: [
      'Threat detection',
      'Compliance monitoring',
      'Access control'
    ]
  },
  {
    title: 'Business Intelligence',
    description: 'Generate actionable insights from your data with advanced analytics and reporting.',
    icon: ChartBar,
    examples: [
      'Performance analytics',
      'Trend analysis',
      'Predictive modeling'
    ]
  }
];

const UseCases = () => {
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
              Use Cases
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how our AI agents can transform your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 transition-colors duration-500 group-hover:text-gray-300">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Example Applications:</h4>
                    {useCase.examples.map((example, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <p className="text-gray-400">{example}</p>
                      </motion.div>
                    ))}
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

export default UseCases;