import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Coffee } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import LoginModal from "../auth/LoginModal";
import Cart from "../Cart";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { setIsModalOpen, isModalOpen, handleModalClose } = useModal();
  const { isCartOpen, setIsCartOpen, handleCloseCart } = useCart();

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
        <Link to="/producer">Sou produtor</Link>
      </Links>
      <Login>
        <button onClick={() => setIsModalOpen(true)}>Login</button>
        <ShoppingCart onClick={() => setIsCartOpen(true)} size={30} />
      </Login>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <LoginModal />
      </Modal>
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </Header>
  );
};

export default Navbar;
