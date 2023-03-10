import { useState } from "react";

const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return { isCartOpen, setIsCartOpen, handleCloseCart };
};

export default useCart;
