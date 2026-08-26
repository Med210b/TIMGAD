import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES } from '../data/company';
import SectionDivider from './SectionDivider';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Updated company phone number
  const phoneNumber = '+971555788779';

  return (
    <footer className="bg-black relative pt-24 pb-12 overflow-hidden">
      {/* Premium Top Border with Gold Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          {/* Brand Presence (4 columns) */}
          <div className="lg:col-span-4 space-y-10">
            <Reveal direction="up" distance={20}>
              <div className="space-y-8">
                <Link to="/" className="inline-block">
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt={COMPANY_INFO.name}
                    className="h-16 md:h-18 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </Link>

                <p className="text-gray-500 leading-relaxed font-serif-body text-sm md:text-[15px] max-w-sm opacity-80">
                  TIMGAD Government Transaction Services redefines the standard
                  of corporate coordination across the United Arab Emirates
                  through precision, speed, and absolute compliance.
                </p>

                <div className="pt-2">
                  <Magnetic strength={0.1}>
                    <Link
                      to="/get-a-quote"
                      className="group inline-flex items-center space-x-3 text-gold font-bold tracking-[0.3em] uppercase text-[9px] hover:text-white transition-colors"
                    >
                      <span>Get a Quote</span>
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Navigation Matrix (8 columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
              {/* Directory */}
              <Reveal direction="up" delay={0.1} distance={20}>
                <div className="space-y-8">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase opacity-40">
                    Directory
                  </h4>

                  <ul className="space-y-4">
                    {NAVIGATION.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className="text-gray-500 hover:text-gold transition-colors duration-400 text-sm font-medium tracking-wide flex items-center group"
                        >
                          <span className="w-0 group-hover:w-3 h-[1px] bg-gold mr-0 group-hover:mr-3 transition-all opacity-0 group-hover:opacity-100" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Specializations */}
              <Reveal direction="up" delay={0.2} distance={20}>
                <div className="space-y-8">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase opacity-40">
                    Services
                  </h4>

                  <ul className="space-y-4">
                    {SERVICES.slice(0, 5).map((service) => (
                      <li key={service.id}>
                        <Link
                          to={service.path}
                          className="text-gray-500 hover:text-gold transition-colors duration-400 text-sm font-medium tracking-wide flex items-center group"
                        >
                          <span className="w-0 group-hover:w-3 h-[1px] bg-gold mr-0 group-hover:mr-3 transition-all opacity-0 group-hover:opacity-100" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Concierge */}
              <Reveal direction="up" delay={0.3} distance={20}>
                <div className="space-y-8">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase opacity-40">
                    Connect
                  </h4>

                  <ul className="space-y-6">
                    <li className="flex flex-col space-y-1">
                      <span className="text-gold font-bold text-[8px] tracking-[0.3em] uppercase opacity-40">
                        HQ Location
                      </span>

                      <span className="text-gray-500 text-sm font-medium leading-relaxed font-serif-body">
                        {COMPANY_INFO.address}
                      </span>
                    </li>

                    <li className="flex flex-col space-y-1">
                      <span className="text-gold font-bold text-[8px] tracking-[0.3em] uppercase opacity-40">
                        Direct Inquiries
                      </span>

                      <a
                        href={`tel:${phoneNumber}`}
                        className="text-gray-500 hover:text-gold transition-colors text-sm font-medium"
                      >
                        +971 55 578 8779
                      </a>
                    </li>

                    <li className="flex flex-col space-y-1">
                      <span className="text-gold font-bold text-[8px] tracking-[0.3em] uppercase opacity-40">
                        Digital Mail
                      </span>

                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-gray-500 hover:text-gold transition-colors text-sm font-medium"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Legal & Meta Footer */}
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-gray-600 text-[10px] font-bold tracking-[0.1em] uppercase text-center md:text-left">
              © {new Date().getFullYear()} TIMGAD Government Transaction Services
            </p>

            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-gold transition-colors text-[10px] font-bold tracking-[0.1em] uppercase"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="text-gray-600 hover:text-gold transition-colors text-[10px] font-bold tracking-[0.1em] uppercase"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.2}>
                <a
                  href="https://www.instagram.com/timgad_official?fbclid=IwY2xjawT7lFhwZG9mA2V4dG4DYWVtAjEwAGJyaWQRMW02Nkt2clhSTDllQXhUTlpzcnRjBmFwcF9pZA81MTQ3NzE1NjkyMjgwNjEAAR4lciqqg4Rgn7tYE3OYmA9UwnOufiipqCs0mwm4E-yWKk5IpVcsJ4rkZXMWgQ_aem_Zn5TppRgo4pD3B985sccuA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-500 group"
                >
                  <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href="https://www.facebook.com/people/Timgad-Government-Transactions-Services/61582577761985/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-500 group"
                >
                  <Facebook size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              </Magnetic>
            </div>

            {/* Back to Top */}
            <Magnetic strength={0.2}>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-500 group"
              >
                <ArrowUp
                  size={18}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;