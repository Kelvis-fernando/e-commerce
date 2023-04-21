import { useEffect, useState } from "react";
import { ProductService } from "../../services/productsService";
import { ProductCardProps } from "../../types/productCardProps";

export const UseProducts = () => {
  const { response } = ProductService();
  const [products, setProducts] = useState<ProductCardProps[]>();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products?.filter((product: ProductCardProps) => {
    if (product.name !== undefined) {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  useEffect(() => {
    setProducts(response);
  }, [response]);

  return { products, searchTerm, setSearchTerm, filteredProducts };
};
