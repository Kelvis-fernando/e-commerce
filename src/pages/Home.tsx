import Navbar from "../components/layout/Navbar";
import { Main } from "../styles/app";
import { HomeContainer } from "../styles/home";

const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeContainer>
        <h1>Home</h1>
        <h1>Carrousel</h1>
        <h1>items</h1>
        <h1>bottom</h1>
      </HomeContainer>
    </Main>
  );
};

export default Home;
