import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images with valid variable names (no spaces, parentheses)
import Img1 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.07.jpeg';
import Img2 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.08.jpeg';
import Img7 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.11.jpeg';
import Img11 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.14 (1).jpeg';
import Img5 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.10 (1).jpeg';
import Img6 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.10.jpeg';
import Img3 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.11.jpeg';
import Img8 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.12 (1).jpeg';
import Img9 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.12.jpeg';
import Img10 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.13.jpeg';
import Img12 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.14.jpeg';
import Img4 from '../../assets/images/WhatsApp Image 2025-05-19 at 14.46.14.jpeg';

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity for Modern Cafe",
    category: "Graphic Design",
    image: Img1,
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    category: "Video Editing",
    image: Img2,
  },
  {
    id: 3,
    title: "Architectural Magazine Layout",
    category: "Graphic Design",
    image: Img3,
  },
  {
    id: 4,
    title: "Corporate Brand Video",
    category: "Video Editing",
    image: Img4,
  },
  {
    id: 5,
    title: "Fashion Lookbook Design",
    category: "Graphic Design",
    image: Img5,
  },
  {
    id: 6,
    title: "Music Video Production",
    category: "Video Editing",
    image: Img6,
  },
];

const categories = ["All", "Graphic Design", "Video Editing", "Motion Graphics"];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery-section" ref={sectionRef} className="py-24 bg-gradient-to-b from-black via-violet-950/20 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <h2 className="text-sm uppercase tracking-wider text-violet-400">Our Work</h2>
            <div className="h-[2px] w-12 bg-violet-500 mx-auto mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated portfolio showcasing the very best of our creative work across various industries and mediums.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center mb-12 transform transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-lg transform transition-all duration-1000 delay-${index * 100 + 300} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 backdrop-blur-sm">
                <span className="text-violet-400 text-xs md:text-sm mb-1 md:mb-2">{item.category}</span>
                <h3 className="text-sm md:text-xl font-medium text-white mb-1 md:mb-2 line-clamp-2">{item.title}</h3>
                <Link 
                  to={`/portfolio/${item.id}`} 
                  className="inline-flex items-center text-white hover:text-violet-400 transition-colors text-xs md:text-sm mt-1 md:mt-2"
                >
                  View Project <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 border border-violet-600 text-violet-400 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium group"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
