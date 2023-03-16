export interface ProductCardProps {
  id: number;
  title: string;
  brand: string;
  image?: string;
  price: string;
  description?: string;
  product?: ProductCardProps;
  classification?: string;
  notes?: string;
  itensity?: string;
  origin?: string;
  typeRoast?: string;
}
