import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Storefront } from "phosphor-react";
import { useModal } from "../../hooks/layout/useModal";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { onOpen } = useModal();

  return (
    <Header>
      <Logo>
        <Storefront size={30} color="#4fdc7c" />
        <h1>E-com</h1>
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
