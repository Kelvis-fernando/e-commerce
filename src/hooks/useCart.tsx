import { useEffect, useState } from "react";
import { removeItemFromCart, store } from "../states/cartState";
import { ProductCardProps } from "../types/productCardProps";

const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState(store.getState().items);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCartItems(store.getState().items);
    });
    return unsubscribe;
  }, []);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleRemoveItem = (item: ProductCardProps) => {
    store.dispatch(removeItemFromCart(item.id ?? 0));
  };

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    handleCloseCart,
    handleRemoveItem,
  };
};

export default useCart;
