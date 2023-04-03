import { AuthModalContainer } from "../../styles/auth/loginModal";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";
import Modal from "../layout/Modal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import useLoginModal from "../../hooks/auth/useLoginModal";

const LoginModal = () => {
  const {
    registerModalOPen,
    setRegisterModalOPen,
    forgotPasswordModalOPen,
    setForgotPasswordModalOPen,
  } = useLoginModal();

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
        <h2 onClick={() => setRegisterModalOPen(true)}>Cadastre-se</h2>
        <h2 onClick={() => setForgotPasswordModalOPen(true)}>
          Esqueceu a senha?
        </h2>
      </span>
      <Modal
        isOpen={registerModalOPen}
        onClose={() => setRegisterModalOPen(false)}
      >
        <RegisterModal onBack={setRegisterModalOPen} />
      </Modal>
      <Modal
        isOpen={forgotPasswordModalOPen}
        onClose={() => setForgotPasswordModalOPen(false)}
      >
        <ForgotPasswordModal onBack={setForgotPasswordModalOPen} />
      </Modal>
    </AuthModalContainer>
  );
};

export default LoginModal;
