import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Dynamically import all WhatsApp images from assets/images
const importWhatsAppImages = () => {
  const images = import.meta.glob('../assets/images/WhatsApp*.{jpeg,jpg,png}', { eager: true });
  return Object.values(images).map((module: any) => module.default || module);
};

// Generate portfolio items from WhatsApp images
const whatsappImages = importWhatsAppImages();

const portfolioItems = whatsappImages.map((imgSrc, idx) => ({
  id: idx + 1,
  title: `Graphic design${idx + 1}`,
  category: "graphic design",
  image: imgSrc,
  description: "Automatically loaded local projects from assets folder."
}));

const categories = ["All", "graphic design", "video editing","motion graphics"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-violet-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our diverse portfolio of creative work, showcasing our expertise in graphic design, video editing, and motion graphics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 mx-2 mb-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-violet-600 text-white'
                  : 'bg-black/50 text-gray-400 hover:bg-black/70 backdrop-blur-sm'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm border border-violet-500/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-violet-400 text-sm mb-2 block">{item.category}</span>
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <Link 
                  to={`/project/${item.id}`} 
                  className="inline-flex items-center text-white hover:text-violet-400 transition-colors text-sm group"
                >
                  View Details 
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
