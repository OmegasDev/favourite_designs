import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Brain, Zap, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce AI Assistant',
    category: 'AI Agent',
    description: 'Intelligent customer support agent that handles 80% of customer inquiries, processes orders, and provides personalized product recommendations.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'OpenAI', 'Stripe'],
    results: ['300% increase in customer satisfaction', '75% reduction in support costs', '24/7 automated support'],
    icon: Brain,
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Restaurant Management App',
    category: 'Mobile App',
    description: 'Complete restaurant management solution with order tracking, inventory management, and customer analytics built with React Native.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Expo', 'Firebase', 'Stripe'],
    results: ['50% faster order processing', '90% reduction in errors', 'Real-time analytics'],
    icon: Smartphone,
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    title: 'SaaS Marketing Platform',
    category: 'Web Application',
    description: 'Comprehensive marketing automation platform with lead scoring, email campaigns, and advanced analytics for B2B companies.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    results: ['200% increase in lead conversion', '60% time savings', 'Automated workflows'],
    icon: Globe,
    gradient: 'from-teal-500 to-purple-500'
  },
  {
    title: 'Sales Automation System',
    category: 'Business Automation',
    description: 'End-to-end sales process automation using N8N and custom APIs. Automates lead qualification, follow-ups, and deal tracking.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['N8N', 'Make.com', 'HubSpot API', 'Slack'],
    results: ['400% increase in qualified leads', '80% faster response time', 'Automated reporting'],
    icon: Zap,
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    title: 'Healthcare AI Chatbot',
    category: 'AI Agent',
    description: 'HIPAA-compliant AI chatbot for patient intake, appointment scheduling, and basic health assessments with 24/7 availability.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    results: ['70% reduction in admin work', '95% patient satisfaction', 'HIPAA compliant'],
    icon: Brain,
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    title: 'Real Estate CRM',
    category: 'Web Application',
    description: 'Custom CRM solution for real estate agencies with property management, client tracking, and automated marketing campaigns.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    results: ['150% increase in sales', '60% faster deal closure', 'Automated follow-ups'],
    icon: Globe,
    gradient: 'from-purple-500 to-pink-500'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Globe className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Our Success Stories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Portfolio & Case Studies
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 lg:px-0">
            Discover how we've helped businesses transform their operations, increase revenue, and gain competitive advantages through AI and automation.
          </p>
        </motion.div>

        {/* Mobile-First Project Grid */}
        <div className="space-y-8 lg:hidden">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium`}>
                        {project.category}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center backdrop-blur-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Results:
                      </h4>
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Case Study
                      </button>
                      <button className="px-4 py-3 rounded-xl border border-purple-500/50 hover:border-purple-500 text-white font-medium transition-all duration-300 hover:bg-purple-900/20">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium`}>
                          {project.category}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold text-purple-400">Key Results:</h4>
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                            <span className="text-sm text-gray-400">{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Case Study
                        </button>
                        <button className="px-4 py-2 rounded-lg border border-purple-500/50 hover:border-purple-500 text-white text-sm font-medium transition-all duration-300 hover:bg-purple-900/20">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    300%
                  </div>
                </div>
                <div className="text-gray-400 text-sm lg:text-base">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                    50+
                  </div>
                </div>
                <div className="text-gray-400 text-sm lg:text-base">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                    24/7
                  </div>
                </div>
                <div className="text-gray-400 text-sm lg:text-base">Automated Operations</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Ready to Build Your Success Story?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              Let's discuss your project and create a custom solution that delivers measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 lg:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="px-6 lg:px-8 py-3 rounded-full border border-purple-500/50 hover:border-purple-500 text-white font-medium transition-all duration-300 hover:bg-purple-900/20"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;