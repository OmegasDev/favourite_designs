import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle, Calendar, Zap, Clock, Users, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <MessageCircle className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Let's Connect</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Start Your Project Today
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4 lg:px-0">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        {/* Mobile-First Modern Layout */}
        <div className="lg:hidden">
          {/* Quick Contact Cards - Mobile Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group p-4 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Email Us</h3>
                <p className="text-xs text-purple-400 mb-2">Quick Response</p>
                <p className="text-xs text-gray-300 font-medium">contact@dayloop.ai</p>
                <div className="flex items-center gap-1 mt-2">
                  <Clock className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-green-400">2hr response</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group p-4 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Call Us</h3>
                <p className="text-xs text-blue-400 mb-2">Direct Line</p>
                <p className="text-xs text-gray-300 font-medium">+234 7039312869</p>
                <div className="flex items-center gap-1 mt-2">
                  <Users className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-blue-400">Mon-Fri 9-6</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                  <p className="text-teal-400 text-sm">Our Office</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">Lagos, Nigeria</p>
              <p className="text-gray-500 text-sm">Remote-first with global reach</p>
              
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-sm font-bold text-white">5.0</span>
                  </div>
                  <span className="text-xs text-gray-400">Rating</span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white mb-1">50+</div>
                  <span className="text-xs text-gray-400">Projects</span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white mb-1">24/7</div>
                  <span className="text-xs text-gray-400">Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10">
              <h2 className="text-xl font-bold text-white mb-6 text-center">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ai-agent">AI Agent</option>
                    <option value="automation">Business Automation</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-purple-300 text-sm text-center">
                  🚀 Free consultation included • Response within 2 hours • No commitment required
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions - Mobile */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="w-full px-4 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Schedule Call</span>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button className="w-full px-4 py-4 rounded-2xl border-2 border-purple-500/50 hover:border-purple-500 text-white font-semibold transition-all duration-300 hover:bg-purple-900/20 flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Get Quote</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Keep Original */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 gap-6">
                <div className="group p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email Us</h3>
                      <p className="text-purple-400 text-sm">Quick Response</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium">contact@dayloop.ai</p>
                  <p className="text-gray-500 text-sm mt-1">We respond within 2 hours</p>
                </div>

                <div className="group p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Call Us</h3>
                      <p className="text-blue-400 text-sm">Direct Line</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium">+234 7039312869</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9AM-6PM WAT</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                    <p className="text-teal-400 text-sm">Our Office</p>
                  </div>
                </div>
                <p className="text-gray-300">Lagos, Nigeria</p>
                <p className="text-gray-500 text-sm mt-1">Remote-first with global reach</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Project Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ai-agent">AI Agent</option>
                      <option value="automation">Business Automation</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and budget..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>

                <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-purple-300 text-sm text-center">
                    🚀 Free consultation included • Response within 2 hours • No commitment required
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-6 mt-12"
          >
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-purple-500/50 hover:border-purple-500 text-white font-semibold transition-all duration-300 hover:bg-purple-900/20 flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Get Instant Quote
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;