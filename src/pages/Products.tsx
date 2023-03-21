import FilterBar from "../components/layout/FilterBar";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/products/ProductCard";
import { UseProducts } from "../hooks/products/useProducts";
import { Main } from "../styles/app";
import { ProductsContainer } from "../styles/products/products";
import { ProductCardProps } from "../types/productCardProps";

const Products = () => {
  const { products } = UseProducts();

  return (
    <Main>
      <Navbar />
      <FilterBar />
      <ProductsContainer>
        {products &&
          products?.map((product: ProductCardProps) => (
            <ProductCard
              key={product.id}
              id={product?.id}
              title={product?.title}
              price={product?.price}
              brand={product?.brand}
              image={product?.image}
              description={product?.description}
              product={product}
            />
          ))}
      </ProductsContainer>
    </Main>
  );
};

export default Products;
