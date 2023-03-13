import { FilterBarContainer } from "../../styles/layout/filterBar";

const FilterBar = () => {
  return (
    <FilterBarContainer>
      <label htmlFor="">Ordernar por:</label>
      <select name="ordernar" id="">
        <option value="">Selecione um filtro</option>
        <option value="">Em destaque</option>
        <option value="">Mais Vendidos</option>
        <option value="">Ordem Alfabetica</option>
        <option value="">Maior Preço</option>
        <option value="">Menor Preço</option>
        <option value="">Data Adicionada</option>
      </select>
      <input type="text" placeholder="Procure um produto" />
    </FilterBarContainer>
  );
};

export default FilterBar;
