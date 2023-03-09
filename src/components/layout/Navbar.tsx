import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Coffee } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { onOpen } = useModal();

  return (
    <Header>
      <Logo>
        <Coffee size={30} />
        <h1>Coffee express</h1>
      </Logo>
      <Links>
        <Link to="/home">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Fale conosco</Link>
      </Links>
      <Login>
        <button onClick={() => onOpen}>Login</button>
        <ShoppingCart size={30} />
      </Login>
    </Header>
  );
};

export default Navbar;
