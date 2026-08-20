import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Users, Globe, CalendarDays } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { COMPANY_INFO, SERVICES, BLOGS, TESTIMONIALS } from '../data/company';
import ServiceCard3D from '../components/ServiceCard3D';
import { Link } from 'react-router-dom';
import TestimonialWall from '../components/TestimonialWall';
import AboutUsNew from '../components/AboutUsNew';
import Counter from '../components/Counter';
import FeatureCarousel from '../components/FeatureCarousel';

import Magnetic from '../components/Magnetic';
import Reveal from '../components/Reveal';
import SectionDivider from '../components/SectionDivider';

const Home: React.FC = () => {
  const networkRef = useRef<HTMLElement>(null);
  const { scrollYProgress: networkScrollY } = useScroll({
    target: networkRef,
    offset: ["start end", "end start"]
  });

  const networkY = useSpring(useTransform(networkScrollY, [0, 1], ["-10%", "10%"]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="bg-primary-bg overflow-hidden">
      <SEO 
        title="Home" 
        description="TIMGAD Government Transaction Services redefined. Trusted PRO services, company formation, and elite business consultancy in Dubai and across the UAE."
      />

      {/* Hero Section */}
      <HeroSlider />

      {/* Hero Indicators - Auto-rotating Carousel */}
      <FeatureCarousel />

      {/* Peter Drucker Leadership Section - Editorial Redesign */}
      <section className="relative isolate overflow-hidden bg-[#060a0d] lg:min-h-[820px] xl:min-h-[900px]">
        <img
          src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787159064/9025eb36-b810-4ce1-ab05-83f33faab87e_yfuj4p.png"
          alt="Peter F. Drucker portrait in an editorial leadership composition"
          className="absolute inset-0 h-full w-full object-cover object-[38%_center] lg:object-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex items-end px-5 py-14 sm:px-8 lg:min-h-[820px] lg:items-center lg:px-12 lg:py-16 xl:min-h-[900px] xl:px-16"
        >
          <div className="ml-auto w-full max-w-[570px] text-[#f3efe7] [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] lg:mr-[8%] xl:mr-[10%]">
            <div className="mb-6 lg:mb-7">
              <p className="text-[10px] font-bold tracking-[0.42em] text-[#d8b15a] sm:text-[11px]">LEADERSHIP PHILOSOPHY</p>
              <div className="mt-4 h-px w-14 bg-gradient-to-r from-[#c89b3c] to-[#f4d98a] shadow-[0_0_10px_rgba(216,177,90,0.5)]" />
            </div>

            <blockquote className="relative">
              <span aria-hidden="true" className="absolute -left-4 -top-8 font-serif-heading text-[82px] leading-none text-[#d8b15a] opacity-90 [text-shadow:0_4px_18px_rgba(200,155,60,0.35)] sm:-left-8 sm:text-[100px] lg:-left-14 lg:-top-8 lg:text-[110px]">&ldquo;</span>
              <p className="relative font-serif-heading text-[clamp(1.55rem,7.2vw,2.15rem)] font-normal leading-[1.08] tracking-[-0.015em] text-[#f3efe7] lg:text-[clamp(2rem,3.4vw,3.3rem)] lg:leading-[0.98] lg:tracking-[-0.035em]">
                Management is<br />
                doing things right;<br />
                leadership is doing<br />
                <span className="text-[#d8b15a]">the right things.</span>
              </p>
            </blockquote>

            <div className="mt-6 flex items-center gap-3 lg:mt-8">
              <div className="h-px w-10 bg-[#c89b3c]" />
              <p className="text-[10px] font-bold tracking-[0.28em] text-[#f3efe7] sm:text-[11px]">— PETER F. DRUCKER</p>
            </div>

            <div className="mt-6 border-y border-[#d8b15a]/40 py-4 lg:mt-7 lg:py-5">
              <p className="max-w-[490px] font-serif-body text-[13px] leading-6 text-[#f3efe7]/85 sm:text-[15px] sm:leading-7">
                Peter F. Drucker was an Austrian-American management consultant, educator, and author. He is widely regarded as the father of modern management. His ideas about leadership, innovation, and productivity continue to shape businesses and organizations around the world.
              </p>
            </div>

            <div className="mt-6 grid max-w-[480px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
              <div className="flex gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8b15a]/80 text-[#d8b15a]"><CalendarDays size={13} strokeWidth={1.5} /></span>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.3em] text-[#d8b15a]">BORN</p>
                  <p className="mt-1 font-serif-body text-xs leading-5 text-[#f3efe7] sm:text-[13px]">November 19, 1909<br />Vienna, Austria</p>
                </div>
              </div>
              <div className="flex gap-3 border-t border-[#d8b15a]/35 pt-4 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                <span aria-hidden="true" className="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8b15a]/80 before:absolute before:h-3 before:w-px before:bg-[#d8b15a] after:absolute after:h-px after:w-3 after:bg-[#d8b15a]" />
                <div>
                  <p className="text-[9px] font-bold tracking-[0.3em] text-[#d8b15a]">DIED</p>
                  <p className="mt-1 font-serif-body text-xs leading-5 text-[#f3efe7] sm:text-[13px]">November 11, 2005<br />Claremont, California, USA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <div className="divider-subtle" />
      <AboutUsNew />

      {/* Services Section */}
      <div className="divider-subtle" />
      <section className="section-py bg-primary-bg relative">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal direction="up" width="100%">
            <div className="max-w-4xl mb-16 space-y-6">
              <p className="eyebrow">OUR ELITE SERVICES</p>

              <h2 className="h-section">
                SOLUTIONS DESIGNED
                <br />
                AROUND YOUR BUSINESS
              </h2>

              <p className="p-main">
                From high-priority government transactions to complex business
                formation and comprehensive financial support, TIMGAD provides
                elite professional services designed to scale your operations
                in the UAE.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Reveal 
                key={service.id}
                delay={index * 0.1}
                direction="up"
                distance={20}
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

      {/* =========================================================
          ENHANCED STATS SECTION
          ========================================================= */}
      <section className="relative overflow-hidden bg-[#080a0a]">

        {/* Main deep luxury background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,153,45,0.08)_0%,rgba(8,10,10,0.95)_42%,#050607_100%)]" />

        {/* Gold atmospheric glow - left */}
        <motion.div
          aria-hidden="true"
          className="absolute -left-[15%] top-1/2 h-[500px] w-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(200,155,45,0.16) 0%, rgba(200,155,45,0.07) 28%, rgba(200,155,45,0) 70%)',
            filter: 'blur(35px)'
          }}
          animate={{
            x: [0, 70, 0],
            y: [-20, 30, -20],
            scale: [1, 1.12, 1],
            opacity: [0.65, 0.9, 0.65]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Gold atmospheric glow - right */}
        <motion.div
          aria-hidden="true"
          className="absolute -right-[15%] -top-[35%] h-[520px] w-[520px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(200,155,45,0.13) 0%, rgba(200,155,45,0.05) 30%, rgba(200,155,45,0) 72%)',
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, -60, 0],
            y: [20, -20, 20],
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Subtle emerald / dark-green atmospheric glow */}
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-[10%] -translate-x-1/2 h-[360px] w-[650px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(35,61,0,0.20) 0%, rgba(35,61,0,0.08) 35%, rgba(35,61,0,0) 72%)',
            filter: 'blur(55px)'
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.6, 0.35]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Very subtle horizontal light sweep */}
        <motion.div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-0 w-[28%] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(200,155,45,0.035) 45%, rgba(255,255,255,0.025) 50%, rgba(200,155,45,0.035) 55%, transparent 100%)',
            filter: 'blur(20px)'
          }}
          animate={{
            x: ['-120%', '420%']
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Subtle technical grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px'
          }}
        />

        {/* Fine vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.38) 100%)'
          }}
        />

        {/* Top luxury line */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        />

        {/* Stats content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="py-20 md:py-24">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-12 text-center">
              {[
                {
                  val: 17,
                  suffix: "+",
                  label: "Years of\nExperience"
                },
                {
                  val: 298,
                  suffix: "+",
                  label: "Successful\nTransactions"
                },
                {
                  val: 100,
                  suffix: "%",
                  label: "Compliance\nFocus"
                },
                {
                  val: "UAE",
                  suffix: "",
                  label: "Nationwide\nCoverage"
                }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="relative group"
                >
                  {/* Individual stat glow */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(200,155,45,0.13) 0%, transparent 70%)',
                      filter: 'blur(18px)'
                    }}
                  />

                  {/* Stat number */}
                  <h3 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-gold tracking-tight leading-none">
                    {typeof stat.val === 'number' ? (
                      <Counter
                        value={stat.val}
                        suffix={stat.suffix}
                      />
                    ) : (
                      stat.val
                    )}
                  </h3>

                  {/* Small decorative line */}
                  <div className="mx-auto mt-5 mb-4 h-px w-8 bg-gold/30 group-hover:w-14 group-hover:bg-gold/70 transition-all duration-700" />

                  {/* Stat label */}
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-500 font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[9px] whitespace-pre-line leading-[1.8]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom luxury line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        />
      </section>

      {/* UAE Network Section */}
      <div className="divider-subtle" />

      <section
        ref={networkRef}
        className="relative min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden bg-black"
      >
        {/* Parallax Background Image - Night Cityscape */}
        <motion.div 
          style={{ y: networkY }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787140898/98e34e66-cc60-48d4-8edf-6047e6cb7e91_f0uw0a.png"
            alt="Dubai UAE Night"
            className="w-full h-full object-cover scale-110 opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <p className="eyebrow">
                UAE NETWORK
              </p>

              <h2 className="h-section text-white">
                CONNECTED TO THE UAE.
                <br />
                <span className="gold-gradient">
                  COMMITTED TO YOU.
                </span>
              </h2>

              <p className="p-main text-ivory/60">
                From the heart of Dubai to the industrial hubs of Sharjah and Abu Dhabi, TIMGAD provides high-level coordination with UAE government authorities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-6">
              {[
                'DUBAI ECONOMY (DED)',
                'FREEZONE AUTHORITIES',
                'IMMIGRATION & LABOUR',
                'EMIRATES ID AUTHORITIES'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />

                  <span className="text-ivory font-bold tracking-[0.2em] uppercase text-[10px] md:text-[11px] opacity-70">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="divider-subtle" />

      <section className="section-py bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mb-16 space-y-6">
            <p className="eyebrow !text-dark-text/40">
              CLIENT EXPERIENCES
            </p>

            <h2 className="h-section text-dark-text">
              TRUSTED BY THE PEOPLE WE SERVE
            </h2>
          </div>
          
          <TestimonialWall testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* Blog Section */}
      <div className="divider-subtle" />

      <section className="section-py bg-primary-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <p className="eyebrow">
                INSIGHTS & UPDATES
              </p>

              <h2 className="h-section">
                KNOWLEDGE THAT MOVES BUSINESS FORWARD
              </h2>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                to="/blogs"
                className="btn-outline"
              >
                VIEW ALL ARTICLES
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-60 overflow-hidden rounded-sm mb-6 border border-white/5">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute top-4 left-4 bg-gold text-primary-bg font-bold text-[9px] px-3 py-1 uppercase tracking-widest">
                    {blog.category}
                  </div>
                </div>

                <p className="text-gold text-[10px] font-bold mb-3 tracking-[0.2em] uppercase opacity-60">
                  {blog.date}
                </p>

                <h4 className="text-lg font-bold mb-4 group-hover:text-gold transition-colors duration-400 uppercase tracking-tight">
                  {blog.title}
                </h4>

                <Link
                  to={blog.path}
                  className="text-white text-[10px] font-bold tracking-[0.3em] flex items-center group-hover:text-gold transition-colors"
                >
                  READ ARTICLE
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="divider-subtle" />

      <section className="py-32 relative overflow-hidden bg-black aspect-[3/4] sm:aspect-video md:aspect-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787145852/340a172b-1d28-44bd-87b6-96eeaaff9eda_cxobqo.png"
            alt="Ready to Simplify Your UAE Journey"
            className="w-full h-full object-cover opacity-40 brightness-[0.4]"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <h2 className="h-hero">
              READY TO SIMPLIFY
              <br />
              <span className="gold-gradient">
                YOUR UAE JOURNEY?
              </span>
            </h2>

            <p className="p-main mx-auto text-ivory/60">
              Let TIMGAD handle the complex government procedures while you focus on scaling your business in the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/get-a-quote"
                  className="btn-gold px-12"
                >
                  GET A QUOTE
                </Link>
              </motion.div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn-outline px-12"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;