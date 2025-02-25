import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">SabeedWill</h3>
            <p className="text-cream/80">
              Your trusted partner for Islamic and legal inheritance planning.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="/features" className="hover:text-gold transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="/faqs" className="hover:text-gold transition-colors">FAQs</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-xl mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
              <a href="tel:+2348179651769">
                <Phone className="h-6 w-6 text-gold hover:text-gold/80 cursor-pointer" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-xl mb-4">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full text-charcoal"
              />
              <button className="bg-gold text-white px-4 py-2 rounded-r-lg hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-cream/80">
            © {new Date().getFullYear()} SabeedWill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;