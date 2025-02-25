import React from 'react';
import { Users, Scale, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Aisha Mohammed",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Former Islamic finance consultant with 15 years of experience"
    },
    {
      name: "Ibrahim Yusuf",
      role: "Chief Legal Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Specialist in Nigerian inheritance law"
    },
    {
      name: "Fatima Ahmad",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      bio: "Tech leader with focus on secure digital solutions"
    }
  ];

  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-deep-green text-center mb-8">
            Why SabeedWill?
          </h1>
          <p className="text-xl text-charcoal max-w-3xl mx-auto text-center mb-12">
            We believe that every Muslim deserves access to reliable, Sharia-compliant inheritance planning. 
            Our mission is to make Islamic will creation simple, affordable, and legally binding in Nigeria.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="h-12 w-12 text-deep-green mx-auto mb-4" />
              <h3 className="font-playfair font-bold text-xl mb-2">Expert Team</h3>
              <p>Combined 30+ years of Islamic finance and legal expertise</p>
            </div>
            <div className="text-center">
              <Scale className="h-12 w-12 text-deep-green mx-auto mb-4" />
              <h3 className="font-playfair font-bold text-xl mb-2">Sharia Compliance</h3>
              <p>Fully compliant with Islamic inheritance principles</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-deep-green mx-auto mb-4" />
              <h3 className="font-playfair font-bold text-xl mb-2">Legal Protection</h3>
              <p>Recognized by Nigerian courts and institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">
                  {member.name}
                </h3>
                <p className="text-sky-blue font-semibold mb-4">{member.role}</p>
                <p className="text-charcoal">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                Nigerian Supreme Council for Islamic Affairs
              </h3>
              <p className="text-charcoal">
                Endorsed for Sharia compliance and Islamic principles
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                Lagos State Law Society
              </h3>
              <p className="text-charcoal">
                Recognized for legal validity and compliance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;