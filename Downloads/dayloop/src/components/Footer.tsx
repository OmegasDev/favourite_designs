import React from 'react';
import { Github, Twitter, Mail, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-indigo-300 text-2xl font-extrabold tracking-wide font-[Orbitron]">
    Dayloop<span className="text-white">.ai</span>
  </span>
            </div>
            <p className="text-gray-400 mb-6">
              Building tomorrow's AI solutions today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">AI Agents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-gray-800 my-8"></div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dayloop.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;