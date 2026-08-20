import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_6rngir4';
const EMAILJS_TEMPLATE_ID = 'template_uuei5x2';
const EMAILJS_PUBLIC_KEY = 'XmWXpAqv08Wdberqv';

interface QuoteFormProps {
  submitLabel?: string;
  successMessage?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({
  submitLabel = 'SUBMIT REQUEST',
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (isSuccess) {
      setIsSuccess(false);
    }

    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);
    setIsSuccess(false);
    setErrorMessage('');

    const fullName = formData.fullName.trim();

    try {
      const templateParams = {
        name: fullName,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        companyName: formData.companyName.trim(),
        service: formData.service,
        contactMethod: formData.contactMethod,
        message: formData.message.trim(),
        time: new Date().toLocaleString('en-AE', {
          timeZone: 'Asia/Dubai',
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        title: 'TIMGAD Website Enquiry',
      };

      console.log('Sending EmailJS quote request:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        templateParams,
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
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
        'We could not send your request right now. Please try again or contact us directly by email.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {isSuccess && (
        <div className="quote-status quote-status--success">
          <CheckCircle2 size={22} />

          <div>
            <strong>
              Thank you, {submittedName}!
            </strong>

            <p>
              Your request has been received successfully.
              Our team will review your requirements and contact you shortly.
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="quote-status quote-status--error">
          <AlertCircle size={22} />

          <div>
            <strong>Something went wrong</strong>

            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="quote-form"
        noValidate
      >
        <div className="quote-form-grid">

          {/* Full Name */}
          <div>
            <label
              htmlFor="shared-quote-full-name"
              className="quote-label"
            >
              Full Name
            </label>

            <input
              id="shared-quote-full-name"
              name="fullName"
              className="quote-field"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="shared-quote-company-name"
              className="quote-label"
            >
              Company Name
            </label>

            <input
              id="shared-quote-company-name"
              name="companyName"
              className="quote-field"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="shared-quote-email"
              className="quote-label"
            >
              Email Address
            </label>

            <input
              id="shared-quote-email"
              name="email"
              className="quote-field"
              type="email"
              required
              autoComplete="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="shared-quote-phone"
              className="quote-label"
            >
              Phone Number
            </label>

            <input
              id="shared-quote-phone"
              name="phone"
              className="quote-field"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="+971 -- --- ----"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="shared-quote-service"
              className="quote-label"
            >
              Service of Interest
            </label>

            <select
              id="shared-quote-service"
              name="service"
              className="quote-field"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="PRO Services">
                PRO Services
              </option>

              <option value="Business Formation">
                Business Formation
              </option>

              <option value="Accounting Solutions">
                Accounting Solutions
              </option>

              <option value="Elite Consultancy">
                Elite Consultancy
              </option>

              <option value="Other Specialized Services">
                Other Specialized Services
              </option>
            </select>
          </div>

          {/* Preferred Contact */}
          <div>
            <label
              htmlFor="shared-quote-contact-method"
              className="quote-label"
            >
              Preferred Contact
            </label>

            <select
              id="shared-quote-contact-method"
              name="contactMethod"
              className="quote-field"
              value={formData.contactMethod}
              onChange={handleChange}
            >
              <option value="email">
                Email
              </option>

              <option value="phone">
                Phone Call
              </option>

              <option value="whatsapp">
                WhatsApp
              </option>
            </select>
          </div>

        </div>

        {/* Requirements */}
        <div>
          <label
            htmlFor="shared-quote-message"
            className="quote-label"
          >
            Requirements Details
          </label>

          <textarea
            id="shared-quote-message"
            name="message"
            className="quote-field quote-message"
            rows={5}
            placeholder="Briefly describe your requirements"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="quote-submit"
          disabled={isSending}
        >
          {isSending ? (
            <>
              <span>SENDING...</span>
              <Loader2
                size={17}
                className="animate-spin"
              />
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
        .quote-status {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
          padding: 18px;
          border-radius: 4px;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .quote-status svg {
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .quote-status strong {
          display: block;
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: 5px;
        }

        .quote-status p {
          margin: 0;
          font-size: 13px;
          line-height: 1.65;
        }

        .quote-status--success {
          border: 1px solid rgba(100, 180, 120, 0.35);
          background: rgba(70, 140, 85, 0.10);
          color: #e9f6ec;
        }

        .quote-status--success svg {
          color: #80c88c;
        }

        .quote-status--error {
          border: 1px solid rgba(210, 80, 80, 0.35);
          background: rgba(150, 50, 50, 0.10);
          color: #f5e9e9;
        }

        .quote-status--error svg {
          color: #e58b8b;
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
          color: #e0b64d;
          font-family: Georgia, 'Times New Roman', serif;
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
          font-family: Georgia, 'Times New Roman', serif;
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
          box-shadow: 0 0 0 3px rgba(201, 154, 46, 0.07);
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
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(201, 154, 46, 0.16);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            filter 0.25s ease,
            opacity 0.25s ease;
        }

        .quote-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.06);
          box-shadow: 0 18px 35px rgba(201, 154, 46, 0.25);
        }

        .quote-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .quote-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        @media (max-width: 820px) {
          .quote-form {
            gap: 20px;
          }

          .quote-form-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .quote-field {
            min-height: 50px;
            font-size: 16px;
            padding: 14px;
          }

          .quote-message {
            min-height: 120px;
          }

          .quote-submit {
            min-height: 54px;
            font-size: 10px;
          }
        }

        @media (max-width: 430px) {
          .quote-form {
            gap: 18px;
          }

          .quote-form-grid {
            gap: 16px;
          }

          .quote-label {
            font-size: 9px;
          }

          .quote-field {
            font-size: 16px;
            padding: 12px;
          }

          .quote-message {
            min-height: 110px;
          }
        }
      `}</style>
    </>
  );
};

export default QuoteForm;