import {
  CartContainer,
  CartContent,
  CloseCart,
  TotalCart,
} from "../styles/cart";
import { CartProps } from "../types/cart";
import { X, Trash } from "phosphor-react";
import { removeItemFromCart, store } from "../states/cartState";
import { ProductCardProps } from "../types/productCardProps";
import { useState, useEffect } from "react";

const Cart = ({ isOpen, onClose }: CartProps) => {
  const [cartItems, setCartItems] = useState(store.getState().items);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCartItems(store.getState().items);
    });
    return unsubscribe;
  }, []);

  const handleRemoveItem = (item: ProductCardProps) => {
    store.dispatch(removeItemFromCart(item.id));
  };

  if (!isOpen) return null;
  return (
    <CartContainer isOpen={isOpen}>
      <CartContent>
        <CloseCart>
          <X onClick={onClose} />
        </CloseCart>
        <h1>Carrinho</h1>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item: ProductCardProps, index: number) => (
              <li key={index}>
                <span>{item?.name}</span>
                <Trash size={16} onClick={() => handleRemoveItem(item)} />
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
