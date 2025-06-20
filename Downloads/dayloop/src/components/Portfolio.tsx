import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Brain, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: 'E-Commerce AI Assistant',
    category: 'AI Agent',
    description: 'Intelligent customer support agent that handles 80% of customer inquiries and processes orders automatically.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'OpenAI', 'Stripe'],
    results: ['300% increase in customer satisfaction', '75% reduction in support costs', '24/7 automated support'],
    icon: Brain,
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Restaurant Management App',
    category: 'Mobile App',
    description: 'Complete restaurant management solution with order tracking, inventory management, and customer analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Expo', 'Firebase', 'Stripe'],
    results: ['50% faster order processing', '90% reduction in errors', 'Real-time analytics'],
    icon: Smartphone,
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    title: 'SaaS Marketing Platform',
    category: 'Web Application',
    description: 'Comprehensive marketing automation platform with lead scoring, email campaigns, and advanced analytics.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    results: ['200% increase in lead conversion', '60% time savings', 'Automated workflows'],
    icon: Globe,
    gradient: 'from-teal-500 to-purple-500'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_70%)] opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] animate-grid-flow opacity-[0.02]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Our Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold relative inline-block mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Success Stories & Case Studies
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 lg:px-0">
            Discover how we've helped businesses transform their operations and achieve measurable results.
          </p>
        </motion.div>

        {/* Mobile-First Modern Layout */}
        <div className="lg:hidden">
          {/* First Project - Full Width Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10 bg-black/20">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${featuredProjects[0].gradient} text-white text-sm font-medium backdrop-blur-sm`}>
                    {featuredProjects[0].category}
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${featuredProjects[0].gradient} flex items-center justify-center backdrop-blur-sm`}>
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                    {featuredProjects[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProjects[0].technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Projects Side by Side */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {featuredProjects.slice(1, 3).map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-3 right-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium mb-2 inline-block`}>
                          {project.category}
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                          {project.description}
                        </p>
                        
                        <button className="w-full px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-6 text-center">
                Proven Results
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      300%
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      50+
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Zap className="w-4 h-4 text-teal-400" />
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                      24/7
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">Automation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 text-center">
                Ready to Build Your Success Story?
              </h3>
              <p className="text-gray-400 mb-6 text-center text-sm">
                Let's create a custom solution that delivers results.
              </p>
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-300 text-center"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/portfolio"
                  className="block w-full px-6 py-3 rounded-xl border border-blue-500/50 hover:border-blue-500 text-white font-medium transition-all duration-300 hover:bg-blue-900/20 text-center"
                >
                  View Full Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
                  
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
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
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
                        <h4 className="text-sm font-semibold text-blue-400">Key Results:</h4>
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                            <span className="text-sm text-gray-400">{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Case Study
                        </button>
                        <button className="px-4 py-2 rounded-lg border border-blue-500/50 hover:border-blue-500 text-white text-sm font-medium transition-all duration-300 hover:bg-blue-900/20">
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

        {/* Stats Section - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block mt-16 lg:mt-20"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    300%
                  </div>
                </div>
                <div className="text-gray-400 text-sm lg:text-base">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    50+
                  </div>
                </div>
                <div className="text-gray-400 text-sm lg:text-base">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    24/7
                  </div>
                </div>
                <div className="text-gray-400 text-sm lg:text-base">Automated Operations</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block text-center mt-12 lg:mt-16"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Ready to Build Your Success Story?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              Let's discuss your project and create a custom solution that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 lg:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 lg:px-8 py-3 rounded-full border border-blue-500/50 hover:border-blue-500 text-white font-medium transition-all duration-300 hover:bg-blue-900/20"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;