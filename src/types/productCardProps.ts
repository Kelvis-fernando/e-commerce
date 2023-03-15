export interface ProductCardProps {
  id: string;
  title: string;
  brand: string;
  image?: string;
  price: string;
  description?: string;
  product?: ProductCardProps
}
