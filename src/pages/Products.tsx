import Loading from "../components/layout/Loading";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/products/ProductCard";
import { UseProducts } from "../hooks/products/useProducts";
import { Main } from "../styles/app";
import { FilterBarContainer } from "../styles/layout/filterBar";
import { ProductsContainer } from "../styles/products/products";
import { ProductCardProps } from "../types/productCardProps";

const Products = () => {
  const { setSearchTerm, filteredProducts } = UseProducts();

  return (
    <Main>
      <Navbar />
      <FilterBarContainer>
        <input
          type="text"
          placeholder="Procure um produto"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FilterBarContainer>
      <ProductsContainer>
        {filteredProducts !== undefined ? (
          filteredProducts?.map((product: ProductCardProps) => (
            <ProductCard
              key={product.id}
              id={product?.id}
              name={product?.name}
              price={product?.price}
              brand={product?.brand}
              image={product?.image}
              description={product?.description}
              product={product}
            />
          ))
        ) : (
          <Loading />
        )}
      </ProductsContainer>
    </Main>
  );
};

export default Products;
