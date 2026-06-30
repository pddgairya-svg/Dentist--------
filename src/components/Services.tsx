import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Stethoscope, Smile, Activity, Heart, Baby } from 'lucide-react';

const services = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional plaque removal and polishing for a fresher, brighter smile.',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'teal',
    bg: 'bg-primary/10',
    text: 'text-primary'
  },
  {
    title: 'Root Canal',
    description: 'Painless endodontic therapy to save and restore damaged teeth.',
    icon: <Activity className="w-8 h-8" />,
    color: 'coral',
    bg: 'bg-secondary/10',
    text: 'text-secondary'
  },
  {
    title: 'Braces & Aligners',
    description: 'Modern orthodontic solutions to straighten teeth invisibly and comfortably.',
    icon: <Smile className="w-8 h-8" />,
    color: 'yellow',
    bg: 'bg-accent/20',
    text: 'text-yellow-600'
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced laser whitening to instantly brighten your teeth by shades.',
    icon: <Heart className="w-8 h-8" />,
    color: 'coral',
    bg: 'bg-secondary/10',
    text: 'text-secondary'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that last a lifetime.',
    icon: <Stethoscope className="w-8 h-8" />,
    color: 'teal',
    bg: 'bg-primary/10',
    text: 'text-primary'
  },
  {
    title: 'Kids Dentistry',
    description: 'Gentle, fun, and fear-free dental care designed specially for children.',
    icon: <Baby className="w-8 h-8" />,
    color: 'yellow',
    bg: 'bg-accent/20',
    text: 'text-yellow-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4"
          >
            Comprehensive Care for <span className="text-primary">Every Smile</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            From routine checkups to advanced cosmetic procedures, we offer a full range of dental services under one roof.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
