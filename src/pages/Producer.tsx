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
import useProducer from "../hooks/producer/useProducer";

const Producer = () => {
  const { isModalOpen, setIsModalOpen, handleModalClose } = useModal();
  const { productsRegistered } = useProducer();

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
            {productsRegistered &&
              productsRegistered?.map((products) => (
                <li>
                  <span>{products?.name}</span>
                  <span className="title">{products?.brand}</span>
                  <span className="price">{products?.type}</span>
                  <span>{products?.price}</span>
                  <span>{products?.quantity}</span>
                  <div>
                    <Pencil size={20} />
                    <span>
                      <Trash size={20} />
                    </span>
                  </div>
                </li>
              ))}
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
