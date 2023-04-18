import axios from "axios";

const orderDropdownService = () => {
  const getOrders = async () => {
    const result = await axios.get(
      "https://localhost:7041/v1/requestItems/get-request"
    );
    return result;
  };
  return { getOrders };
};

export default orderDropdownService;
