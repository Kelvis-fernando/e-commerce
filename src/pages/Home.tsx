import Carrossel from "../components/Carrossel";
import Navbar from "../components/layout/Navbar";
import { Main } from "../styles/app";
import { HomeContainer, HomeProducts } from "../styles/home";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeContainer>
        <img
          src="https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_1512x.png?v=1664995596"
          alt="capa"
        />
        <h1>ESCOLHA O MELHOR CAFÉ PARA VOCÊ</h1>
        <h2>DO SEU PRODUTOR RURAL FAVORITO</h2>
        <HomeProducts>
            <h1>Vindo direto do campo</h1>
        </HomeProducts>
      </HomeContainer>
    </Main>
  );
};

export default Home;
