import { AlignBottom, Coffee, Fire, Package, Tree } from "phosphor-react";
import { addItemToCart, store } from "../../store/cartState";
import {
  CoffeInfo,
  CoffeSpecification,
  ProductExpandedModalContainer,
} from "../../styles/products/productExpandedModal";

interface ProductExpandedProps {
  product: any;
}

const ProductExpandedModal = ({ product }: ProductExpandedProps) => {
  return (
    <ProductExpandedModalContainer>
      <CoffeInfo>
        <h1>Sobre o café</h1>
        <h2>{product?.title}</h2>
        <span>{`${product?.brand} $ ${product?.price}`}</span>
        <CoffeSpecification>
          <div>
            <div>
              <Package size={32} />
            </div>
            <h2>Classificação</h2>
            <h3>{product?.classification}</h3>
          </div>
          <div>
            <div>
              <AlignBottom size={32} />
            </div>
            <h2>Intensidade</h2>
            <h3>{product?.itensity}</h3>
          </div>
          <div>
            <div>
              <Coffee size={32} />
            </div>
            <h2>Notas</h2>
            <h3>{product?.notes}</h3>
          </div>
          <div>
            <div>
              <Tree size={32} />
            </div>
            <h2>Origem</h2>
            <h3>{product?.origin}</h3>
          </div>
          <div>
            <div>
              <Fire size={32} />
            </div>
            <h2>Tipo de torra</h2>
            <h3>{product?.typeToast}</h3>
          </div>
        </CoffeSpecification>
        <button onClick={() => store.dispatch(addItemToCart(product))}>
          Adicionar ao carrinho
        </button>
      </CoffeInfo>
      <img src={product?.image} alt="product" />
    </ProductExpandedModalContainer>
  );
};

export default ProductExpandedModal;
