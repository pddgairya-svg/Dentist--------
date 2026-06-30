import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle, Users, Award } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute top-40 left-0 -z-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-yellow-700 font-medium text-sm mb-6">
              <span>✨</span> Voted #1 Family Clinic in Town
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
              Your Smile Deserves the <span className="text-primary">Best Care</span> <span role="img" aria-label="tooth">🦷</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 text-balance max-w-lg">
              Experience painless, modern, and family-friendly dentistry in a relaxing environment. We bring out the brightest smiles with state-of-the-art care.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a 
                href="#appointment"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white font-medium py-3.5 px-8 rounded-full transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Book Appointment
              </a>
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3.5 px-8 rounded-full transition-all"
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Award size={20} />
                </div>
                <div className="text-sm font-medium text-gray-800">
                  <span className="block font-bold text-lg">10+</span> Years Experience
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div className="text-sm font-medium text-gray-800">
                  <span className="block font-bold text-lg">5000+</span> Happy Patients
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 text-yellow-600 flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <div className="text-sm font-medium text-gray-800">
                  <span className="block font-bold text-lg">100%</span> Certified Dentists
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div 
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Blob shape behind image */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-primary/20 scale-110 -z-10 transform translate-x-4 translate-y-4">
              <path fill="currentColor" d="M42.7,-62.9C56.6,-53.4,70,-42.6,76.6,-28.1C83.2,-13.6,83,4.6,77.3,20.8C71.6,37.1,60.4,51.4,46.5,62.2C32.7,73,16.3,80.3,0.2,80.1C-16,79.9,-32,72,-45.5,61.1C-59,50.2,-70,36.3,-76.3,20.1C-82.6,3.9,-84.3,-14.6,-77.8,-30.3C-71.3,-46,-56.6,-58.9,-41.4,-67.7C-26.2,-76.6,-13.1,-81.4,0.6,-82.3C14.3,-83.2,28.7,-80.1,42.7,-62.9Z" transform="translate(100 100)" />
            </svg>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy patient with a beautiful smile being treated by a friendly dentist" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              
              {/* Floating review card */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg flex items-center gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Patient 1" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Patient 2" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="Patient 3" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="flex text-accent text-sm">
                    {"★★★★★"}
                  </div>
                  <p className="text-xs font-medium text-gray-600">Loved by 5000+ local families</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
