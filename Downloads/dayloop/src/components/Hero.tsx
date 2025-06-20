import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Play, Zap, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Revenue-Generating AI Solutions",
    "Custom Digital Experiences", 
    "Intelligent Business Automation",
    "Growth-Focused Technology"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 80;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach(particle1 => {
        particles.forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTextIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(circle at center, rgba(15, 23, 42, 1) 0%, rgba(10, 11, 20, 1) 100%)' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Mobile-First Design */}
        <div className="text-center lg:text-left">
          <div className="space-y-6 lg:space-y-8 mt-20 md:mt-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400" />
              <span className="text-purple-400 font-medium text-sm lg:text-base">Transform Your Business</span>
            </div>
            
            {/* Main Heading - Mobile Optimized */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-white block mb-2">We Build</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400 glow-text block mb-2 min-h-[1.2em]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                <span className="text-white block">That Drive Results</span>
              </h1>
            </div>
            
            {/* Subheading - Mobile Optimized */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              From AI-powered automation to stunning web and mobile apps - we create technology solutions that increase revenue, save time, and scale your business.
            </p>
            
            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-4 px-4 lg:px-0 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="group px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 text-base"
              >
                <Zap className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/portfolio" 
                className="group px-6 py-4 rounded-2xl border-2 border-purple-500/50 hover:border-purple-500 text-white font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 hover:bg-purple-900/20 hover:scale-105 text-base"
              >
                <Play className="w-4 h-4" />
                See Our Work
              </Link>
            </div>

            {/* Stats Grid - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md mx-auto lg:max-w-none">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <div className="text-xl lg:text-2xl font-bold text-white">300%</div>
                </div>
                <div className="text-xs lg:text-sm text-gray-400">Avg ROI Increase</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <div className="text-xl lg:text-2xl font-bold text-white">50+</div>
                </div>
                <div className="text-xs lg:text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <div className="text-xl lg:text-2xl font-bold text-white">24/7</div>
                </div>
                <div className="text-xs lg:text-sm text-gray-400">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;