import { AlignBottom, Coffee, Fire, Package, Tree } from "phosphor-react";
import useToast from "../../hooks/useToast";
import { addItemToCart, store } from "../../store/cartState";
import {
  CoffeInfo,
  CoffeSpecification,
  ProductExpandedModalContainer,
} from "../../styles/products/productExpandedModal";
import { ProductCardProps } from "../../types/productCardProps";
import Toast from "../Toast";

const ProductExpandedModal = ({ product }: ProductCardProps) => {
  const { showToast, handleCloseToast, handleButtonClick } = useToast();

  return (
    <ProductExpandedModalContainer>
      <CoffeInfo>
        <h1>Sobre o café</h1>
        <h2>{product?.name}</h2>
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
        <button
          onClick={() => {
            store.dispatch(addItemToCart(product));
            handleButtonClick();
          }}
        >
          Adicionar ao carrinho
        </button>
      </CoffeInfo>
      <img src={product?.image} alt="product" />
      {showToast && (
        <Toast
          typeOfToast="success"
          message="Produto adicionado ao carrinho!"
          onClose={handleCloseToast}
        />
      )}
    </ProductExpandedModalContainer>
  );
};

export default ProductExpandedModal;
