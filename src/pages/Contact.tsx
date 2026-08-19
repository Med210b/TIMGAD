import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="bg-primary-bg pb-32">
      <SEO 
        title="Contact Us" 
        description="Get in touch with TIMGAD's elite team for professional government transaction services and business consultancy in the UAE."
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black border-b border-gold-muted/20">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p className="eyebrow">CONTACT US</p>
            <h1 className="h-hero text-center">
              LET'S START<br />
              <span className="gold-gradient">YOUR NEXT STEP</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-40 border-b border-black/5 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-10">
                <h2 className="h-section text-dark-text">GET IN TOUCH</h2>
                <p className="text-muted-text text-[15px] md:text-base lg:text-[18px] leading-relaxed font-light">
                  Have a question or need professional assistance? Our elite team is ready to provide you with the high-level guidance and support you need across all Emirates.
                </p>
              </div>
...
              <div className="space-y-12">
                {[
                  { icon: <MapPin size={24} />, title: "ADDRESS", val: COMPANY_INFO.address },
                  { icon: <Phone size={24} />, title: "PHONE", val: COMPANY_INFO.phone },
                  { icon: <Mail size={24} />, title: "EMAIL", val: COMPANY_INFO.email }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-8 group">
                    <div className="w-16 h-16 bg-gold/15 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold transition-all duration-500 group-hover:text-black shadow-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="eyebrow text-[10px] mb-2">
                        {item.title}
                      </p>
                      <p className="text-lg md:text-xl font-black tracking-tight uppercase text-dark-text">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Map Visual */}
              <div className="relative h-80 rounded-3xl overflow-hidden border-2 border-gold/30 bg-primary-bg grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                 <div className="absolute inset-0 bg-gold/5 animate-pulse" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Globe size={200} className="text-gold opacity-10" />
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 bg-black/90 backdrop-blur-xl border-2 border-gold/40 rounded-2xl text-center shadow-3xl">
                      <p className="text-gold font-black text-xs tracking-[0.4em] mb-3 uppercase">TIMGAD HEAD OFFICE</p>
                      <p className="text-white text-xs md:text-sm font-black uppercase tracking-[0.2em]">{COMPANY_INFO.address}</p>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 md:p-16 border-black/5 shadow-2xl bg-white"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">First Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter first name"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Last Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter last name"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+971 -- --- ----"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Service Required</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all appearance-none font-medium"
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" className="bg-white">Select a service</option>
                      <option value="pro" className="bg-white">PRO Services</option>
                      <option value="formation" className="bg-white">Business Formation</option>
                      <option value="accounting" className="bg-white">Accounting Solutions</option>
                      <option value="consultancy" className="bg-white">Elite Consultancy</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                      <ChevronRight className="rotate-90" size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your elite requirements"
                    className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="btn-gold w-full flex items-center justify-center py-6 text-sm tracking-[0.4em] font-black shadow-gold/30"
                >
                  SEND MESSAGE <Send size={20} className="ml-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
