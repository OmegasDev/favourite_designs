import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import favourProfile from '../assets/images/favour-profile.jpg';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950/20 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      {/* Mobile background image with darker overlay */}
      <div className="md:hidden fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${favourProfile})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Get to Know Me
              </h1>


              <div className="hidden md:block md:w-1/3 relative">
             
            </div>
              <p className="text-violet-400 text-lg mb-4">Favour Chinecherem Nwachukwu - Creative Director & Multi-disciplinary Designer</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                A passionate creative force in the digital realm, I blend artistry with innovation to craft compelling visual narratives. With expertise in graphic design, video editing, and creative writing, I transform ideas into immersive experiences that leave lasting impressions.
              </p>

              {/* Profile Image - Mobile Only */}
              <div className="md:hidden w-3/4 mx-auto mb-6">
                <img 
                  src={favourProfile}
                  alt="Favour Chinecherem Nwachukwu"
                  className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
                />
              </div>
              
              <div className="flex space-x-4 mb-8">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                >
                  <Github size={18} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-violet-500/10">
                  <h3 className="text-xl font-bold mb-4 text-white">Graphic Design</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Brand Identity Design</li>
                    <li>Print & Digital Media</li>
                    <li>Typography</li>
                    <li>Layout Design</li>
                  </ul>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-violet-500/10">
                  <h3 className="text-xl font-bold mb-4 text-white">Video Editing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Motion Graphics</li>
                    <li>Color Grading</li>
                    <li>Sound Design</li>
                    <li>Visual Effects</li>
                  </ul>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-violet-500/10">
                  <h3 className="text-xl font-bold mb-4 text-white">Writing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Creative Writing</li>
                    <li>Content Strategy</li>
                    <li>Copywriting</li>
                    <li>Script Writing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Profile Image - Desktop Only */}
            <div className="hidden md:block md:w-1/3 relative">
              <img 
                src={favourProfile}
                alt="Favour Chinecherem Nwachukwu"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Featured Work */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold mb-8">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/projects"
                className="group relative aspect-video overflow-hidden rounded-lg"
              >
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Design Projects"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Design Projects</h3>
                    <p className="text-violet-400 flex items-center">
                      View Gallery <ArrowRight size={16} className="ml-2" />
                    </p>
                  </div>
                </div>
              </Link>
              <Link 
                to="/projects"
                className="group relative aspect-video overflow-hidden rounded-lg"
              >
                <img 
                  src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Video Projects"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Video Projects</h3>
                    <p className="text-violet-400 flex items-center">
                      View Gallery <ArrowRight size={16} className="ml-2" />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
