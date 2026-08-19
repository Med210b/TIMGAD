import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/company';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url 
}) => {
  const siteTitle = title 
    ? `${title} | ${COMPANY_INFO.name}` 
    : `${COMPANY_INFO.name} | Government Transaction Services UAE`;
    
  const metaDescription = description || "TIMGAD Government Transaction Services redefined. Trusted PRO services, company formation, and elite business consultancy in Dubai and across the UAE.";
  const siteUrl = url || window.location.origin + window.location.pathname;
  const siteImage = image || "https://res.cloudinary.com/dfjezzfhc/image/upload/v1787098222/793c887e-8620-4cb3-81ae-ff6cf4810f2f_p14kb9.png";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;
