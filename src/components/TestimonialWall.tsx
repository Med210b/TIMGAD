import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialWallProps {
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white p-8 rounded-sm border border-black/5 hover:border-gold/30 transition-all duration-300 relative group flex flex-col h-full shadow-sm hover:shadow-xl"
    >
      {/* Quote Icon Background */}
      <div className="absolute top-6 right-6 text-gold/[0.05] group-hover:text-gold/10 transition-colors">
        <Quote size={40} />
      </div>

      {/* Star Rating */}
      <div className="flex space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} className="fill-gold text-gold" />
        ))}
      </div>

      {/* Review Content */}
      <div className="flex-grow">
        <p className="text-muted-text text-[13px] md:text-sm leading-relaxed font-serif-body italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Client Info */}
      <div className="mt-8 flex items-center space-x-4 border-t border-black/5 pt-6">
        <div className="w-9 h-9 rounded-sm bg-ivory flex items-center justify-center text-gold font-bold text-xs border border-gold/10">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-dark-text font-bold text-[11px] tracking-[0.1em] uppercase">
            {testimonial.name}
          </h4>
          <p className="text-gold font-bold text-[9px] tracking-widest uppercase opacity-60">
            {testimonial.role || "Verified Client"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialWall: React.FC<TestimonialWallProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
      ))}
    </div>
  );
};

export default TestimonialWall;
