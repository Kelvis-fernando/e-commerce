import Navbar from "../components/layout/Navbar";
import useProducer from "../hooks/producer/useProducer";
import { Main } from "../styles/app";

const Producer = () => {
  const { login } = useProducer();
  return (
    <Main>
      <Navbar />
      {login ? (
        <div>
          <h1>Bem vindo</h1>
        </div>
      ) : (
        <div>
          <h1>Você precisa logar para ter acesso a essa pagina</h1>
        </div>
      )}
    </Main>
  );
};

export default Producer;
