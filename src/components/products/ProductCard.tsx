import { useModal } from "../../hooks/layout/useModal";
import {
  CardAction,
  CardButton,
  ProductCardContainer,
} from "../../styles/products/productCard";
import { ProductCardProps } from "../../types/productCardProps";
import Modal from "../layout/Modal";
import Quantity from "../layout/Quantity";
import ProductExpandedModal from "./ProductExpandedModal";

const ProductCard = ({
  id,
  name,
  brand,
  image,
  price,
  description,
  product,
}: ProductCardProps) => {
  const { handleModalClose, isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      <ProductCardContainer>
        <div onClick={() => setIsModalOpen(true)}>
          <img src={image} alt="product" />
          <h1>{name}</h1>
          <h2>
            <span>$ {price}</span>
            <span>{brand}</span>
          </h2>
        </div>
        <CardAction>
          <CardButton>Comprar</CardButton>
          <Quantity />
        </CardAction>
      </ProductCardContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ProductExpandedModal product={product} />
      </Modal>
    </>
  );
};

export default ProductCard;
