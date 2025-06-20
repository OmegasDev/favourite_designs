import React from 'react';
import { Code, Clock } from 'lucide-react';

const ToolsProjects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Tools & Projects
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </h2>
        </div>
        
        <div className="relative max-w-3xl mx-auto backdrop-blur-sm bg-black/30 border border-white/10 rounded-xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
            <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
              <Code className="w-10 h-10 text-blue-400" />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">We build tools and solutions for tomorrow's problems.</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsProjects;