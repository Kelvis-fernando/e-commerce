import axios from "axios";
import { useState, useEffect } from "react";
import { ProductCardProps } from "../types/productCardProps";

export const AddProductService = (productToRegister: ProductCardProps) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.post("https://localhost:7041/v1/coffee", {
          data: productToRegister,
        });
        setResponse(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productToRegister]);

  return { response };
};
