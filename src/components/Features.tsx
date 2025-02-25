import React from 'react';
import { Scale, Shield, Archive } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: 'Sharia-Compliant Wills',
    description: 'Ensure your wealth is distributed according to Islamic principles.'
  },
  {
    icon: Shield,
    title: 'Affordable Pricing',
    description: 'Create and store your will at competitive rates.'
  },
  {
    icon: Archive,
    title: 'Secure Storage',
    description: 'Your will is safely stored with state-of-the-art encryption.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          Why Choose SabeedWill?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-16 w-16 text-deep-green mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="text-charcoal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;