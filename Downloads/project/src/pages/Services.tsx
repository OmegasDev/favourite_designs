import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Film, Layers, PenTool, SlidersHorizontal, Package } from 'lucide-react';

const servicesData = [
  {
    icon: <Palette size={32} />,
    title: "Graphic Design",
    description: "Creative visual solutions including logos, branding, print materials, and digital assets."
  },
  {
    icon: <Film size={32} />,
    title: "Video Editing",
    description: "Professional video editing services for commercials, corporate videos, social media content, and more."
  },
  {
    icon: <Layers size={32} />,
    title: "Motion Graphics",
    description: "Eye-catching animations and visual effects that bring static designs to life."
  },
  {
    icon: <Package size={32} />,
    title: "3D Design",
    description: "High-quality 3D modeling and rendering for products, scenes, and animations that add depth and realism to your brand."
  },
  {
    icon: <SlidersHorizontal size={32} />,
    title: "Color Grading",
    description: "Professional color enhancement and correction for videos and photography."
  },
  {
    icon: <PenTool size={32} />,
    title: "2D Design",
    description: "Custom illustrations, layouts, and vector designs tailored for web, print, and social platforms."
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We offer a comprehensive range of creative services to help your brand stand out and connect with your audience.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors group"
            >
              Start a Project
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.title}
              className="group relative bg-black/30 backdrop-blur-sm p-4 md:p-8 rounded-lg border border-violet-500/10 hover:border-violet-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-violet-400 mb-3 md:mb-5 transition-transform duration-500 group-hover:scale-110 transform-gpu">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;