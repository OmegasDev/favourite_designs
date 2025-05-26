import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title && subtitle && cta) {
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 500);

      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 1000);

      setTimeout(() => {
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 1500);
    }
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('gallery-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/50 via-indigo-900/40 to-black animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-serifModern font-semibold mb-6 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          style={{ lineHeight: 1.1 }}
        >
          <span className="block">
            Transforming{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400">
              Ideas
            </span>
          </span>
          <span className="block mt-2">
            Into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">
              Visual Excellence
            </span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        >
          We are a creative agency specializing in graphic design, video editing, and visual storytelling that captivates audiences and elevates brands.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        >
          <Link
            to="/projects"
            className="group relative px-8 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 text-white rounded-full overflow-hidden"
          >
            <span className="relative z-10 text-sm uppercase tracking-wider font-medium">
              View Our Work
            </span>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600"></div>
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-violet-400/30 text-white rounded-full hover:bg-violet-400/10 transition-all duration-300 text-sm uppercase tracking-wider font-medium backdrop-blur-sm hover:border-violet-400/50"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ArrowDownCircle size={36} className="text-violet-400 hover:text-violet-300 transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
