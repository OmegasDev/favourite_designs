import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 border-t border-gray-800 pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-300 leading-relaxed">
              Creating exceptional visual experiences through innovative design and creative solutions since 2015.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </div>

          {/* Services */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-white text-lg font-medium mb-6 relative inline-block after:absolute after:w-1/2 after:h-[2px] after:bg-violet-500 after:bottom-[-8px] after:left-0">Services</h3>
            <ul className="space-y-3">
              {['Graphic Design', 'Video Editing', 'Motion Graphics', '3D Design', '2D Design'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-white text-lg font-medium mb-6 relative inline-block after:absolute after:w-1/2 after:h-[2px] after:bg-violet-500 after:bottom-[-8px] after:left-0">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-white text-lg font-medium mb-6 relative inline-block after:absolute after:w-1/2 after:h-[2px] after:bg-violet-500 after:bottom-[-8px] after:left-0">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              
              <li>Phone: +234 9032803893</li>
              <li className="hover:text-violet-400 transition-colors">
                <a href="mailto:info@favouritedesigns.com">info.favouritedesigns@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Favourite Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-violet-500 hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
};

export default Footer;