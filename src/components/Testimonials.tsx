import React from 'react';

const testimonials = [
  {
    quote: "SabeedWill made creating my Islamic will simple and straightforward.",
    author: "Ahmed Ibrahim"
  },
  {
    quote: "The peace of mind knowing my will is both Sharia-compliant and legally binding is priceless.",
    author: "Fatima Usman"
  },
  {
    quote: "Excellent service and support throughout the process.",
    author: "Mohammed Sani"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          What Our Users Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl font-dancing text-sky-blue mb-6">
                "{testimonial.quote}"
              </p>
              <p className="font-playfair font-bold text-charcoal">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;