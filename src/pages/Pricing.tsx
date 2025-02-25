import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential will creation tools",
      features: [
        "Basic will template",
        "Islamic inheritance calculator",
        "PDF download",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonLink: "https://cutt.ly/sabeedwill",
      highlighted: false
    },
    {
      name: "Premium",
      price: "₦2,500",
      period: "per year",
      description: "Complete will management solution",
      features: [
        "All Basic features",
        "Secure cloud storage",
        "Unlimited updates",
        "Legal review",
        "Priority support",
        "Multiple will versions"
      ],
      buttonText: "Choose Premium",
      buttonLink: "#",
      highlighted: true
    },
    {
      name: "Business",
      price: "Custom",
      description: "Enterprise-grade solutions",
      features: [
        "All Premium features",
        "Multiple user accounts",
        "API access",
        "Custom branding",
        "Dedicated support",
        "Training sessions"
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact",
      highlighted: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Pricing Header */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-deep-green text-center mb-8">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-charcoal text-center max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core Islamic will creation features.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-deep-green text-white shadow-xl scale-105'
                    : 'bg-cream text-charcoal'
                }`}
              >
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${
                        plan.highlighted ? 'text-gold' : 'text-deep-green'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.buttonLink}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.highlighted
                      ? 'bg-gold text-white hover:bg-gold/90'
                      : 'bg-deep-green text-white hover:bg-deep-green/90'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Can I change my plan later?
              </h3>
              <p>Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                Is there a long-term commitment?
              </h3>
              <p>No, our premium plans are billed annually but you can cancel anytime.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">
                What payment methods do you accept?
              </h3>
              <p>We accept all major credit cards, bank transfers, and mobile money.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;