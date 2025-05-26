import React, { useState, useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Favourite Designs transformed our brand identity with their exceptional graphic design work. Their attention to detail and creative approach exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Robertson",
    position: "CEO, Innovate Media",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The video editing team at Favourite Designs is world-class. They took our raw footage and created a compelling story that resonated with our audience. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Creative Director, Artisan Brands",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Working with Favourite Designs has been a game-changer for our company. Their motion graphics work is stunning and has significantly increased engagement across our platforms.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <h2 className="text-sm uppercase tracking-wider text-violet-400">Testimonials</h2>
            <div className="h-[2px] w-12 bg-violet-500 mx-auto mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our clients have to say about our work.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-gray-800">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#a78bfa" className="text-violet-400" />
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-gray-300 mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 md:-translate-x-12 w-10 h-10 rounded-full bg-gray-900/80 text-white flex items-center justify-center hover:bg-violet-600 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 md:translate-x-12 w-10 h-10 rounded-full bg-gray-900/80 text-white flex items-center justify-center hover:bg-violet-600 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-6 bg-violet-500' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;