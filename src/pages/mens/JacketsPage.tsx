import { useProducts } from '../../contexts/ProductContext';
import ProductGrid from '../../components/ProductGrid';
import { Product } from '../../types';

interface JacketsPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
  isAdmin?: boolean;
}

export default function JacketsPage({ onAddToCart, onAddToWaitlist, isAdmin }: JacketsPageProps) {
  const { products, updateProduct } = useProducts();
  const jackets = products.filter(p => p.category === 'Men' && p.subcategory === 'Jackets');

  return (
    <ProductGrid
      title="Men's Jackets"
      description="Premium jackets and outerwear"
      products={jackets}
      onAddToCart={onAddToCart}
      onAddToWaitlist={onAddToWaitlist}
      isAdmin={isAdmin}
      onProductUpdate={updateProduct}
    />
  );
}