import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, CreditCard, Clock } from 'lucide-react';

const features = [
  {
    title: 'Pain-Free Treatment',
    description: 'We use the latest techniques to ensure your comfort at every step.',
    icon: <ShieldCheck className="w-7 h-7" />,
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    title: 'Modern Equipment',
    description: 'State-of-the-art technology for precise, efficient, and safe procedures.',
    icon: <Cpu className="w-7 h-7" />,
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent costs with flexible payment options for every budget.',
    icon: <CreditCard className="w-7 h-7" />,
    color: 'text-yellow-600',
    bg: 'bg-accent/20'
  },
  {
    title: 'Flexible Timings',
    description: 'Evening and weekend appointments available to suit your busy schedule.',
    icon: <Clock className="w-7 h-7" />,
    color: 'text-primary',
    bg: 'bg-primary/10'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Why Choose <span className="text-secondary">Smile Care?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe that a trip to the dentist shouldn't be something you dread. That's why we've designed every aspect of our clinic to prioritize your comfort, health, and peace of mind.
            </p>
            <div className="hidden lg:block relative w-full aspect-square max-w-sm rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Modern dental equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow ${
                  index % 2 !== 0 ? 'sm:mt-12' : ''
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
