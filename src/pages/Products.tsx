import FilterBar from "../components/layout/FilterBar";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/products/ProductCard";
import useProducts from "../hooks/products/useProducts";
import { Main } from "../styles/app";
import { ProductsContainer } from "../styles/products/products";
import { ProductCardProps } from "../types/productCardProps";

const Products = () => {
  const { products } = useProducts();

  return (
    <Main>
      <Navbar />
      <FilterBar />
      <ProductsContainer>
        {products &&
          products?.map((product: ProductCardProps, index) => (
            <ProductCard
              key={index}
              id={product?.id}
              title={product?.title}
              price={product?.price}
              brand={product?.brand}
              image={product?.image}
              description={product?.description}
            />
          ))}
      </ProductsContainer>
    </Main>
  );
};

export default Products;
