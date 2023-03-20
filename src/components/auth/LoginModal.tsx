import { AuthModalContainer } from "../../styles/auth/loginModal";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";

const LoginModal = () => {
  return (
    <AuthModalContainer>
      <TitleAndSubtitle
        title="Olá, seja bem vindo"
        subtitle="Entre na sua conta"
      />
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Entrar</button>
      </form>
      <span>
        <h2>Cadastre-se</h2>
        <h2>Esqueceu a senha?</h2>
      </span>
    </AuthModalContainer>
  );
};

export default LoginModal;
