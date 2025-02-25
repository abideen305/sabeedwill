import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is SabeedWill?",
          a: "SabeedWill is a digital platform that helps Muslims create Sharia-compliant wills that are also legally recognized in Nigeria."
        },
        {
          q: "Is SabeedWill legally recognized?",
          a: "Yes, all wills created through SabeedWill comply with both Islamic law and Nigerian legal requirements."
        },
        {
          q: "How secure is my information?",
          a: "We use bank-grade encryption to protect your data, and our systems are regularly audited for security."
        }
      ]
    },
    {
      category: "Islamic Compliance",
      questions: [
        {
          q: "How do you ensure Sharia compliance?",
          a: "Our system is built on established Islamic inheritance principles and is regularly reviewed by qualified Islamic scholars."
        },
        {
          q: "Can I specify additional charitable giving (Sadaqah)?",
          a: "Yes, you can specify charitable donations up to one-third of your estate, as permitted by Islamic law."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "Can I update my will?",
          a: "Yes, Premium plan users can update their wills unlimited times. Basic plan users can create one version."
        },
        {
          q: "How do I access my will?",
          a: "You can access your will anytime through your secure online account. You can also download PDF copies."
        }
      ]
    }
  ];

  const [openCategory, setOpenCategory] = React.useState("General");
  const [openQuestion, setOpenQuestion] = React.useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* FAQ Header */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-deep-green text-center mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-charcoal text-center max-w-2xl mx-auto">
            Find answers to common questions about SabeedWill's services and features
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            {faqs.map((category) => (
              <button
                key={category.category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  openCategory === category.category
                    ? 'bg-deep-green text-white'
                    : 'bg-cream text-charcoal hover:bg-deep-green/10'
                }`}
                onClick={() => setOpenCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((category) => (
              <div
                key={category.category}
                className={category.category === openCategory ? 'block' : 'hidden'}
              >
                <div className="space-y-6">
                  {category.questions.map((faq) => (
                    <div
                      key={faq.q}
                      className="bg-cream rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left font-semibold text-charcoal hover:text-deep-green transition-colors"
                        onClick={() => setOpenQuestion(openQuestion === faq.q ? null : faq.q)}
                      >
                        {faq.q}
                      </button>
                      <div
                        className={`px-6 pb-4 ${
                          openQuestion === faq.q ? 'block' : 'hidden'
                        }`}
                      >
                        <p className="text-charcoal">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-deep-green mb-6">
            Still Have Questions?
          </h2>
          <p className="text-charcoal mb-8">
            Our support team is here to help you with any questions you might have
          </p>
          <button className="btn-primary">Contact Support</button>
        </div>
      </section>
    </div>
  );
};

export default FAQs;