import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "5 Reasons Every Nigerian Needs a Will",
    excerpt: "Learn why having a will is crucial for protecting your family's future and ensuring your wishes are respected.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
  },
  {
    title: "Understanding Islamic Inheritance (Faraid)",
    excerpt: "A comprehensive guide to Islamic inheritance principles and how they apply in modern times.",
    image: "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?auto=format&fit=crop&q=80"
  },
  {
    title: "How to Protect Your Business with a Will",
    excerpt: "Essential tips for business owners on securing their enterprise through proper succession planning.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          Learn More About Estate Planning
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">
                  {post.title}
                </h3>
                <p className="text-charcoal/80 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-deep-green hover:text-deep-green/80 transition-colors font-semibold"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;