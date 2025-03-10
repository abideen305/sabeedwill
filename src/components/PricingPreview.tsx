import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "₦0",
    description: "Basic will creation tools",
    features: [
      "Basic will template",
      "Islamic inheritance calculator",
      "PDF download",
      "Email support"
    ]
  },
  {
    name: "Premium",
    price: "₦2,500",
    period: "/year",
    description: "Complete will management",
    features: [
      "All Free features",
      "Secure cloud storage",
      "Unlimited updates",
      "Priority support"
    ],
    highlighted: true
  }
];

const PricingPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          Affordable Plans for Everyone
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-deep-green text-white shadow-xl transform scale-105'
                  : 'bg-cream text-charcoal'
              }`}
            >
              <h3 className="text-2xl font-playfair font-bold mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm opacity-80">{plan.period}</span>
                )}
              </div>
              <p className="mb-6 opacity-90">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className={`h-5 w-5 mr-2 ${
                      plan.highlighted ? 'text-gold' : 'text-deep-green'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://cutt.ly/sabeedwill"
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-gold text-white hover:bg-gold/90'
                    : 'bg-deep-green text-white hover:bg-deep-green/90'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;