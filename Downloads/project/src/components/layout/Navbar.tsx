import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 w-full rounded-3xl z-50 transition-all duration-500 ${
        isScrolled ? ' backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 rounded-2xl shadow-md border border-white/10">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Portfolio', 'Projects', 'Services', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest hover:text-violet-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-violet-400 after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
            {user && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest hover:text-violet-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 flex items-center ${
                    isActive
                      ? 'text-violet-400 after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                <Lock size={14} className="mr-1" />
                Admin
              </NavLink>
            )}
            {!user && (
              <NavLink
                to="/admin/login"
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest hover:text-violet-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 flex items-center ${
                    isActive
                      ? 'text-violet-400 after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                <Lock size={14} className="mr-1" />
                Login
              </NavLink>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="absolute top-6 right-6">
          <button onClick={toggleMenu} className="text-white hover:text-violet-400 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Home', 'About', 'Portfolio', 'Projects', 'Services', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
              className="text-2xl font-light uppercase tracking-widest hover:text-violet-400 transition-colors text-white"
            >
              {item}
            </button>
          ))}
          {user ? (
            <button
              onClick={() => handleNavigation('/admin')}
              className="text-2xl font-light uppercase tracking-widest hover:text-violet-400 transition-colors text-white flex items-center"
            >
              <Lock size={18} className="mr-2" />
              Admin
            </button>
          ) : (
            <button
              onClick={() => handleNavigation('/admin/login')}
              className="text-2xl font-light uppercase tracking-widest hover:text-violet-400 transition-colors text-white flex items-center"
            >
              <Lock size={18} className="mr-2" />
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;