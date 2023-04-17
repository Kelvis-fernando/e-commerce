import { AuthModalContainer } from "../../styles/auth/loginModal";
import { ForgotPasswordProps } from "../../types/auth";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";

const ResetPassword = ({ onBack }: ForgotPasswordProps) => {
  return (
    <AuthModalContainer>
      <TitleAndSubtitle
        title="Altere a sua senha"
        subtitle="Adicione e confirme a sua nova senha"
      />
      <form>
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirmPassword">Confirme a senha</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <button type="submit">Alterar</button>
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

export default ResetPassword;
