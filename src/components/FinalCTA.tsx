import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-deep-green">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-playfair font-bold text-white mb-8">
          Ready to Secure Your Family's Future?
        </h2>
        <p className="text-xl text-cream mb-12 max-w-2xl mx-auto">
          Don't wait until it's too late. Create your will today and ensure your loved ones are protected.
        </p>
        <a 
          href="https://cutt.ly/sabeedwill"
          className="bg-gold text-white text-lg px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default FinalCTA