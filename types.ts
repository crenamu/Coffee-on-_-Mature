export interface NavItem {
  label: string;
  href: string;
}

export interface StorySection {
  title: string;
  content: string;
  image: string;
  alt: string;
  reversed?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}