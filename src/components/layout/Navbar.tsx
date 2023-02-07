import { Header, Logo, Links, Login } from "../../styles/layout/navbar";
import { ShoppingCart, Storefront } from "phosphor-react";

const Navbar = () => {
  return (
    <Header>
      <Logo>
        <Storefront size={30} color="#4fdc7c" />
        <h1>E-com</h1>
      </Logo>
      <Links>
        <a href="#">Produtos</a>
        <a href="#">Sobre</a>
        <a href="#">Fale conosco</a>
      </Links>
      <Login>
        <button>Login</button>
        <ShoppingCart size={30} />
      </Login>
    </Header>
  );
};

export default Navbar;
