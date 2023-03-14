import { useEffect } from "react";
import LoginModal from "../components/auth/LoginModal";
import Modal from "../components/layout/Modal";
import Navbar from "../components/layout/Navbar";
import { useModal } from "../hooks/layout/useModal";
import useProducer from "../hooks/producer/useProducer";
import { Main } from "../styles/app";

const Producer = () => {
  const { login } = useProducer();
  const { handleModalClose, isModalOpen, setIsModalOpen } = useModal();

  useEffect(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <Main>
      <Navbar />
      {login ? (
        <div>
          <h1>Bem vindo</h1>
        </div>
      ) : (
        <div>
          <Modal isOpen={isModalOpen}>
            <LoginModal />
          </Modal>
        </div>
      )}
    </Main>
  );
};

export default Producer;
