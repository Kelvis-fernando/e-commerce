import {
  AddProductFormContainer,
  InputStyles,
} from "../../styles/producer/addProductForm";

const AddProductForm = () => {
  return (
    <AddProductFormContainer>
      <h1>Cadastre o produto</h1>
      <InputStyles>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Marca</label>
          <input type="text" name="" id="" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="">Tipo</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Preço</label>
          <input type="text" name="" id="" />
        </div>
      </InputStyles>
      <button>ADICIONAR</button>
    </AddProductFormContainer>
  );
};

export default AddProductForm;
