import React, { useState } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_6rngir4';
const EMAILJS_TEMPLATE_ID = 'template_uuei5x2';
const EMAILJS_PUBLIC_KEY = 'YUuoK7doYvXYRI6AX';

interface QuoteFormProps {
  submitLabel?: string;
  title?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({
  submitLabel = 'SUBMIT REQUEST',
  title = 'TIMGAD Website Enquiry',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    contactMethod: 'email',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (isSuccess) setIsSuccess(false);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setIsSuccess(false);
    setErrorMessage('');

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const companyName = formData.companyName.trim();
    const message = formData.message.trim();

    try {
      const templateParams = {
        name: fullName,
        email,
        phone,
        companyName,
        service: formData.service,
        contactMethod: formData.contactMethod,
        message,
        time: new Date().toLocaleString('en-AE', {
          timeZone: 'Asia/Dubai',
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        title,
        from_name: fullName,
        reply_to: email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setSubmittedName(fullName || 'there');
      setIsSuccess(true);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        service: '',
        contactMethod: 'email',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS submission error:', error);
      setErrorMessage(
        'We could not send your request right now. Please try again or contact us directly by email.',
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="shared-quote-form">
      {isSuccess && (
        <div className="shared-quote-status shared-quote-status--success" role="status">
          <CheckCircle2 size={22} />
          <div>
            <strong>Thank you, {submittedName}!</strong>
            <p>
              Your request has been received successfully. Our team will review your
              requirements and contact you shortly.
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="shared-quote-status shared-quote-status--error" role="alert">
          <AlertCircle size={22} />
          <div>
            <strong>Something went wrong</strong>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="shared-quote-form__form">
        <div className="shared-quote-form__grid">
          <div className="shared-quote-field-group">
            <label htmlFor="shared-full-name">Full Name</label>
            <input
              id="shared-full-name"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="shared-quote-field-group">
            <label htmlFor="shared-company-name">Company Name</label>
            <input
              id="shared-company-name"
              name="companyName"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="shared-quote-field-group">
            <label htmlFor="shared-email">Email Address</label>
            <input
              id="shared-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="shared-quote-field-group">
            <label htmlFor="shared-phone">Phone Number</label>
            <input
              id="shared-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="+971 -- --- ----"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="shared-quote-field-group">
            <label htmlFor="shared-service">Service of Interest</label>
            <select
              id="shared-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="PRO Services">PRO Services</option>
              <option value="Business Formation">Business Formation</option>
              <option value="Accounting Solutions">Accounting Solutions</option>
              <option value="Elite Consultancy">Elite Consultancy</option>
              <option value="Other Specialized Services">Other Specialized Services</option>
            </select>
          </div>

          <div className="shared-quote-field-group">
            <label htmlFor="shared-contact-method">Preferred Contact</label>
            <select
              id="shared-contact-method"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
        </div>

        <div className="shared-quote-field-group">
          <label htmlFor="shared-message">Requirements Details</label>
          <textarea
            id="shared-message"
            name="message"
            rows={5}
            placeholder="Briefly describe your requirements"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={isSending} className="shared-quote-submit">
          {isSending ? (
            <>
              <span>SENDING...</span>
              <Loader2 size={17} className="animate-spin" />
            </>
          ) : (
            <>
              <span>{submitLabel}</span>
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </form>

      <style>{`
        .shared-quote-form {
          width: 100%;
        }

        .shared-quote-form__form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .shared-quote-form__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .shared-quote-field-group {
          min-width: 0;
        }

        .shared-quote-field-group label {
          display: block;
          margin-bottom: 9px;
          color: #e0b64d;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .shared-quote-field-group input,
        .shared-quote-field-group select,
        .shared-quote-field-group textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(244, 241, 233, 0.15);
          border-radius: 2px;
          outline: none;
          background: rgba(255, 255, 255, 0.045);
          color: #f4f1e9;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 14px;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }

        .shared-quote-field-group input,
        .shared-quote-field-group select {
          min-height: 48px;
          padding: 13px 15px;
        }

        .shared-quote-field-group textarea {
          min-height: 140px;
          padding: 13px 15px;
          resize: vertical;
        }

        .shared-quote-field-group input::placeholder,
        .shared-quote-field-group textarea::placeholder {
          color: rgba(244, 241, 233, 0.38);
        }

        .shared-quote-field-group input:focus,
        .shared-quote-field-group select:focus,
        .shared-quote-field-group textarea:focus {
          border-color: rgba(201, 154, 46, 0.7);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 0 3px rgba(201, 154, 46, 0.07);
        }

        .shared-quote-field-group select {
          appearance: none;
          padding-right: 38px;
          background-image:
            linear-gradient(45deg, transparent 50%, #c99a2e 50%),
            linear-gradient(135deg, #c99a2e 50%, transparent 50%);
          background-position:
            calc(100% - 17px) 21px,
            calc(100% - 12px) 21px;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
        }

        .shared-quote-field-group select option {
          color: #111;
          background: #f4f1e9;
        }

        .shared-quote-submit {
          width: 100%;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          border: 1px solid #d6ab3d;
          border-radius: 2px;
          background: linear-gradient(135deg, #b88420, #d1a338 50%, #b88420);
          color: #080909;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(201, 154, 46, 0.16);
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease, opacity 0.25s ease;
        }

        .shared-quote-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.06);
          box-shadow: 0 18px 35px rgba(201, 154, 46, 0.25);
        }

        .shared-quote-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .shared-quote-status {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
          padding: 18px;
          border-radius: 3px;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .shared-quote-status svg {
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .shared-quote-status strong {
          display: block;
          margin-bottom: 5px;
          font-size: 16px;
          line-height: 1.4;
        }

        .shared-quote-status p {
          margin: 0;
          font-size: 13px;
          line-height: 1.65;
        }

        .shared-quote-status--success {
          border: 1px solid rgba(100, 180, 120, 0.35);
          background: rgba(70, 140, 85, 0.10);
          color: #e9f6ec;
        }

        .shared-quote-status--success svg {
          color: #80c88c;
        }

        .shared-quote-status--error {
          border: 1px solid rgba(210, 80, 80, 0.35);
          background: rgba(150, 50, 50, 0.10);
          color: #f5e9e9;
        }

        .shared-quote-status--error svg {
          color: #e58b8b;
        }

        @media (max-width: 820px) {
          .shared-quote-form__form {
            gap: 20px;
          }

          .shared-quote-form__grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .shared-quote-field-group input,
          .shared-quote-field-group select,
          .shared-quote-field-group textarea {
            font-size: 16px;
          }

          .shared-quote-field-group input,
          .shared-quote-field-group select {
            min-height: 50px;
            padding: 14px;
          }

          .shared-quote-field-group textarea {
            min-height: 120px;
          }

          .shared-quote-submit {
            min-height: 54px;
            font-size: 10px;
          }
        }

        @media (max-width: 430px) {
          .shared-quote-form__form {
            gap: 18px;
          }

          .shared-quote-form__grid {
            gap: 16px;
          }

          .shared-quote-field-group label {
            font-size: 9px;
          }

          .shared-quote-field-group input,
          .shared-quote-field-group select,
          .shared-quote-field-group textarea {
            font-size: 16px;
          }

          .shared-quote-status {
            padding: 14px;
          }

          .shared-quote-status p {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuoteForm;
