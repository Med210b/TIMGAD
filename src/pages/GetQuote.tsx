import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CalendarDays, Check, Plus } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/SEO';

const backgroundImage = 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787216595/24ba91dc-5223-4008-9d2e-a61199d86918_cbhi9z.png';
const personImage = 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787216763/29f525af-aadd-4d04-af1f-54530829d72e_bvhg2k.png';

const fieldClass = 'quote-field';
const labelClass = 'quote-label';

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
    <div className="quote-page bg-[#050708] text-[#F4F1E9]">
      <SEO 
        title="Get a Quote" 
        description="Request a custom solution for your UAE business requirements. Our experts provide tailored quotes for PRO, formation, and consultancy services."
      />
      <section className="quote-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="quote-hero__veil" />
        <div className="quote-hero__glow" />
        <div className="quote-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="quote-portrait-scene"
          >
            <div className="quote-portrait-frame">
              <div className="quote-portrait-frame__inner">
                <img src={personImage} alt="TIMGAD Government Transaction Services executive consultant" loading="eager" />
              </div>
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="quote-editorial"
          >
            <div className="quote-eyebrow">LEADERSHIP PHILOSOPHY</div>
            <div className="quote-gold-rule" />
            <blockquote className="quote-main">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <span>Management is<br />doing things right;<br />leadership is doing<br /><em>the right things.</em></span>
            </blockquote>
            <div className="quote-author"><span /> PETER F. DRUCKER</div>
            <div className="quote-divider"><i /></div>
            <p className="quote-biography">
              Peter F. Drucker was an Austrian-American management consultant, educator, and author. He is widely regarded as the father of modern management. His ideas about leadership, innovation, and productivity continue to shape businesses and organizations around the world.
            </p>
            <div className="quote-dates">
              <div className="quote-date-block">
                <span className="quote-icon"><CalendarDays size={15} /></span>
                <div><b>BORN</b><strong>November 19, 1909</strong><small>Vienna, Austria</small></div>
              </div>
              <div className="quote-date-block quote-date-block--died">
                <span className="quote-icon"><Plus size={17} /></span>
                <div><b>DIED</b><strong>November 11, 2005</strong><small>Claremont, California, USA</small></div>
              </div>
            </div>
          </motion.article>
        </div>
        <div className="quote-bottom-line"><i /></div>
      </section>

      <section className="quote-request">
        <div className="quote-request__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="quote-request__intro"
          >
            <div className="quote-eyebrow">REQUEST A SOLUTION</div>
            <h1>GET A <em>CUSTOM QUOTE</em></h1>
            <p>Tell us what you need and our expert team will analyze your requirements to find the right solution for your business in the UAE.</p>
            <div className="quote-trust-list">
              <span><Check size={14} /> Confidential consultation</span>
              <span><Check size={14} /> UAE transaction expertise</span>
              <span><Check size={14} /> Clear next steps</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="quote-form-panel"
          >
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="quote-form-grid">
                <div><label htmlFor="quote-full-name" className={labelClass}>Full Name</label><input id="quote-full-name" className={fieldClass} type="text" required placeholder="Your full name" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} /></div>
                <div><label htmlFor="quote-company-name" className={labelClass}>Company Name</label><input id="quote-company-name" className={fieldClass} type="text" placeholder="Company name" onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} /></div>
                <div><label htmlFor="quote-email" className={labelClass}>Email Address</label><input id="quote-email" className={fieldClass} type="email" required placeholder="email@example.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                <div><label htmlFor="quote-phone" className={labelClass}>Phone Number</label><input id="quote-phone" className={fieldClass} type="tel" required placeholder="+971 -- --- ----" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                <div><label htmlFor="quote-service" className={labelClass}>Service of Interest</label><select id="quote-service" className={fieldClass} required defaultValue="" onChange={(e) => setFormData({ ...formData, service: e.target.value })}><option value="" disabled>Select a service</option><option value="pro">PRO Services</option><option value="formation">Business Formation</option><option value="accounting">Accounting Solutions</option><option value="consultancy">Elite Consultancy</option><option value="other">Other Specialized Services</option></select></div>
                <div><label htmlFor="quote-contact-method" className={labelClass}>Preferred Contact</label><select id="quote-contact-method" className={fieldClass} defaultValue="email" onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}><option value="email">Email</option><option value="phone">Phone Call</option><option value="whatsapp">WhatsApp</option></select></div>
              </div>
              <div><label htmlFor="quote-message" className={labelClass}>Requirements Details</label><textarea id="quote-message" className={`${fieldClass} quote-message`} rows={5} placeholder="Briefly describe your requirements" onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></div>
              <button type="submit" className="quote-submit">SUBMIT REQUEST <ArrowRight size={17} /></button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
