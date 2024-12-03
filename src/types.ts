// Update Product interface to include subcategory
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  media: ProductMedia[];
  category: string;
  subcategory?: string;
  inStock?: boolean;
  sizes?: string[];
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductGridProps {
  title: string;
  description: string;
  products: Product[];
  heroImage?: string;
  showHeader?: boolean;
  onAddToCart?: (product: Product, size: string) => void;
  onAddToWaitlist?: (product: Product, email: string, size: string) => void;
  isAdmin?: boolean;
  onProductUpdate?: (product: Product) => void;
}

export interface ProductFiltersProps {
  filters: Array<{
    id: string;
    label: string;
    options: string[];
  }>;
  selectedFilters: Record<string, string[]>;
  onFilterChange: (filterId: string, values: string[]) => void;
  onClearFilters: () => void;
  drawerPosition?: 'left' | 'right';
}

export interface ProductMedia {
  url: string;
  type: 'image' | 'video';
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface UserProfile {
  id: string;
  name?: string;
  email: string;
  phone?: string;
  photoURL?: string;
  createdAt?: string;
  updatedAt?: string;
}