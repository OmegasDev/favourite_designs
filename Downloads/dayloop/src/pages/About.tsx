import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Users, Code, Rocket, Award, TrendingUp, Zap } from 'lucide-react';

const About: React.FC = () => {
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
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              About Dayloop.ai
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4 lg:px-0">
            We're revolutionizing the way businesses operate through intelligent automation and cutting-edge AI solutions.
          </p>
        </motion.div>

        {/* Mobile-First Vision Section */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Our Vision</h2>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              At Dayloop.ai, we envision a future where businesses of all sizes can harness the power of artificial intelligence to streamline their operations, enhance productivity, and drive innovation. Under the leadership of our CEO, Emmanuel Izuchukwu, we're building tomorrow's solutions today.
            </p>
            
            {/* Mobile Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <h3 className="text-xl lg:text-2xl font-bold text-purple-400">50+</h3>
                </div>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-400">100%</h3>
                </div>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile-First Values Grid */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4 lg:px-0">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </motion.div>

          {/* Mobile Layout */}
          <div className="space-y-6 lg:hidden">
            {[
              {
                icon: Target,
                title: 'Mission',
                description: 'To empower businesses with intelligent automation solutions that drive growth and innovation.',
                gradient: 'from-purple-500 to-blue-500'
              },
              {
                icon: Users,
                title: 'Team',
                description: 'A diverse group of experts passionate about AI and committed to client success.',
                gradient: 'from-blue-500 to-teal-500'
              },
              {
                icon: Code,
                title: 'Technology',
                description: 'Cutting-edge AI and machine learning solutions built on robust, scalable architecture.',
                gradient: 'from-teal-500 to-purple-500'
              },
              {
                icon: Rocket,
                title: 'Innovation',
                description: 'Constantly pushing boundaries to deliver groundbreaking solutions for our clients.',
                gradient: 'from-pink-500 to-purple-500'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Mission',
                description: 'To empower businesses with intelligent automation solutions that drive growth and innovation.'
              },
              {
                icon: Users,
                title: 'Team',
                description: 'A diverse group of experts passionate about AI and committed to client success.'
              },
              {
                icon: Code,
                title: 'Technology',
                description: 'Cutting-edge AI and machine learning solutions built on robust, scalable architecture.'
              },
              {
                icon: Rocket,
                title: 'Innovation',
                description: 'Constantly pushing boundaries to deliver groundbreaking solutions for our clients.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-black/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">Our Leadership</h2>
          <div className="max-w-md mx-auto p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-black/20">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-6">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Emmanuel Izuchukwu"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Emmanuel Izuchukwu</h3>
            <p className="text-purple-400 mb-4 font-medium">CEO & Founder</p>
            <p className="text-gray-400 text-sm lg:text-base">
              A visionary leader with a passion for AI and automation, Emmanuel brings years of experience in software development and business transformation to Dayloop.ai.
            </p>
            
            {/* Leadership Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <div className="text-lg font-bold text-white">5+</div>
                </div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <div className="text-lg font-bold text-white">50+</div>
                </div>
                <div className="text-xs text-gray-400">Projects Led</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;