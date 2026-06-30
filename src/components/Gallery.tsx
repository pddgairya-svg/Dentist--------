import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Modern clinic interior',
    color: 'bg-primary/20'
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Happy patient',
    color: 'bg-secondary/20'
  },
  {
    src: 'https://images.unsplash.com/photo-1598256989800-fea5f6c8d0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Advanced dental equipment',
    color: 'bg-accent/20'
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Comfortable waiting area',
    color: 'bg-primary/20'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4"
          >
            Take a <span className="text-secondary">Tour</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Designed with your comfort in mind. A clean, bright, and relaxing environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-[2rem] overflow-hidden group aspect-[4/5] ${
                index % 2 === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              <div className={`absolute inset-0 ${img.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay`}></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
