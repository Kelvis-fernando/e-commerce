import useOrderDropdown from "../hooks/useOrderDropdown";
import { ProductCardProps } from "../types/productCardProps";

const OrderDropdown = () => {
  const { orders } = useOrderDropdown();

  return (
    <div>
      <h1>Pedidos</h1>
      <ul>
        {orders &&
          orders.length > 0 &&
          orders.map((order: ProductCardProps, index: number) => (
            <li key={index}>{order.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default OrderDropdown;
