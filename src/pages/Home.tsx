import Carrossel from "../components/Carrossel";
import Navbar from "../components/layout/Navbar";
import { Main } from "../styles/app";
import { HomeContainer } from "../styles/home";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeContainer>
        <Carrossel
          images={[
            "https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_1512x.png?v=1664995596",
            "https://cdn.shopify.com/s/files/1/0421/4764/3548/products/Classico_FazendasMoido.jpg?v=1641680479&width=1100",
            "https://cdn.shopify.com/s/files/1/1867/9411/products/KitcompletoTM_1200px_1512x.png?v=1654696542",
          ]}
        />
        <h1>items</h1>
        <h1>bottom</h1>
      </HomeContainer>
    </Main>
  );
};

export default Home;
