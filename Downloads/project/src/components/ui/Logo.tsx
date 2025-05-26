import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo.png';
import LogoText from '../../assets/images/logo-text.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <img
        src={LogoImage}
        alt="Logo Icon"
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <img
        src={LogoText}
        alt="Logo Text"
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mt-1"
      />
    </Link>
  );
};

export default Logo;


