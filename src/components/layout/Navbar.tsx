import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Coffee } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import LoginModal from "../auth/LoginModal";

const Navbar = () => {
  const { setIsModalOpen, isModalOpen, handleModalClose } = useModal();

  return (
    <Header>
      <Logo>
        <Link to="/home">
          <Coffee size={30} />
          <h1>Coffee Delivery</h1>
        </Link>
      </Logo>
      <Links>
        <Link to="/home">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Fale conosco</Link>
      </Links>
      <Login>
        <button onClick={() => setIsModalOpen(true)}>Login</button>
        <ShoppingCart size={30} />
      </Login>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <LoginModal />
      </Modal>
    </Header>
  );
};

export default Navbar;
