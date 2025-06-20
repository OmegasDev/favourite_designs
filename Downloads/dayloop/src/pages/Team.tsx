import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Wrench, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Jason',
    role: 'Site Manager',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Coordinates resources and monitors deployment performance across your digital ecosystem.',
    icon: Bot,
    gradient: 'from-purple-500 to-blue-500',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Maya',
    role: 'Project Tracker',
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Oversees task deadlines, creates reports, and ensures project milestones stay on schedule.',
    icon: Calendar,
    gradient: 'from-blue-500 to-teal-500',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Atlas',
    role: 'Tool Maintainer',
    image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Monitors systems, performs maintenance tasks, and proactively resolves technical issues.',
    icon: Wrench,
    gradient: 'from-teal-500 to-purple-500',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#'
    }
  }
];

const Team = () => {
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
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our AI agents work together to deliver exceptional results for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Lighter overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${member.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-purple-300">{member.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 mb-4">
                      {member.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <a href={member.social.twitter} className="text-gray-300 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={member.social.github} className="text-gray-300 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-gray-300 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <Link
                    to={`/agent/${member.name.toLowerCase()}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Learn more about ${member.name}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;