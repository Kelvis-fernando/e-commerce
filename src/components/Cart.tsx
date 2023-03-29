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
import Toast from "./Toast";
import useToast from "../hooks/useToast";

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { handleRemoveItem, cartItems } = useCart();
  const { showToast, handleCloseToast, handleButtonClick } = useToast();

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
                <span>{item?.qtdAddedToCart}</span>
                <span>
                  <Trash
                    size={16}
                    onClick={() => {
                      handleRemoveItem(item);
                      handleButtonClick();
                    }}
                  />
                </span>
              </li>
            ))
          ) : (
            <li>Nenhum item adicionado</li>
          )}
        </ul>
        <TotalCart>
          <h1>Total:</h1>
          <p>
            R${" "}
            {cartItems
              .map((price) =>
                typeof price.price === "number" &&
                typeof price.qtdAddedToCart === "number"
                  ? price.price * price.qtdAddedToCart
                  : 0
              )
              .reduce((total, actual) => {
                return total + actual;
              }, 0)
              .toFixed(2)}
          </p>
        </TotalCart>
        <button>Finalizar compra</button>
      </CartContent>
      {showToast && (
        <Toast
          typeOfToast="success"
          message="Produto removido do carrinho"
          onClose={handleCloseToast}
        />
      )}
    </CartContainer>
  );
};

export default Cart;
