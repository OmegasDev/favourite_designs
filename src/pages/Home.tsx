import React from 'react';
import Hero from '../components/home/Hero';
import Gallery from '../components/home/Gallery';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
};

export default Home;