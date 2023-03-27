import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { Main } from "../styles/app";
import { HomeContainer, HomeWelcome } from "../styles/home";
import image from "../assets/capa.webp";
import Toast from "../components/layout/Toast";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeContainer>
        <HomeWelcome>
          <h1>Vindo direto do campo</h1>
          <h1>E do seu produtor favorito</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            repellendus vitae rerum suscipit excepturi ex nesciunt illo velit,
            ipsum.
          </p>
          <Link to="/products">Veja os nossos produtos!</Link>
        </HomeWelcome>
        <img src={image} alt="capa" />
      </HomeContainer>
      <Toast title="Teste" message="Teste 2" />
    </Main>
  );
};

export default Home;
