import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Bot, Calendar, Wrench } from 'lucide-react';

const agents = {
  jason: {
    name: 'Jason',
    role: 'Site Manager',
    description: 'Coordinates resources and monitors deployment performance across your digital ecosystem.',
    longDescription: 'Jason is our expert Site Manager AI, designed to handle complex deployment scenarios and resource management. With advanced algorithms for performance optimization and real-time monitoring capabilities, Jason ensures your digital infrastructure runs smoothly 24/7.',
    icon: Bot,
    gradient: 'from-purple-500 to-blue-500',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    capabilities: [
      'Real-time performance monitoring',
      'Resource optimization',
      'Automated deployment management',
      'System health analysis',
      'Incident response coordination'
    ]
  },
  maya: {
    name: 'Maya',
    role: 'Project Tracker',
    description: 'Oversees task deadlines, creates reports, and ensures project milestones stay on schedule.',
    longDescription: 'Maya specializes in project management and timeline optimization. Using predictive analytics and adaptive scheduling algorithms, she keeps your projects on track and team members aligned with objectives.',
    icon: Calendar,
    gradient: 'from-blue-500 to-teal-500',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    capabilities: [
      'Deadline tracking and management',
      'Resource allocation optimization',
      'Progress reporting and analytics',
      'Team coordination',
      'Risk assessment and mitigation'
    ]
  },
  atlas: {
    name: 'Atlas',
    role: 'Tool Maintainer',
    description: 'Monitors systems, performs maintenance tasks, and proactively resolves technical issues.',
    longDescription: 'Atlas is our maintenance specialist, equipped with advanced diagnostic capabilities and predictive maintenance algorithms. He ensures all tools and systems operate at peak efficiency through proactive monitoring and automated issue resolution.',
    icon: Wrench,
    gradient: 'from-teal-500 to-purple-500',
    image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    capabilities: [
      'Automated system maintenance',
      'Predictive issue detection',
      'Tool optimization',
      'Performance tuning',
      'Security monitoring'
    ]
  }
};

const AgentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const agent = id ? agents[id as keyof typeof agents] : null;

  if (!agent) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h2 className="text-2xl text-white">Agent not found</h2>
        <Link to="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
          Return home
        </Link>
      </div>
    );
  }

  const Icon = agent.icon;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">{agent.name}</h1>
                    <p className="text-blue-400">{agent.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
              <p className="text-gray-400">{agent.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Capabilities</h2>
              <div className="grid grid-cols-1 gap-4">
                {agent.capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${agent.gradient}`}></div>
                    <span className="text-gray-300">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-300">
              Connect with {agent.name}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;