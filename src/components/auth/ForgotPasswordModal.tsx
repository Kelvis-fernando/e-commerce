import { useState } from "react";
import useAuth from "../../hooks/auth/useAuth";
import useToast from "../../hooks/useToast";
import { AuthModalContainer } from "../../styles/auth/loginModal";
import { ForgotPasswordProps } from "../../types/auth";
import Toast from "../Toast";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";
import useLoginModal from "../../hooks/auth/useLoginModal";

const ForgotPasswordModal = ({ onBack }: ForgotPasswordProps) => {
  const { showToast, handleButtonClick, handleCloseToast } = useToast();
  const [errorToast, setErrorToast] = useState(false);
  const { handleGetAuthFormData } = useAuth(handleButtonClick, setErrorToast);
  const { setResetPasswordModalOPen } = useLoginModal();

  return (
    <>
      <AuthModalContainer>
        <TitleAndSubtitle
          title="Esqueceu a sua senha?"
          subtitle="Adicione o seu email para lhe ajudarmos"
        />
        <form onSubmit={(event) => handleGetAuthFormData(event, "forgot")}>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
          <button onClick={() => setResetPasswordModalOPen(true)} type="submit">
            Enviar
          </button>
        </form>
        <h2
          onClick={() => {
            if (onBack) return onBack(false);
          }}
        >
          Voltar
        </h2>
      </AuthModalContainer>
      {showToast && (
        <Toast
          message={"Token enviado com sucesso"}
          onClose={handleCloseToast}
        />
      )}
      {errorToast && (
        <Toast
          message={"Erro ao enviar o Token"}
          typeOfToast="error"
          onClose={() => setErrorToast(false)}
        />
      )}
    </>
  );
};

export default ForgotPasswordModal;
