import React from 'react';
import { UserPlus, FileText, Lock } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds with just your email."
  },
  {
    icon: FileText,
    title: "Create Will",
    description: "Answer simple questions about your assets and heirs."
  },
  {
    icon: Lock,
    title: "Store Securely",
    description: "Download or store your will in our digital vault."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          Create Your Will in 3 Easy Steps
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <step.icon className="h-16 w-16 text-deep-green mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-deep-green/20 transform translate-x-1/2">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 bg-deep-green rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://cutt.ly/sabeedwill"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks