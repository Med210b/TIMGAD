import React from 'react';
import SEO from '../components/SEO';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div className="bg-ivory pb-24">
      <SEO title={title} description={`${title} for TIMGAD Government Transaction Services.`} />
      <section className="relative overflow-hidden bg-black py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <p className="eyebrow">TIMGAD GOVERNMENT TRANSACTION SERVICES</p>
          <h1 className="h-hero mt-8 text-white">{title}</h1>
        </div>
      </section>
      <section className="section-py">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <div className="space-y-10 text-muted-text">
            {isPrivacy ? (
              <>
                <p>TIMGAD Government Transaction Services respects your privacy and handles personal information responsibly.</p>
                <div>
                  <h2 className="mb-4 text-2xl text-dark-text">Information We Collect</h2>
                  <p>We collect the information you provide through our contact and quote forms so we can respond to your request and provide relevant services.</p>
                </div>
                <div>
                  <h2 className="mb-4 text-2xl text-dark-text">How We Use Information</h2>
                  <p>Information is used to communicate with you, understand your requirements, and deliver or improve our services.</p>
                </div>
              </>
            ) : (
              <>
                <p>By using the TIMGAD website, you agree to use the website and its services lawfully and respectfully.</p>
                <div>
                  <h2 className="mb-4 text-2xl text-dark-text">Services and Information</h2>
                  <p>Website information is provided for general guidance. Service requirements, timelines, and government approvals may vary by case.</p>
                </div>
                <div>
                  <h2 className="mb-4 text-2xl text-dark-text">Contact</h2>
                  <p>For questions about these terms, contact TIMGAD through the details provided on our Contact Us page.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;