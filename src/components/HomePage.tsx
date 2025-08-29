
import React from 'react';
import Hero from './Hero';
import Solutions from './Solutions';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CTA from './CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
