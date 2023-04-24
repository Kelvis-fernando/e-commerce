import axios from "axios";
import { ProductCardProps } from "../types/productCardProps";

const cartService = () => {
  const saveUserItemRequest = (itemsRequest: ProductCardProps[]) => {
    try {
      axios.post(
        " https://localhost:7041/v1/requestItems/save-request",
        itemsRequest
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { saveUserItemRequest };
};

export default cartService;
