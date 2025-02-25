import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-playfair font-bold text-white mb-6">
            Your Trusted Path to Islamic and Legal Inheritance
          </h1>
          <p className="text-xl text-cream mb-8">
            Create a Sharia-compliant or legally binding will in minutes.
          </p>
          <a href="https://cutt.ly/sabeedwill" className="btn-primary inline-block">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;