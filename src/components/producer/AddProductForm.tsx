// import axios from "axios";
import useAddProductForm from "../../hooks/producer/useAddProductForm";
import {
  AddProductFormContainer,
  InputStyles,
} from "../../styles/producer/addProductForm";

const AddProductForm = () => {
  const { handleCreateProduct } = useAddProductForm();

  return (
    <AddProductFormContainer onSubmit={handleCreateProduct}>
      <h1>Cadastre o produto</h1>
      <InputStyles>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="brand">Marca</label>
          <input type="text" name="brand" id="brand" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type">
            <option value="Fraco">Fraco</option>
            <option value="Medio">Medio</option>
            <option value="Forte">Forte</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input type="number" name="price" id="price" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="classification">Classificação</label>
          <input type="text" name="classification" id="classification" />
        </div>
        <div>
          <label htmlFor="intensity">Intensidade</label>
          <input type="text" name="intensity" id="intensity" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="origin">Origem</label>
          <input type="text" name="origin" id="origin" />
        </div>
        <div>
          <label htmlFor="typeRoast">Tipo de torra</label>
          <input type="text" name="typeRoast" id="typeRoast" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="notes">Notas</label>
          <input type="text" name="notes" id="notes" />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade em estoque</label>
          <input type="number" name="quantity" id="quantity" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="description">Descrição</label>
          <input type="text" name="description" id="description" />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" />
        </div>
      </InputStyles>
      <button type="submit">ADICIONAR</button>
    </AddProductFormContainer>
  );
};

export default AddProductForm;
