import { AuthModalContainer } from "../../styles/auth/loginModal";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";
import Modal from "../layout/Modal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import useLoginModal from "../../hooks/auth/useLoginModal";
import useAuth from "../../hooks/auth/useAuth";
import Toast from "../Toast";
import useToast from "../../hooks/useToast";
import { useState } from "react";

const LoginModal = () => {
  const {
    registerModalOPen,
    setRegisterModalOPen,
    forgotPasswordModalOPen,
    setForgotPasswordModalOPen,
  } = useLoginModal();
  const { showToast, handleButtonClick, handleCloseToast } = useToast();
  const [errorToast, setErrorToast] = useState(false);
  const { handleGetAuthFormData } = useAuth(handleButtonClick, setErrorToast);

  return (
    <>
      <AuthModalContainer>
        <TitleAndSubtitle
          title="Olá, seja bem vindo"
          subtitle="Entre na sua conta"
        />
        <form onSubmit={(event) => handleGetAuthFormData(event, "login")}>
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
      </AuthModalContainer>
      <Modal
        isOpen={registerModalOPen}
        onClose={() => setRegisterModalOPen(false)}
      >
        <RegisterModal onBack={setRegisterModalOPen} />
      </Modal>
      <Modal
        isOpen={forgotPasswordModalOPen}
        onClose={() => {
          setForgotPasswordModalOPen(false);
        }}
      >
        <ForgotPasswordModal onBack={setForgotPasswordModalOPen} />
      </Modal>
      {showToast && (
        <Toast
          message={"Login feito com sucesso!"}
          onClose={handleCloseToast}
        />
      )}
      {errorToast && (
        <Toast
          message={"Erro com os dados do usuario"}
          typeOfToast="error"
          onClose={() => setErrorToast(false)}
        />
      )}
    </>
  );
};

export default LoginModal;
