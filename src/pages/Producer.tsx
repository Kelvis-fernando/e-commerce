import Modal from "../components/layout/Modal";
import Navbar from "../components/layout/Navbar";
import { useModal } from "../hooks/layout/useModal";
import { Main } from "../styles/app";
import {
  ProducerActions,
  ProducerContainer,
  ProducerItems,
} from "../styles/producer/producer";
import { Pencil, Plus, Trash } from "phosphor-react";
import AddProductForm from "../components/producer/AddProductForm";

const Producer = () => {
  const { isModalOpen, setIsModalOpen, handleModalClose } = useModal();

  /** 
   * TO-DO: Adicionar ao login mudando o estado
  const store = configureStore({
    reducer: userStates.reducer,
  });

  const [userIsLoged, setUserIsLoged] = useState(store.getState().userLoged);
  const handleUserLoged = () => {
    store.dispatch(setUserLoged());
    setUserIsLoged(store.getState().userLoged);
  };
  const handleUserLogout = () => {
    store.dispatch(setUserLogout());
    setUserIsLoged(store.getState().userLoged);
  };
  */

  return (
    <Main>
      <Navbar />
      <ProducerContainer>
        <h1>Bem vindo, esta é a área do produtor</h1>
        <ProducerActions>
          <button onClick={() => setIsModalOpen(true)}>
            <Plus /> ADICIONAR PRODUTO
          </button>
        </ProducerActions>
        <ProducerItems>
          <h2>Produtos cadastrados:</h2>
          <ul>
            <li>
              <span>name</span>
              <span>brand</span>
              <span>type</span>
              <span>price</span>
              <div>
                <Pencil size={20} />
                <span>
                  <Trash size={20} />
                </span>
              </div>
            </li>
          </ul>
        </ProducerItems>
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <AddProductForm />
        </Modal>
      </ProducerContainer>
    </Main>
  );
};

export default Producer;
