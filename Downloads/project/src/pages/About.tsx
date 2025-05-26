import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Founded in 2015, Favourite Designs has grown from a small studio to a full-service creative agency, 
              helping brands across the globe tell their stories through stunning visuals and captivating designs.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors group"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                Our team of passionate designers, video editors, and creative strategists work together to deliver 
                exceptional visual experiences that not only look beautiful but also achieve tangible results for our clients.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-2">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-2">200+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-2">15</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Design team collaborating" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-violet-900/20 hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;