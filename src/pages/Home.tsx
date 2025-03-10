import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PricingPreview from '../components/PricingPreview';
import BlogPreview from '../components/BlogPreview';
import FAQPreview from '../components/FAQPreview';

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Testimonials />
      <PricingPreview />
      <BlogPreview />
      <FAQPreview />
    </div>
  );
};

export default Home;