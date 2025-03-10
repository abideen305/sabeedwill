import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is SabeedWill legally recognized?",
    answer: "Yes, all wills created through SabeedWill comply with both Islamic law and Nigerian legal requirements."
  },
  {
    question: "How does Sharia compliance work?",
    answer: "Our system is built on established Islamic inheritance principles and is regularly reviewed by qualified Islamic scholars."
  },
  {
    question: "Can I update my will later?",
    answer: "Yes, Premium plan users can update their wills unlimited times. Basic plan users can create one version."
  }
];

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          Got Questions? We've Got Answers
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-cream rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-charcoal">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-deep-green" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-deep-green" />
                )}
              </button>
              <div
                className={`px-6 pb-4 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="text-charcoal">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/faqs"
            className="inline-flex items-center text-deep-green hover:text-deep-green/80 transition-colors font-semibold"
          >
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;