import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code2, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Strategy',
    description: 'We start with a deep dive into your business goals, challenges, and requirements. Our team analyzes your current processes and identifies automation opportunities.',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: Code2,
    title: 'Design & Development',
    description: 'Our expert developers build your solution using cutting-edge technologies. We follow agile methodologies with regular updates and client feedback integration.',
    gradient: 'from-blue-500 to-teal-500'
  },
  {
    icon: Rocket,
    title: 'Launch & Optimization',
    description: 'We deploy your solution with comprehensive testing and monitoring. Post-launch, we provide ongoing support and continuous optimization for peak performance.',
    gradient: 'from-teal-500 to-pink-500'
  },
  {
    icon: BarChart,
    title: 'Scale & Measure',
    description: 'Track ROI with detailed analytics and performance metrics. We help you scale successful automations and expand AI capabilities across your organization.',
    gradient: 'from-pink-500 to-purple-500'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8B5CF6_0%,_transparent_70%)] opacity-10"></div>
        <div className="absolute w-full h-full">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                background: `rgba(139, 92, 246, ${Math.random() * 0.5 + 0.1})`,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Our Process</span>
          </div>
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
              How We Deliver Success
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven 4-step methodology ensures your project delivers measurable results and exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-500 h-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${step.gradient} shadow-lg transform transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  300%
                </div>
                <div className="text-gray-400">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                  75%
                </div>
                <div className="text-gray-400">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Automated Operations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;