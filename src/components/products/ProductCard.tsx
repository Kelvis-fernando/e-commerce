import { useModal } from "../../hooks/layout/useModal";
import useQuantity from "../../hooks/layout/useQuantity";
import { addItemToCart, store } from "../../states/cartState";
import { QuantityContainer } from "../../styles/layout/quantity";
import {
  CardAction,
  CardButton,
  ProductCardContainer,
} from "../../styles/products/productCard";
import { ProductCardProps } from "../../types/productCardProps";
import Modal from "../layout/Modal";
import ProductExpandedModal from "./ProductExpandedModal";

const ProductCard = ({
  name,
  brand,
  image,
  price,
  product,
}: ProductCardProps) => {
  const { handleModalClose, isModalOpen, setIsModalOpen } = useModal();
  const { handleIncrement, handleDecrement, quantity } = useQuantity();

  return (
    <>
      <ProductCardContainer>
        <div onClick={() => setIsModalOpen(true)}>
          <img src={image} alt="product" />
          <h1>{name}</h1>
          <h2>
            <span>R$ {price}</span>
            <span>{brand}</span>
          </h2>
        </div>
        <CardAction>
          <QuantityContainer>
            <button onClick={handleIncrement}>+</button>
            <div>{quantity}</div>
            <button onClick={handleDecrement}>-</button>
          </QuantityContainer>
          <CardButton
            onClick={() =>
              store.dispatch(
                addItemToCart({ ...product, qtdAddedToCart: quantity })
              )
            }
          >
            Comprar
          </CardButton>
        </CardAction>
      </ProductCardContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ProductExpandedModal product={product} />
      </Modal>
    </>
  );
};

export default ProductCard;
