import React from 'react';
import { Scale, Shield, Archive, FileCheck, Clock, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Scale,
      title: "SabeedFaraid™",
      description: "Automated Sharia-compliant will generation based on Islamic inheritance principles",
      benefits: [
        "Automatic calculation of shares",
        "Compliance with Islamic law",
        "Expert-verified formulas"
      ]
    },
    {
      icon: Shield,
      title: "NigerianWill™",
      description: "Legally binding wills that comply with Nigerian law",
      benefits: [
        "Court-recognized format",
        "State-specific compliance",
        "Legal terminology"
      ]
    },
    {
      icon: Archive,
      title: "Secure Storage",
      description: "State-of-the-art digital storage for your will",
      benefits: [
        "Encrypted storage",
        "24/7 access",
        "Backup copies"
      ]
    }
  ];

  const process = [
    {
      icon: FileCheck,
      title: "Create Your Will",
      description: "Fill in your details and preferences through our guided process"
    },
    {
      icon: Clock,
      title: "Regular Updates",
      description: "Update your will anytime as your circumstances change"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your will is encrypted and stored safely in our secure vault"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-deep-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-center mb-8">
            Features That Make Us Different
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Comprehensive will creation and storage solutions that combine Islamic principles with legal compliance
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-cream rounded-lg p-8 shadow-lg">
                <feature.icon className="h-12 w-12 text-deep-green mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-charcoal mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-charcoal">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <step.icon className="h-16 w-16 text-deep-green mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;