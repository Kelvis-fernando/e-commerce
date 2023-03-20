import { AuthModalContainer } from "../../styles/auth/loginModal";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";

const ForgotPasswordModal = () => {
  return (
    <AuthModalContainer>
      <TitleAndSubtitle
        title="Esqueceu a sua senha?"
        subtitle="Adicione o seu email para lhe ajudarmos"
      />
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Enviar</button>
      </form>
      <h2>voltar</h2>
    </AuthModalContainer>
  );
};

export default ForgotPasswordModal;
