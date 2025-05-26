import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import favourProfile from '../../assets/images/favour-profile.jpg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section id="about-section" className="py-24 bg-gray-950 relative" ref={sectionRef}>
      {/* Mobile-only background */}
      <div className="md:hidden fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${favourProfile})` }}
        ></div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side: text content */}
          <div className={`w-full md:flex-1 space-y-8 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get to Know Me</h2>
              <div className="h-[2px] w-12 bg-violet-500 mt-2"></div>
            </div>

            {/* Image for small devices only */}
            <div className="md:hidden w-2/3 sm:w-1/2 mx-auto transform transition-all duration-1000 delay-300">
              <img 
                src={favourProfile}
                alt="Favour Chinecherem Nwachukwu" 
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
              />
            </div>

            <div>
              <p className="text-violet-400 text-lg mb-4">Favour Chinecherem Nwachukwu - Creative Director & Multi-disciplinary Designer</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a passionate creative force in the digital realm, I blend artistry with innovation to craft compelling visual narratives. With expertise in graphic design, video editing, and creative writing, I transform ideas into immersive experiences that leave lasting impressions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in the creative industry has been marked by a relentless pursuit of excellence and a deep commitment to pushing the boundaries of visual storytelling. Every project is an opportunity to create something extraordinary that not only meets but exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                ['8+', 'Years Experience'],
                ['200+', 'Projects Done'],
                ['50+', 'Happy Clients'],
              ].map(([count, label], index) => (
                <div key={index} className="text-center p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-violet-500/10">
                  <div className="text-2xl font-bold text-violet-400 mb-2">{count}</div>
                  <div className="text-sm text-gray-300">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex space-x-4">
                {[Twitter, Linkedin, Github].map((Icon, index) => (
                  <a
                    key={index}
                    href="https://#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 hover:bg-violet-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <Link
                to="/portfolio"
                className="inline-flex items-center px-1 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors group"
              >
                View Portfolio
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right side: image for large devices only */}
          <div className="hidden md:block md:w-1/3 transform transition-all duration-1000 delay-300">
            <img 
              src={favourProfile}
              alt="Favour Chinecherem Nwachukwu" 
              className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

