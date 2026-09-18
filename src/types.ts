export interface NavItem {
  label: string;
  href: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  timeRange: string;
  period: 'weekend' | 'weekday';
  price: number;
  priceFormatted: string;
  originalPrice?: string;
  description: string;
  poolIncluded: boolean;
  features: string[];
  popular?: boolean;
}

export interface GalleryMediaItem {
  id: string;
  type: 'image';
  url: string;
  previewUrl: string;
  title: string;
  category: 'all' | 'piscina' | 'eventos' | 'estrutura';
  alt: string;
  caption?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  avatarText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guestsCount: string;
  message: string;
}
