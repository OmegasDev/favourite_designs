import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Palette, Film, Layers, PenTool, SlidersHorizontal, Briefcase, AppWindow, Package } from 'lucide-react';

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
    icon: <AppWindow size={32} />,
    title: "2D Design",
    description: "Custom illustrations, layouts, and vector designs tailored for web, print, and social platforms."
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <h2 className="text-sm uppercase tracking-wider text-violet-400">What We Do</h2>
            <div className="h-[2px] w-12 bg-violet-500 mx-auto mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of creative services to help your brand stand out and connect with your audience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative bg-black/30 backdrop-blur-sm p-4 md:p-8 rounded-lg border border-violet-500/10 hover:border-violet-500/30 transition-all duration-500 transform transition-opacity-transform delay-${index * 100 + 200} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
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
    </section>
  );
};

export default Services;