import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Contact Header */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-deep-green text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal text-center max-w-2xl mx-auto">
            Have questions about our services? We're here to help you create your Islamic will.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-cream p-8 rounded-lg">
              <h2 className="text-3xl font-playfair font-bold text-deep-green mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-charcoal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-deep-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-deep-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-charcoal mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-deep-green"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-deep-green"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-deep-green mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-deep-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">Email</h3>
                    <p>hello@sabeedwill.ng</p>
                    <p>support@sabeedwill.ng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-deep-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">Phone</h3>
                    <p>+234 (0) 123 456 7890</p>
                    <p>+234 (0) 987 654 3210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-deep-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">Office</h3>
                    <p>123 Victoria Island</p>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-deep-green mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-deep-green text-center mb-8">
            Visit Our Office
          </h2>
          <div className="h-[400px] bg-white rounded-lg shadow-lg">
            {/* Add map integration here */}
            <div className="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
              <p className="text-charcoal">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;