import {
  CardAction,
  CardButton,
  ProductCardContainer,
} from "../../styles/products/productCard";
import { ProductCardProps } from "../../types/productCardProps";
import Quantity from "../layout/Quantity";

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
      <CardAction>
        <CardButton>Comprar</CardButton>
        <Quantity />
      </CardAction>
    </ProductCardContainer>
  );
};

export default ProductCard;
