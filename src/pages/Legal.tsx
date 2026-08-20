import React from 'react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../data/company';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  const sections = isPrivacy
    ? [
        ['Introduction', 'TIMGAD Government Transaction Services respects your privacy. This policy explains what information we may collect through this website, how we use it, and the choices available to you when you contact us.'],
        ['Information We Collect', 'We may collect information you submit through contact, quote, or inquiry forms, such as your name, email address, phone number, company name, selected service, and message. We may also receive technical information such as browser type, device information, approximate location, and website usage data.'],
        ['How We Use Information', 'We use information to respond to inquiries, prepare requested information or quotations, coordinate services, communicate about your request, improve the website, and help protect the security and reliability of our services.'],
        ['Information Sharing', 'We do not sell personal information. We may share information when needed to respond to your request, coordinate a service you have asked for, use a trusted service provider, comply with a legal obligation, or protect our rights and the security of the website.'],
        ['Data Security', 'We use reasonable administrative, technical, and organizational measures to protect information. No method of transmission or storage is completely secure, so absolute security cannot be promised.'],
        ['Data Retention', 'We retain information only for as long as reasonably necessary for the purpose for which it was collected, to maintain business records, resolve issues, or meet applicable legal and operational requirements.'],
        ['Cookies and Tracking Technologies', 'The website may use cookies or similar technologies to support essential functionality, understand website usage, and improve the experience. You can control cookies through your browser settings, although disabling them may affect some features.'],
        ['Third-Party Services', 'The website may use third-party services such as hosting, analytics, translation, media, or communication providers. Those providers may process information under their own terms and privacy practices.'],
        ['Your Rights', 'Depending on applicable law, you may have the right to request access to, correction of, or deletion of personal information, or to ask questions about its use. Contact us using the details below to make a request.'],
        ["Children's Privacy", 'This website is intended for business and general audiences and is not directed to children. We do not knowingly request personal information from children.'],
        ['Changes to This Privacy Policy', 'We may update this policy when our practices, services, or legal requirements change. The updated version will be posted on this page with the revised content.'],
        ['Contact Us', `For privacy questions or requests, contact ${COMPANY_INFO.fullName} at ${COMPANY_INFO.email} or ${COMPANY_INFO.phone}.`]
      ]
    : [
        ['Introduction', 'These Terms & Conditions govern your use of the TIMGAD Government Transaction Services website. By using the website, you agree to use it lawfully and respectfully.'],
        ['Definitions', '“TIMGAD”, “we”, “us”, and “our” refer to TIMGAD Government Transaction Services. “Website” means this website and its content. “You” means a visitor, user, client, or person submitting an inquiry.'],
        ['Our Services', 'We provide information about government transaction support, PRO services, company formation, accounting, banking support, consultancy, and related business services in the UAE. The exact scope, requirements, timelines, and availability of any service depend on the individual request and applicable authority requirements.'],
        ['Use of the Website', 'You may use the website for lawful informational and communication purposes. You must not misuse the website, interfere with its operation, attempt unauthorized access, or use its content in a way that violates applicable law or another person’s rights.'],
        ['User Responsibilities', 'You are responsible for providing information that is accurate, complete, and current when submitting an inquiry or requesting a service. You should promptly tell us if relevant information changes.'],
        ['Government Transaction Services', 'TIMGAD coordinates and supports transactions but does not control the decisions, processing times, requirements, fees, or systems of government authorities or other third parties. Approval and completion depend on the relevant authority and the facts of each case.'],
        ['Accuracy of Information', 'We aim to keep website information useful and current, but requirements and procedures can change. Website content is general information and is not a substitute for advice specific to your circumstances.'],
        ['Fees and Payments', 'Fees, government charges, deposits, payment timing, and refund terms will be communicated for the relevant service or engagement. Government and third-party charges may be separate from our professional fees.'],
        ['Intellectual Property', 'The website and its text, branding, graphics, images, and other content belong to TIMGAD or its licensors unless stated otherwise. You may not reproduce, modify, distribute, or commercially exploit that content without permission.'],
        ['Confidentiality', 'We handle information shared in connection with an inquiry or engagement with reasonable care. Specific confidentiality obligations may also be set out in a separate written agreement or engagement document.'],
        ['Third-Party Services', 'The website may link to or use third-party services. We are not responsible for third-party websites, content, availability, policies, or actions, and your use of them may be subject to their terms.'],
        ['Limitation of Liability', 'To the extent permitted by applicable law, TIMGAD is not liable for indirect, incidental, or consequential loss arising from use of the website, reliance on general information, or delays or decisions made by government authorities or third parties.'],
        ['Indemnification', 'You agree to be responsible for losses or claims resulting from your unlawful use of the website, your breach of these terms, or information you knowingly provide that is inaccurate or misleading.'],
        ['Termination', 'We may suspend or restrict access to the website where reasonably necessary for security, maintenance, legal compliance, or protection of our services and users.'],
        ['Governing Law', 'These terms are governed by the applicable laws of the United Arab Emirates, subject to any mandatory rights or requirements that apply to you.'],
        ['Changes to These Terms', 'We may update these terms as the website, services, or applicable requirements change. The updated terms will be posted on this page.'],
        ['Contact Us', `For questions about these terms, contact ${COMPANY_INFO.fullName} at ${COMPANY_INFO.email} or ${COMPANY_INFO.phone}.`]
      ];

  return (
    <div className="bg-ivory pb-24">
      <SEO title={`${title} | ${COMPANY_INFO.fullName}`} description={`${title} for ${COMPANY_INFO.fullName}.`} />
      <section className="relative overflow-hidden bg-black py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <p className="eyebrow">TIMGAD GOVERNMENT TRANSACTION SERVICES</p>
          <h1 className="h-hero mt-6 max-w-4xl text-white">{title}</h1>
        </div>
      </section>
      <section className="section-py bg-ivory">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <article className="space-y-9 text-[#233d00] md:space-y-12">
            <p className="max-w-3xl text-base leading-relaxed md:text-lg">{sections[0][1]}</p>
            {sections.slice(1).map(([heading, content]) => (
              <section key={heading} className="border-t border-black/10 pt-7 md:pt-9">
                <h2 className="mb-3 text-2xl text-dark-text md:text-3xl">{heading}</h2>
                <p className="max-w-3xl text-[15px] leading-7 md:text-base">{content}</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </div>
  );
};

export default Legal;