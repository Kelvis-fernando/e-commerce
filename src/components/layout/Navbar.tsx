import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Coffee } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import LoginModal from "../auth/LoginModal";
import Cart from "../Cart";
import useCart from "../../hooks/useCart";
import ForgotPasswordModal from "../auth/ForgotPasswordModal";
import RegisterModal from "../auth/RegisterModal";
import Badge from "./Badge";
import Avatar from "../Avatar";
import ResetPassword from "../auth/ResetPassword";
import useLoginModal from "../../hooks/auth/useLoginModal";

const Navbar = () => {
  const { setIsModalOpen, isModalOpen, handleModalClose } = useModal();
  const { isCartOpen, setIsCartOpen, handleCloseCart, cartItems } = useCart();
  const { resetPasswordModalOPen } = useLoginModal();

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
        {true ? (
          <button onClick={() => setIsModalOpen(true)}>Login</button>
        ) : (
          <Avatar name="Kelvis Delapena" />
        )}
        <Badge items={cartItems.length}>
          <ShoppingCart onClick={() => setIsCartOpen(true)} size={30} />
        </Badge>
      </Login>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <LoginModal />
      </Modal>
      <Modal isOpen={false} onClose={handleModalClose}>
        <ForgotPasswordModal />
      </Modal>
      <Modal isOpen={resetPasswordModalOPen} onClose={handleModalClose}>
        <ResetPassword />
      </Modal>
      <Modal isOpen={false} onClose={handleModalClose}>
        <RegisterModal />
      </Modal>
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </Header>
  );
};

export default Navbar;
