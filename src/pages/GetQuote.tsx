import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Shield, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/SEO';

const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    contactMethod: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    alert('Quote request submitted successfully. Our experts will analyze your requirements and contact you soon.');
  };

  return (
    <div className="bg-primary-bg pb-32">
      <SEO 
        title="Get a Quote" 
        description="Request a custom solution for your UAE business requirements. Our experts provide tailored quotes for PRO, formation, and consultancy services."
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
            <p className="eyebrow">REQUEST A SOLUTION</p>
            <h1 className="h-hero">
              GET A<br />
              <span className="gold-gradient">CUSTOM QUOTE</span>
            </h1>
            <p className="p-main max-w-4xl mx-auto">
              Tell us what you need and our expert team will analyze your requirements to find the right elite solution for your business in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-40 border-b border-black/5 bg-ivory overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-32 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/3 glass-card p-10 md:p-20 border-black/5 shadow-2xl bg-white"
            >
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="quote-full-name" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Full Name</label>
                    <input 
                      id="quote-full-name"
                      type="text" 
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="quote-company-name" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Company Name</label>
                    <input 
                      id="quote-company-name"
                      type="text" 
                      placeholder="Your company name (optional)"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="quote-email" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Email Address</label>
                    <input 
                      id="quote-email"
                      type="email" 
                      required
                      placeholder="email@example.com"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="quote-phone" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Phone Number</label>
                    <input 
                      id="quote-phone"
                      type="tel" 
                      required
                      placeholder="+971 -- --- ----"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="quote-service" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Service of Interest</label>
                    <select 
                      id="quote-service"
                      required
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all appearance-none font-medium"
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" className="bg-white">Select a service</option>
                      <option value="pro" className="bg-white">PRO Services</option>
                      <option value="formation" className="bg-white">Business Formation</option>
                      <option value="accounting" className="bg-white">Accounting Solutions</option>
                      <option value="consultancy" className="bg-white">Elite Consultancy</option>
                      <option value="other" className="bg-white">Other Specialized Services</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="quote-contact-method" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Preferred Contact Method</label>
                    <select 
                      id="quote-contact-method"
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all appearance-none font-medium"
                      onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                    >
                      <option value="email" className="bg-white">Email</option>
                      <option value="phone" className="bg-white">Phone Call</option>
                      <option value="whatsapp" className="bg-white">WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label htmlFor="quote-message" className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">Requirements Details</label>
                  <textarea 
                    id="quote-message"
                    rows={6}
                    placeholder="Briefly describe your requirements"
                    className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-6 py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-gold w-full flex items-center justify-center py-6 text-sm tracking-[0.4em] font-black uppercase">
                  SUBMIT REQUEST <ArrowRight size={20} className="ml-4" />
                </button>
              </form>
            </motion.div>

            {/* Side Info */}
            <div className="lg:w-1/3 space-y-12">
              <div className="glass-card p-12 bg-beige border-black/5 shadow-xl space-y-12">
                <h3 className="text-xl md:text-2xl font-black text-dark-text uppercase">Why TIMGAD?</h3>
                <div className="space-y-12">
                  {[
                    { icon: <ShieldCheck className="text-gold" size={28} />, title: "17+ YEARS EXPERIENCE", desc: "Proven track record in the UAE market since 2008." },
                    { icon: <Zap className="text-gold" size={28} />, title: "ELITE PROCESSING", desc: "Minimizing delays with hyper-efficient execution." },
                    { icon: <Shield className="text-gold" size={28} />, title: "CONFIDENTIAL SUPPORT", desc: "Your business data is protected by the highest standards." },
                    { icon: <Users className="text-gold" size={28} />, title: "GOVERNMENT EXPERTISE", desc: "Direct connection with all major UAE authorities." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-6">
                      <div className="shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="eyebrow text-[11px] mb-3">{item.title}</h4>
                        <p className="text-muted-text text-xs leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-12 bg-primary-bg border-gold shadow-[0_0_50px_rgba(201,154,50,0.1)] text-center space-y-6">
                <p className="eyebrow text-[10px] opacity-80">Need immediate help?</p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-gold-bright text-2xl font-black block hover:scale-110 transition-transform duration-500 tracking-tighter">
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black">Available Monday - Friday, 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
