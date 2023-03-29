import { useEditProductModal } from "../../hooks/producer/useEditProductModal";
import useToast from "../../hooks/useToast";
import {
  AddProductFormContainer,
  InputStyles,
} from "../../styles/producer/addProductForm";
import { ProductCardProps } from "../../types/productCardProps";
import Toast from "../Toast";

interface EditProductModalProps {
  product?: ProductCardProps;
}

export const EditProductModal = ({ product }: EditProductModalProps) => {
  const { handleEditProduct } = useEditProductModal();
  const { showToast, handleCloseToast, handleButtonClick } = useToast();

  return (
    <>
      <AddProductFormContainer
        onSubmit={(event) => {
          handleEditProduct(event, product!.id);
          handleButtonClick();
        }}
      >
        <h1>Cadastre o produto</h1>
        <InputStyles>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={product?.name}
            />
          </div>
          <div>
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              name="brand"
              id="brand"
              defaultValue={product?.brand}
            />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="type">Tipo</label>
            <select name="type" id="type" defaultValue={product?.type}>
              <option value="fraco">Fraco</option>
              <option value="medio">Medio</option>
              <option value="forte">Forte</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              id="price"
              defaultValue={product?.price}
            />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="classification">Classificação</label>
            <input
              type="text"
              name="classification"
              id="classification"
              defaultValue={product?.classification}
            />
          </div>
          <div>
            <label htmlFor="itensity">Intensidade</label>
            <input
              type="text"
              name="itensity"
              id="itensity"
              defaultValue={product?.itensity}
            />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="origin">Origem</label>
            <input
              type="text"
              name="origin"
              id="origin"
              defaultValue={product?.origin}
            />
          </div>
          <div>
            <label htmlFor="typeToast">Tipo de torra</label>
            <input
              type="text"
              name="typeToast"
              id="typeToast"
              defaultValue={product?.typeToast}
            />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="notes">Notas</label>
            <input
              type="text"
              name="notes"
              id="notes"
              defaultValue={product?.notes}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantidade em estoque</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              defaultValue={product?.quantity}
            />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              id="description"
              defaultValue={product?.description}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              defaultValue={product?.image}
            />
          </div>
        </InputStyles>
        <button type="submit">EDITAR</button>
      </AddProductFormContainer>
      {showToast && (
        <Toast
          typeOfToast="success"
          message="Produto editado com sucesso!"
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};
