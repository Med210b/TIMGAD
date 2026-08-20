import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { Headphones, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

const AboutUsNew: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  const features = [
    {
      icon: <Headphones className="text-gold" size={28} />,
      title: "24/7 Dedicated Support",
      description: "Whether it’s a visa renewal or urgent documentation, our support team ensures round-the-clock assistance—so your operations never stop."
    },
    {
      icon: <ShieldCheck className="text-gold" size={28} />,
      title: "Experienced Government Liaison Team",
      description: "Our specialists bring years of experience coordinating with UAE authorities—ensuring every transaction is handled accurately, efficiently, and on time."
    },
    {
      icon: <Cpu className="text-gold" size={28} />,
      title: "Smart & Seamless Solutions",
      description: "We integrate smart digital tools to simplify licensing, compliance, and documentation—saving you time while maintaining complete transparency and control."
    }
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 md:py-40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center gap-12 lg:mb-24 lg:flex-row lg:gap-24">
          {/* Images Column */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal direction="right" distance={50}>
              <div className="relative">
                {/* Experience Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -top-6 -left-6 z-30 bg-[#0D1B2A] text-white p-6 rounded-2xl shadow-2xl border border-gold/30 flex flex-col items-center justify-center min-w-[140px]"
                >
                  <span className="text-3xl font-black text-gold">17+</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-center opacity-80 mt-1 leading-tight">
                    Years of<br />experience
                  </span>
                </motion.div>

                {/* Main Visual - Burj Khalifa */}
                <motion.div 
                  style={{ y: springY1 }}
                  className="rounded-[2.5rem] overflow-hidden border-2 border-black/5 shadow-2xl relative z-10"
                >
                  <img 
                    src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787144872/ff822479-cbbc-4c92-8e3a-e19967e68217_h6qqn6.png" 
                    alt="Dubai Burj Khalifa" 
                    className="h-[min(115vw,500px)] w-full object-cover md:h-[650px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Secondary Overlapping Image - Legal/Consultancy */}
                <motion.div 
                  style={{ y: springY2 }}
                  className="absolute -bottom-10 -left-10 w-[220px] md:w-[280px] aspect-square rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl z-20 hidden md:block"
                >
                  <img 
                    src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787144813/04866d79-8666-401c-935a-c9aa81fe1408_t26eox.png" 
                    alt="Business Consultancy" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative background accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 blur-[80px] rounded-full -z-10" />
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="w-full space-y-7 lg:w-1/2 lg:space-y-8">
            <Reveal direction="up">
              <p className="text-gold font-black tracking-[0.3em] uppercase text-xs md:text-sm">
                STREAMLINING BUSINESS WITH PRECISION AND CARE
              </p>
            </Reveal>
            
            <Reveal direction="up" delay={0.3}>
              <h2 className="text-[clamp(2rem,9vw,3rem)] font-black leading-[1.1] text-[#0D1B2A] uppercase md:text-5xl lg:text-6xl">
                Your Trusted UAE<br />
                <span className="text-gold">Service Partner</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="space-y-6">
                  <p className="text-[15px] leading-relaxed text-[#4A4A4A] md:text-base lg:text-[17px]">
                  At TIMGAD Government Transaction Services, we redefine the way individuals and businesses interact with government entities across the United Arab Emirates. With our head office strategically based in Dubai, TIMGAD stands as a trusted bridge between clients and government departments, delivering efficient, accurate, and compliant documentation and transaction solutions.
                </p>
                <p className="text-[#4A4A4A] text-[15px] md:text-base lg:text-[17px] leading-relaxed">
                  We specialize in simplifying complex administrative procedures—so our clients can focus on what truly matters: growing their business. Our extensive service portfolio covers PRO services, company formation (Mainland & Freezone), accounting and bookkeeping, banking support, business consultancy, and marketing management.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Magnetic strength={0.2}>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/about" className="group flex items-center space-x-3 bg-[#0D1B2A] text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-black transition-all shadow-xl shadow-black/10">
                      <span>Learn More</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Reveal key={i} delay={0.2 * i} direction="up" distance={40}>
              <motion.div 
                whileHover={{ 
                  y: -10,
                  rotateX: 2,
                  rotateY: 2,
                  boxShadow: "0 25px 50px -12px rgba(201, 154, 50, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-10 rounded-[2rem] border border-black/[0.03] shadow-lg shadow-black/[0.02] flex flex-col items-center text-center group transition-all duration-500 hover:border-gold/30 h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-16 h-16 bg-gold/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-black text-[#0D1B2A] mb-4 tracking-tight uppercase leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[#666666] text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsNew;
