import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is the treatment painful?",
    answer: "Not at all! We use the latest numbing techniques and modern equipment to ensure all our procedures are as pain-free and comfortable as possible."
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our front desk team will happily help you verify your benefits before your appointment."
  },
  {
    question: "What are your clinic timings?",
    answer: "We are open Monday to Friday from 9:00 AM to 7:00 PM, and Saturdays from 10:00 AM to 4:00 PM. We also offer emergency out-of-hours appointments if needed."
  },
  {
    question: "How often should I get a dental checkup?",
    answer: "We recommend a routine checkup and professional cleaning every 6 months to maintain optimal oral health and catch any potential issues early."
  },
  {
    question: "Do you treat children?",
    answer: "Absolutely! We have a dedicated pediatric dentistry section designed to make children feel safe, relaxed, and actually excited about visiting the dentist."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4"
          >
            Got Questions? <span className="text-primary">We've Got Answers</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className={`font-heading font-semibold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
