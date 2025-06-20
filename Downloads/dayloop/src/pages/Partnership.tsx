import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, TrendingUp, Award, ArrowRight, CheckCircle, Zap, DollarSign, Target } from 'lucide-react';

const partnershipTypes = [
  {
    title: 'Agency Partnership',
    description: 'White-label our services and expand your offerings with AI solutions.',
    icon: Users,
    benefits: [
      'White-label AI solutions',
      'Revenue sharing model',
      'Technical support included',
      'Marketing materials provided'
    ],
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Technology Partnership',
    description: 'Integrate our AI capabilities into your existing platform or service.',
    icon: TrendingUp,
    benefits: [
      'API access and integration',
      'Custom development support',
      'Joint go-to-market strategy',
      'Technical documentation'
    ],
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    title: 'Referral Partnership',
    description: 'Earn commissions by referring clients to our AI automation services.',
    icon: Handshake,
    benefits: [
      'Up to 20% commission',
      'Dedicated partner portal',
      'Sales support and training',
      'Monthly performance reports'
    ],
    gradient: 'from-teal-500 to-purple-500'
  },
  {
    title: 'Strategic Partnership',
    description: 'Long-term collaboration for large-scale AI transformation projects.',
    icon: Award,
    benefits: [
      'Joint venture opportunities',
      'Shared resources and expertise',
      'Priority project allocation',
      'Executive-level collaboration'
    ],
    gradient: 'from-pink-500 to-purple-500'
  }
];

const partnerBenefits = [
  'Access to cutting-edge AI technology',
  'Comprehensive training and certification',
  'Dedicated partner success manager',
  'Marketing and sales support',
  'Technical documentation and resources',
  'Priority customer support',
  'Joint marketing opportunities',
  'Regular partner events and networking'
];

const Partnership: React.FC = () => {
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
            <Handshake className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Partner With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Partnership Opportunities
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 lg:px-0">
            Join our partner ecosystem and grow your business with AI. We offer flexible partnership models designed to create mutual success and long-term value.
          </p>
        </motion.div>

        {/* Mobile-First Partnership Types */}
        <div className="space-y-6 lg:hidden mb-12">
          {partnershipTypes.map((partnership, index) => {
            const Icon = partnership.icon;
            return (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${partnership.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{partnership.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{partnership.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {partnership.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Partnership Types */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-20">
          {partnershipTypes.map((partnership, index) => {
            const Icon = partnership.icon;
            return (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500 h-full">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${partnership.gradient} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{partnership.title}</h3>
                    </div>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {partnership.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {partnership.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Benefits - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto px-4 lg:px-0">
              We provide comprehensive support and resources to ensure our partners succeed in the AI market.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="space-y-4 lg:hidden">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Partner Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                metric: '300%',
                description: 'Average revenue increase for agency partners',
                icon: TrendingUp,
                gradient: 'from-purple-500 to-blue-500'
              },
              {
                metric: '50+',
                description: 'Active partners across different industries',
                icon: Users,
                gradient: 'from-blue-500 to-teal-500'
              },
              {
                metric: '95%',
                description: 'Partner satisfaction and retention rate',
                icon: Award,
                gradient: 'from-teal-500 to-purple-500'
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-gray-400 text-sm lg:text-base">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-gray-400 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm lg:text-base">
              Join our growing partner network and start offering AI solutions to your clients. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 lg:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                Apply for Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="px-6 lg:px-8 py-3 rounded-full border border-purple-500/50 hover:border-purple-500 text-white font-medium transition-all duration-300 hover:bg-purple-900/20"
              >
                Schedule Discussion
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Partnership applications are reviewed within 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partnership;