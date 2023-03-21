import { useState, useEffect } from "react";
import { ProducerService } from "../../services/producerService";
import { ProductCardProps } from "../../types/productCardProps";

const useProducer = () => {
  const [login, setIsLogin] = useState<boolean>(false);
  const [productsRegistered, setProductsRegistered] =
    useState<ProductCardProps[]>();
  const { response } = ProducerService();

  useEffect(() => {
    setProductsRegistered(response);
  }, [response]);

  return { login, setIsLogin, productsRegistered };
};

export default useProducer;
