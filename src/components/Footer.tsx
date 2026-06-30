import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center">
                <span className="text-2xl" role="img" aria-label="tooth">🦷</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Smile Care
              </span>
            </div>
            <p className="text-primary-50 text-sm leading-relaxed text-white/80">
              Modern, painless, and family-friendly dentistry. Because your smile deserves the absolute best care.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/80">
              <li><a href="#home" className="hover:text-white hover:underline transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white hover:underline transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white hover:underline transition-colors">Gallery</a></li>
              <li><a href="#appointment" className="hover:text-white hover:underline transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-0.5 text-accent" />
                <span>123 Bright Smile Blvd,<br/>Dental City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0 text-accent" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-accent" />
                <a href="mailto:hello@smilecare.com" className="hover:text-white transition-colors">hello@smilecare.com</a>
              </li>
            </ul>
          </div>

          {/* Working Hours & Map Placeholder */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Working Hours</h4>
            <ul className="space-y-2 text-white/80 mb-6 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-secondary">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            
            {/* Map Placeholder */}
            <div className="w-full h-32 bg-primary-hover rounded-xl overflow-hidden relative group border border-white/20">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-black/10 transition-all">
                <MapPin className="text-white drop-shadow-md" size={24} />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Map placeholder" 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm gap-4">
          <p>© 2026 Smile Care Dental Studio. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
