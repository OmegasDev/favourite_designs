import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl py-3' : 'bg-black/40 backdrop-blur-lg py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full bg-white/5 backdrop-blur-lg px-6 py-3 border border-white/10">
        <Link to="/" className="flex items-center gap-2">
  <Sparkles className="w-6 h-6 text-indigo-400 drop-shadow-md" />
  <span className="text-indigo-300 text-2xl font-extrabold tracking-wide font-[Orbitron]">
    Dayloop<span className="text-white">.ai</span>
  </span>
</Link>

          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === '/' ? 'text-white' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === '/about' ? 'text-white' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === '/portfolio' ? 'text-white' : ''
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/agents" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === '/agents' ? 'text-white' : ''
              }`}
            >
              AI Agents
            </Link>
            <Link 
              to="/partnership" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === '/partnership' ? 'text-white' : ''
              }`}
            >
              Partnership
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                location.pathname === '/contact' ? 'text-white' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-4 py-2 text-white hover:text-purple-300 transition-colors duration-300">
              Login
            </Link>
            <Link to="/contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
              Get Started
            </Link>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Enhanced with Always Visible Nav */}
      <div className={`md:hidden bg-black/95 backdrop-blur-xl transition-all duration-300 overflow-hidden border-b border-gray-800 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-6">
          {/* Navigation Links - Modern Mobile Layout */}
          <div className="space-y-2">
            <Link 
              to="/"
              className={`block text-lg font-medium py-4 px-6 rounded-2xl transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Home</span>
                {location.pathname === '/' && (
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                )}
              </div>
            </Link>
            
            <Link 
              to="/about"
              className={`block text-lg font-medium py-4 px-6 rounded-2xl transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>About</span>
                {location.pathname === '/about' && (
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                )}
              </div>
            </Link>
            
            <Link 
              to="/portfolio"
              className={`block text-lg font-medium py-4 px-6 rounded-2xl transition-all duration-300 ${
                location.pathname === '/portfolio' 
                  ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Portfolio</span>
                {location.pathname === '/portfolio' && (
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                )}
              </div>
            </Link>
            
            <Link 
              to="/agents"
              className={`block text-lg font-medium py-4 px-6 rounded-2xl transition-all duration-300 ${
                location.pathname === '/agents' 
                  ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>AI Agents</span>
                {location.pathname === '/agents' && (
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                )}
              </div>
            </Link>
            
            <Link 
              to="/partnership"
              className={`block text-lg font-medium py-4 px-6 rounded-2xl transition-all duration-300 ${
                location.pathname === '/partnership' 
                  ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Partnership</span>
                {location.pathname === '/partnership' && (
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                )}
              </div>
            </Link>
            
            <Link 
              to="/contact" 
              className={`block text-lg font-medium py-4 px-6 rounded-2xl transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>Contact</span>
                {location.pathname === '/contact' && (
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                )}
              </div>
            </Link>
          </div>
          
          {/* Action Buttons - Modern Mobile Design */}
          <div className="pt-8 border-t border-gray-800 mt-6">
            <div className="grid grid-cols-2 gap-3">
              <Link 
                to="/login" 
                className="py-4 px-6 text-center text-white hover:text-purple-300 transition-colors duration-300 rounded-2xl hover:bg-white/5 border border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/contact" 
                className="py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Quick Stats - Mobile Exclusive */}
          <div className="pt-6 mt-6 border-t border-gray-800">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-purple-400">50+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-400">300%</div>
                <div className="text-xs text-gray-500">ROI</div>
              </div>
              <div>
                <div className="text-lg font-bold text-teal-400">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;