import { OrderItems } from "../types/orderItems";

const cartService = () => {
  const saveUserItemRequest = (itemsRequest: OrderItems) => {
    try {
      console.log(itemsRequest, "service");
    } catch (error) {
      console.log(error);
    }
  };
  return { saveUserItemRequest };
};

export default cartService;
