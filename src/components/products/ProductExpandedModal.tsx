import { ProductExpandedModalContainer } from "../../styles/products/productExpandedModal";

interface ProductExpandedProps {
  product: any;
}

const ProductExpandedModal = ({ product }: ProductExpandedProps) => {
  console.log(product);
  return (
    <ProductExpandedModalContainer>
      <div>
        <h1>{product?.title}</h1>
        <div>{product?.brand}</div>
        <div>{product?.price}</div>
      </div>
      <img src={product?.image} alt="product" />
    </ProductExpandedModalContainer>
  );
};

export default ProductExpandedModal;
