import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 w-full max-w-md"
          >
            {/* Colorful Ring Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary opacity-20 scale-[1.05] blur-md animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary scale-[1.02]"></div>
            
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1594824436998-d40d134b2671?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Sarah Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-50 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                12
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Years of</p>
                <p className="font-heading font-bold text-gray-900">Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              Meet Your Dentist
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-balance">
              Dedicated to Creating <span className="text-primary">Confident Smiles</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg mb-8 leading-relaxed">
              <p>
                "Hello! I'm Dr. Sarah Johnson. I started Smile Care Dental Studio with a simple vision: to make dental visits something to look forward to, rather than fear."
              </p>
              <p>
                With over a decade of experience in cosmetic and family dentistry, my team and I combine advanced technology with a gentle, compassionate approach. We treat our patients like family.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div>
                <p className="font-heading font-bold text-gray-900 mb-1">Qualifications</p>
                <p className="text-gray-600 text-sm">DDS, New York University<br/>Member of ADA</p>
              </div>
              <div>
                <p className="font-heading font-bold text-gray-900 mb-1">Specializations</p>
                <p className="text-gray-600 text-sm">Cosmetic Dentistry<br/>Pediatric Care</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="font-heading text-2xl text-gray-900 transform -rotate-2 origin-left" style={{ fontFamily: "'Brush Script MT', cursive, sans-serif" }}>
                Dr. Sarah Johnson
              </p>
              <p className="text-primary font-medium text-sm mt-1">Lead Dentist & Founder</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
