import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, ChevronRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/SEO';

const EMAILJS_SERVICE_ID = 'service_6rngir4';
const EMAILJS_TEMPLATE_ID = 'template_uuei5x2';
const EMAILJS_PUBLIC_KEY = 'YUuoK7doYvXYRI6AX';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errorMessage) {
      setErrorMessage('');
    }

    if (isSuccess) {
      setIsSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);
    setIsSuccess(false);
    setErrorMessage('');

    try {
      const templateParams = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSuccess(true);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS submission error:', error);

      setErrorMessage(
        'We could not send your request right now. Please try again or contact us directly by email.'
      );
    } finally {
      setIsSending(false);
    }
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
              LET&apos;S START
              <br />
              <span className="gold-gradient">YOUR NEXT STEP</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-40 border-b border-black/5 bg-ivory overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-8 md:space-y-10">
                <h2 className="h-section text-dark-text">
                  GET IN TOUCH
                </h2>

                <p className="text-muted-text text-[15px] md:text-base lg:text-[18px] leading-relaxed font-light">
                  Have a question or need professional assistance? Our elite team
                  is ready to provide you with the high-level guidance and support
                  you need across all Emirates.
                </p>
              </div>

              <div className="space-y-10 md:space-y-12">
                {[
                  {
                    icon: <MapPin size={24} />,
                    title: 'ADDRESS',
                    val: COMPANY_INFO.address,
                  },
                  {
                    icon: <Phone size={24} />,
                    title: 'PHONE',
                    val: COMPANY_INFO.phone,
                  },
                  {
                    icon: <Mail size={24} />,
                    title: 'EMAIL',
                    val: COMPANY_INFO.email,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-5 md:space-x-8 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gold/15 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold transition-all duration-500 group-hover:text-black shadow-xl">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="eyebrow text-[10px] mb-2">
                        {item.title}
                      </p>

                      {item.title === 'EMAIL' ? (
                        <a
                          href={`mailto:${item.val}`}
                          className="block break-all md:break-words text-base md:text-lg lg:text-xl font-black uppercase tracking-tight text-dark-text transition-colors hover:text-gold"
                        >
                          {item.val}
                        </a>
                      ) : (
                        <p className="break-words text-base md:text-lg lg:text-xl font-black tracking-tight uppercase text-dark-text">
                          {item.val}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Map Visual */}
              <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border-2 border-gold/30 bg-primary-bg grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <div className="absolute inset-0 bg-gold/5 animate-pulse" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe
                    size={160}
                    className="text-gold opacity-10 md:w-[200px] md:h-[200px]"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-full max-w-md p-6 md:p-8 bg-black/90 backdrop-blur-xl border-2 border-gold/40 rounded-2xl text-center shadow-3xl">
                    <p className="text-gold font-black text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.4em] mb-3 uppercase">
                      TIMGAD HEAD OFFICE
                    </p>

                    <p className="text-white text-[10px] md:text-sm font-black uppercase tracking-[0.12em] md:tracking-[0.2em] break-words">
                      {COMPANY_INFO.address}
                    </p>
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
              className="glass-card p-6 sm:p-8 md:p-16 border-black/5 shadow-2xl bg-white"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-7 md:space-y-10"
              >

                {/* Success Message */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-green-200 bg-green-50 p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2
                        className="text-green-600 flex-shrink-0 mt-0.5"
                        size={24}
                      />

                      <div>
                        <h3 className="text-dark-text font-black text-lg">
                          Thank you, {formData.firstName || 'for contacting us'}!
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mt-2">
                          Your request has been received successfully.
                          Our team will review your message and contact you shortly.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <AlertCircle
                        className="text-red-600 flex-shrink-0 mt-0.5"
                        size={24}
                      />

                      <div>
                        <h3 className="text-dark-text font-black text-lg">
                          Something went wrong
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mt-2">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">

                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="contact-first-name"
                      className="text-gold font-black tracking-[0.3em] text-[10px] uppercase"
                    >
                      First Name
                    </label>

                    <input
                      id="contact-first-name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      required
                      autoComplete="given-name"
                      placeholder="Enter first name"
                      className="w-full min-w-0 bg-black/5 border-2 border-black/5 rounded-xl px-5 md:px-6 py-4 md:py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="contact-last-name"
                      className="text-gold font-black tracking-[0.3em] text-[10px] uppercase"
                    >
                      Last Name
                    </label>

                    <input
                      id="contact-last-name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      required
                      autoComplete="family-name"
                      placeholder="Enter last name"
                      className="w-full min-w-0 bg-black/5 border-2 border-black/5 rounded-xl px-5 md:px-6 py-4 md:py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={handleChange}
                    />
                  </div>

                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">

                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="contact-email"
                      className="text-gold font-black tracking-[0.3em] text-[10px] uppercase"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      required
                      autoComplete="email"
                      placeholder="email@example.com"
                      className="w-full min-w-0 bg-black/5 border-2 border-black/5 rounded-xl px-5 md:px-6 py-4 md:py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="contact-phone"
                      className="text-gold font-black tracking-[0.3em] text-[10px] uppercase"
                    >
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+971 -- --- ----"
                      className="w-full min-w-0 bg-black/5 border-2 border-black/5 rounded-xl px-5 md:px-6 py-4 md:py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                      onChange={handleChange}
                    />
                  </div>

                </div>

                {/* Service */}
                <div className="space-y-3 md:space-y-4">
                  <label
                    htmlFor="contact-service"
                    className="text-gold font-black tracking-[0.3em] text-[10px] uppercase"
                  >
                    Service Required
                  </label>

                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      required
                      className="w-full bg-black/5 border-2 border-black/5 rounded-xl px-5 md:px-6 py-4 md:py-5 pr-12 text-dark-text focus:border-gold focus:outline-none transition-all appearance-none font-medium"
                      onChange={handleChange}
                    >
                      <option value="" className="bg-white">
                        Select a service
                      </option>

                      <option value="PRO Services" className="bg-white">
                        PRO Services
                      </option>

                      <option value="Business Formation" className="bg-white">
                        Business Formation
                      </option>

                      <option value="Accounting Solutions" className="bg-white">
                        Accounting Solutions
                      </option>

                      <option value="Elite Consultancy" className="bg-white">
                        Elite Consultancy
                      </option>
                    </select>

                    <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                      <ChevronRight
                        className="rotate-90"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3 md:space-y-4">
                  <label
                    htmlFor="contact-message"
                    className="text-gold font-black tracking-[0.3em] text-[10px] uppercase"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    rows={6}
                    placeholder="Tell us about your requirements"
                    className="w-full min-w-0 bg-black/5 border-2 border-black/5 rounded-xl px-5 md:px-6 py-4 md:py-5 text-dark-text focus:border-gold focus:outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                    onChange={handleChange}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className={`btn-gold w-full flex items-center justify-center py-5 md:py-6 text-xs md:text-sm tracking-[0.25em] md:tracking-[0.4em] font-black shadow-gold/30 transition-all ${
                    isSending
                      ? 'opacity-70 cursor-not-allowed'
                      : 'cursor-pointer'
                  }`}
                >
                  {isSending ? (
                    <>
                      SENDING
                      <Loader2
                        size={20}
                        className="ml-4 animate-spin"
                      />
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send
                        size={20}
                        className="ml-4"
                      />
                    </>
                  )}
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