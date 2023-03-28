import { useState } from "react";

const useQuantity = () => {
  let [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity(++quantity);
  };

  const handleDecrement = () => {
    setQuantity(--quantity);
  };

  return { handleIncrement, handleDecrement, quantity };
};

export default useQuantity;
