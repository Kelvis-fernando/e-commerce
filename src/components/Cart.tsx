import { CartContainer, CartContent, CloseCart } from "../styles/cart";
import { CartProps } from "../types/cart";
import { X, Trash } from "phosphor-react";

const Cart = ({ isOpen, onClose }: CartProps) => {
  if (!isOpen) return null;

  return (
    <CartContainer isOpen={isOpen}>
      <CartContent>
        <CloseCart>
          <X onClick={onClose} />
        </CloseCart>
        <h1>Carrinho</h1>
        <ul>
          <li>
            <span>Item 1</span>
            <Trash size={16} />
          </li>
        </ul>
        <button>Finalizar compra</button>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
