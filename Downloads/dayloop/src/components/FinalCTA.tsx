import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8B5CF6_0%,_transparent_70%)] opacity-15"></div>
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: `rgba(139, 92, 246, ${Math.random() * 0.6 + 0.2})`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Ready to Scale?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business with AI
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join hundreds of businesses that have automated their operations, increased revenue, and gained competitive advantages with our AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                    <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">Free</div>
                    <div className="text-sm text-gray-400">Consultation</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">What You Get:</h3>
                  <ul className="space-y-3">
                    {[
                      'Custom AI strategy for your business',
                      'ROI-focused automation roadmap',
                      'Technical feasibility assessment',
                      'Partnership opportunities'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Book a free consultation call and discover how AI can transform your business operations and drive growth.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Link
                    to="/contact"
                    className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    to="/partnership"
                    className="group px-8 py-4 rounded-xl border border-purple-500/50 hover:border-purple-500 text-white font-medium transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 hover:bg-purple-900/20"
                  >
                    Explore Partnership
                    <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  </Link>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-500">
                    No commitment required • 30-minute strategy session • Custom recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;