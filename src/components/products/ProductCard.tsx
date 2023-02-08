import { ProductCardContainer } from "../../styles/products/productCard";
import { ProductCardProps } from "../../types/productCardProps";

const ProductCard = ({ id, title, brand, image, price }: ProductCardProps) => {
  return (
    <ProductCardContainer onClick={() => console.log(id)}>
      <img src={image} alt="product" />
      <h1>{title}</h1>
      <h2>{brand}</h2>
      <h3>${price}</h3>
    </ProductCardContainer>
  );
};  

export default ProductCard;
