import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const agents = [
  {
    id: 'jason',
    name: 'Jason',
    role: 'Site Manager',
    description: 'Coordinates resources and monitors deployment performance across your digital ecosystem.',
    icon: Bot,
    gradient: 'from-purple-500 to-blue-500',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'maya',
    name: 'Maya',
    role: 'Project Tracker',
    description: 'Oversees task deadlines, creates reports, and ensures project milestones stay on schedule.',
    icon: Calendar,
    gradient: 'from-blue-500 to-teal-500',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'atlas',
    name: 'Atlas',
    role: 'Tool Maintainer',
    description: 'Monitors systems, performs maintenance tasks, and proactively resolves technical issues.',
    icon: Wrench,
    gradient: 'from-teal-500 to-purple-500',
    image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const MeetAgents: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_70%)] opacity-20"></div>
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] animate-grid-flow opacity-[0.02]"></div>
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Meet Our Agents
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <Link to={`/agent/${agent.id}`} className="block">
                <div className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500">
                  {/* Glow effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-6 z-10">
                    {/* Agent Image */}
                    <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Dayloop Badge */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="text-sm font-medium text-white">Dayloop</span>
                      </div>
                      {/* Floating Icon */}
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className={`absolute bottom-4 right-4 z-20 w-12 h-12 rounded-lg bg-gradient-to-r ${agent.gradient} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]`}
                      >
                        <agent.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Agent Info */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {agent.name}
                      </h3>
                      <p className="text-blue-400 font-medium">{agent.role}</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {agent.description}
                      </p>
                    </div>
                    
                    {/* Interactive elements */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Learn more about {agent.name}</span>
                        <agent.icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetAgents;