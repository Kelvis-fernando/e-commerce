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
import { EditProductModal } from "../components/producer/EditProductForm";
import useToast from "../hooks/useToast";
import Toast from "../components/Toast";

const Producer = () => {
  const { isModalOpen, setIsModalOpen, handleModalClose } = useModal();
  const {
    productsRegistered,
    deleteProduct,
    isModalEditProducOpen,
    setIsModalEditProducOpen,
    productToEdit,
    setProductToEdit,
  } = useProducer();
  const { showToast, handleCloseToast, handleButtonClick } = useToast();

  return (
    <>
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
                <tr>
                  {productsRegistered &&
                    productsRegistered?.map((products) => (
                      <th key={products?.id}>
                        <span>{products?.name}</span>
                        <span>{products?.brand}</span>
                        <span>R$ {products?.price}</span>
                        <span>{products?.quantity}</span>
                        <div>
                          <Pencil
                            size={20}
                            onClick={() => {
                              setIsModalEditProducOpen(true);
                              setProductToEdit(products);
                            }}
                          />
                          <span>
                            <Trash
                              size={20}
                              onClick={() => {
                                deleteProduct(products.id ?? 0);
                                handleButtonClick();
                              }}
                            />
                          </span>
                        </div>
                      </th>
                    ))}
                </tr>
              </tbody>
            </table>
          </ProducerItems>
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <AddProductForm />
          </Modal>
          <Modal
            isOpen={isModalEditProducOpen}
            onClose={() => setIsModalEditProducOpen(false)}
          >
            <EditProductModal product={productToEdit} />
          </Modal>
        </ProducerContainer>
      </Main>
      {showToast && (
        <Toast
          typeOfToast="success"
          message="Produto deletado com sucesso!"
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};

export default Producer;
