import { Service, Blog, Testimonial, NavItem } from '../types';

export const COMPANY_INFO = {
  name: 'TIMGAD',
  fullName: 'TIMGAD Government Transaction Services',
  tagline: 'WHERE PRECISION MEETS EFFICIENCY',
  heroHeading: 'YOUR GATEWAY TO HASSLE-FREE GOVERNMENT SERVICES',
  heroSubheading: 'From company setup to visa processing, TIMGAD streamlines every transaction across the UAE with accuracy, speed, and trust.',
  address: 'Dubai, United Arab Emirates',
  phone: '+971 46658944',
  email: 'business@tim-gad.ae',
  experience: '17+',
  logoUrl: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787084172/NO_BACKGROUND_j3vehs.png'
};

export const NAVIGATION: NavItem[] = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '/about',
    children: [{ name: "Founding CEO's Message", path: '/about/ceo' }]
  },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact Us', path: '/contact' }
];

export const SERVICES: Service[] = [
  {
    id: 'pro-services',
    title: 'PRO SERVICES',
    description: 'Government transactions handled with precision, speed, and complete compliance.',
    longDescription: 'At TIMGAD Government Transaction Services, our dedicated PRO team ensures that your operations remain compliant, efficient, and stress-free. We take the complexity out of government procedures—so you can focus on running your business with confidence.',
    features: [
      'Employee Visa Processing and Renewals',
      'Labour and Immigration Approvals',
      'Trade License Renewal and Modification',
      'Document Attestation and Translation',
      'Emirates ID and Health Card Assistance',
      'Partner and Investor Visa Support'
    ],
    icon: 'Briefcase',
    path: '/services/pro-services',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091278/1_pnahh7.png'
  },
  {
    id: 'business-formation',
    title: 'BUSINESS FORMATION',
    description: 'Professional Mainland and Freezone company setup solutions tailored to your business goals.',
    longDescription: 'Building your business, the right way. We provide comprehensive mainland and freezone company setup solutions designed to align perfectly with your strategic objectives.',
    features: [
      'Trade name reservation',
      'Business licensing',
      'DED registration',
      'Government approvals',
      'Legal documentation',
      'Office and Ejari registration',
      'IFZA, DMCC, SHAMS, RAKEZ Support'
    ],
    icon: 'Building2',
    path: '/services/business-formation',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091279/2_2_yq61i4.png'
  },
  {
    id: 'accounting',
    title: 'BOOKKEEPING & ACCOUNTING',
    description: 'Accurate financial management designed to keep your business organized, transparent and compliant.',
    longDescription: 'Accuracy that builds confidence. Our professional accounting services ensure your financial records are pristine and compliant with UAE regulations.',
    features: [
      'Monthly bookkeeping',
      'VAT registration & filing',
      'Payroll & WPS compliance',
      'Audit preparation',
      'Financial reports',
      'Expense tracking & reconciliation'
    ],
    icon: 'Calculator',
    path: '/services/accounting',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091279/3_xmjh4e.png'
  },
  {
    id: 'bank-account-opening',
    title: 'BANK ACCOUNT OPENING',
    description: 'Professional assistance for seamless UAE business and personal banking setup.',
    longDescription: 'Your gateway to secure and seamless banking. We coordinate with leading UAE banks to facilitate your business and personal account opening requirements.',
    features: [
      'Business account setup',
      'Documentation guidance',
      'KYC support',
      'Banking coordination',
      'Relationship management',
      'Personal account assistance'
    ],
    icon: 'Banknote',
    path: '/services/bank-account-opening',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091280/4_2_soggmk.png'
  },
  {
    id: 'business-consultancy',
    title: 'BUSINESS MANAGEMENT CONSULTANCY',
    description: 'Strategic guidance to help businesses optimize operations, compliance and long-term growth.',
    longDescription: 'Strategic guidance for sustainable growth. Our consultants help you navigate the complexities of the UAE business landscape with confidence.',
    features: [
      'Business strategy',
      'Structure optimization',
      'Licensing roadmap',
      'Expansion planning',
      'Compliance alignment',
      'Operational planning'
    ],
    icon: 'LineChart',
    path: '/services/business-consultancy',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091279/3_xmjh4e.png'
  },
  {
    id: 'marketing-management',
    title: 'MARKETING MANAGEMENT',
    description: 'Strategic digital marketing, branding and market positioning designed for the UAE market.',
    longDescription: 'Empowering brands with strategy and creativity. We help your business stand out in the competitive UAE market with tailored marketing solutions.',
    features: [
      'Digital marketing',
      'Social media management',
      'Branding & Corporate identity',
      'Campaign planning',
      'Market research',
      'Competitor analysis'
    ],
    icon: 'Megaphone',
    path: '/services/marketing-management',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091281/6_2_rsrmud.png'
  },
  {
    id: 'dubai-government-services',
    title: 'DUBAI GOVERNMENT SERVICES',
    description: 'Complete coordination with key Dubai government authorities.',
    longDescription: 'Your direct connection to Dubai authorities. We facilitate transactions with all major government entities in the Emirate.',
    features: [
      'RTA (Vehicle registration, Permits)',
      'DEWA (Connections, Billing)',
      'RERA (Ejari, Property docs)',
      'DHA (Medical fitness, Health cards)',
      'Dubai Municipality (Inspections, Permits)',
      'KHDA (Education approvals)'
    ],
    icon: 'Gavel',
    path: '/services/dubai-government-services',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091280/7_y74ry9.png'
  },
  {
    id: 'sharjah-government-services',
    title: 'SHARJAH GOVERNMENT SERVICES',
    description: 'Professional support for government transactions across Sharjah.',
    longDescription: 'Your trusted partner for Sharjah government procedures. We ensure efficient handling of all administrative requirements in Sharjah.',
    features: [
      'SEWA (Electricity and water)',
      'SRTA (Transport procedures)',
      'Bee’ah (Waste & Sustainability)',
      'Sharjah Planning Department',
      'SEDD (Trade license issuance)',
      'Amendments & Renewals'
    ],
    icon: 'Landmark',
    path: '/services/sharjah-government-services',
    image: 'https://res.cloudinary.com/dfjezzfhc/image/upload/v1787091280/8_g7cup7.png'
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'compliance-cornerstone',
    title: 'The Power of Compliance: Why It’s the Cornerstone of Doing Business in the UAE',
    category: 'Compliance',
    date: 'August 15, 2026',
    excerpt: 'Understanding UAE regulations is not just about following rules—it is about building a sustainable and trusted business entity.',
    content: 'Full article content about compliance...',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    path: '/blogs/compliance'
  },
  {
    id: 'pro-services-importance',
    title: 'The Importance of PRO Services in the UAE: Simplifying Business Operations',
    category: 'PRO Services',
    date: 'August 10, 2026',
    excerpt: 'How professional government transaction handling can save your business time, money, and administrative headaches.',
    content: 'Full article content about PRO services...',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    path: '/blogs/pro-services'
  },
  {
    id: 'business-setup-guide',
    title: 'How to Set Up a Business in the UAE: A Complete Guide for Entrepreneurs',
    category: 'Business Setup',
    date: 'August 05, 2026',
    excerpt: 'A comprehensive roadmap for navigating Mainland and Freezone company formation in the United Arab Emirates.',
    content: 'Full article content about business setup...',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    path: '/blogs/business-setup'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Zahra',
    content: 'As a business owner, I needed a partner who truly understands UAE regulations. TIMGAD exceeded my expectations—their support team is knowledgeable, responsive, and genuinely cares about client success.'
  },
  {
    id: '2',
    name: 'Rahman',
    content: 'The level of transparency and efficiency I experienced with TIMGAD is rare. From visa processing to banking coordination, everything was managed smoothly and with complete clarity.'
  },
  {
    id: '3',
    name: 'Ahmed Al Mansoori',
    content: 'TIMGAD made the entire company setup process effortless. Their team handled every document and approval with unmatched professionalism. I was impressed by their precision and commitment to timelines.'
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    content: 'Exceptional service for my startup in DMCC. They handled everything from license issuance to residence visas perfectly. Highly recommend their professional approach.'
  },
  {
    id: '5',
    name: 'Khaled Bin Rashid',
    content: 'Reliable and expert PRO services. TIMGAD has been managing our corporate renewals for years with zero delays. They are truly an extension of our own team.'
  },
  {
    id: '6',
    name: 'Elena Petrova',
    content: 'The accounting team is incredibly detail-oriented. They helped us organize our VAT filing and ensured we were 100% compliant with the latest UAE laws.'
  },
  {
    id: '7',
    name: 'Michael Chen',
    content: 'Opening a corporate bank account in Dubai can be complex, but TIMGAD guided us through every step. Their banking relationships made the process much faster than expected.'
  },
  {
    id: '8',
    name: 'Fatima Al Sayed',
    content: 'I appreciate their honest consultancy. They gave us the right roadmap for our expansion into Sharjah Mainland, saving us significant costs in the long run.'
  }
];

export const SLIDES = [
  {
    video: "https://res.cloudinary.com/dfjezzfhc/video/upload/v1787131273/1_home_mdkzx5.mp4",
    eyebrow: "WHERE PRECISION MEETS EFFICIENCY",
    title: {
      part1: "YOUR GATEWAY TO",
      highlight: "HASSLE-FREE",
      part2: "GOVERNMENT SERVICES"
    },
    description: "From company setup to visa processing, TIMGAD streamlines every transaction across the UAE with accuracy, speed, and trust.",
    buttonLabel: "EXPLORE SERVICES",
    buttonPath: "/services"
  },
  {
    video: "https://res.cloudinary.com/dfjezzfhc/video/upload/v1787131953/home_2_z2bflt.mp4",
    eyebrow: "ELITE BUSINESS CONSULTANCY",
    title: {
      part1: "STRATEGIC SOLUTIONS",
      highlight: "DESIGNED",
      part2: "FOR YOUR GROWTH"
    },
    description: "Expert guidance for Mainland and Freezone business formation, legal compliance, and operational management in the UAE.",
    buttonLabel: "ABOUT TIMGAD",
    buttonPath: "/about"
  }
];
