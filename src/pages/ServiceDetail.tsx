import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../data/company';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import * as LucideIcons from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" />;
  }

  const IconComponent = (LucideIcons as any)[service.icon] as any || LucideIcons.HelpCircle;

  return (
    <div className="bg-primary-bg pb-24">
      <SEO 
        title={service.title} 
        description={service.description}
        image={service.image}
      />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-black border-b border-gold-muted/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#d4a23a_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div whileTap={{ scale: 0.95 }} className="w-fit">
            <Link to="/services" className="text-gold text-xs font-bold tracking-[0.2em] flex items-center mb-12 hover:translate-x-[-4px] transition-transform w-fit uppercase">
              <ArrowLeft size={14} className="mr-2" /> Back to Services
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-8">
              <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs">OUR SERVICES</p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] uppercase">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === service.title.split(' ').length - 1 ? "text-gold" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed max-w-2xl font-serif-body">
                {service.description}
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video lg:aspect-square rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Floating Icon Overlay */}
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-gold/90 backdrop-blur-md rounded-sm flex items-center justify-center text-primary-bg shadow-xl">
                  <IconComponent size={32} />
                </div>
              </div>
              
              {/* Decorative Accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold/30 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black mb-8 uppercase tracking-widest border-l-4 border-gold pl-6 text-dark-text">OVERVIEW</h2>
                <p className="text-muted-text text-lg leading-relaxed mb-8">
                  {service.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black mb-8 uppercase tracking-widest border-l-4 border-gold pl-6 text-dark-text">WHAT WE PROVIDE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-4 bg-white p-6 border border-black/5 hover:border-gold transition-all shadow-lg rounded-2xl">
                      <div className="text-gold mt-1 shrink-0">
                        <CheckCircle size={20} />
                      </div>
                      <span className="text-dark-text font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="glass-card p-10 border-gold shadow-2xl shadow-gold/5 bg-white">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-center text-dark-text">GET STARTED</h3>
                  <p className="text-muted-text text-center mb-8">
                    Let TIMGAD handle the complexities while you focus on your business goals.
                  </p>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Link to="/get-a-quote" className="btn-gold w-full flex justify-center items-center py-4 text-sm tracking-widest">
                      GET A QUOTE <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </motion.div>
                </div>

                <div className="glass-card p-8 bg-primary-bg">
                  <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">OTHER SERVICES</h4>
                  <div className="space-y-4">
                    {SERVICES.filter(s => s.id !== id).slice(0, 4).map(other => (
                      <Link 
                        key={other.id} 
                        to={other.path}
                        className="flex items-center justify-between text-gray-400 hover:text-gold transition-all group"
                      >
                        <span className="text-sm font-bold uppercase tracking-widest truncate mr-4">{other.title}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
