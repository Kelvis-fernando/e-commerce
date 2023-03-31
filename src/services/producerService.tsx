import axios from "axios";
import { useEffect, useState } from "react";

export const ProducerService = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://localhost:7041/v1/coffee");
        setResponse(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const postData = async (data: any) => {
    try {
      const result = await axios.post("https://localhost:7041/v1/coffee", {
        Name: String(data?.name),
        Brand: String(data?.brand),
        Price: Number(data?.price),
        Description: String(data?.description),
        Classification: String(data?.classification),
        Image: String(data?.image),
        Itensity: String(data?.itensity),
        Notes: String(data?.notes),
        Origin: String(data?.origin),
        TypeToast: String(data?.typeRoast),
        Quantity: Number(data?.quantity),
      });
      return result;
    } catch (error) {
      return error;
    }
  };

  const deleteData = async (id: number) => {
    try {
      const result = await axios.delete(
        `https://localhost:7041/v1/coffee/${id}`
      );
      console.log(result, "deletado com sucesso");
    } catch (error) {}
  };

  const updateData = async (product: any, id: number) => {
    try {
      const result = await axios.put(`https://localhost:7041/v1/coffee/${id}`, {
        Name: String(product?.name),
        Brand: String(product?.brand),
        Price: Number(product?.price),
        Description: String(product?.description),
        Classification: String(product?.classification),
        Image: String(product?.image),
        Itensity: String(product?.itensity),
        Notes: String(product?.notes),
        Origin: String(product?.origin),
        TypeToast: String(product?.typeToast),
        Quantity: Number(product?.quantity),
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    response,
    postData,
    deleteData,
    updateData,
  };
};
