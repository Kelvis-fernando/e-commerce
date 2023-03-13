import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { Main } from "../styles/app";
import { HomeContainer, HomeWelcome } from "../styles/home";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeContainer>
        <HomeWelcome>
            <h1>Vindo direto do campo</h1>
            <h1>E do seu produtor favorito</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque repellendus vitae rerum suscipit excepturi ex nesciunt illo velit, ipsum.</p>
            <Link to="/products">Veja os nossos produtos!</Link>
        </HomeWelcome>
        <img
          src="https://cdn.shopify.com/s/files/1/1867/9411/products/KitMaster_Acrilico_1512x.png?v=1664995596"
          alt="capa"
        />
      </HomeContainer>
    </Main>
  );
};

export default Home;
