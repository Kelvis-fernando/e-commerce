import useAddProductForm from "../../hooks/producer/useAddProductForm";
import useToast from "../../hooks/useToast";
import {
  AddProductFormContainer,
  InputStyles,
} from "../../styles/producer/addProductForm";
import Toast from "../Toast";

const AddProductForm = () => {
  const { handleCreateProduct, showToastError, setShowToastError } =
    useAddProductForm();
  const { showToast, handleCloseToast, handleButtonClick } = useToast();

  return (
    <>
      <AddProductFormContainer
        onSubmit={(event) => {
          handleCreateProduct(event).then((result: any) => {
            if (result.request.status < 200 || result.request.status > 299) {
              return setShowToastError(true);
            }
            return handleButtonClick();
          });
        }}
      >
        <h1>Cadastre o produto</h1>
        <InputStyles>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" required name="name" id="name" />
          </div>
          <div>
            <label htmlFor="brand">Marca</label>
            <input type="text" required name="brand" id="brand" />
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
            <input type="number" required name="price" id="price" />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="classification">Classificação</label>
            <input
              type="text"
              required
              name="classification"
              id="classification"
            />
          </div>
          <div>
            <label htmlFor="intensity">Intensidade</label>
            <input type="text" required name="intensity" id="intensity" />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="origin">Origem</label>
            <input type="text" required name="origin" id="origin" />
          </div>
          <div>
            <label htmlFor="typeRoast">Tipo de torra</label>
            <input type="text" required name="typeRoast" id="typeRoast" />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="notes">Notas</label>
            <input type="text" required name="notes" id="notes" />
          </div>
          <div>
            <label htmlFor="quantity">Quantidade em estoque</label>
            <input type="number" required name="quantity" id="quantity" />
          </div>
        </InputStyles>
        <InputStyles>
          <div>
            <label htmlFor="description">Descrição</label>
            <input type="text" required name="description" id="description" />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="text" required name="image" id="image" />
          </div>
        </InputStyles>
        <button type="submit">ADICIONAR</button>
      </AddProductFormContainer>
      {showToast && (
        <Toast
          typeOfToast="success"
          message="Produto criado com sucesso!"
          onClose={handleCloseToast}
        />
      )}
      {showToastError && (
        <Toast
          typeOfToast="error"
          message="Erro ao criar o produto!"
          duration={1500}
          onClose={() => setShowToastError(false)}
        />
      )}
    </>
  );
};

export default AddProductForm;
