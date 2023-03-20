import { LoginModalContainer } from "../../styles/auth/loginModal";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";

const RegisterModal = () => {
  return (
    <LoginModalContainer>
      <TitleAndSubtitle
        title="Ainda não tem uma conta?"
        subtitle="Adicione os seus dados para poder fazer os seus pedidos"
      />
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2">Confirme a senha</label>
        <input type="password" name="password2" id="password2" />
        <label htmlFor="userType">TIpo de usuario</label>
        <select name="userType" id="userType">
          <option value="">Selecione um tipo de usuario</option>
          <option value="user">Consumidor</option>
          <option value="producer">Produtor</option>
        </select>
        <button type="submit">Entrar</button>
      </form>
      <h2>Voltar</h2>
    </LoginModalContainer>
  );
};

export default RegisterModal;
