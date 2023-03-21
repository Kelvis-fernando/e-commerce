import { useEffect, useState } from "react";
import { ProductService } from "../../services/productsService";
import { ProductCardProps } from "../../types/productCardProps";

export const UseProducts = () => {
  const [products, setProducts] = useState<ProductCardProps[]>();
  const { response } = ProductService();

  useEffect(() => {
    setProducts(response);
  }, [response]);

  return { products };
};
