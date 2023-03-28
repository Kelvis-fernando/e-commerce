import { useEffect, useState } from "react";
import { store } from "../states/cartState";

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

  return { cartItems, isCartOpen, setIsCartOpen, handleCloseCart };
};

export default useCart;
