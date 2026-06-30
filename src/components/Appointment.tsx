import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, CheckCircle2 } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    // Basic phone validation (allows numbers, spaces, dashes, plus)
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.date) newErrors.date = 'Preferred date is required';
    if (!formData.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', date: '', service: '', message: '' });
      }, 800);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="appointment" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-6">
              <CalendarDays size={16} /> Fast & Easy Booking
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Ready to Brighten Your Smile?
            </h2>
            <p className="text-primary-50 text-lg mb-8 max-w-lg leading-relaxed text-white/90">
              Book your appointment today. Our friendly team will get back to you within 2 hours to confirm your time slot.
            </p>
            
            <div className="hidden lg:flex items-center gap-6 mt-12">
              <div className="flex -space-x-4">
                <img src="https://i.pravatar.cc/100?img=4" alt="Staff" className="w-14 h-14 rounded-full border-4 border-primary" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Staff" className="w-14 h-14 rounded-full border-4 border-primary" />
              </div>
              <div>
                <p className="font-bold">Friendly Support Team</p>
                <p className="text-white/80 text-sm">Always here to help!</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[400px] py-10"
                  >
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Request Sent!</h3>
                    <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                      Thank you! We've received your appointment request and will contact you shortly to confirm.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-medium hover:underline"
                    >
                      Book another appointment
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    noValidate
                  >
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Book an Appointment</h3>
                    
                    <div>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.name ? 'border-secondary' : 'border-gray-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      />
                      {errors.name && <p className="text-secondary text-xs mt-1 ml-2">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number" 
                          className={`w-full px-5 py-4 bg-gray-50 border ${errors.phone ? 'border-secondary' : 'border-gray-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                        />
                        {errors.phone && <p className="text-secondary text-xs mt-1 ml-2">{errors.phone}</p>}
                      </div>
                      <div>
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 bg-gray-50 border ${errors.date ? 'border-secondary' : 'border-gray-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-gray-700`}
                        />
                        {errors.date && <p className="text-secondary text-xs mt-1 ml-2">{errors.date}</p>}
                      </div>
                    </div>

                    <div>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-gray-50 border ${errors.service ? 'border-secondary' : 'border-gray-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-gray-700 appearance-none`}
                      >
                        <option value="" disabled>Select Service Needed</option>
                        <option value="cleaning">General Checkup & Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="braces">Braces & Aligners</option>
                        <option value="pain">Tooth Pain / Root Canal</option>
                        <option value="kids">Kids Dentistry</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      {errors.service && <p className="text-secondary text-xs mt-1 ml-2">{errors.service}</p>}
                    </div>

                    <div>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any special requests or details? (Optional)" 
                        rows={3}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-8 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
                    >
                      Confirm Booking
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
