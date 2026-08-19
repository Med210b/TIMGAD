import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOGS } from '../data/company';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Match blog by id or path tail
  const blog = BLOGS.find(b => b.id === id || b.path.endsWith(id || ''));

  if (!blog) {
    return <Navigate to="/blogs" />;
  }

  return (
    <div className="bg-primary-bg pb-24">
      <SEO 
        title={blog.title} 
        description={blog.excerpt}
        image={blog.image}
      />
      {/* Blog Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full pb-12">
          <div className="container mx-auto px-4 md:px-6">
             <Link to="/blogs" className="text-gold text-xs font-bold tracking-[0.2em] flex items-center mb-8 hover:translate-x-[-4px] transition-transform w-fit uppercase">
                <ArrowLeft size={14} className="mr-2" /> Back to Insights
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
              >
                <div className="bg-gold text-primary-bg font-bold text-[10px] px-4 py-1.5 uppercase tracking-widest rounded-full w-fit mb-6">
                  {blog.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase">
                  {blog.title}
                </h1>
                <div className="flex items-center space-x-8 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="flex items-center"><Calendar size={14} className="mr-2 text-gold" /> {blog.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-2 text-gold" /> TIMGAD Editorial</span>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-gold max-w-none"
              >
                <p className="text-xl text-muted-text leading-relaxed font-medium mb-10 italic border-l-4 border-gold pl-8">
                  {blog.excerpt}
                </p>
                
                <div className="text-muted-text text-lg leading-relaxed space-y-8 font-light">
                  <p>
                    Doing business in the United Arab Emirates requires a deep understanding of local laws, regulatory frameworks, and government procedures. As the business landscape continues to evolve with new initiatives like Corporate Tax and updated Labour Laws, staying compliant has never been more critical.
                  </p>
                  
                  <h3 className="text-2xl font-black text-dark-text uppercase tracking-wider mt-12 mb-6">Navigating the Regulatory Landscape</h3>
                  <p>
                    Whether you are operating in a Freezone or on the Mainland, each jurisdiction has its own set of requirements. From trade license renewals and document attestations to VAT registrations and wage protection systems (WPS), the administrative burden can be significant for growing businesses.
                  </p>
                  
                  <div className="bg-white p-10 rounded-2xl border border-black/5 my-12 shadow-xl">
                    <h4 className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">Key Takeaways:</h4>
                    <ul className="space-y-4">
                      {['Early preparation for renewals avoids penalties.', 'Proper documentation is the foundation of transparency.', 'Consulting experts ensures alignment with the latest decrees.', 'Digital transformation is streamlining government interactions.'].map((point, i) => (
                        <li key={i} className="flex items-start space-x-4">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                          <span className="text-muted-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    At TIMGAD Government Transaction Services, we believe that compliance should be viewed as a strategic asset rather than a hurdle. By maintaining pristine records and adhering to every government mandate, businesses build trust with authorities and create a solid foundation for long-term growth.
                  </p>
                </div>
              </motion.div>

              {/* Social Share */}
              <div className="mt-16 pt-8 border-t border-black/5 flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="p-3 rounded-full bg-black/5 text-muted-text hover:bg-gold hover:text-primary-bg transition-all">
                    <Share2 size={18} />
                  </button>
                  <button className="p-3 rounded-full bg-black/5 text-muted-text hover:bg-gold hover:text-primary-bg transition-all">
                    <MessageCircle size={18} />
                  </button>
                </div>
                <div className="text-muted-text text-[10px] font-bold uppercase tracking-[0.2em]">
                  Share this insight
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
               <div className="glass-card p-10 bg-primary-bg border-gold/10">
                  <h3 className="text-white font-bold text-sm mb-8 uppercase tracking-widest">Related Articles</h3>
                  <div className="space-y-8">
                    {BLOGS.filter(b => b.id !== blog.id).map(related => (
                      <Link key={related.id} to={related.path} className="group block">
                        <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">{related.category}</p>
                        <h4 className="text-white font-bold text-sm group-hover:text-gold transition-colors leading-tight uppercase">{related.title}</h4>
                      </Link>
                    ))}
                  </div>
               </div>

               <div className="glass-card p-10 border-gold shadow-2xl shadow-gold/5 text-center bg-white">
                  <h3 className="text-dark-text font-black text-xl mb-6 uppercase tracking-widest">Need Expert Guidance?</h3>
                  <p className="text-muted-text text-sm mb-8 leading-relaxed">
                    Our consultants are ready to help you navigate the UAE business landscape.
                  </p>
                  <Link to="/contact" className="btn-gold w-full block py-4 text-xs tracking-widest">
                    BOOK A CONSULTATION
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
