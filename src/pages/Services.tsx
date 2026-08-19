import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/company';
import ServiceCard3D from '../components/ServiceCard3D';

import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import SectionDivider from '../components/SectionDivider';
import Magnetic from '../components/Magnetic';

const Services: React.FC = () => {
  return (
    <div className="bg-primary-bg pb-24">
      <SEO 
        title="Our Services" 
        description="Comprehensive business support in the UAE. From PRO services and company formation to accounting and elite consultancy."
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(212,162,58,0.1)_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-8"
          >
            <p className="eyebrow">OUR ELITE SERVICES</p>
            <h1 className="h-hero">
              COMPLETE BUSINESS SUPPORT.<br />
              <span className="gold-gradient">ONE TRUSTED PARTNER.</span>
            </h1>
            <p className="p-main max-w-4xl font-serif-body">
              From high-priority government transactions to complex business formation and comprehensive financial support, TIMGAD provides elite professional services designed to simplify operations across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Fixed 4 Column Layout */}
      <div className="divider-subtle" />
      <section className="section-py border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {SERVICES.map((service, index) => (
              <Reveal 
                key={service.id}
                delay={index * 0.05}
                direction="up"
                distance={20}
                className="h-full"
              >
                <ServiceCard3D 
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                  path={service.path}
                  image={service.image}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <div className="divider-subtle" />
      <section className="section-py bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal direction="up" distance={40} width="100%">
            <div className="p-12 md:p-20 text-center relative overflow-hidden border border-black/5 bg-white shadow-xl rounded-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,154,50,0.05)_0%,transparent_70%)]" />
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl font-bold text-dark-text tracking-tight">NEED A CUSTOM SOLUTION?</h2>
                <p className="text-muted-text text-[15px] md:text-base leading-relaxed font-serif-body max-w-2xl mx-auto">
                  Every business is unique. If you require a specialized service not listed above, our expert consultants are ready to design a tailored approach for your specific requirements.
                </p>
                <div className="flex justify-center pt-4">
                  <Magnetic strength={0.1}>
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Link to="/contact" className="btn-gold !px-12">
                        DISCUSS YOUR REQUIREMENTS
                      </Link>
                    </motion.div>
                  </Magnetic>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
