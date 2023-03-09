import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Coffee } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { onOpen } = useModal();

  return (
    <Header>
      <Logo>
        <Coffee size={30} />
        <h1>Coffee express</h1>
      </Logo>
      <Links>
        <NavLink to="products">Produtos</NavLink>
        <NavLink to="about">Sobre</NavLink>
        <NavLink to="contact">Fale conosco</NavLink>
      </Links>
      <Login>
        <button onClick={() => onOpen}>Login</button>
        <ShoppingCart size={30} />
      </Login>
    </Header>
  );
};

export default Navbar;
