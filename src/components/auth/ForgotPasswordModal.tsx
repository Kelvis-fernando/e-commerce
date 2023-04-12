import useAuth from "../../hooks/auth/useAuth";
import { AuthModalContainer } from "../../styles/auth/loginModal";
import { ForgotPasswordProps } from "../../types/auth";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";

const ForgotPasswordModal = ({ onBack }: ForgotPasswordProps) => {
  const { handleGetAuthFormData } = useAuth();

  return (
    <AuthModalContainer>
      <TitleAndSubtitle
        title="Esqueceu a sua senha?"
        subtitle="Adicione o seu email para lhe ajudarmos"
      />
      <form onSubmit={(event) => handleGetAuthFormData(event, "forgot")}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Enviar</button>
      </form>
      <h2
        onClick={() => {
          if (onBack) return onBack(false);
        }}
      >
        Voltar
      </h2>
    </AuthModalContainer>
  );
};

export default ForgotPasswordModal;
