import { useEffect, useState } from "react";
import { ProductCardProps } from "../types/productCardProps";
import orderDropdownService from "../services/orderDropdownService";

const useOrderDropdown = () => {
  const { getOrders } = orderDropdownService();
  const [orders, setOrders] = useState<ProductCardProps[]>();

  useEffect(() => {
    getOrders().then((result) => setOrders(result.data));
  }, [getOrders]);
  return { orders };
};

export default useOrderDropdown;
