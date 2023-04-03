import { AuthModalContainer } from "../../styles/auth/loginModal";
import { RegisterModalContainer } from "../../styles/auth/registerModal";
import TitleAndSubtitle from "../layout/TitleAndSubtitle";
import useRegisterModal from "../../hooks/auth/useRegisterModal";
import { RegisterModalProps } from "../../types/auth";

const RegisterModal = ({ onBack }: RegisterModalProps) => {
  const { typeOfUser, setTypeOfUser, handleSubmitRegister } =
    useRegisterModal();

  return (
    <AuthModalContainer>
      <TitleAndSubtitle
        title="Ainda não tem uma conta?"
        subtitle="Adicione os seus dados."
      />
      <RegisterModalContainer>
        <form onSubmit={handleSubmitRegister}>
          <label htmlFor="name">Nome</label>
          <input required type="text" name="name" id="name" />
          <label htmlFor="email">E-mail</label>
          <input required type="email" name="email" id="email" />
          <label htmlFor="password">Senha</label>
          <input required type="password" name="password" id="password" />
          <label htmlFor="password2">Confirme a senha</label>
          <input required type="password" name="password2" id="password2" />
          <label htmlFor="userType">TIpo de usuario</label>
          <select
            name="userType"
            id="userType"
            onChange={(event) => setTypeOfUser(event.target.value)}
          >
            <option value="user">Consumidor</option>
            <option value="producer">Produtor</option>
          </select>
          {typeOfUser === "producer" && (
            <>
              <label htmlFor="companyName">Nome da empresa</label>
              <input required type="text" name="companyName" id="companyName" />
              <label htmlFor="cnpj">Cnpj</label>
              <input required type="text" name="cnpj" id="cnpj" />
              <label htmlFor="brand">Nome da marca</label>
              <input required type="text" name="brand" id="brand" />
            </>
          )}
          <button type="submit">Cadastrar</button>
        </form>
        <h2
          onClick={() => {
            if (onBack) return onBack(false);
          }}
        >
          Voltar
        </h2>
      </RegisterModalContainer>
    </AuthModalContainer>
  );
};

export default RegisterModal;
