import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-deep-green text-center mb-16">
          See SabeedWill in Action
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-deep-green rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-gold text-white p-6 rounded-full hover:bg-gold/90 transition-colors">
                <Play className="h-12 w-12" />
              </button>
            </div>
            {/* Video placeholder - Replace with actual video embed */}
            <div className="absolute inset-0 bg-deep-green/50"></div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Watch the Full Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection