export interface ColorSwatch {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  collection: string;
  category: 'seating' | 'tables' | 'bedroom' | 'storage' | 'lighting' | 'decor';
  room: 'living' | 'bedroom' | 'dining' | 'office';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  details: string[];
  dimensions: string;
  materials: string;
  image: string;
  secondaryImage?: string;
  colorSwatches: ColorSwatch[];
  badge?: 'New Arrival' | 'Bestseller' | 'Architect Favorite' | 'Limited Edition';
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: ColorSwatch;
}

export interface RoomCategory {
  id: string;
  title: string;
  subtitle: string;
  roomKey: 'living' | 'bedroom' | 'dining' | 'office';
  image: string;
  itemCount: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  city: string;
  rating: number;
  avatar: string;
  featuredProduct: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  roomType: string;
  preferredDate: string;
  projectBudget: string;
  notes: string;
}
