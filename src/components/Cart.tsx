import {
  CartContainer,
  CartContent,
  CloseCart,
  TotalCart,
} from "../styles/cart";
import { CartProps } from "../types/cart";
import { X, Trash } from "phosphor-react";
import { ProductCardProps } from "../types/productCardProps";
import useCart from "../hooks/useCart";

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { handleRemoveItem, cartItems } = useCart();

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
            <div>Nome</div>
            <span>Preço</span>
            <span>Qtd</span>
            <span></span>
          </li>
        </ul>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item: ProductCardProps, index: number) => (
              <li key={index}>
                <div>{item?.name}</div>
                <span>R$ {item?.price}</span>
                <span>{item?.quantity}</span>
                <span>
                  <Trash size={16} onClick={() => handleRemoveItem(item)} />
                </span>
              </li>
            ))
          ) : (
            <li>
              <span>nenhum item adicionado</span>
            </li>
          )}
        </ul>
        <TotalCart>
          <h1>Total:</h1>
          <p>
            R${" "}
            {cartItems
              .map((price) => price.price)
              .reduce((total, actual) => {
                return total + actual;
              }, 0)
              .toFixed(2)}
          </p>
        </TotalCart>
        <button>Finalizar compra</button>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
