export interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  image?: string;
  price: string;
  description?: string;
  product?: ProductCardProps;
  classification?: string;
  notes?: string;
  itensity?: string;
  origin?: string;
  quantity?: number;
  type?: string;
  typeRoast?: string;
}
