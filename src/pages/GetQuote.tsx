import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CalendarDays, Check, Plus } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import SEO from '../components/SEO';

const backgroundImage =
  'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787216595/24ba91dc-5223-4008-9d2e-a61199d86918_cbhi9z.png';

const personImage =
  'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787216763/29f525af-aadd-4d04-af1f-54530829d72e_bvhg2k.png';

const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    contactMethod: 'email',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Quote Request:', formData);

    alert(
      'Quote request submitted successfully. Our experts will analyze your requirements and contact you soon.'
    );
  };

  return (
    <>
      <SEO
        title="Get a Quote"
        description="Request a custom solution for your UAE business requirements. Our experts provide tailored quotes for PRO, formation, and consultancy services."
      />

      <div className="quote-page">
        <section
          className="quote-hero"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Cinematic overlays */}
          <div className="quote-hero__dark-overlay" />
          <div className="quote-hero__marble-overlay" />
          <div className="quote-hero__vignette" />

          {/* Decorative gold elements */}
          <div className="quote-decoration quote-decoration--left" />
          <div className="quote-decoration quote-decoration--right" />

          <div className="quote-hero__content">
            {/* LEFT — 3D PORTRAIT */}
            <motion.div
              className="quote-portrait-area"
              initial={{
                opacity: 0,
                x: -50,
                rotateY: 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="quote-portrait-glow" />

              {/* Large atmospheric gold arc */}
              <div className="quote-portrait-arc quote-portrait-arc--one" />
              <div className="quote-portrait-arc quote-portrait-arc--two" />

              {/* 3D card */}
              <div className="quote-portrait-card">
                <div className="quote-portrait-card__shadow" />

                <div className="quote-portrait-card__outer">
                  <div className="quote-portrait-card__border">
                    <div className="quote-portrait-card__inner">
                      <img
                        src={personImage}
                        alt="TIMGAD Government Transaction Services executive consultant"
                        className="quote-portrait"
                        loading="eager"
                      />

                      <div className="quote-portrait-card__shine" />
                    </div>
                  </div>
                </div>

                {/* Card bottom depth */}
                <div className="quote-portrait-card__depth" />
              </div>

              {/* Floating quote mark behind card */}
              <div className="quote-background-mark">“</div>
            </motion.div>

            {/* RIGHT — EDITORIAL CONTENT */}
            <motion.article
              className="quote-editorial"
              initial={{
                opacity: 0,
                x: 45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="quote-eyebrow">
                LEADERSHIP PHILOSOPHY
              </div>

              <div className="quote-short-rule" />

              <blockquote className="quote-main">
                <span className="quote-main__mark" aria-hidden="true">
                  “
                </span>

                <span className="quote-main__text">
                  Management is
                  <br />
                  doing things right;
                  <br />
                  leadership is doing
                  <br />
                  <em>the right things.</em>
                </span>
              </blockquote>

              <div className="quote-author">
                <span className="quote-author__line" />
                <span>PETER F. DRUCKER</span>
              </div>

              <div className="quote-divider">
                <span />
              </div>

              <p className="quote-biography">
                Peter F. Drucker was an Austrian-American management
                consultant, educator, and author. He is widely regarded as
                the father of modern management. His ideas about leadership,
                innovation, and productivity continue to shape businesses and
                organizations around the world.
              </p>

              <div className="quote-dates">
                <div className="quote-date-block">
                  <span className="quote-icon">
                    <CalendarDays size={18} strokeWidth={1.5} />
                  </span>

                  <div className="quote-date-content">
                    <b>BORN</b>
                    <strong>November 19, 1909</strong>
                    <small>Vienna, Austria</small>
                  </div>
                </div>

                <div className="quote-date-separator" />

                <div className="quote-date-block">
                  <span className="quote-icon">
                    <Plus size={19} strokeWidth={1.5} />
                  </span>

                  <div className="quote-date-content">
                    <b>DIED</b>
                    <strong>November 11, 2005</strong>
                    <small>Claremont, California, USA</small>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Bottom gold line */}
          <div className="quote-bottom-line">
            <span />
          </div>

          {/* Gold light point */}
          <div className="quote-bottom-light" />
        </section>

        {/* REQUEST QUOTE SECTION */}
        <section className="quote-request">
          <div className="quote-request__background" />

          <div className="quote-request__inner">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="quote-request__intro"
            >
              <div className="quote-eyebrow">
                REQUEST A SOLUTION
              </div>

              <h1>
                GET A <em>CUSTOM QUOTE</em>
              </h1>

              <p>
                Tell us what you need and our expert team will analyze your
                requirements to find the right solution for your business in
                the UAE.
              </p>

              <div className="quote-trust-list">
                <span>
                  <Check size={14} />
                  Confidential consultation
                </span>

                <span>
                  <Check size={14} />
                  UAE transaction expertise
                </span>

                <span>
                  <Check size={14} />
                  Clear next steps
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="quote-form-panel"
            >
              <form
                onSubmit={handleSubmit}
                className="quote-form"
              >
                <div className="quote-form-grid">
                  <div>
                    <label
                      htmlFor="quote-full-name"
                      className="quote-label"
                    >
                      Full Name
                    </label>

                    <input
                      id="quote-full-name"
                      className="quote-field"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-company-name"
                      className="quote-label"
                    >
                      Company Name
                    </label>

                    <input
                      id="quote-company-name"
                      className="quote-field"
                      type="text"
                      placeholder="Company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="quote-label"
                    >
                      Email Address
                    </label>

                    <input
                      id="quote-email"
                      className="quote-field"
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="quote-label"
                    >
                      Phone Number
                    </label>

                    <input
                      id="quote-phone"
                      className="quote-field"
                      type="tel"
                      required
                      placeholder="+971 -- --- ----"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="quote-label"
                    >
                      Service of Interest
                    </label>

                    <select
                      id="quote-service"
                      className="quote-field"
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="pro">
                        PRO Services
                      </option>

                      <option value="formation">
                        Business Formation
                      </option>

                      <option value="accounting">
                        Accounting Solutions
                      </option>

                      <option value="consultancy">
                        Elite Consultancy
                      </option>

                      <option value="other">
                        Other Specialized Services
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-contact-method"
                      className="quote-label"
                    >
                      Preferred Contact
                    </label>

                    <select
                      id="quote-contact-method"
                      className="quote-field"
                      value={formData.contactMethod}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactMethod: e.target.value,
                        })
                      }
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="quote-label"
                  >
                    Requirements Details
                  </label>

                  <textarea
                    id="quote-message"
                    className="quote-field quote-message"
                    rows={5}
                    placeholder="Briefly describe your requirements"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="quote-submit"
                >
                  <span>SUBMIT REQUEST</span>
                  <ArrowRight size={17} />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        /* =========================================================
           GET QUOTE — LUXURY EDITORIAL DESIGN
           ========================================================= */

        .quote-page {
          --quote-gold: #c99a2e;
          --quote-gold-light: #e0b64d;
          --quote-ivory: #f4f1e9;
          --quote-cream: #eee9de;
          --quote-navy: #081019;
          --quote-black: #030506;
          --quote-muted: #bdb9ae;

          width: 100%;
          min-height: 100%;
          overflow-x: hidden;
          background: var(--quote-black);
          color: var(--quote-ivory);
          overflow-y: visible;
        }

        /* =========================================================
           HERO
           ========================================================= */

        .quote-hero {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: min(900px, 100vh);
          overflow: hidden;

          background-color: #060a0e;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          display: flex;
          align-items: center;
        }

        .quote-hero__dark-overlay {
          position: absolute;
          inset: 0;
          z-index: -3;

          background:
            linear-gradient(
              90deg,
              rgba(2, 6, 9, 0.98) 0%,
              rgba(3, 8, 12, 0.91) 30%,
              rgba(5, 9, 13, 0.72) 57%,
              rgba(10, 11, 11, 0.18) 100%
            );
        }

        .quote-hero__marble-overlay {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          z-index: -2;
          pointer-events: none;

          background:
            radial-gradient(
              ellipse at 82% 25%,
              rgba(247, 237, 211, 0.64) 0%,
              rgba(218, 202, 167, 0.27) 23%,
              transparent 58%
            ),
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(245, 237, 218, 0.08) 30%,
              rgba(245, 237, 218, 0.34) 100%
            );

          mix-blend-mode: screen;
        }

        .quote-hero__vignette {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;

          background:
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(0, 0, 0, 0.38) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.18),
              transparent 35%,
              rgba(0, 0, 0, 0.42)
            );
        }

        .quote-hero__content {
          position: relative;
          width: min(1480px, calc(100% - 100px));
          margin: 0 auto;

          min-height: auto;

          display: grid;
          grid-template-columns: minmax(420px, 0.92fr) minmax(520px, 1.08fr);
          align-items: center;
          gap: clamp(40px, 6vw, 110px);

          padding: 100px 0 90px;
        }

        /* =========================================================
           DECORATIONS
           ========================================================= */

        .quote-decoration {
          position: absolute;
          z-index: -1;
          pointer-events: none;
        }

        .quote-decoration--left {
          left: 6%;
          top: 28%;
          width: 520px;
          height: 520px;

          border: 1px solid rgba(201, 154, 46, 0.3);
          border-radius: 50%;

          transform: rotate(-18deg);
        }

        .quote-decoration--right {
          right: 3%;
          top: 9%;
          width: 310px;
          height: 310px;

          border-radius: 50%;
          border: 1px solid rgba(255, 239, 198, 0.12);
        }

        /* =========================================================
           PORTRAIT AREA
           ========================================================= */

        .quote-portrait-area {
          position: relative;
          min-height: auto;

          display: flex;
          justify-content: center;
          align-items: center;

          perspective: 1600px;
          transform-style: preserve-3d;
        }

        .quote-portrait-glow {
          position: absolute;
          width: 370px;
          height: 600px;

          background:
            radial-gradient(
              ellipse,
              rgba(201, 154, 46, 0.32) 0%,
              rgba(201, 154, 46, 0.08) 42%,
              transparent 73%
            );

          filter: blur(25px);
          transform: translateY(50px);
          pointer-events: none;
        }

        .quote-portrait-arc {
          position: absolute;
          border: 1px solid rgba(201, 154, 46, 0.55);
          border-radius: 50%;
          pointer-events: none;
        }

        .quote-portrait-arc--one {
          width: 570px;
          height: 570px;
          transform: rotate(-17deg);
        }

        .quote-portrait-arc--two {
          width: 480px;
          height: 700px;
          border-color: rgba(201, 154, 46, 0.23);
          transform: rotate(12deg);
        }

        .quote-portrait-card {
          position: relative;
          width: min(430px, 72%);
          aspect-ratio: 0.72;

          transform:
            rotateY(-8deg)
            rotateX(2deg)
            rotateZ(-2deg);

          transform-style: preserve-3d;
          transition:
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .quote-portrait-card:hover {
          transform:
            rotateY(-2deg)
            rotateX(1deg)
            rotateZ(-1deg)
            translateY(-8px);
        }

        .quote-portrait-card__shadow {
          position: absolute;
          left: 12%;
          right: -10%;
          bottom: -12%;

          height: 18%;

          background: rgba(0, 0, 0, 0.75);
          filter: blur(30px);

          transform: translateZ(-70px);
          border-radius: 50%;
        }

        .quote-portrait-card__outer {
          position: absolute;
          inset: 0;

          padding: 3px;

          border-radius: 30px 30px 28px 28px;

          background:
            linear-gradient(
              135deg,
              #8f6820 0%,
              #f2d57b 18%,
              #a87520 38%,
              #e2bd5c 60%,
              #8a6018 82%,
              #e6c66a 100%
            );

          box-shadow:
            0 35px 65px rgba(0, 0, 0, 0.55),
            0 8px 20px rgba(0, 0, 0, 0.38),
            inset 0 0 0 1px rgba(255, 238, 177, 0.45);

          transform: translateZ(25px);
        }

        .quote-portrait-card__border {
          width: 100%;
          height: 100%;
          padding: 9px;

          border-radius: 28px;

          background:
            linear-gradient(
              145deg,
              #141b21,
              #070a0d 60%,
              #17130c
            );

          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.07);
        }

        .quote-portrait-card__inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;

          border-radius: 20px;

          background:
            radial-gradient(
              ellipse at center,
              #353535,
              #121212 72%
            );
        }

        .quote-portrait {
          width: 100%;
          height: 100%;
          display: block;

          object-fit: cover;
          object-position: center;

          filter:
            contrast(1.04)
            brightness(0.96);

          transform: scale(1.025);
        }

        .quote-portrait-card__shine {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              115deg,
              rgba(255, 255, 255, 0.17) 0%,
              transparent 18%,
              transparent 65%,
              rgba(201, 154, 46, 0.12) 100%
            );
        }

        .quote-portrait-card__depth {
          position: absolute;
          left: 10%;
          right: -4%;
          bottom: -18px;
          height: 28px;

          border-radius: 0 0 20px 20px;

          background:
            linear-gradient(
              90deg,
              #7b5315,
              #d2a941 40%,
              #63420f
            );

          transform:
            translateZ(-30px)
            skewX(-12deg);

          filter: brightness(0.75);
        }

        .quote-background-mark {
          position: absolute;
          left: -20px;
          bottom: 2%;

          font-family: Georgia, 'Times New Roman', serif;
          font-size: 210px;
          line-height: 0.7;

          color: rgba(201, 154, 46, 0.12);

          user-select: none;
          pointer-events: none;
        }

        /* =========================================================
           EDITORIAL
           ========================================================= */

        .quote-editorial {
          position: relative;
          z-index: 2;

          max-width: 720px;
          padding: 20px 0;
        }

        .quote-eyebrow {
          color: var(--quote-gold-light);

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.34em;
          text-transform: uppercase;

          line-height: 1.5;
        }

        .quote-short-rule {
          width: 62px;
          height: 2px;
          margin-top: 24px;
          margin-bottom: 35px;

          background:
            linear-gradient(
              90deg,
              var(--quote-gold),
              #e6c46d
            );

          box-shadow:
            0 0 12px rgba(201, 154, 46, 0.25);
        }

        .quote-main {
          position: relative;
          margin: 0;
          padding: 0;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-weight: 400;
        }

        .quote-main__mark {
          position: absolute;
          left: -38px;
          top: -38px;

          font-size: 112px;
          line-height: 1;

          color: var(--quote-gold);

          opacity: 0.95;

          font-family:
            Georgia,
            'Times New Roman',
            serif;
        }

        .quote-main__text {
          display: block;

          color: #f5f2e9;

          font-size: clamp(48px, 4.2vw, 74px);
          line-height: 0.99;
          letter-spacing: -0.035em;

          text-shadow:
            0 2px 18px rgba(0, 0, 0, 0.28);
        }

        .quote-main__text em {
          color: var(--quote-gold-light);
          font-style: normal;

          text-shadow:
            0 0 25px rgba(201, 154, 46, 0.18);
        }

        .quote-author {
          display: flex;
          align-items: center;
          gap: 15px;

          margin-top: 35px;

          color: #f5f1e9;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .quote-author__line {
          width: 30px;
          height: 1px;

          background: var(--quote-gold-light);
        }

        .quote-divider {
          position: relative;
          height: 1px;

          margin: 34px 0 25px;

          background:
            linear-gradient(
              90deg,
              rgba(201, 154, 46, 0.55),
              rgba(201, 154, 46, 0.12),
              transparent
            );
        }

        .quote-divider span {
          position: absolute;
          left: 18%;
          top: 50%;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #f0c457;

          transform: translateY(-50%);

          box-shadow:
            0 0 12px rgba(240, 196, 87, 0.9),
            0 0 28px rgba(240, 196, 87, 0.5);
        }

        .quote-biography {
          max-width: 690px;

          margin: 0;

          color: rgba(244, 241, 233, 0.86);

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 17px;
          line-height: 1.7;
          letter-spacing: 0.005em;
        }

        /* =========================================================
           DATES
           ========================================================= */

        .quote-dates {
          display: flex;
          align-items: stretch;

          margin-top: 35px;
          padding-top: 5px;
        }

        .quote-date-block {
          display: flex;
          align-items: center;
          gap: 15px;

          min-width: 0;
          flex: 1;
        }

        .quote-date-separator {
          width: 1px;
          min-height: 65px;
          margin: 0 30px;

          background:
            linear-gradient(
              180deg,
              transparent,
              rgba(201, 154, 46, 0.55),
              transparent
            );
        }

        .quote-icon {
          flex: 0 0 auto;

          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(201, 154, 46, 0.7);
          border-radius: 50%;

          color: var(--quote-gold-light);

          background:
            radial-gradient(
              circle,
              rgba(201, 154, 46, 0.12),
              transparent 70%
            );

          box-shadow:
            inset 0 0 12px rgba(201, 154, 46, 0.06);
        }

        .quote-date-content {
          min-width: 0;
        }

        .quote-date-content b {
          display: block;

          margin-bottom: 6px;

          color: var(--quote-gold-light);

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 13px;
          letter-spacing: 0.18em;
        }

        .quote-date-content strong,
        .quote-date-content small {
          display: block;

          font-family:
            Georgia,
            'Times New Roman',
            serif;
        }

        .quote-date-content strong {
          color: #f1eee5;

          font-size: 15px;
          font-weight: 400;
          line-height: 1.45;
        }

        .quote-date-content small {
          margin-top: 2px;

          color: rgba(244, 241, 233, 0.68);

          font-size: 14px;
          font-style: italic;
          line-height: 1.45;
        }

        /* =========================================================
           HERO BOTTOM LINE
           ========================================================= */

        .quote-bottom-line {
          position: absolute;
          left: 3.5%;
          right: 3.5%;
          bottom: 18px;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(201, 154, 46, 0.7) 20%,
              rgba(201, 154, 46, 0.9) 50%,
              rgba(201, 154, 46, 0.7) 80%,
              transparent
            );

          z-index: 4;
        }

        .quote-bottom-light {
          position: absolute;
          bottom: 12px;
          left: 50%;

          width: 9px;
          height: 9px;

          border-radius: 50%;

          background: #ffe18b;

          transform: translateX(-50%);

          box-shadow:
            0 0 10px #f5c65c,
            0 0 25px rgba(245, 198, 92, 0.85),
            0 0 55px rgba(245, 198, 92, 0.35);

          z-index: 5;
        }

        /* =========================================================
           REQUEST SECTION
           ========================================================= */

        .quote-request {
          position: relative;
          overflow: hidden;

          padding: 120px 0;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(201, 154, 46, 0.08),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #0a0d0f,
              #111416 55%,
              #090b0d
            );
        }

        .quote-request__background {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(201, 154, 46, 0.025),
              transparent
            );
        }

        .quote-request__inner {
          position: relative;

          width: min(1240px, calc(100% - 80px));
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(500px, 1.28fr);
          gap: 80px;
          align-items: start;
        }

        .quote-request__intro h1 {
          margin: 20px 0 22px;

          color: #f5f1e8;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: clamp(44px, 4vw, 66px);
          line-height: 0.98;
          letter-spacing: -0.04em;
        }

        .quote-request__intro h1 em {
          display: block;

          color: var(--quote-gold-light);

          font-style: normal;
        }

        .quote-request__intro > p {
          max-width: 490px;

          margin: 0;

          color: rgba(244, 241, 233, 0.7);

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 17px;
          line-height: 1.75;
        }

        .quote-trust-list {
          display: flex;
          flex-direction: column;
          gap: 13px;

          margin-top: 32px;
        }

        .quote-trust-list span {
          display: flex;
          align-items: center;
          gap: 10px;

          color: rgba(244, 241, 233, 0.82);

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 14px;
        }

        .quote-trust-list svg {
          flex: 0 0 auto;

          color: var(--quote-gold-light);
        }

        .quote-form-panel {
          position: relative;

          padding: clamp(28px, 4vw, 45px);

          border: 1px solid rgba(201, 154, 46, 0.35);
          border-radius: 4px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.07),
              rgba(255, 255, 255, 0.025)
            );

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .quote-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .quote-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .quote-label {
          display: block;

          margin-bottom: 9px;

          color: var(--quote-gold-light);

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .quote-field {
          width: 100%;
          min-height: 48px;

          box-sizing: border-box;

          padding: 13px 15px;

          border: 1px solid rgba(244, 241, 233, 0.15);
          border-radius: 2px;
          outline: none;

          background: rgba(255, 255, 255, 0.045);

          color: #f4f1e9;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 14px;

          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .quote-field::placeholder {
          color: rgba(244, 241, 233, 0.38);
        }

        .quote-field:focus {
          border-color: rgba(201, 154, 46, 0.7);

          background: rgba(255, 255, 255, 0.07);

          box-shadow:
            0 0 0 3px rgba(201, 154, 46, 0.07);
        }

        select.quote-field {
          appearance: none;

          background-image:
            linear-gradient(45deg, transparent 50%, #c99a2e 50%),
            linear-gradient(135deg, #c99a2e 50%, transparent 50%);

          background-position:
            calc(100% - 17px) 21px,
            calc(100% - 12px) 21px;

          background-size:
            5px 5px,
            5px 5px;

          background-repeat: no-repeat;

          padding-right: 35px;
        }

        select.quote-field option {
          color: #111;
          background: #f4f1e9;
        }

        .quote-message {
          min-height: 140px;

          resize: vertical;
        }

        .quote-submit {
          width: 100%;
          min-height: 56px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;

          border: 1px solid #d6ab3d;
          border-radius: 2px;

          background:
            linear-gradient(
              135deg,
              #b88420,
              #d1a338 50%,
              #b88420
            );

          color: #080909;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;

          cursor: pointer;

          box-shadow:
            0 12px 30px rgba(201, 154, 46, 0.16);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            filter 0.25s ease;
        }

        .quote-submit:hover {
          transform: translateY(-2px);

          filter: brightness(1.06);

          box-shadow:
            0 18px 35px rgba(201, 154, 46, 0.25);
        }

        .quote-submit:active {
          transform: translateY(0);
        }

        /* =========================================================
           TABLET
           ========================================================= */

        @media (max-width: 1100px) {
          .quote-hero {
            min-height: auto;
          }

          .quote-hero__content {
            width: min(100% - 60px, 1000px);

            grid-template-columns:
              minmax(330px, 0.8fr)
              minmax(430px, 1.2fr);

            gap: 45px;

            padding: 90px 0 80px;
          }

          .quote-portrait-card {
            width: min(370px, 80%);
          }

          .quote-main__text {
            font-size: clamp(43px, 5vw, 62px);
          }

          .quote-main__mark {
            left: -25px;
            font-size: 90px;
          }

          .quote-request__inner {
            width: min(100% - 60px, 1000px);
            gap: 50px;
          }
        }

        /* =========================================================
           MOBILE
           ========================================================= */

        @media (max-width: 820px) {
          .quote-hero {
            min-height: auto;
            background-position: center;
            align-items: stretch;
          }

          .quote-hero__dark-overlay {
            background: linear-gradient(
              180deg,
              rgba(2, 6, 9, 0.95) 0%,
              rgba(3, 7, 10, 0.88) 38%,
              rgba(3, 7, 10, 0.96) 100%
            );
          }

          .quote-hero__marble-overlay {
            width: 100%;
            opacity: 0.25;
            background: radial-gradient(
              ellipse at 50% 30%,
              rgba(247, 237, 211, 0.35),
              transparent 50%
            );
          }

          .quote-decoration--left {
            left: -250px;
            top: 35%;
            width: 350px;
            height: 350px;
            opacity: 0.5;
          }

          .quote-decoration--right {
            right: -200px;
            top: 5%;
            width: 250px;
            height: 250px;
            opacity: 0.4;
          }

          .quote-hero__content {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 60px 18px 50px;
            min-height: auto;
          }

          /* PORTRAIT — Mobile exclusive layout */
          .quote-portrait-area {
            width: 100%;
            min-height: auto;
            height: auto;
            padding: 0 0 35px 0;
            order: -1; /* Puts it first */
          }

          .quote-portrait-card {
            width: clamp(220px, 75vw, 300px);
            aspect-ratio: 0.72;
            transform: rotateY(0deg) rotateZ(0deg);
          }

          .quote-portrait-card:hover {
            transform: rotateY(0deg) rotateZ(0deg) translateY(-4px);
          }

          .quote-portrait-arc--one {
            width: 280px;
            height: 280px;
            opacity: 0.6;
          }

          .quote-portrait-arc--two {
            width: 240px;
            height: 360px;
            opacity: 0.5;
          }

          .quote-portrait-glow {
            width: 240px;
            height: 360px;
            opacity: 0.6;
          }

          .quote-background-mark {
            left: -30px;
            bottom: 5%;
            font-size: 100px;
            opacity: 0.08;
          }

          /* EDITORIAL — Mobile exclusive layout */
          .quote-editorial {
            width: 100%;
            max-width: 100%;
            padding: 0;
            order: 0;
          }

          .quote-eyebrow {
            font-size: clamp(11px, 2.5vw, 13px);
            letter-spacing: 0.32em;
            margin-bottom: 10px;
          }

          .quote-short-rule {
            width: 45px;
            height: 2px;
            margin-top: 12px;
            margin-bottom: 22px;
          }

          .quote-main {
            padding-left: 0;
            position: relative;
          }

          .quote-main__mark {
            position: absolute;
            left: -18px;
            top: -32px;
            font-size: clamp(48px, 15vw, 65px);
            opacity: 0.7;
          }

          .quote-main__text {
            font-size: clamp(36px, 9vw, 48px);
            line-height: 1.05;
            letter-spacing: -0.03em;
            padding-top: 8px;
          }

          .quote-author {
            margin-top: 20px;
            font-size: clamp(11px, 2vw, 13px);
            letter-spacing: 0.15em;
            gap: 12px;
          }

          .quote-author__line {
            width: 25px;
            height: 1px;
          }

          .quote-divider {
            margin: 20px 0 22px;
            height: 1px;
          }

          .quote-divider span {
            left: 15%;
          }

          .quote-biography {
            font-size: clamp(15px, 3.5vw, 17px);
            line-height: 1.68;
            letter-spacing: 0;
            max-width: 100%;
          }

          /* BORN/DIED — Mobile exclusive 2-column grid */
          .quote-dates {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-top: 28px;
            padding-top: 0;
          }

          .quote-date-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }

          .quote-date-separator {
            display: none;
          }

          .quote-icon {
            width: 42px;
            height: 42px;
            flex: none;
          }

          .quote-icon svg {
            width: 16px;
            height: 16px;
          }

          .quote-date-content {
            width: 100%;
            min-width: 0;
          }

          .quote-date-content b {
            display: block;
            margin-bottom: 5px;
            font-size: clamp(10px, 2.5vw, 12px);
            letter-spacing: 0.16em;
          }

          .quote-date-content strong {
            font-size: clamp(13px, 3vw, 15px);
            line-height: 1.4;
          }

          .quote-date-content small {
            margin-top: 3px;
            font-size: clamp(11px, 2.5vw, 13px);
            line-height: 1.4;
          }

          .quote-bottom-line {
            left: 18px;
            right: 18px;
            bottom: 12px;
          }

          .quote-bottom-light {
            bottom: 7px;
          }

          /* Request section */
          .quote-request {
            padding: 70px 0;
          }

          .quote-request__inner {
            width: calc(100% - 36px);
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          .quote-request__intro h1 {
            margin-top: 14px;
            font-size: clamp(36px, 10vw, 48px);
            line-height: 1.02;
          }

          .quote-request__intro > p {
            font-size: clamp(14px, 3.2vw, 16px);
            line-height: 1.68;
          }

          .quote-trust-list {
            margin-top: 22px;
            gap: 11px;
          }

          .quote-trust-list span {
            font-size: 13px;
          }

          .quote-form-panel {
            width: 100%;
            box-sizing: border-box;
            padding: 22px 18px;
          }

          .quote-form-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .quote-form {
            gap: 20px;
          }

          .quote-label {
            font-size: clamp(10px, 2.5vw, 11px);
          }

          .quote-field {
            min-height: 50px;
            font-size: 16px;
            padding: 14px 14px;
          }

          .quote-message {
            min-height: 120px;
          }

          .quote-submit {
            min-height: 54px;
            font-size: clamp(10px, 2vw, 12px);
          }
        }

        /* =========================================================
           SMALL PHONES (320px - 430px)
           ========================================================= */

        @media (max-width: 430px) {
          .quote-page {
            overflow-x: hidden;
          }

          .quote-hero__content {
            padding: 55px 14px 45px;
            gap: 0;
          }

          .quote-portrait-area {
            padding: 0 0 30px 0;
          }

          .quote-portrait-card {
            width: clamp(200px, 68vw, 260px);
          }

          .quote-portrait-arc--one {
            width: 240px;
            height: 240px;
          }

          .quote-portrait-arc--two {
            width: 210px;
            height: 300px;
          }

          .quote-portrait-glow {
            width: 210px;
            height: 300px;
          }

          .quote-main__text {
            font-size: clamp(32px, 8vw, 40px);
            line-height: 1.08;
          }

          .quote-main__mark {
            left: -12px;
            top: -28px;
            font-size: clamp(42px, 12vw, 55px);
          }

          .quote-eyebrow {
            font-size: 10px;
            letter-spacing: 0.30em;
          }

          .quote-short-rule {
            width: 40px;
            margin-bottom: 18px;
          }

          .quote-author {
            font-size: 10px;
            gap: 10px;
          }

          .quote-biography {
            font-size: 14px;
            line-height: 1.65;
          }

          .quote-dates {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin-top: 24px;
          }

          .quote-date-block {
            gap: 10px;
          }

          .quote-icon {
            width: 38px;
            height: 38px;
          }

          .quote-icon svg {
            width: 15px;
            height: 15px;
          }

          .quote-date-content b {
            font-size: 10px;
          }

          .quote-date-content strong {
            font-size: 12px;
          }

          .quote-date-content small {
            font-size: 10px;
          }

          .quote-request__inner {
            width: calc(100% - 28px);
          }

          .quote-form-panel {
            padding: 20px 14px;
          }

          .quote-form-grid {
            gap: 16px;
          }
        }

        /* =========================================================
           VERY SMALL DEVICES (max-width: 360px)
           ========================================================= */

        @media (max-width: 360px) {
          .quote-page {
            overflow-x: hidden;
          }

          .quote-hero__content {
            padding: 50px 12px 40px;
          }

          .quote-portrait-area {
            padding: 0 0 25px 0;
          }

          .quote-portrait-card {
            width: clamp(190px, 60vw, 230px);
          }

          .quote-portrait-arc--one {
            width: 220px;
            height: 220px;
          }

          .quote-portrait-arc--two {
            width: 190px;
            height: 270px;
          }

          .quote-portrait-glow {
            width: 190px;
            height: 270px;
          }

          .quote-background-mark {
            font-size: 80px;
            left: -35px;
          }

          .quote-main__text {
            font-size: clamp(28px, 7vw, 36px);
            line-height: 1.1;
          }

          .quote-main__mark {
            left: -10px;
            top: -25px;
            font-size: clamp(38px, 10vw, 48px);
          }

          .quote-eyebrow {
            font-size: 9px;
          }

          .quote-short-rule {
            width: 35px;
          }

          .quote-author {
            font-size: 9px;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .quote-author__line {
            display: none;
          }

          .quote-biography {
            font-size: 13px;
            line-height: 1.6;
          }

          .quote-dates {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 22px;
          }

          .quote-date-block {
            flex-direction: row;
            text-align: left;
            gap: 10px;
          }

          .quote-icon {
            width: 35px;
            height: 35px;
            flex: 0 0 auto;
          }

          .quote-date-content {
            text-align: left;
          }

          .quote-date-content b {
            font-size: 9px;
            margin-bottom: 3px;
          }

          .quote-date-content strong {
            font-size: 11px;
          }

          .quote-date-content small {
            font-size: 9px;
          }

          .quote-divider {
            margin: 18px 0 18px;
          }

          .quote-bottom-line {
            left: 12px;
            right: 12px;
            bottom: 10px;
          }

          .quote-request {
            padding: 60px 0;
          }

          .quote-request__inner {
            width: calc(100% - 24px);
            gap: 35px;
          }

          .quote-request__intro h1 {
            font-size: clamp(28px, 8vw, 36px);
            margin-top: 10px;
          }

          .quote-request__intro > p {
            font-size: 13px;
            line-height: 1.6;
          }

          .quote-trust-list {
            gap: 9px;
          }

          .quote-trust-list span {
            font-size: 12px;
          }

          .quote-form-panel {
            padding: 18px 12px;
          }

          .quote-label {
            font-size: 9px;
          }

          .quote-field {
            min-height: 48px;
            padding: 12px 12px;
            font-size: 16px;
          }

          .quote-message {
            min-height: 110px;
          }

          .quote-submit {
            min-height: 50px;
            font-size: 10px;
          }
        }

        /* =========================================================
           MEDIUM PHONES (375px - 430px)
           ========================================================= */

        @media (min-width: 375px) and (max-width: 430px) {
          .quote-hero__content {
            padding: 58px 16px 48px;
          }

          .quote-portrait-card {
            width: clamp(220px, 70vw, 280px);
          }

          .quote-main__text {
            font-size: clamp(35px, 8.8vw, 44px);
          }

          .quote-biography {
            font-size: 15px;
            line-height: 1.68;
          }

          .quote-dates {
            gap: 16px;
          }

          .quote-date-content strong {
            font-size: 13px;
          }

          .quote-date-content small {
            font-size: 11px;
          }
        }

        /* =========================================================
           ACCESSIBILITY / REDUCED MOTION
           ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .quote-portrait-card,
          .quote-submit,
          .quote-field {
            transition: none !important;
          }

          .quote-portrait-card:hover {
            transform: rotateY(0deg) rotateZ(0deg) translateY(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default GetQuote;