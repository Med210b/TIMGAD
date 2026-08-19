export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  path: string;
  image?: string;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
}

export interface NavItem {
  name: string;
  path: string;
}
