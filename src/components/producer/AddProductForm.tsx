import axios from "axios";
import { FormEvent } from "react";
import {
  AddProductFormContainer,
  InputStyles,
} from "../../styles/producer/addProductForm";

const AddProductForm = () => {
  const handleCreateProduct = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    // try {
    //   await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
    //     name: data.name,
    //     yearsPlaying: Number(data.yearsPlaying),
    //     discord: data.discord,
    //     weekDays: weekDays.map(Number),
    //     hourStart: data.hourStart,
    //     hourEnd: data.hourEnd,
    //     useVoiceChanel: useVoiceChanel,
    //   });
    //   alert("Criado com sucesso!");
    // } catch (error) {
    //   alert("Erro ao criar o anúncio");
    // }
  };
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
          <label htmlFor="typeToast">Tipo de torra</label>
          <input type="text" name="typeToast" id="typeToast" />
        </div>
      </InputStyles>
      <InputStyles>
        <div>
          <label htmlFor="notes">Notas</label>
          <input type="text" name="notes" id="notes" />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <input type="text" name="description" id="description" />
        </div>
      </InputStyles>
      <button type="submit">ADICIONAR</button>
    </AddProductFormContainer>
  );
};

export default AddProductForm;
