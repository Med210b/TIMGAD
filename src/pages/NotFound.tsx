import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="bg-primary-bg pb-24">
      <SEO title="Page Not Found" description="The requested TIMGAD page could not be found." />
      <section className="section-py flex min-h-[60vh] items-center bg-black">
        <div className="container mx-auto px-4 text-center md:px-8">
          <p className="eyebrow">404 ERROR</p>
          <h1 className="h-hero mt-8 text-white">PAGE NOT FOUND</h1>
          <p className="p-main mx-auto mt-8">The page you requested is unavailable or may have moved.</p>
          <Link to="/" className="btn-gold mt-10 inline-flex">RETURN HOME</Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;