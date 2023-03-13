import { ProductCardContainer } from "../../styles/products/productCard";
import { ProductCardProps } from "../../types/productCardProps";

const ProductCard = ({
  id,
  title,
  brand,
  image,
  price,
  description,
}: ProductCardProps) => {
  return (
    <ProductCardContainer onClick={() => console.log(id)}>
      <img src={image} alt="product" />
      <h1>{title}</h1>
      <h2>{`$${price} ${brand}`}</h2>
      <p>{description}</p>
    </ProductCardContainer>
  );
};

export default ProductCard;
