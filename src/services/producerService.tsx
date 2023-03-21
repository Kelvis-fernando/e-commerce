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

  return { response };
};
