import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { COMPANY_INFO } from '../data/company';
import { Shield, Target, Eye, Award, CheckCircle, Globe, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import SectionDivider from '../components/SectionDivider';

const About: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroParallax = useSpring(useTransform(heroScroll, [0, 1], ["0%", "20%"]), {
    stiffness: 100,
    damping: 30
  });

  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });

  const storyParallax = useSpring(useTransform(storyScroll, [0, 1], ["-10%", "10%"]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className="bg-primary-bg min-h-screen pb-24 overflow-hidden">
      <SEO 
        title="About Us" 
        description="Learn about TIMGAD's 17+ years of expertise in UAE government transaction services and our mission to simplify business setup and compliance."
      />
      
      {/* Refined Hero with Parallax Background */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] flex items-center bg-black overflow-hidden">
        {/* Parallax Image Overlay */}
        <motion.div 
          style={{ y: heroParallax }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787164517/746c1e54-774a-422c-8156-4ed985ab4376_sqddsj.png" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-4xl space-y-6"
          >
            <p className="eyebrow">ESTABLISHED IN THE UAE</p>
            <h1 className="h-hero text-white">
              BUILT ON EXPERIENCE.<br />
              <span className="gold-gradient">DRIVEN BY PRECISION.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Corporate Story - Clean & Balanced */}
      <div className="divider-subtle" />
      <section ref={storyRef} className="section-py bg-ivory relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-10">
              <Reveal direction="up" distance={20}>
                <div className="space-y-4">
                  <p className="eyebrow !text-dark-text/40">WHO WE ARE</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-text uppercase tracking-tight">LEGACY OF TRUST</h2>
                </div>
              </Reveal>
              
              <div className="space-y-6">
                <Reveal direction="up" delay={0.1}>
                  <p className="text-muted-text text-[15px] md:text-base leading-relaxed font-serif-body">
                    With over 17 years of hands-on experience, TIMGAD has established itself as a premier destination for complex government procedures and strategic business formation.
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.2}>
                  <p className="text-muted-text text-[15px] md:text-base leading-relaxed font-serif-body">
                    Our journey began with a single mission: to simplify the connection between ambitious entrepreneurs and the UAE's robust regulatory landscape. Today, we serve as a trusted extension of our clients' teams, ensuring absolute compliance and operational speed.
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                {[
                  { icon: <Award size={24} />, val: "17+", label: "Years" },
                  { icon: <CheckCircle size={24} />, val: "100%", label: "Accuracy" }
                ].map((stat, i) => (
                  <Reveal key={i} delay={0.3 + (i * 0.1)} direction="up" distance={15}>
                    <div className="flex items-center space-x-4">
                      <div className="text-gold">{stat.icon}</div>
                      <div>
                        <div className="text-xl font-bold text-dark-text tracking-tighter">{stat.val}</div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-muted-text opacity-50">{stat.label}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <Reveal direction="right" distance={30}>
                <motion.div 
                  style={{ y: storyParallax }}
                  className="relative rounded-sm overflow-hidden shadow-2xl border border-black/5"
                >
                  <img 
                    src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787165082/bcdaba86-4d80-4845-b7e4-206080b1734c_ecqulo.png" 
                    alt="Corporate Headquarters" 
                    className="w-full h-[500px] object-cover scale-105"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -left-4 bg-gold px-6 py-4 rounded-sm shadow-xl hidden md:block z-10">
                  <div className="text-white font-bold text-sm tracking-widest uppercase">PRECISION</div>
                  <div className="text-white/70 text-[9px] font-bold uppercase tracking-widest mt-1">THE TIMGAD STANDARD</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-subtle" />

      {/* Values - More Balanced Layout */}
      <section className="section-py bg-primary-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-4 space-y-6">
              <Reveal direction="up">
                <p className="eyebrow">FOUNDATIONAL VALUES</p>
                <h2 className="text-3xl font-bold text-[#ffffff] uppercase leading-tight tracking-tight">THE PILLARS OF OUR SUCCESS</h2>
              </Reveal>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <Target size={28} />, 
                  title: "Mission", 
                  desc: "To empower businesses across the UAE by simplifying government transactions through precision and elite service delivery." 
                },
                { 
                  icon: <Eye size={28} />, 
                  title: "Vision", 
                  desc: "To be the most respected and efficient provider of administrative solutions, recognized for unwavering commitment to transparency." 
                }
              ].map((val, i) => (
                <Reveal key={i} delay={0.2 * i} direction="up" distance={20}>
                  <motion.div 
                    whileTap={{ scale: 0.98 }}
                    className="p-10 rounded-sm bg-ivory border border-black/5 hover:border-gold/30 transition-all group h-full"
                  >
                    <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">{val.icon}</div>
                    <h3 className="text-lg font-bold text-dark-text mb-4 uppercase tracking-[0.15em]">{val.title}</h3>
                    <p className="text-muted-text leading-relaxed font-serif-body text-sm md:text-[15px]">{val.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-subtle" />

      {/* Expertise - Modern & Professional Grid */}
      <section className="section-py bg-secondary-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <Reveal direction="up">
              <p className="eyebrow">WHY TIMGAD</p>
              <h2 className="h-section text-white">STRATEGIC ADVANTAGE</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { icon: <Shield size={22} />, title: "Deep Expertise", desc: "17+ years navigating the UAE's evolving regulatory landscape." },
              { icon: <Globe size={22} />, title: "Nationwide Support", desc: "Complete coordination across all seven Emirates." },
              { icon: <Zap size={22} />, title: "Operational Speed", desc: "Streamlined processes designed to deliver results at scale." },
              { icon: <Award size={22} />, title: "Unmatched Accuracy", desc: "A meticulous approach to documentation and legal compliance." },
              { icon: <CheckCircle size={22} />, title: "Direct Connection", desc: "Strong relationships with all major government entities." },
              { icon: <Target size={22} />, title: "Confidentiality", desc: "Protecting your business's most sensitive information." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up" distance={20}>
                <div className="flex gap-6 group items-start">
                  <div className="text-gold shrink-0 bg-white/5 p-3 rounded-sm border border-white/5 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-[13px] md:text-sm uppercase tracking-[0.15em]">{item.title}</h4>
                    <p className="text-ivory/60 text-sm leading-relaxed font-serif-body">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
