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
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return { response, postData };
};
