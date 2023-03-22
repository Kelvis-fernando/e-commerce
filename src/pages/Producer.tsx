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
        <h2>Produtos cadastrados:</h2>
        <ProducerItems>
          <table>
            <thead>
              <tr>
                <th>
                  <span>Nome</span>
                  <span>Marca</span>
                  <span>Preço</span>
                  <span>Qtd</span>
                  <span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <td>
                {productsRegistered &&
                  productsRegistered?.map((products) => (
                    <th key={products?.id}>
                      <span>{products?.name}</span>
                      <span>{products?.brand}</span>
                      <span>R$ {products?.price}</span>
                      <span>{products?.quantity}</span>
                      <div>
                        <Pencil size={20} />
                        <span>
                          <Trash size={20} />
                        </span>
                      </div>
                    </th>
                  ))}
              </td>
            </tbody>
          </table>
        </ProducerItems>
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <AddProductForm />
        </Modal>
      </ProducerContainer>
    </Main>
  );
};

export default Producer;
