import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain, Workflow, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.',
    icon: Globe,
    gradient: 'from-purple-500 to-blue-500',
    features: ['React & Next.js', 'E-commerce Solutions', 'Custom Dashboards', 'SEO Optimized']
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications using React Native and Expo with native performance.',
    icon: Smartphone,
    gradient: 'from-blue-500 to-teal-500',
    features: ['React Native', 'Cross-Platform', 'App Store Ready', 'Push Notifications']
  },
  {
    title: 'AI Agents',
    description: 'Custom AI agents for sales, customer support, lead generation, and business operations.',
    icon: Brain,
    gradient: 'from-teal-500 to-pink-500',
    features: ['24/7 Automation', 'Lead Generation', 'Customer Support', 'Sales Optimization']
  },
  {
    title: 'Business Automation',
    description: 'End-to-end workflow automation using N8N, Make.com, and custom solutions.',
    icon: Workflow,
    gradient: 'from-pink-500 to-purple-500',
    features: ['N8N & Make.com', 'Custom Workflows', 'API Integrations', 'Process Optimization']
  },
  {
    title: 'ROI Solutions',
    description: 'Data-driven solutions that focus on measurable business outcomes and growth.',
    icon: Zap,
    gradient: 'from-purple-500 to-blue-500',
    features: ['Performance Tracking', 'Analytics Dashboard', 'Growth Metrics', 'ROI Optimization']
  },
  {
    title: 'Partnership',
    description: 'Join our partner network with white-label solutions and revenue sharing opportunities.',
    icon: Users,
    gradient: 'from-blue-500 to-purple-500',
    features: ['White-Label', 'Revenue Sharing', 'Technical Support', 'Marketing Materials']
  }
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8B5CF6_0%,_transparent_70%)] opacity-10"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Our Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold relative inline-block mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
              Solutions That Scale Your Business
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 lg:px-0">
            From concept to deployment, we deliver comprehensive digital solutions that drive real business results.
          </p>
        </motion.div>

        {/* Mobile-First Modern Grid Layout */}
        <div className="lg:hidden">
          {/* Row 1: Two Cards Side by Side */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {services.slice(0, 2).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-black/40 h-full">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                    
                    <div className="space-y-1">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-2.5 h-2.5 text-purple-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300 truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: Single Full Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-black/40">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${services[2].gradient} flex items-center justify-center flex-shrink-0`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{services[2].title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{services[2].description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {services[2].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 3: Three Cards in a Row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {services.slice(3, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-3 transition-all duration-300 hover:bg-black/40 h-full">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-2 mx-auto`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xs font-semibold text-white mb-2 text-center">{service.title}</h3>
                    
                    <div className="space-y-1">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="text-center">
                          <span className="text-xs text-gray-300 block truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 4: Two Cards with Different Sizes */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="col-span-2"
            >
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-black/40 h-full">
                <h3 className="text-sm font-semibold text-white mb-2">Ready to Transform?</h3>
                <p className="text-xs text-gray-400 mb-3">Let's build something amazing together</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium hover:scale-105 transition-transform duration-300"
                >
                  Get Started
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="col-span-1"
            >
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-black/40 h-full flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold text-white text-center">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Modern Bento Grid */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-4 gap-6 h-[800px]">
          {/* Large Feature - Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-6 row-span-2 group relative"
          >
            <div className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-black/40 overflow-hidden">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${services[0].gradient} flex items-center justify-center`}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{services[0].title}</h3>
                    <p className="text-purple-400">Modern Web Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 text-lg">{services[0].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {services[0].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-3 row-span-2 group relative"
          >
            <div className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-black/40">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${services[1].gradient} flex items-center justify-center mb-4`}>
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{services[1].title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{services[1].description}</p>
                
                <div className="space-y-2 mt-auto">
                  {services[1].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-3 row-span-2 group relative"
          >
            <div className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-black/40">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${services[2].gradient} flex items-center justify-center mb-4`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{services[2].title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{services[2].description}</p>
                
                <div className="space-y-2 mt-auto">
                  {services[2].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row - Automation, ROI, Partnership */}
          {services.slice(3).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="col-span-4 row-span-2 group relative"
              >
                <div className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-black/40">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2 mt-auto">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-purple-400" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              Let's discuss your project and create a custom solution that drives growth and increases revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 lg:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="px-6 lg:px-8 py-3 rounded-full border border-purple-500/50 hover:border-purple-500 text-white font-medium transition-all duration-300 hover:bg-purple-900/20"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;