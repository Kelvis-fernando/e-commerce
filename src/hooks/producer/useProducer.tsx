import { useState, useEffect } from "react";
import { ProducerService } from "../../services/producerService";
import { ProductCardProps } from "../../types/productCardProps";

const useProducer = () => {
  const [login, setIsLogin] = useState<boolean>(false);
  const [productsRegistered, setProductsRegistered] =
    useState<ProductCardProps[]>();
  const { response, deleteData } = ProducerService();

  useEffect(() => {
    setProductsRegistered(response);
  }, [response]);

  const deleteProduct = async (id: number) => {
    await deleteData(id);
  };

  return { login, setIsLogin, productsRegistered, deleteProduct };
};

export default useProducer;
