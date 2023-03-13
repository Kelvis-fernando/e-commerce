import useQuantity from "../../hooks/layout/useQuantity";
import { QuantityContainer } from "../../styles/layout/quantity";

const Quantity = () => {
  const { handleIncrement, handleDecrement, quantity } = useQuantity();

  return (
    <QuantityContainer>
      <button onClick={handleIncrement}>+</button>
      <div>{quantity}</div>
      <button onClick={handleDecrement}>-</button>
    </QuantityContainer>
  );
};

export default Quantity;
