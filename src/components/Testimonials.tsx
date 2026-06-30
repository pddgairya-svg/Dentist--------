import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Davis',
    quote: "I've always been terrified of the dentist, but Dr. Sarah and her team completely changed that. The pain-free treatment is real! Highly recommended.",
    rating: 5,
    bg: 'bg-primary/5',
    border: 'border-primary/20'
  },
  {
    name: 'Michael Smith',
    quote: "Took my 5-year-old here for his first checkup. The staff was incredibly patient and made it a fun experience for him. He actually wants to go back!",
    rating: 5,
    bg: 'bg-secondary/5',
    border: 'border-secondary/20'
  },
  {
    name: 'Jessica Wong',
    quote: "Got my teeth whitened here before my wedding. The results were amazing and the process was so comfortable. Beautiful clinic and wonderful staff.",
    rating: 5,
    bg: 'bg-accent/10',
    border: 'border-yellow-200'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4"
          >
            Smiles That <span className="text-primary">Speak</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Don't just take our word for it. Here's what our happy patients have to say.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2rem] p-8 ${testimonial.bg} border ${testimonial.border} relative`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-heading font-bold text-gray-900 shadow-sm text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
