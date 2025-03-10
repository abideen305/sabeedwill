import React from 'react';
import { Scale, Gavel, Shield, Coins, HeadsetIcon } from 'lucide-react';

const features = [
  {
    icon: Scale,
    title: "Sharia-Compliant Wills",
    description: "Automated Faraid calculations for Muslims with expert verification."
  },
  {
    icon: Gavel,
    title: "Legally Binding Wills",
    description: "Court-admissible templates that protect your assets under Nigerian law."
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Blockchain-backed, tamper-proof storage for complete peace of mind."
  },
  {
    icon: Coins,
    title: "Affordable Pricing",
    description: "From ₦2,500/year—significantly cheaper than traditional legal services."
  },
  {
    icon: HeadsetIcon,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you, day or night."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          Why Choose SabeedWill?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <feature.icon className="h-12 w-12 text-deep-green mb-6" />
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

export default Features