import React from 'react';
import { motion } from 'motion/react';
import { BLOGS } from '../data/company';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import SEO from '../components/SEO';

const Blogs: React.FC = () => {
  return (
    <div className="bg-primary-bg pb-32">
      <SEO 
        title="Insights & Updates" 
        description="Expert guidance and latest updates on UAE government transactions, business setup, and compliance from TIMGAD's editorial team."
      />
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black border-b border-gold-muted/20">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p className="eyebrow">INSIGHTS & UPDATES</p>
            <h1 className="h-hero">
              KNOWLEDGE THAT<br />
              <span className="gold-gradient">MOVES BUSINESS</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 border-b border-black/5 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {BLOGS.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group flex flex-col h-full bg-white p-8 rounded-3xl border border-black/5 shadow-lg"
              >
                <Link to={blog.path} className="relative h-64 overflow-hidden rounded-2xl mb-10 block shadow-2xl">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8 bg-gold text-black font-black text-[10px] px-6 py-2 uppercase tracking-[0.2em] rounded-full shadow-lg">
                    {blog.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                </Link>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-6 opacity-70">
                  <span className="flex min-w-0 items-center"><Calendar size={14} className="mr-2 shrink-0" /> {blog.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-2 shrink-0" /> ADMIN</span>
                </div>
                
                <h3 className="break-words text-xl md:text-2xl font-black mb-8 group-hover:text-gold transition-colors duration-500 text-dark-text uppercase">
                  {blog.title}
                </h3>
                
                <p className="text-muted-text line-clamp-3 mb-10 text-sm md:text-base font-light">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to={blog.path} className="text-dark-text text-xs font-black tracking-[0.4em] flex items-center group-hover:text-gold transition-all duration-300 uppercase">
                    READ ARTICLE <ArrowRight size={20} className="ml-4 transform group-hover:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-40 bg-primary-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border-2 border-gold/30 shadow-[0_0_80px_rgba(201,154,50,0.1)] bg-secondary-bg">
            <div className="max-w-2xl text-center lg:text-left space-y-10">
              <h2 className="h-section">STAY UPDATED WITH ELITE INSIGHTS</h2>
              <p className="p-main">Subscribe to our newsletter to receive expert guidance on compliance, business setup, and government services directly in your inbox.</p>
            </div>
            <div className="w-full lg:w-2/5">
              <form className="flex flex-col sm:flex-row gap-6" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-8 py-5 text-white focus:border-gold focus:outline-none transition-all placeholder:text-gray-600 font-medium"
                />
                <button className="btn-gold whitespace-nowrap px-10 py-5 font-black text-xs tracking-widest">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
