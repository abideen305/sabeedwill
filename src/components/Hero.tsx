import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1584286595398-a59511e3c1c3?auto=format&fit=crop&q=80')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            Your Trusted Path to Islamic and Legal Inheritance
          </h1>
          <p className="text-xl text-cream mb-8">
            Create a Sharia-compliant or legally binding will in minutes.
          </p>
          <a 
            href="https://cutt.ly/sabeedwill" 
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero